# Auto-Entrepreneur IA - Landing Page

Landing page professionnelle pour auto-entrepreneur spécialisé en automation IA pour PME locales.

## 🚀 Déploiement

Ce site est conçu pour être déployé sur GitHub Pages :

1. Push le code sur la branche `main`
2. Activer GitHub Pages dans les paramètres du repository
3. Le site sera disponible à l'adresse : `https://username.github.io/claude-full-autonomy`

## 🛠️ Stack Technique

- **HTML5** sémantique
- **Tailwind CSS** via CDN
- **JavaScript** vanilla
- **Formspree** pour le formulaire de contact

## 📁 Structure

```
/
├── index.html          # Page principale
├── style.css           # Styles personnalisés
├── script.js           # JavaScript interactions
├── images/             # Assets optimisés
└── README.md           # Documentation
```

## ⚙️ Configuration

### Formspree
Remplacer `YOUR_FORM_ID` dans `index.html` par votre ID Formspree réel :
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Images
Ajouter les images nécessaires dans le dossier `/images/` :
- Hero image
- Graphiques des avantages
- Photos des témoignages (optionnel)
- Favicon

## 🎨 Personnalisation

Le site utilise une palette de couleurs cohérente :
- **Bleu principal** : #3b82f6
- **Orange accent** : #f97316
- **Gris neutres** : gamme Tailwind

## 📱 Responsive

Design mobile-first entièrement responsive avec breakpoints Tailwind :
- Mobile : par défaut
- Tablet : md (768px+)
- Desktop : lg (1024px+)

## ♿ Accessibilité

- Structure sémantique HTML5
- Support clavier complet
- Contraste conforme WCAG
- ARIA labels appropriés

## 🔧 Développement Local

```bash
# Servir localement (optionnel)
python -m http.server 8000
# ou
npx serve .
```

---

*Développé avec Claude Code pour l'Auto-Entrepreneur IA*