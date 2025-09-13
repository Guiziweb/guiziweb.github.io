#!/bin/bash

# Hook SessionStart - Charge le contexte projet automatiquement

echo "🚀 Démarrage session Claude Code - Landing Page IA"

# Charge la configuration principale
if [ -f ".claude/MAIN.md" ]; then
    echo "📋 Configuration chargée: Landing page auto-entrepreneur IA"
    echo "⚙️ Stack: GitHub Pages + Tailwind CSS + Formspree"
fi

# Vérifie les tâches par statut (labels)
if command -v gh &> /dev/null; then
    READY_TASKS=$(gh issue list --label "status: ready" --state open --json number,title | jq length)
    IN_PROGRESS_TASKS=$(gh issue list --label "status: in-progress" --state open --json number,title | jq length)
    IN_REVIEW_TASKS=$(gh issue list --label "status: in-review" --state open --json number,title | jq length)

    echo "📋 Tâches Kanban et routing agents:"
    echo "   🎯 Pour @agent-developpeur-landing :"

    if [ "$READY_TASKS" -gt 0 ]; then
        gh issue list --label "status: ready" --state open --json number,title | jq -r '.[] | "      Issue\t\(.title)\t\(.number)\tGuiziweb/claude-full-autonomy\tREADY"'
    fi

    if [ "$IN_PROGRESS_TASKS" -gt 0 ]; then
        echo "   ⚙️ En cours :"
        gh issue list --label "status: in-progress" --state open --json number,title | jq -r '.[] | "      Issue\t\(.title)\t\(.number)\tGuiziweb/claude-full-autonomy\tIN_PROGRESS"'
    fi

    if [ "$IN_REVIEW_TASKS" -gt 0 ]; then
        echo "   👀 En review :"
        gh issue list --label "status: in-review" --state open --json number,title | jq -r '.[] | "      Issue\t\(.title)\t\(.number)\tGuiziweb/claude-full-autonomy\tIN_REVIEW"'
    fi

    # Si pas de tâches ready, suggère de créer un ticket
    if [ "$READY_TASKS" -eq 0 ]; then
        echo "💡 Aucune tâche Ready - Utiliser @chef-projet pour créer des tickets"
    fi
fi

# Vérifie les agents disponibles
AGENTS_COUNT=$(ls .claude/agents/*.md 2>/dev/null | wc -l | tr -d ' ')
if [ "$AGENTS_COUNT" -gt 0 ]; then
    echo "🤖 Agents disponibles: $AGENTS_COUNT (chef-projet, developpeur-landing, responsable-qualite)"
fi

echo "✅ Session prête - Contexte chargé automatiquement"