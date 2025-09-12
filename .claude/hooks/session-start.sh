#!/bin/bash

# Hook SessionStart - Charge le contexte projet automatiquement

echo "🚀 Démarrage session Claude Code - Landing Page IA"

# Charge le contexte projet
if [ -f ".claude/project-context.md" ]; then
    echo "📋 Contexte projet chargé: Landing page auto-entrepreneur IA"
fi

# Charge les contraintes techniques  
if [ -f ".claude/tech-stack.md" ]; then
    echo "⚙️ Stack technique: GitHub Pages + Tailwind CSS"
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