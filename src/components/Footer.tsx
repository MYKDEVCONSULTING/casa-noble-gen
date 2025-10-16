import { Link } from 'react-router-dom';
import { Mail, Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MaisonsConfort</h3>
            <p className="text-sm opacity-90 mb-4">
              Conciergerie immobilière premium à Casablanca & Rabat. Votre confort, notre priorité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/properties" className="opacity-90 hover:opacity-100 transition-opacity">
                  Appartements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+212 645 243 7</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@maisonsconfort.ma" className="hover:opacity-80">
                  contact@maisonsconfort.ma
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Imm. Atlas, Boulevard Zerktouni, Casablanca</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/212620836989"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/maisonsconfort"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center opacity-75">
          <p>&copy; {new Date().getFullYear()} MaisonsConfort. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link to="/legal" className="hover:opacity-100 transition-opacity">
              Mentions légales
            </Link>
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">
              RGPD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
