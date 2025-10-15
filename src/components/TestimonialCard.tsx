import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

const TestimonialCard = ({ name, location, text, rating, avatar }: TestimonialCardProps) => {
  return (
    <Card className="h-full animate-fade-in hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary">
            {avatar}
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>

        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'fill-accent text-accent' : 'text-muted'
              }`}
            />
          ))}
        </div>

        <p className="text-sm leading-relaxed italic">&ldquo;{text}&rdquo;</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
