import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const Properties = () => {
  const [city, setCity] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(800);
  const [bedrooms, setBedrooms] = useState<string>('all');

  const allProperties = [
    {
      id: 1,
      title: 'Loft Moderne Racine',
      location: 'Casablanca, Racine',
      city: 'casablanca',
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
      city: 'rabat',
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
      city: 'casablanca',
      price: 350,
      image: property3,
      bedrooms: 1,
      amenities: ['wifi', 'clim'],
      available: false,
    },
    {
      id: 4,
      title: 'Appartement Vue Mer',
      location: 'Casablanca, Ain Diab',
      city: 'casablanca',
      price: 550,
      image: property1,
      bedrooms: 2,
      amenities: ['wifi', 'clim', 'parking'],
      available: true,
    },
    {
      id: 5,
      title: 'Loft Contemporain',
      location: 'Rabat, Hassan',
      city: 'rabat',
      price: 480,
      image: property2,
      bedrooms: 2,
      amenities: ['wifi', 'clim'],
      available: true,
    },
    {
      id: 6,
      title: 'Studio Cosy Centre-Ville',
      location: 'Casablanca, Centre-Ville',
      city: 'casablanca',
      price: 320,
      image: property3,
      bedrooms: 1,
      amenities: ['wifi', 'clim'],
      available: true,
    },
  ];

  const filteredProperties = allProperties.filter((property) => {
    const cityMatch = city === 'all' || property.city === city;
    const priceMatch = property.price <= maxPrice;
    const bedroomsMatch = bedrooms === 'all' || property.bedrooms === parseInt(bedrooms);
    
    return cityMatch && priceMatch && bedroomsMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-primary-foreground">Nos Appartements</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Découvrez notre sélection de logements premium à Casablanca et Rabat
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30 sticky top-20 z-40 glass-effect">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="space-y-2">
                <Label>Ville</Label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les villes</SelectItem>
                    <SelectItem value="casablanca">Casablanca</SelectItem>
                    <SelectItem value="rabat">Rabat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Prix maximum: {maxPrice} DH/nuit</Label>
                <Slider
                  value={[maxPrice]}
                  onValueChange={(value) => setMaxPrice(value[0])}
                  min={200}
                  max={800}
                  step={50}
                  className="pt-2"
                />
              </div>

              <div className="space-y-2">
                <Label>Chambres</Label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes</SelectItem>
                    <SelectItem value="1">1 chambre</SelectItem>
                    <SelectItem value="2">2 chambres</SelectItem>
                    <SelectItem value="3">3 chambres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-muted-foreground">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'propriété trouvée' : 'propriétés trouvées'}
              </p>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">
                  Aucune propriété ne correspond à vos critères
                </p>
                <p className="text-muted-foreground">
                  Essayez d'ajuster vos filtres pour voir plus de résultats
                </p>
              </div>
            )}
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="py-20 bg-success/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6">Besoin d'aide pour choisir ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible sur WhatsApp pour vous aider à trouver le logement idéal
            </p>
            <a
              href="https://wa.me/2126452437?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20pour%20choisir%20un%20logement"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-success text-success-foreground hover:bg-success/90 shadow-md hover:shadow-lg font-semibold h-14 rounded-lg px-10 text-lg">
                Contacter sur WhatsApp
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Properties;
