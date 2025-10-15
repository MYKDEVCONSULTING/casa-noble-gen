import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Home, Shield, TrendingUp } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const Index = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Loft Moderne Racine',
      location: 'Casablanca, Racine',
      price: 450,
      image: property1,
      bedrooms: 2,
      amenities: ['wifi', 'clim', 'parking'],
      available: true,
    },
    {
      id: 2,
      title: 'Penthouse Panoramique',
      location: 'Rabat, Agdal',
      price: 650,
      image: property2,
      bedrooms: 3,
      amenities: ['wifi', 'clim'],
      available: true,
    },
    {
      id: 3,
      title: 'Studio Élégant Centre',
      location: 'Casablanca, Maarif',
      price: 350,
      image: property3,
      bedrooms: 1,
      amenities: ['wifi', 'clim'],
      available: false,
    },
  ];

  const features = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Gestion Clé en Main',
      description: 'Photos professionnelles, annonces optimisées multi-plateformes, accueil des voyageurs, ménage professionnel et maintenance 24/7. Nous gérons chaque détail pour maximiser vos revenus sans le moindre effort de votre part.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Tranquillité Absolue',
      description: 'Vérification rigoureuse des profils locataires, assurance tous risques, check-in/check-out sécurisés, inventaire détaillé et rapport photo après chaque séjour. Votre bien est entre de bonnes mains.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Rentabilité Maximale',
      description: 'Tarification dynamique basée sur l\'IA, présence sur +10 plateformes de réservation, taux d\'occupation moyen de 92% et revenus 3x supérieurs à une location classique. Transparence totale avec rapports mensuels détaillés.',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed K.',
      location: 'Propriétaire, Racine',
      text: 'Mes revenus ont triplé en 6 mois ! L\'équipe MaisonsConfort gère tout de A à Z. Je ne m\'occupe de rien et je reçois mes paiements à temps. Service impeccable.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'Sarah M.',
      location: 'Propriétaire, Agdal',
      text: 'Professionnalisme exemplaire. Mes locataires sont toujours satisfaits et mon appartement est toujours impeccable. Je recommande à 100% !',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Youssef T.',
      location: 'Voyageur d\'affaires',
      text: 'J\'ai séjourné dans 3 de leurs appartements. Toujours aussi bien équipés, propres et bien situés. Le service client répond en 5 minutes même à minuit !',
      rating: 5,
      avatar: '👨',
    },
  ];

  const stats = [
    { value: '+1.2M DH', label: 'Revenus générés pour nos propriétaires' },
    { value: '23', label: 'Appartements premium gérés' },
    { value: '92%', label: 'Taux d\'occupation moyen annuel' },
    { value: '4.9/5', label: 'Note moyenne de nos voyageurs' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">Pourquoi MaisonsConfort ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Appartements en Vedette</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre sélection de logements premium à Casablanca et Rabat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/properties">
                <Button variant="default" size="lg">
                  Voir tous les appartements
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Notre Impact en Chiffres</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des résultats concrets qui témoignent de notre excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Ce que disent nos clients</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La confiance de nos propriétaires et la satisfaction de nos voyageurs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-primary-foreground">Prêt à maximiser vos revenus locatifs ?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Rejoignez les 23 propriétaires qui nous font confiance et bénéficiez d'un taux d'occupation de 92%. Estimation gratuite en 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="xl">
                  Demander une estimation gratuite
                </Button>
              </Link>
              <a href="https://wa.me/2126452437?text=Bonjour%20MaisonsConfort" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="xl">
                  Discuter sur WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
