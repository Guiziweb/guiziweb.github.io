# Workflow GitHub Complet Automatisé

## 🎯 WORKFLOW OBLIGATOIRE POUR TOUS LES AGENTS

### 📋 Phase 1: Prise en Charge d'Issue

```bash
# 1. L'agent DOIT s'assigner l'issue
gh issue edit {issue_number} --add-assignee @me

# 2. L'agent DOIT commenter qu'il commence
gh issue comment {issue_number} --body "🤖 **Agent {agent_type} prend en charge cette issue**

Workflow automatisé démarré :
- ✅ Issue assignée
- 🔄 Création branche feature en cours
- 📝 Développement prévu sous 30min

Status: **IN_PROGRESS** 🚀"

# 3. L'agent DOIT mettre le label en cours
gh issue edit {issue_number} --add-label "in-progress" --remove-label "ready-to-start"
```

### 🔧 Phase 2: Développement avec Branche

```bash
# 4. Créer branche feature OBLIGATOIRE
git checkout -b feature/issue-{number}-{description}

# 5. Développer le code selon les specs de l'issue

# 6. Commits atomiques avec convention
git commit -m "✨ feat(issue-{number}): {description}"
git commit -m "🎨 style(issue-{number}): {description}"
git commit -m "🐛 fix(issue-{number}): {description}"

# 7. Push et créer PR OBLIGATOIRE
git push -u origin feature/issue-{number}-{description}
```

### 🔄 Phase 3: Pull Request Automatique

```bash
# 8. L'agent DOIT créer la PR immédiatement
gh pr create --title "Issue #{number}: {Title}" --body "$(cat <<'EOF'
## 🎯 Résumé
{Description des changements réalisés}

## 📋 Checklist Issue
{Reprendre tous les critères d'acceptance de l'issue avec ✅}

## 🛠️ Changements Techniques
- **Fichiers modifiés**: {liste}
- **Nouvelles fonctionnalités**: {liste}
- **Corrections**: {liste}

## 🧪 Tests Effectués
- [x] Tests fonctionnels locaux
- [x] Validation des critères d'acceptance  
- [x] Vérification responsive (si applicable)
- [x] Tests accessibilité (si applicable)

## 🔗 Liens
- Closes #{issue_number}
- Related to Epic #{epic_number}

---
🤖 **PR créée automatiquement par {agent_type}**  
📅 Prête pour review QA
EOF
)"

# 9. L'agent DOIT lier la PR à l'issue
gh issue comment {issue_number} --body "🔗 **Pull Request créée**: #{pr_number}

Lien: https://github.com/{repo}/pull/{pr_number}

Code prêt pour review QA 📋
Status: **READY_FOR_REVIEW** ✅"

# 10. L'agent DOIT mettre à jour les labels
gh issue edit {issue_number} --add-label "ready-for-review" --remove-label "in-progress"
```

### ✅ Phase 4: QA Review Automatique

```bash
# 11. QA-AGENT prend automatiquement les PR "ready-for-review"
gh pr comment {pr_number} --body "🔍 **QA Review démarrée automatiquement**

Agent QA assigné: qa-agent
Status: **REVIEWING** 🔄

Checklist QA en cours :
- [ ] Code quality review
- [ ] Performance check  
- [ ] Security validation
- [ ] Acceptance criteria validation

ETA: ~15 minutes"

# 12. Après review, QA-AGENT DOIT décider
# Si ✅ APPROUVÉ:
gh pr review {pr_number} --approve --body "✅ **QA REVIEW PASSED**

## Code Quality: EXCELLENT ✅
- Structure propre et maintenable
- Standards respectés  
- Sécurité validée

## Performance: OPTIMISÉ ✅  
- Temps de chargement acceptables
- Optimisations appliquées

## Acceptance Criteria: VALIDÉS ✅
{Liste des critères vérifiés}

**DECISION: APPROUVÉ POUR MERGE** 🚀"

# 13. QA-AGENT merge automatiquement
gh pr merge {pr_number} --merge --delete-branch

# Si ❌ REFUSÉ:
gh pr review {pr_number} --request-changes --body "❌ **CHANGES REQUESTED**
{Liste des problèmes à corriger}"
```

### 🎉 Phase 5: Finalisation Automatique

```bash
# 14. QA-AGENT ferme l'issue automatiquement après merge
gh issue close {issue_number} --comment "🎉 **Issue terminée avec succès !**

## ✅ Résumé Final
- **PR mergée**: #{pr_number} 
- **Branche feature**: Supprimée automatiquement
- **Tous critères d'acceptance**: Validés ✅
- **Code quality**: Excellent 
- **Tests**: Passés

## 📊 Statistiques
- **Temps total**: {temps_elapsed}
- **Commits**: {nb_commits}
- **Files changed**: {nb_files}

---
🤖 **Workflow GitHub automatisé terminé**  
Prêt pour l'issue suivante ! 🚀"

# 15. QA-AGENT met à jour les labels finaux
gh issue edit {issue_number} --add-label "completed" --remove-label "ready-for-review"
```

## 🔄 RÉSUMÉ DU CYCLE COMPLET

```
Issue Ready → Agent Assignment → Feature Branch → Development → 
Push → PR Creation → QA Review → Merge → Issue Closure → Next Issue
```

## ⚡ AUTOMATISATIONS CLÉS

1. **Auto-assignment** des issues par les agents
2. **Auto-création** des branches feature  
3. **Auto-création** des PR avec templates
4. **Auto-review** par QA agent
5. **Auto-merge** si approuvé
6. **Auto-closure** des issues
7. **Auto-progression** vers issue suivante

## 📋 LABELS WORKFLOW

- `ready-to-start` → `in-progress` → `ready-for-review` → `completed`
- `needs-changes` (si QA refuse)
- `blocked` (si problème technique)

**TOUS les agents DOIVENT suivre ce workflow à 100% !**