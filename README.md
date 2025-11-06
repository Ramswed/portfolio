# Portfolio

## Structure

```
src/
├── components/       # Composants réutilisables
│   ├── Header.js
│   ├── Footer.js
│   ├── AnimatedLogo.js
│   └── ScrollToTop.js
├── pages/           # Pages de l'application
│   ├── Home.js
│   ├── AllWork.js
│   ├── About.js
│   ├── Contact.js
│   └── ProjectDetail.js
├── styles/         # Fichiers CSS
├── assets/         # Images et ressources
└── App.js          # Composant principal avec routing
```

## Configuration EmailJS

Pour utiliser le formulaire de contact, créer un fichier `.env` à la racine avec :

```
REACT_APP_EMAILJS_SERVICE_ID=votre_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=votre_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=votre_public_key
```

Voir `.env.example` pour plus de détails.
