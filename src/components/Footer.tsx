import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import cytekLogo from '@/assets/cytek-logo.png';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={cytekLogo} 
                alt="Cytek" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Soluciones TI profesionales para pequeñas y medianas empresas. 
              Experiencia de confianza en consultoría tecnológica y soporte especializado.
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Servicios TI Gestionados</li>
              <li className="text-muted-foreground">Soluciones de Ciberseguridad</li>
              <li className="text-muted-foreground">Servicios Cloud</li>
              <li className="text-muted-foreground">Gestión de Redes</li>
              <li className="text-muted-foreground">Soporte 24/7</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@cytek.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Calle Tecnología, 123<br />
                  28001 Madrid<br />
                  España
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Cytek. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link to="/legal" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;