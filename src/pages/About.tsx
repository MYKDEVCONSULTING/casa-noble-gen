import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';
import aboutTeamImg from '@/assets/about-team.jpg';

const About = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '23', label: 'Biens gérés' },
    { icon: <Award className="h-6 w-6" />, value: '92%', label: "Taux d'occupation" },
    { icon: <TrendingUp className="h-6 w-6" />, value: '+45%', label: 'Revenus moyens' },
    { icon: <Clock className="h-6 w-6" />, value: '24/7', label: 'Support disponible' },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Lancement',
      description: 'Création de MaisonsConfort avec 5 biens à Casablanca',
    },
    {
      year: '2024',
      title: 'Expansion Rabat',
      description: 'Ouverture sur Rabat et atteinte de 23 biens gérés',
    },
    {
      year: '2025',
      title: 'Objectif 50 biens',
      description: 'Vision de doubler notre portefeuille et renforcer notre équipe',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-primary-foreground">À Propos de MaisonsConfort</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Votre partenaire de confiance pour la gestion de locations courte durée au Maroc
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-muted/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qui sommes-nous */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="mb-6">Qui sommes-nous ?</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Fondé en 2023 par une équipe de 2 passionnés de l'immobilier et de 
                    l'hospitalité, MaisonsConfort est né d'une vision simple : offrir aux 
                    propriétaires une gestion professionnelle et transparente de leurs 
                    biens, tout en garantissant aux locataires une expérience 
                    exceptionnelle.
                  </p>
                  <p>
                    Aujourd'hui, nous gérons <strong>23 biens d'exception</strong> à Casablanca et 
                    Rabat, avec un taux d'occupation moyen de <strong>92%</strong>.
                  </p>
                  <p>
                    Notre secret ? Une approche personnalisée, des technologies de 
                    pointe et une équipe disponible 24/7 pour répondre à tous les 
                    besoins.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={aboutTeamImg}
                  alt="Équipe MaisonsConfort"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold mb-1">92%</div>
                  <div className="text-sm">Taux d'occupation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-16">Notre Évolution</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform -translate-x-1/2" />
                
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`relative mb-12 md:mb-16 animate-fade-in ${
                      index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}>
                      <div className="bg-card p-6 rounded-lg shadow-lg">
                        <div className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent font-bold mb-3">
                          {item.year}
                        </div>
                        <h3 className="mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Nous visons l'excellence dans chaque aspect de notre service
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="mb-3">Transparence</h3>
                <p className="text-muted-foreground">
                  Communication claire et rapports détaillés pour une confiance totale
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Adoption des meilleures technologies pour optimiser votre rentabilité
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;