#!/bin/bash

# Hook UserPromptSubmit - Analyse les demandes et route automatiquement

INPUT=$(cat)
USER_MESSAGE=$(echo "$INPUT" | jq -r '.message')

echo "🧠 Analyse de la demande utilisateur..."

# Détecte si c'est une demande de création d'issue GitHub
if [[ "$USER_MESSAGE" =~ [Cc]r[éeè]er|[Aa]jouter|[Nn]ouveau ]]; then
  if [[ "$USER_MESSAGE" =~ [Ii]ssue|[Tt]icket|[Tt][âa]che ]]; then
    echo "📝 Détection: Création d'issue GitHub"
    echo "💡 Suggestion: Utiliser l'agent project-manager pour décomposer"
    
    # Auto-suggestion du template
    if [[ "$USER_MESSAGE" =~ [Pp]age|[Ss]ite|[Ll]anding ]]; then
      echo "🎯 Type suggéré: Epic (projet complet)"
    elif [[ "$USER_MESSAGE" =~ [Dd]esign|[Ss]tyle|[Cc]SS ]]; then
      echo "🎯 Type suggéré: Frontend"
    elif [[ "$USER_MESSAGE" =~ [Cc]ontenu|[Tt]exte|[Cc]opy ]]; then
      echo "🎯 Type suggéré: Content"
    fi
  fi
fi

# Détecte les demandes de développement
if [[ "$USER_MESSAGE" =~ [Dd][éeè]velopp|[Cc]od|[Ii]mpl[éeè]ment ]]; then
  echo "👨‍💻 Détection: Demande de développement"
  echo "🤖 Suggestion: Déléguer à un agent spécialisé"
  
  # Auto-routing par mots-clés
  if [[ "$USER_MESSAGE" =~ [Hh][Tt][Mm][Ll]|[Cc][Ss][Ss]|[Jj][Ss] ]]; then
    echo "🎨 Agent recommandé: frontend-agent"
  elif [[ "$USER_MESSAGE" =~ [Tt]exte|[Cc]opy|[Rr][éeè]dact ]]; then
    echo "✏️ Agent recommandé: content-agent"
  elif [[ "$USER_MESSAGE" =~ [Tt]est|[Vv]alid|[Cc]ontr[ôo]l ]]; then
    echo "🔍 Agent recommandé: qa-agent"
  fi
fi

echo "✅ Analyse terminée"
exit 0