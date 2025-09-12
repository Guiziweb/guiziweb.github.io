# Configuration Claude Code - Landing Page Auto-Entrepreneur IA

## 🎯 Projet
Landing page pour auto-entrepreneur IA ciblant PME locales (5-50 employés).

## 🛠️ Stack Technique
- **Hosting** : GitHub Pages (statique uniquement)
- **Frontend** : HTML5 + Tailwind CSS (CDN) + JavaScript vanilla
- **Formulaire** : Formspree
- **Contraintes** : Pas de build, pas de frameworks

## 📋 Workflow GitHub Simple

### Pour TOUS les agents :
1. **Trouver** : `gh issue list --state open --assignee "" --limit 1` (prendre la première libre)
2. **S'assigner** : `gh issue edit {number} --add-assignee @me`
3. **Développer** : `git checkout -b feature/issue-{number}` → faire le travail → `git commit -m "✨ Issue #{number}: description"`
4. **Proposer** : `git push -u origin feature/issue-{number}` → `gh pr create --title "Issue #{number}: titre" --body "Closes #{number}"`
5. **Finaliser** : QA review → merge → issue se ferme automatiquement via "Closes #"

### Rôles spécifiques :
- **frontend-agent** : HTML/CSS/JS uniquement
- **content-agent** : Rédaction et copywriting
- **qa-agent** : Review détaillée, approuve OU demande corrections
- **project-manager** : Crée et organise les issues

### Processus de review :
Le qa-agent fait une vraie review et décide :
1. **Si ✅ APPROUVÉ** : Commentaire positif + merge
2. **Si ❌ À CORRIGER** : Commentaire avec demandes + réassigne au dev
3. Le dev corrige et re-pousse → QA re-review

## ✅ Règles Simples
- Un agent = une issue à la fois
- Toujours créer une branche feature
- "Closes #X" dans la PR pour auto-fermeture
- QA-agent a le dernier mot sur les merges

**C'est TOUT. Pas besoin de plus.**