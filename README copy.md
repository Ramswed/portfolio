# Portfolio Manon Leroux - React Version

Site portfolio de Manon Leroux (Ramswed) - Développeuse Full-Stack & Designer, développé avec React et Framer Motion.

## 🚀 Installation et lancement

1. **Installer les dépendances :**

```bash
npm install
```

2. **Lancer le serveur de développement :**

```bash
npm start
```

3. **Ouvrir dans le navigateur :**
   Le site sera accessible à l'adresse `http://localhost:3000`

## 📁 Structure du projet

```
src/
├── components/
│   ├── Header.js          # Navigation principale
│   └── Footer.js          # Pied de page avec liens sociaux
├── pages/
│   ├── Home.js            # Page d'accueil avec projets en vedette
│   ├── AllWork.js         # Page portfolio complet
│   ├── About.js           # Page à propos (équipe, valeurs, services)
│   └── Contact.js         # Page contact avec formulaire et FAQ
├── App.js                 # Composant principal avec routing
├── index.js               # Point d'entrée de l'application
└── index.css              # Styles CSS globaux
```

## ✨ Fonctionnalités

- **React Router** pour la navigation entre pages
- **Framer Motion** pour les animations fluides
- **Polices système modernes** pour les titres et liens
- **Design responsive** adaptatif mobile/desktop
- **Animations au scroll** avec Intersection Observer
- **Formulaire de contact** interactif
- **FAQ complète** avec 9 questions

## 🎨 Pages disponibles

- **/** - Page d'accueil avec projets en vedette
- **/all-work** - Portfolio complet (33 projets)
- **/about** - À propos, compétences, services
- **/contact** - Formulaire, collaboration, FAQ

## 🛠 Technologies utilisées

- React 18
- React Router DOM
- Framer Motion
- CSS3 (Grid, Flexbox, animations)
- Polices système (SF Pro Display, Helvetica Neue)

## 📱 Responsive

Le site s'adapte automatiquement aux différentes tailles d'écran :

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Animations

- Transitions fluides avec `cubic-bezier(0.4, 0, 0.2, 1)`
- Animations d'entrée au scroll
- Effets de parallaxe sur les images décoratives
- Animations au survol des éléments interactifs
- Labels de formulaire qui flottent au focus
