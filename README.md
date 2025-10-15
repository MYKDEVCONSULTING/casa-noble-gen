# MaisonsConfort - Conciergerie Immobilière

## 📋 Description
Site vitrine professionnel pour MaisonsConfort, conciergerie spécialisée dans la gestion de locations courte durée à Casablanca et Rabat. Plateforme moderne ciblant propriétaires et locataires avec système de réservation et synchronisation des disponibilités.

## 🚀 Technologies
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: TailwindCSS + shadcn/ui
- **Animations**: Framer Motion (via Tailwind animations)
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## 🎨 Design System
Palette professionnelle agence immobilière :
- **Bleu Marine**: Couleur principale (confiance, professionnalisme)
- **Or Élégant**: Accent premium (luxe, qualité)
- **Blanc/Gris**: Neutrals (clarté, modernité)

## 📁 Structure du Projet
```
src/
├── components/        # Composants réutilisables
│   ├── ui/           # Composants shadcn/ui
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── pages/            # Pages de l'application
│   ├── Index.tsx     # Accueil
│   ├── About.tsx     # À propos
│   ├── Services.tsx  # Services
│   ├── Properties.tsx # Appartements
│   └── Contact.tsx   # Contact
├── assets/           # Images et médias
└── lib/              # Utilitaires
```

## 🛠️ Installation et Démarrage

### Prérequis
- Node.js 18+ et npm/yarn

### Installation
```bash
# Cloner le repository
git clone <votre-repo-url>
cd maisonsconfort

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build Production
```bash
npm run build
npm run preview
```

## 📱 Pages Disponibles
- **/** - Page d'accueil avec hero, services et propriétés vedettes
- **/about** - Histoire et valeurs de l'entreprise
- **/services** - Services pour propriétaires et locataires
- **/properties** - Catalogue des appartements avec filtres
- **/contact** - Formulaire de contact et informations

## 🔧 Configuration

### Variables d'environnement (à venir)
```env
VITE_WHATSAPP_NUMBER=2126452437
VITE_CONTACT_EMAIL=contact@maisonsconfort.ma
VITE_GOOGLE_MAPS_API_KEY=your_api_key
```

## 🎯 Fonctionnalités Actuelles
- ✅ Navigation responsive avec menu mobile
- ✅ Design mobile-first
- ✅ Animations fluides et modernes
- ✅ Formulaires de contact validés
- ✅ Grille de propriétés filtrable
- ✅ CTA WhatsApp intégré
- ✅ SEO optimisé (meta tags)

## 📞 Contact
- **WhatsApp**: [+212 645 243 7](https://wa.me/2126452437)
- **Email**: contact@maisonsconfort.ma
- **Instagram**: [@maisonsconfort](https://instagram.com/maisonsconfort)

## 📄 Licence
© 2025 MaisonsConfort. Tous droits réservés.
