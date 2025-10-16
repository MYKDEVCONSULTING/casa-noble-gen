import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Camera,
  DollarSign,
  Key,
  Sparkles,
  Wrench,
  FileText,
  Search,
  Calendar,
  MessageCircle,
  HeadphonesIcon,
} from 'lucide-react';
import serviceOwnerImg from '@/assets/service-owner.jpg';
import serviceTenantImg from '@/assets/service-tenant.jpg';

const Services = () => {
  const ownerServices = [
    { icon: <Camera className="h-5 w-5" />, text: 'Photos professionnelles et annonces optimisées' },
    { icon: <DollarSign className="h-5 w-5" />, text: 'Tarification dynamique intelligente' },
    { icon: <Key className="h-5 w-5" />, text: 'Gestion des check-in/check-out' },
    { icon: <Sparkles className="h-5 w-5" />, text: 'Ménage et blanchisserie professionnels' },
    { icon: <Wrench className="h-5 w-5" />, text: 'Maintenance et réparations rapides' },
    { icon: <FileText className="h-5 w-5" />, text: 'Rapports mensuels détaillés' },
  ];

  const tenantServices = [
    { icon: <Search className="h-5 w-5" />, text: 'Filtres de recherche avancés' },
    { icon: <Calendar className="h-5 w-5" />, text: 'Calendrier de disponibilité en temps réel' },
    { icon: <MessageCircle className="h-5 w-5" />, text: 'Réservation via WhatsApp' },
    { icon: <HeadphonesIcon className="h-5 w-5" />, text: 'Support client 24/7' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-primary-foreground">Nos Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Des solutions complètes pour propriétaires et locataires
            </p>
          </div>
        </section>

        {/* Services Grid with Images */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Owner Services */}
            <div id="proprio" className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="order-2 lg:order-1">
                  <img
                    src={serviceOwnerImg}
                    alt="Propriétaire confiant les clés"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                    <Key className="h-8 w-8" />
                  </div>
                  <h2 className="mb-6">Formule Premium Propriétaire</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Confiez-nous votre bien et profitez d'une gestion sans tracas avec une 
                    rentabilité optimisée. Nous prenons tout en charge de A à Z.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {ownerServices.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 animate-slide-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                          {service.icon}
                        </div>
                        <span className="pt-1">{service.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-accent/10 p-6 rounded-lg mb-6">
                    <h3 className="mb-3 flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-accent" />
                      Commission Transparente
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      Nous prélevons 20% sur chaque réservation. Vous gardez 80% des revenus, 
                      sans frais cachés ni surprises.
                    </p>
                    <p className="text-accent font-semibold text-sm">
                      Pas de revenus, pas de commission !
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button variant="default" size="lg" className="w-full md:w-auto">
                      Demander une estimation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Tenant Services */}
            <div className="mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success text-success-foreground mb-6">
                    <Search className="h-8 w-8" />
                  </div>
                  <h2 className="mb-6">Formule Séjour de Luxe</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Trouvez le logement idéal pour votre séjour à Casablanca ou Rabat en 
                    quelques clics. Profitez d'un service client irréprochable.
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {tenantServices.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 animate-slide-in"
                        style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center">
                          {service.icon}
                        </div>
                        <span className="pt-1">{service.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-card border-2 border-success/20 p-6 rounded-lg mb-6">
                    <h3 className="mb-3">Garanties Locataire</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Logements vérifiés et conformes</li>
                      <li>✓ Check-in flexible et personnalisé</li>
                      <li>✓ Support disponible pendant votre séjour</li>
                      <li>✓ Remboursement selon nos conditions</li>
                    </ul>
                  </div>

                  <Link to="/properties">
                    <Button variant="success" size="lg" className="w-full md:w-auto">
                      Voir les appartements
                    </Button>
                  </Link>
                </div>
                <div>
                  <img
                    src={serviceTenantImg}
                    alt="Locataires heureux"
                    className="rounded-lg shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">Comment ça marche ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: '01', title: 'Contact', text: 'Remplissez le formulaire ou contactez-nous sur WhatsApp' },
                { step: '02', title: 'Évaluation', text: 'Nous visitons votre bien et établissons une estimation' },
                { step: '03', title: 'Activation', text: 'Photos pro, annonces créées, calendrier synchronisé' },
                { step: '04', title: 'Gestion', text: 'Nous gérons tout : réservations, ménage, maintenance' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full gold-gradient text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6">Prêt à commencer ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Rejoignez les dizaines de propriétaires qui nous font confiance
            </p>
            <Link to="/contact">
              <Button variant="accent" size="xl">
                Contactez-nous maintenant
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;