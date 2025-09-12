#!/bin/bash

# Hook PostToolUse - Log toutes les actions pour traçabilité

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')
RESULT=$(echo "$INPUT" | jq -r '.result // "N/A"')
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

LOG_FILE=".claude/logs/actions.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log structuré
echo "[$TIMESTAMP] $TOOL_NAME - $RESULT" >> "$LOG_FILE"

# Actions spéciales
case "$TOOL_NAME" in
  "Write"|"Edit")
    TOOL_PARAMS=$(echo "$INPUT" | jq -r '.parameters')
    FILE_PATH=$(echo "$TOOL_PARAMS" | jq -r '.file_path // "unknown"')
    echo "📝 Fichier modifié: $FILE_PATH"
    
    # Si c'est un fichier de code, déclencher potentiel commit
    if [[ "$FILE_PATH" =~ \.(html|css|js|md)$ ]]; then
      echo "💾 Fichier code modifié - Prêt pour commit"
    fi
    ;;
    
  "Task")
    TOOL_PARAMS=$(echo "$INPUT" | jq -r '.parameters')
    AGENT_TYPE=$(echo "$TOOL_PARAMS" | jq -r '.subagent_type // "unknown"')
    echo "🤖 Agent lancé: $AGENT_TYPE"
    ;;
    
  "Bash")
    TOOL_PARAMS=$(echo "$INPUT" | jq -r '.parameters')
    COMMAND=$(echo "$TOOL_PARAMS" | jq -r '.command // "unknown"')
    if [[ "$COMMAND" =~ ^gh\ issue ]]; then
      echo "📝 Commande GitHub issue détectée"
    elif [[ "$COMMAND" =~ ^git ]]; then
      echo "📦 Commande Git détectée"
    fi
    ;;
esac

exit 0