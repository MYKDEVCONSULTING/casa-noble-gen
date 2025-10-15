# Changelog - MaisonsConfort

Toutes les modifications notables du projet sont documentées ici.

## [0.2.0] - 2025-10-15

### ✨ Ajouté
- **Fichiers projet**: README.md, TODO.md, CHANGELOG.md
- **Nouvelle palette de couleurs**: Design premium agence immobilière
  - Bleu marine profond (#0A1E3D) remplaçant l'ancien bleu clair
  - Or élégant (#C9A962) pour accents luxe
  - Blanc cassé et gris sophistiqués
- **Amélioration contenu page d'accueil**:
  - Section bénéfices avec icônes et descriptions enrichies
  - Témoignages clients avec avatars et notes
  - Statistiques d'impact chiffrées
  - CTA plus persuasifs et orientés action

### 🎨 Modifié
- **Design system** (`index.css`): Refonte complète palette couleurs
- **Configuration Tailwind**: Ajout tokens sémantiques premium
- **Page Index**: Contenu enrichi, structure améliorée, meilleur storytelling

---

## [0.1.0] - 2025-10-15

### ✨ Ajouté (Version Initiale)
- **Structure projet React + Vite + TypeScript**
- **Pages principales**:
  - Accueil (Index.tsx) avec Hero, aperçu services, propriétés vedettes
  - À Propos (About.tsx) avec timeline et statistiques
  - Services (Services.tsx) avec offres propriétaires/locataires
  - Appartements (Properties.tsx) avec grille filtrable
  - Contact (Contact.tsx) avec formulaire et coordonnées
- **Composants réutilisables**:
  - Header avec navigation responsive
  - Footer complet avec liens sociaux
  - Hero avec image background et CTA dual
  - PropertyCard pour affichage propriétés
  - ContactForm avec validation
  - TestimonialCard pour avis clients
- **Design system**:
  - Palette bleu nuit/or/blanc (version initiale)
  - Animations Tailwind (fade-in, slide-in, scale-in)
  - Utilitaires gradients et glass-effect
- **Assets**:
  - Images hero Casablanca générées par IA
  - Photos propriétés placeholder (3 propriétés)
- **Configuration**:
  - Routing React Router (5 routes)
  - shadcn/ui components (Button, Card, Input, etc.)
  - SEO meta tags (title, description, Open Graph)
- **Intégration WhatsApp**: Lien direct CTA wa.me

### 🔧 Configuration
- Vite avec hot reload
- TailwindCSS avec préfixes sémantiques
- ESLint + TypeScript strict
- Structure dossiers composants/pages/assets

---

**Format**: [Version] - Date  
**Types de changements**:
- ✨ Ajouté - nouvelles fonctionnalités
- 🎨 Modifié - changements design/UI
- 🔧 Corrigé - corrections de bugs
- ⚡ Performance - optimisations
- 🗑️ Supprimé - fonctionnalités retirées
- 📝 Documentation - mises à jour docs
