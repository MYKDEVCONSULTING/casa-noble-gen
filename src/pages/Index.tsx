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
      title: 'Gestion Complète',
      description: 'De la photo professionnelle à la remise des clés, nous gérons tout pour vous.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Sécurité Garantie',
      description: 'Vérification des locataires, assurance et suivi rigoureux de chaque séjour.',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Revenus Optimisés',
      description: 'Tarification dynamique et occupation maximale pour rentabiliser votre bien.',
    },
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

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-primary-foreground">Prêt à maximiser vos revenus ?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Confiez-nous la gestion de votre bien et profitez d'une occupation moyenne de 92%
            </p>
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Demander une estimation gratuite
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
