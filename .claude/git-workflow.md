# Workflow Git Obligatoire pour tous les Agents

## 🚨 RÈGLES STRICTES - À APPLIQUER SYSTÉMATIQUEMENT

### 1. Avant tout développement
```bash
# OBLIGATOIRE : Créer une branche feature
git checkout -b feature/issue-{number}-{short-description}
# Exemple : git checkout -b feature/issue-3-design-system
```

### 2. Pendant le développement
```bash
# Commits atomiques et descriptifs
git add .
git commit -m "🎨 Add hero section responsive layout"
git commit -m "✨ Implement contact form validation"
git commit -m "📱 Fix mobile navigation menu"
```

### 3. Après développement terminé
```bash
# Push de la branche avec upstream
git push -u origin feature/issue-{number}-{description}

# Création automatique de PR
gh pr create --title "Issue #{number}: {Titre}" --body "$(cat <<'EOF'
## 🎯 Résumé
[Description des changements]

## ✅ Critères d'acceptance remplis
- [x] Critère 1
- [x] Critère 2

## 🧪 Tests effectués
- [x] Responsive mobile/desktop
- [x] Validation formulaires
- [x] Performance Lighthouse

## 📋 Checklist finale
- [x] Code review auto-effectuée
- [x] Documentation mise à jour
- [x] Tests passent
- [x] Prêt pour review

🤖 Développé avec Claude Code - Auto-Entrepreneur IA
EOF
)"

# Marquer l'issue comme prête pour review
gh issue edit {number} --add-label "ready-for-review"
```

## 🔄 Exemple complet

```bash
# Issue #3 : Design System
git checkout -b feature/issue-3-design-system
# ... développement ...
git add .
git commit -m "🎨 Setup Tailwind design system"
git commit -m "✨ Add color palette and typography"
git push -u origin feature/issue-3-design-system
gh pr create --title "Issue #3: Design System & Styling" --body "..."
gh issue edit 3 --add-label "ready-for-review"
```

## ❌ INTERDICTIONS

- ❌ **JAMAIS** commitser sur `main` directement
- ❌ **JAMAIS** pushes sans créer de PR
- ❌ **JAMAIS** laisser des commits non pushés
- ❌ **JAMAIS** oublier de créer la branche feature

## ✅ VALIDATIONS OBLIGATOIRES

Avant de marquer une tâche terminée :
1. ✅ Branche feature créée
2. ✅ Commits pushés vers origin
3. ✅ PR créée avec description
4. ✅ Issue marquée "ready-for-review"
5. ✅ Tests validés (si applicable)

**Cette workflow doit être suivi à 100% par TOUS les agents !**