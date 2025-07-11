# Forever Living Store

Une boutique en ligne moderne et élégante pour les produits Forever Living, développée avec React et TypeScript.

## 🌿 À propos du projet

Forever Living Store est une application web e-commerce dédiée à la vente de produits de bien-être naturels Forever Living. L'application offre une expérience utilisateur fluide avec un design moderne et des fonctionnalités complètes de commerce électronique.

## ✨ Fonctionnalités principales

- **Catalogue de produits** : Navigation intuitive avec recherche et filtrage par catégorie
- **Panier d'achat** : Gestion complète du panier avec ajout, suppression et modification des quantités
- **Interface responsive** : Design adaptatif pour tous les appareils (mobile, tablette, desktop)
- **Modales de produits** : Vue détaillée des produits avec informations complètes
- **Interface multilingue** : Textes en français pour le marché francophone
- **Design moderne** : Interface utilisateur élégante avec animations et transitions

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Superset typé de JavaScript pour un code plus robuste
- **Tailwind CSS** - Framework CSS utilitaire pour le styling
- **Lucide React** - Icônes modernes et élégantes
- **Context API** - Gestion d'état globale pour le panier
- **React Hooks** - Gestion d'état locale et effets de bord

## 📁 Structure du projet

```
src/
├── components/          # Composants React réutilisables
│   ├── Header.tsx      # En-tête avec navigation et panier
│   ├── Hero.tsx        # Section héro de la page d'accueil
│   ├── ProductCard.tsx # Carte de produit
│   ├── ProductGrid.tsx # Grille des produits avec recherche/filtres
│   ├── ProductModal.tsx# Modale de détails du produit
│   ├── Cart.tsx        # Interface du panier d'achat
│   └── Footer.tsx      # Pied de page
├── context/            # Contextes React pour la gestion d'état
│   └── CartContext.tsx # Contexte du panier d'achat
├── data/               # Données statiques
│   └── products.ts     # Base de données des produits
├── types/              # Définitions TypeScript
│   └── index.ts        # Types et interfaces
└── App.tsx             # Composant principal
```

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le repository**
```bash
git clone [URL_DU_REPOSITORY]
cd forever-living-store
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Démarrer l'application en mode développement**
```bash
npm start
# ou
yarn start
```

4. **Ouvrir l'application**
   - L'application sera accessible à l'adresse : `http://localhost:3000`

## 📦 Scripts disponibles

- `npm start` : Lance l'application en mode développement
- `npm build` : Compile l'application pour la production
- `npm test` : Lance les tests unitaires
- `npm eject` : Éjecte la configuration (non recommandé)

## 🎨 Composants principaux

### Header
- Navigation principale avec liens d'ancrage
- Icône de panier avec compteur d'articles
- Menu mobile responsive

### ProductGrid
- Affichage en grille des produits
- Barre de recherche en temps réel
- Filtrage par catégorie
- Gestion des états de stock

### Cart (Panier)
- Interface latérale coulissante
- Modification des quantités
- Calcul automatique du total
- Vidage du panier

### ProductModal
- Vue détaillée des produits
- Informations complètes (bienfaits, ingrédients)
- Ajout direct au panier

## 🛒 Gestion du panier

Le panier utilise React Context API avec un reducer pour :
- Ajouter des produits
- Modifier les quantités
- Supprimer des articles
- Calculer le total
- Vider le panier

## 📱 Responsivité

L'application est entièrement responsive grâce à Tailwind CSS :
- **Mobile** : Navigation simplifiée, grille adaptative
- **Tablette** : Mise en page optimisée
- **Desktop** : Expérience complète avec toutes les fonctionnalités

## 🎯 Catégories de produits

- **Wellness** : Produits de bien-être général
- **Nutrition** : Compléments nutritionnels
- **Skincare** : Soins de la peau

## 🔧 Configuration et personnalisation

### Modification des produits
Les produits sont définis dans `src/data/products.ts`. Chaque produit contient :
- ID unique
- Nom et description
- Prix
- Image
- Catégorie
- Bienfaits et ingrédients
- Statut de stock

### Personnalisation du design
Le design utilise Tailwind CSS avec une palette de couleurs verte cohérente :
- Vert principal : `green-600`
- Fond : `gray-50`
- Texte : `gray-900`

## 🌍 Déploiement

### Build de production
```bash
npm run build
```

### Serveurs compatibles
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Tout hébergeur de fichiers statiques

## 🔮 Améliorations futures

- [ ] Intégration d'un système de paiement (Stripe, PayPal)
- [ ] Base de données backend pour les produits
- [ ] Système d'authentification utilisateur
- [ ] Gestion des commandes et historique
- [ ] Avis et notes des produits
- [ ] Wishlist (liste de souhaits)
- [ ] Comparateur de produits
- [ ] Chat support client
- [ ] Intégration API de livraison
- [ ] Programme de fidélité

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

Pour toute question ou suggestion concernant ce projet :

- **Email** : info@foreverliving.com
- **Téléphone** : +1 (555) 123-4567
- **Adresse** : 123 Wellness St, Health City

## 🙏 Remerciements

- **Forever Living** pour les produits de qualité
- **React Team** pour l'excellent framework
- **Tailwind CSS** pour le système de design
- **Lucide** pour les icônes élégantes
- **Pexels** pour les images de haute qualité

---

*Développé avec ❤️ pour promouvoir le bien-être naturel*
