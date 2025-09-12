#!/bin/bash

# Hook PreToolUse - Valide le respect du contexte avant actions

# Lit l'entrée JSON du hook
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')
TOOL_PARAMS=$(echo "$INPUT" | jq -r '.parameters')

echo "🔍 Validation contexte pour: $TOOL_NAME"

# Validations spécifiques par outil
case "$TOOL_NAME" in
  "Write"|"Edit")
    FILE_PATH=$(echo "$TOOL_PARAMS" | jq -r '.file_path // empty')
    if [[ "$FILE_PATH" == *.jsx || "$FILE_PATH" == *.tsx ]]; then
      echo "❌ ERREUR: React/frameworks JS interdits (GitHub Pages)"
      exit 1
    fi
    
    if [[ "$FILE_PATH" == *.scss || "$FILE_PATH" == *.sass ]]; then
      echo "❌ ERREUR: Preprocesseurs CSS interdits (GitHub Pages)"
      exit 1
    fi
    
    # Vérifie mention Tailwind obligatoire pour CSS
    if [[ "$FILE_PATH" == *.css ]]; then
      CONTENT=$(echo "$TOOL_PARAMS" | jq -r '.content // .new_string // empty')
      if [[ ! "$CONTENT" =~ "tailwind" && ! "$CONTENT" =~ "@apply" ]]; then
        echo "⚠️  ATTENTION: Utilise Tailwind CSS uniquement"
      fi
    fi
    ;;
    
  "Task")
    AGENT_TYPE=$(echo "$TOOL_PARAMS" | jq -r '.subagent_type // empty')
    if [[ "$AGENT_TYPE" != "frontend-agent" && "$AGENT_TYPE" != "content-agent" && "$AGENT_TYPE" != "qa-agent" && "$AGENT_TYPE" != "project-manager" ]]; then
      echo "⚠️  Agent non reconnu: $AGENT_TYPE"
    fi
    ;;
esac

# Auto-approve pour workflow agents
case "$TOOL_NAME" in
  "Bash")
    COMMAND=$(echo "$TOOL_PARAMS" | jq -r '.command // ""')
    # Auto-approve toutes les commandes git et gh pour les agents
    if [[ "$COMMAND" =~ ^(git|gh) ]]; then
      echo "✅ Auto-approved: Agent workflow command: $COMMAND"
      echo '{"approved": true, "reason": "Automated agent workflow"}'
      exit 0
    fi
    ;;
esac

echo "✅ Validation OK"
exit 0