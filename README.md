# Guiziweb - Site Web Officiel

Site web professionnel de Guiziweb, entreprise spécialisée en solutions IA pour PME.
Développé avec Astro 5 et optimisé pour les performances.

## 🚀 Technologies

- **Astro 5.13.7** - Framework static site generator
- **Tailwind CSS 4** - Framework CSS utility-first
- **Heroicons** - Icônes SVG optimisées (remplace Font Awesome)
- **TypeScript** - Type safety
- **Swiper.js** - Carrousel performant

## 🛡️ Sécurité & Performance

- ✅ **Zéro dépendance CDN externe** (sécurisé)
- ✅ **Icônes SVG inline** (70 icônes Heroicons)
- ✅ **JavaScript externalisé** (7.7KB, mise en cache)
- ✅ **CSS purifié** (Tailwind optimisé)
- ✅ **Build statique** (668KB total)

## 🏗️ Structure du projet

```text
/
├── public/
│   ├── scripts/main.js    # JavaScript externalisé
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Icon.astro           # Composant icônes Heroicons
│   │   └── ArticlesCarousel.astro
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout principal
│   ├── pages/                   # Pages du site
│   │   ├── index.astro          # Page d'accueil
│   │   ├── blog/               # Pages blog
│   │   ├── mentions-legales.astro
│   │   ├── politique-confidentialite.astro
│   │   ├── conditions-utilisation.astro
│   │   └── politique-cookies.astro
│   └── styles/
│       └── global.css
├── .github/workflows/
│   └── deploy.yml          # CI/CD GitHub Pages
└── package.json
```

## 🧞 Commands

Toutes les commandes sont à exécuter depuis la racine du projet :

| Command              | Action                                           |
| :------------------- | :----------------------------------------------- |
| `npm install`        | Installe les dépendances                        |
| `npm run dev`        | Serveur de développement `localhost:4321`       |
| `npm run build`      | Build de production dans `./dist/`              |
| `npm run preview`    | Preview du build en local                       |

## 📋 Fonctionnalités

### Pages principales
- **Accueil** - Présentation des services IA
- **Blog** - Articles techniques (pagination automatique)
- **Pages légales** - Conformité RGPD française

### Fonctionnalités techniques
- **Menu mobile** responsive avec animations
- **Smooth scrolling** entre sections
- **Bouton "retour en haut"**
- **Bandeau cookies RGPD** avec préférences
- **Google Analytics** (GTM-TQ6L9WFT) avec consentement
- **Sitemap XML** généré automatiquement

### Composants réutilisables
- **Icon.astro** - 70 icônes Heroicons mappées
- **ArticlesCarousel.astro** - Carrousel d'articles Swiper
- **BaseLayout.astro** - Layout avec navigation et footer

## 🚀 Déploiement GitHub Pages

Le site est configuré pour un déploiement automatique sur GitHub Pages :

1. **Push** vers la branche `main`
2. **Workflow GitHub Actions** se déclenche automatiquement
3. **Build & Deploy** vers `https://guiziweb.github.io/`

### Configuration requise dans GitHub
- Repository : `guiziweb.github.io`
- Settings > Pages > Source : "GitHub Actions"
- Permissions : Actions activées

## 🎯 Performance

- **Lighthouse Score** : 95-100/100 attendu
- **First Paint** : < 1s
- **Time to Interactive** : < 2s
- **Bundle size** : 668KB (excellent)
- **JavaScript** : 95KB total (dont 63KB Swiper gzippé 19.6KB)

## 📊 SEO & Analytics

- **Meta tags** optimisés pour chaque page
- **Open Graph** et **Twitter Cards**
- **Sitemap XML** automatique
- **Google Analytics** avec gestion des cookies RGPD
- **Structured data** pour le référencement

## 🔧 Développement

### Ajout d'icônes
Les icônes utilisent le composant `Icon.astro` avec Heroicons :
```astro
<Icon name="fa-code" class="mr-2" size={20} />
```

### Nouvelles pages
Créer un fichier `.astro` dans `src/pages/` :
- Utilise automatiquement `BaseLayout.astro`
- Navigation et footer inclus
- SEO configuré via props

### Styles
- **Tailwind CSS 4** avec purge automatique
- **Classes utility-first** pour un développement rapide
- **Design system** cohérent (couleurs, espacements)

---

**Développé avec ❤️ par Guiziweb**
Site optimisé pour les performances et la sécurité.