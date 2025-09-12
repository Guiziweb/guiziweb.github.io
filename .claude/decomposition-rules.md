# Règles de Décomposition Automatique

## Pour l'agent project-manager

### Épic "Créer landing page complète" → Décomposition automatique :

**1. Structure de base**
```
Issue: "Créer structure HTML sémantique"
Labels: frontend, structure
Assigné: frontend-agent
Description: HTML5 de base avec sections hero, services, contact
```

**2. Contenu principal** 
```
Issue: "Rédiger contenu proposition de valeur"
Labels: content, copywriting  
Assigné: content-agent
Description: Hero section + services IA pour PME
```

**3. Design et styles**
```
Issue: "Implémenter design Tailwind responsive"
Labels: frontend, design
Assigné: frontend-agent  
Description: Mobile-first, couleurs projet, typographie
```

**4. Fonctionnalités**
```
Issue: "Intégrer formulaire contact Formspree"
Labels: frontend, integration
Assigné: frontend-agent
Description: Form fonctionnel avec validation
```

**5. Tests et optimisation**
```
Issue: "Tests responsive et performance"
Labels: qa, testing
Assigné: qa-agent
Description: Validation mobile/desktop, Lighthouse
```

## Logique de création automatique

**Quand tu vois un epic, TU CRÉES automatiquement :**
- Les issues de décomposition  
- Les issues de tests associées
- Les issues d'optimisation nécessaires

**Exemple de commande :**
```bash
gh issue create --title "Créer structure HTML sémantique" \
  --body "HTML5 de base selon contexte projet" \
  --label "frontend,auto-dev" \
  --assignee "frontend-agent"
```

**Tu deviens proactif et anticipes les besoins !**