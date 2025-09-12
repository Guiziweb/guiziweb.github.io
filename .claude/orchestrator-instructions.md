# Instructions Orchestrateur Automatisé

## Fonctionnement du Système

### 1. Déclenchement Automatique
- **Issue créée** avec label "auto-dev" → GitHub Action
- **Commentaire** avec "@claude-dev" → Réactivation
- Action lance Claude avec agent `project-manager`

### 2. Workflow Automatisé

```
Issue GitHub
↓
GitHub Action détecte
↓ 
Claude project-manager analyse
↓
Choix agent spécialisé (frontend/content/qa)
↓
Création branche feature/issue-X
↓
Délégation avec Task tool
↓
Agent produit le code/contenu
↓
Commit automatique
↓
Création Pull Request
↓
Tests QA si nécessaire
↓
Merge après validation
↓
Commentaire issue = Done
```

### 3. Configuration Requise

**Secrets GitHub à configurer :**
- `ANTHROPIC_API_KEY` : Clé API Claude
- `GITHUB_TOKEN` : Token avec permissions repo

**Permissions nécessaires :**
- Issues: read/write
- Pull requests: read/write  
- Contents: read/write
- Actions: read

### 4. Labels de Routage

- `frontend` → frontend-agent
- `content` → content-agent
- `qa` → qa-agent  
- `epic` → décomposition par project-manager

### 5. Commandes Manuelles

Pour forcer le traitement :
```
@claude-dev traite cette issue
```

Pour debug :
```
@claude-dev status issue #X
```

## Statuts des Issues

- 🟡 **Analysée** : Prise en compte par l'orchestrateur
- 🔵 **En cours** : Agent spécialisé au travail  
- 🟢 **Terminée** : Code livré, PR mergée
- 🔴 **Bloquée** : Erreur, intervention manuelle requise

**Le système fonctionne 24/7 sans intervention humaine !**