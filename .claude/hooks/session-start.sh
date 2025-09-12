#!/bin/bash

# Hook SessionStart - Charge le contexte projet automatiquement

echo "🚀 Démarrage session Claude Code - Landing Page IA"

# Charge la configuration principale
if [ -f ".claude/MAIN.md" ]; then
    echo "📋 Configuration chargée: Landing page auto-entrepreneur IA"
    echo "⚙️ Stack: GitHub Pages + Tailwind CSS + Formspree"
fi

# Vérifie les issues GitHub ouvertes
if command -v gh &> /dev/null; then
    OPEN_ISSUES=$(gh issue list --state open --json number | jq length)
    echo "📝 Issues ouvertes: $OPEN_ISSUES"
    
    # Si pas d'issues, suggère de créer un epic
    if [ "$OPEN_ISSUES" -eq 0 ]; then
        echo "💡 Suggestion: Créer une issue Epic pour démarrer le projet"
        echo "   Exemple: gh issue create --title 'Epic: Créer landing page complète' --label epic"
    fi
fi

# Vérifie les agents disponibles
AGENTS_COUNT=$(ls .claude/agents/*.md 2>/dev/null | wc -l | tr -d ' ')
if [ "$AGENTS_COUNT" -gt 0 ]; then
    echo "🤖 Agents disponibles: $AGENTS_COUNT (chef-projet, developpeur-landing, responsable-qualite)"
fi

echo "✅ Session prête - Contexte chargé automatiquement"