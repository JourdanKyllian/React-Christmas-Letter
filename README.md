# React Christmas Letter

Une petite application React festive permettant d’afficher une lettre de Noël avec plusieurs cadeaux.
Chaque cadeau est recouvert d’un papier cadeau animé : ficelle, nœud, puis ouverture progressive avec un bel effet visuel.
Le projet est déployé via GitHub Pages.


## 🚀 Démo
👉 Voir le site :
https://jourdankyllian.github.io/React-Christmas-Letter/


## 📦 Fonctionnalités
- 🎁 Cartes cadeaux interactives
- ✨ Animation d’ouverture réaliste (ficelle → nœud → papier cadeau)
- 🎄 Fond décoratif avec motifs de Noël
- 📱 Interface responsive
- 🔗 Chaque cadeau renvoie vers un lien externe


## 🛠️ Technologies
- React + Vite
- TailwindCSS
- Framer Motion pour les animations
- GitHub Pages pour le déploiement

🏗️ Installation
```bash
git clone https://github.com/jourdankyllian/React-Christmas-Letter.git
cd React-Christmas-Letter
npm install
npm run dev
```

## 🚀 Déployer sur GitHub Pages
Le projet contient déjà les scripts suivants :
```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Pour déployer :
```bash
npm run deploy
```

Assure-toi que tes images sont accessibles via :
```bash
/React-Christmas-Letter/nom-de-image.png
```

## 📁 Structure des dossiers
```bash
/public
  image1.png
  image2.jpg
  image3.jpg
/src
  components/
    Header.jsx      
    Letter.jsx      // HTML de la lettre
    Gift.jsx        // Animations des ouvertures de cadeaux
  App.jsx           // Présente la liste des cadeaux
  main.jsx
```

## License
MIT © Kyllian Jourdan
