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

# Vérifie l'agent project-manager
if [ -f ".claude/agents/project-manager.md" ]; then
    echo "🤖 Agent orchestrateur disponible"
fi

echo "✅ Session prête - Contexte chargé automatiquement"