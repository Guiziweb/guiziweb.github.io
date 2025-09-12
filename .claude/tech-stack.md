# Stack Technique - Landing Page IA

## Technologies OBLIGATOIRES

### Hébergement
- **GitHub Pages** uniquement
- Domaine : `username.github.io/repo-name`
- Déploiement automatique via push sur `main`

### Frontend
- **HTML5** sémantique
- **CSS** : Tailwind CSS via CDN uniquement
- **JavaScript** : Vanilla JS (pas de frameworks)
- **Images** : Optimisées, formats web (WebP/AVIF)

### Formulaire
- **Formspree.io** pour le contact
- Configuration : `action="https://formspree.io/f/{form_id}"`
- Validation côté client en JS

### Structure fichiers
```
/
├── index.html          # Page principale
├── style.css          # Styles custom (minimal)
├── script.js          # JS interactions
├── images/            # Assets optimisés
└── README.md          # Documentation
```

### Contraintes GitHub Pages
- Pas de build step
- Pas de serveur backend
- Fichiers statiques uniquement
- HTTPS automatique

### Performance
- Lighthouse score > 90
- Temps de chargement < 3s
- Mobile-first responsive

**INTERDIT :**
- Frameworks JS (React, Vue, etc.)
- Preprocesseurs nécessitant build
- Serveur backend
- Base de données