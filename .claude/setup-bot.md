# Configuration Bot pour Reviews Automatiques

## 🤖 Créer un Bot GitHub pour QA-Agent

### Étape 1 : Créer le compte bot
1. Créer un nouveau compte GitHub : `GuiziwebQABot`
2. Confirmer l'email

### Étape 2 : Configurer l'accès au repo
```bash
# Sur ton compte principal
gh api repos/Guiziweb/claude-full-autonomy/collaborators/GuiziwebQABot \
  --method PUT \
  --field permission=write
```

### Étape 3 : Créer un token pour le bot
1. Se connecter au compte bot
2. Settings → Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token avec permissions :
   - `repo` (full control)
   - `workflow` (si GitHub Actions)

### Étape 4 : Configurer les tokens dans Claude

```bash
# Dans .claude/agents/qa-agent.md
export QA_BOT_TOKEN="ghp_xxxxxxxxxxxx"  # Token du bot

# Utilisation
GH_TOKEN=$QA_BOT_TOKEN gh pr review --approve
GH_TOKEN=$QA_BOT_TOKEN gh pr merge
```

### Étape 5 : Sécuriser les tokens

```bash
# Créer .env.local (ignoré par git)
echo "QA_BOT_TOKEN=ghp_xxxxxxxxxxxx" > .env.local
echo ".env.local" >> .gitignore

# Les agents chargent le token
source .env.local
```

## 🎯 Résultat

- **Frontend-agent** : Crée PR avec TON compte
- **QA-bot** : Review et approuve avec compte BOT
- **Merge** : Possible car review d'un autre compte
- **Automatique** : Les agents gèrent tout

## Alternative : GitHub App

Plus complexe mais plus pro :

```javascript
// create-github-app.js
const { App } = require("@octokit/app");

const app = new App({
  appId: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY,
});

// QA-agent utilise l'app pour reviewer
const octokit = await app.getInstallationOctokit(installationId);
await octokit.pulls.createReview({
  owner: "Guiziweb",
  repo: "claude-full-autonomy",
  pull_number: 12,
  event: "APPROVE"
});
```

**Recommandation : Commence avec un compte bot simple, c'est plus rapide !**