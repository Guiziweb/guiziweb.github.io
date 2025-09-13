# Claude Full Autonomy

> **Système d'agents autonomes pour la gestion d'une landing page avec workflow CI/CD intégré**

## Objectif du projet

Démonstration d'un système de développement web autonome utilisant **3 agents spécialisés** qui collaborent via GitHub pour maintenir et faire évoluer une landing page statique déployée sur GitHub Pages.

**🌐 Démo en ligne :** https://guiziweb.github.io/claude-full-autonomy/

## Architecture

### Landing Page
- **Stack :** HTML5 + Tailwind CSS (CDN) + JavaScript vanilla
- **Déploiement :** GitHub Pages automatique
- **Contraintes :** Code simple, performant, maintenable

### Système d'agents

#### Chef de Projet (`chef-projet`)
- **Rôle :** Analyse les demandes utilisateur et crée les tickets GitHub
- **Responsabilités :**
  - Transformer les besoins en spécifications techniques
  - Créer des tickets GitHub détaillés avec critères d'acceptance
  - Valider la faisabilité dans les contraintes du projet

#### Développeur Landing (`developpeur-landing`)  
- **Rôle :** Implémente les fonctionnalités selon les tickets
- **Responsabilités :**
  - Développer sur des branches de feature
  - Respecter les standards techniques (HTML5, Tailwind CDN, JS vanilla)
  - Créer les Pull Requests avec description complète

#### Responsable Qualité (`responsable-qualite`)
- **Rôle :** Review, valide et merge les Pull Requests  
- **Responsabilités :**
  - Review technique du code
  - Validation des standards qualité
  - Merge après approbation
  - Fermeture des tickets liés

## Workflow de développement

```
Demande utilisateur
       ↓
   Chef-Projet → Ticket GitHub
       ↓
   Développeur → Feature Branch → Pull Request
       ↓
   Build Checks → HTML5 Validation
       ↓
   Responsable-Qualité → Review → Merge
       ↓
   Déploiement automatique GitHub Pages
```

## CI/CD Pipeline

### Build Checks (PR)
- **HTML5 Validation :** Vérification W3C automatique
- **Notifications :** Commentaires automatiques en cas d'échec
- **Protection :** Merge bloqué si validation échoue

### Déploiement
- **Déclencheur :** Push sur `main`
- **Plateforme :** GitHub Pages
- **Automatique :** Aucune intervention manuelle

## Standards techniques

### Code
- **HTML :** Sémantique HTML5, DOCTYPE obligatoire
- **CSS :** Tailwind CDN uniquement (pas de CSS custom)
- **JavaScript :** Vanilla JS, code simple et minimal
- **Performance :** Chargement < 2s, optimisation images

### Git Workflow
- **Branches :** `feature/issue-X-description` pour nouvelles fonctionnalités
- **Commits :** Messages clairs avec références aux issues
- **Review :** Obligatoire avant merge sur main
- **Protection :** Branch protection avec build checks

## Utilisation

### Demander une nouvelle fonctionnalité
1. Exprimer le besoin clairement
2. Le chef-projet analyse et crée un ticket
3. Le développeur implémente sur une branche
4. Le responsable-qualité review et merge

### Identifier les agents
Chaque commentaire GitHub commence par un préfixe clair :
- `**[CHEF-PROJET]**` - Analyse et planification
- `**[DEVELOPPEUR-LANDING]**` - Implémentation technique  
- `**[RESPONSABLE-QUALITE]**` - Review et validation

## Structure du projet

```
.
├── .claude/
│   ├── agents/           # Définitions des 3 agents
│   └── hooks/           # Hooks Claude Code
├── .github/
│   └── workflows/       # CI/CD pipelines
├── index.html          # Landing page principale
├── script.js           # JavaScript vanilla
└── README.md          # Cette documentation
```