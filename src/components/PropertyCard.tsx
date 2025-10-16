import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Snowflake, Car, Bed, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  bedrooms: number;
  amenities: string[];
  available: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  image,
  bedrooms,
  amenities,
  available,
}: PropertyCardProps) => {
  const amenityIcons: Record<string, JSX.Element> = {
    wifi: <Wifi className="h-4 w-4" />,
    clim: <Snowflake className="h-4 w-4" />,
    parking: <Car className="h-4 w-4" />,
  };

  const handleReservation = () => {
    const message = encodeURIComponent(`Bonjour, je veux en savoir plus sur ${title} à ${location}. Prix: ${price} DH/nuit`);
    window.open(`https://wa.me/212620836989?text=${message}`, '_blank');
  };

  return (
    <Link to={`/properties/${id}`}>
      <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer">
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {!available && (
            <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
              <Badge variant="destructive" className="text-lg">
                Indisponible
              </Badge>
            </div>
          )}
        </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent">{price} DH</div>
            <div className="text-xs text-muted-foreground">par nuit</div>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Bed className="h-4 w-4" />
            <span>{bedrooms} ch.</span>
          </div>
          <div className="flex gap-2">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-1 text-muted-foreground"
                title={amenity}
              >
                {amenityIcons[amenity.toLowerCase()]}
              </div>
            ))}
          </div>
        </div>
      </CardContent>

        <CardFooter className="px-6 pb-6">
          <Button
            variant={available ? 'default' : 'outline'}
            className="w-full"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              handleReservation();
            }}
            disabled={!available}
          >
            {available ? 'Réserver' : 'Me prévenir'}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
