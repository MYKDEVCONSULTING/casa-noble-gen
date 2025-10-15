import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const testimonials = [
    {
      name: 'Ahmed M.',
      location: 'Casablanca',
      text: 'MaisonsConfort a doublé mes revenus locatifs ! Service professionnel et transparent. Je recommande vivement.',
      rating: 5,
      avatar: 'AM',
    },
    {
      name: 'Fatima Z.',
      location: 'Rabat',
      text: 'Excellent service, toujours disponibles et réactifs. Mon appartement est constamment occupé grâce à leur gestion.',
      rating: 5,
      avatar: 'FZ',
    },
    {
      name: 'Youssef K.',
      location: 'Casablanca',
      text: 'En tant que locataire, j\'ai trouvé facilement un logement parfait. Check-in simple, appartement impeccable.',
      rating: 5,
      avatar: 'YK',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-primary-foreground">Contactez-nous</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Une question ? Un projet ? Nous sommes là pour vous accompagner
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="mb-6">Envoyez-nous un message</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h2 className="mb-6">Informations de contact</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Téléphone</h3>
                        <p className="text-muted-foreground">+212 645 243 7</p>
                        <p className="text-sm text-muted-foreground mt-1">Lun-Dim: 8h-22h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <a
                          href="https://wa.me/2126452437"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-success hover:underline"
                        >
                          Cliquez pour discuter
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Réponse rapide garantie</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:contact@maisonsconfort.ma"
                          className="text-accent hover:underline"
                        >
                          contact@maisonsconfort.ma
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Adresse</h3>
                        <p className="text-muted-foreground">
                          Immeuble Atlas<br />
                          Boulevard Zerktouni<br />
                          Casablanca, Maroc
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-muted rounded-lg overflow-hidden h-64">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.777744833937!2d-7.628413623945855!3d33.58929437333081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778d4a4f3%3A0x724ec5e5e7c05a21!2sBoulevard%20Zerktouni%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1699999999999!5m2!1sen!2sma"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Ce que disent nos clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <span className="font-semibold">4.8/5</span>
                <span>sur la base de 47 avis</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
