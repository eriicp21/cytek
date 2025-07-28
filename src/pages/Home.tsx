import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Settings, CheckCircle, ArrowRight, Users, DollarSign, Quote } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import heroOffice from '@/assets/hero-office.jpg';
const Home = () => {
  useSEO({
    title: 'Cytek | Soluciones TI Profesionales y Servicios Gestionados',
    description: 'Cytek ofrece soluciones TI modernas, incluyendo ciberseguridad y servicios cloud para pymes. Contacta para un presupuesto gratuito.'
  });
  const mainServices = [{
    icon: Settings,
    title: 'Servicios TI Gestionados',
    description: 'Gestión completa de tu infraestructura tecnológica con monitoreo 24/7, mantenimiento preventivo y soporte técnico especializado para garantizar el máximo rendimiento de tus sistemas.'
  }, {
    icon: Shield,
    title: 'Soluciones de Ciberseguridad',
    description: 'Protección integral contra amenazas cibernéticas con firewalls avanzados, detección de intrusiones y políticas de seguridad adaptadas a tu negocio para mantener tus datos seguros.'
  }, {
    icon: Cloud,
    title: 'Servicios Cloud',
    description: 'Migración y gestión de infraestructura en la nube con soluciones escalables que se adaptan al crecimiento de tu empresa, optimizando costos y mejorando la eficiencia operativa.'
  }];
  const whyChooseUs = [{
    icon: Users,
    title: 'Soporte Proactivo',
    description: 'Nuestro equipo de expertos monitorea continuamente tus sistemas para prevenir problemas antes de que afecten tu negocio, garantizando máxima disponibilidad y rendimiento.'
  }, {
    icon: Settings,
    title: 'Soluciones a Medida',
    description: 'Diseñamos e implementamos soluciones tecnológicas personalizadas que se adaptan perfectamente a las necesidades específicas y objetivos de crecimiento de tu empresa.'
  }, {
    icon: DollarSign,
    title: 'Precios Transparentes',
    description: 'Sin costos ocultos ni sorpresas. Ofrecemos presupuestos claros y detallados con planes flexibles que se ajustan a tu presupuesto y necesidades reales.'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/50 to-primary/10">
        {/* Background Image with Modern Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroOffice})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-primary/20" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-accent/15 rounded-full blur-lg animate-pulse" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 hover-scale">
              ✨ Transformación digital moderna
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
              Soluciones TI que
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Impulsan tu Futuro
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tecnología de vanguardia, seguridad empresarial y soporte especializado 
              para llevar tu negocio al siguiente nivel
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale">
                <Link to="/contact">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-4 text-lg font-medium hover-scale">
                <Link to="/services">
                  Ver Servicios
                </Link>
              </Button>
            </div>
            
            {/* Stats or Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Soporte Técnico</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Disponibilidad</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/50 hover-scale">
                <div className="text-3xl font-bold text-primary mb-2">4h</div>
                <div className="text-muted-foreground">Tiempo de Respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestros Servicios Principales
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones tecnológicas integrales para impulsar el crecimiento y la eficiencia de tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full animate-fade-in hover-scale">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia nos convierte en el socio tecnológico ideal para tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => <Card key={index} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              La confianza de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-secondary/50 animate-fade-in hover-scale">
              <CardContent className="p-12 text-center">
                <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-50" />
                <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-8 leading-relaxed italic">
                  "Cytek transformó completamente nuestra infraestructura TI. Su equipo no solo resolvió nuestros problemas técnicos, sino que también nos ayudó a crecer de manera más eficiente. El soporte 24/7 nos da la tranquilidad que necesitamos para concentrarnos en nuestro negocio."
                </blockquote>
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-lg text-foreground">María García</div>
                  <div className="text-muted-foreground">Directora General, Innovación Digital S.L.</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-cytek-blue-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            ¿Listo para modernizar tu TI?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo podemos transformar la tecnología de tu empresa y acelerar tu crecimiento. 
            Solicita tu consulta gratuita hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-primary font-semibold hover-scale">
              <Link to="/contact">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            
          </div>
        </div>
      </section>
    </div>;
};
export default Home;