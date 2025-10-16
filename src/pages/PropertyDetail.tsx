import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wifi, Snowflake, Car, Bed, MapPin, ArrowLeft } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import bedroomImg from '@/assets/detail-bedroom.jpg';
import bathroomImg from '@/assets/detail-bathroom.jpg';
import kitchenImg from '@/assets/detail-kitchen.jpg';

interface PropertyData {
  id: number;
  title: string;
  location: string;
  city: string;
  price: number;
  image: string;
  bedrooms: number;
  amenities: string[];
  available: boolean;
  description: string;
  detailImages: string[];
  surface: number;
  bathrooms: number;
}

const PropertyDetail = () => {
  const { id } = useParams();

  const propertiesData: Record<number, PropertyData> = {
    1: {
      id: 1,
      title: 'Loft Moderne Racine',
      location: 'Casablanca, Racine',
      city: 'casablanca',
      price: 450,
      image: property1,
      bedrooms: 2,
      bathrooms: 2,
      surface: 85,
      amenities: ['wifi', 'clim', 'parking'],
      available: true,
      description: 'Magnifique loft moderne situé au cœur de Racine. Cet appartement spacieux offre un espace de vie lumineux avec une décoration contemporaine. Cuisine équipée, deux chambres confortables, et toutes les commodités pour un séjour agréable.',
      detailImages: [property1, bedroomImg, kitchenImg, bathroomImg],
    },
    2: {
      id: 2,
      title: 'Penthouse Panoramique',
      location: 'Rabat, Agdal',
      city: 'rabat',
      price: 650,
      image: property2,
      bedrooms: 3,
      bathrooms: 2,
      surface: 120,
      amenities: ['wifi', 'clim'],
      available: true,
      description: 'Penthouse exceptionnel avec vue panoramique sur Rabat. Trois chambres spacieuses, salon lumineux avec grandes baies vitrées. Idéal pour les familles ou les voyages d\'affaires. Quartier calme et résidentiel.',
      detailImages: [property2, bedroomImg, kitchenImg, bathroomImg],
    },
    3: {
      id: 3,
      title: 'Studio Élégant Centre',
      location: 'Casablanca, Maarif',
      city: 'casablanca',
      price: 350,
      image: property3,
      bedrooms: 1,
      bathrooms: 1,
      surface: 45,
      amenities: ['wifi', 'clim'],
      available: false,
      description: 'Studio élégant au centre de Maarif. Parfait pour les voyageurs solo ou les couples. Espace optimisé avec coin cuisine équipé, salle de bain moderne. À proximité des commerces et restaurants.',
      detailImages: [property3, bedroomImg, kitchenImg, bathroomImg],
    },
    4: {
      id: 4,
      title: 'Appartement Vue Mer',
      location: 'Casablanca, Ain Diab',
      city: 'casablanca',
      price: 550,
      image: property1,
      bedrooms: 2,
      bathrooms: 2,
      surface: 90,
      amenities: ['wifi', 'clim', 'parking'],
      available: true,
      description: 'Superbe appartement avec vue sur l\'océan à Ain Diab. Deux chambres, terrasse spacieuse, à deux pas de la corniche et des plages. Environnement calme et sécurisé.',
      detailImages: [property1, bedroomImg, kitchenImg, bathroomImg],
    },
    5: {
      id: 5,
      title: 'Loft Contemporain',
      location: 'Rabat, Hassan',
      city: 'rabat',
      price: 480,
      image: property2,
      bedrooms: 2,
      bathrooms: 1,
      surface: 75,
      amenities: ['wifi', 'clim'],
      available: true,
      description: 'Loft contemporain dans le quartier Hassan. Design moderne, cuisine ouverte, deux chambres confortables. Proche des sites touristiques et du centre-ville.',
      detailImages: [property2, bedroomImg, kitchenImg, bathroomImg],
    },
    6: {
      id: 6,
      title: 'Studio Cosy Centre-Ville',
      location: 'Casablanca, Centre-Ville',
      city: 'casablanca',
      price: 320,
      image: property3,
      bedrooms: 1,
      bathrooms: 1,
      surface: 40,
      amenities: ['wifi', 'clim'],
      available: true,
      description: 'Studio cosy au cœur du centre-ville. Parfait pour découvrir Casablanca à pied. Espace bien agencé avec tout le confort nécessaire. Idéal pour les courts séjours.',
      detailImages: [property3, bedroomImg, kitchenImg, bathroomImg],
    },
  };

  const property = propertiesData[Number(id)];

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">Propriété non trouvée</h1>
            <Link to="/properties">
              <Button variant="default">Retour aux appartements</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const amenityIcons: Record<string, JSX.Element> = {
    wifi: <Wifi className="h-4 w-4" />,
    clim: <Snowflake className="h-4 w-4" />,
    parking: <Car className="h-4 w-4" />,
  };

  const handleReservation = () => {
    const message = encodeURIComponent(
      `Bonjour, je veux en savoir plus sur ${property.title} à ${property.location}. Prix: ${property.price} DH/nuit`
    );
    window.open(`https://wa.me/212620836989?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Back Button */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/properties">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour aux appartements
              </Button>
            </Link>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              <div className="md:col-span-2">
                <img
                  src={property.detailImages[0]}
                  alt={property.title}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                />
              </div>
              {property.detailImages.slice(1).map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`${property.title} - ${index + 2}`}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <h1 className="mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    {property.location}
                  </div>
                  {!property.available && (
                    <Badge variant="destructive" className="text-base">
                      Indisponible
                    </Badge>
                  )}
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-muted/30 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Bed className="h-5 w-5" />
                      <span className="text-sm">Chambres</span>
                    </div>
                    <div className="text-2xl font-bold">{property.bedrooms}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Salles de bain</div>
                    <div className="text-2xl font-bold">{property.bathrooms}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Surface</div>
                    <div className="text-2xl font-bold">{property.surface}m²</div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="mb-4">Description</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="mb-4">Équipements</h2>
                  <div className="flex gap-4">
                    {property.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg"
                      >
                        {amenityIcons[amenity.toLowerCase()]}
                        <span className="capitalize">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 border-2 border-accent/20 rounded-lg bg-card">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-accent mb-1">{property.price} DH</div>
                    <div className="text-sm text-muted-foreground">par nuit</div>
                  </div>

                  <Button
                    variant={property.available ? 'default' : 'outline'}
                    className="w-full mb-4"
                    size="lg"
                    onClick={handleReservation}
                    disabled={!property.available}
                  >
                    {property.available ? 'Réserver sur WhatsApp' : 'Me prévenir'}
                  </Button>

                  <div className="text-sm text-center text-muted-foreground mb-4">
                    Réponse rapide garantie
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="mb-3 text-sm font-semibold">Ce prix inclut :</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Ménage professionnel</li>
                      <li>✓ Linge de maison fourni</li>
                      <li>✓ Support client 24/7</li>
                      <li>✓ Check-in flexible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;