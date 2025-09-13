# Guide de Build - Alex Dubois IA

## Installation des dépendances

```bash
npm install
```

## Scripts disponibles

### Développement
```bash
npm run dev
# Lance Tailwind en mode watch pour développer
```

### Build de production
```bash
npm run build-prod
# Génère le CSS optimisé et minifié pour la production
```

### Serveur local
```bash
npm run serve
# Lance un serveur local sur http://localhost:8000
```

## Structure des fichiers

- `src/input.css` - Fichier source Tailwind CSS
- `dist/output.css` - CSS généré (inclus dans index.html)
- `tailwind.config.js` - Configuration Tailwind
- `index.html` - Page principale
- `favicon.ico` - Icône du site

## Workflow de développement

1. Modifier le HTML dans `index.html`
2. Si nouveaux styles nécessaires, les ajouter dans `src/input.css`
3. Lancer `npm run dev` pour compiler en temps réel
4. Avant déploiement, utiliser `npm run build-prod` pour optimiser

## Notes importantes

- ✅ Tailwind CSS installé localement (plus de CDN)
- ✅ Plugins inclus : forms, typography, aspect-ratio
- ✅ Plugin line-clamp retiré (inclus par défaut depuis v3.3)
- ✅ CSS optimisé et minifié pour production
- ✅ Favicon ajouté
- ✅ Pas d'erreurs 404 en console
