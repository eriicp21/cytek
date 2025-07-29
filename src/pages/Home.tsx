import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Settings, CheckCircle, ArrowRight, Users, DollarSign, Quote } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import { FlickeringGridHero } from '@/components/FlickeringGridHero';
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
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[hsl(var(--cytek-blue-dark))] to-[hsl(var(--cytek-blue-purple))]">
        {/* Background FlickeringGrid for tablets and larger screens */}
        <div className="hidden md:block lg:-right-25 absolute top-1/2 -translate-y-1/2 -right-8 w-1/2 h-3/4 opacity-60">
          <FlickeringGridHero />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white space-y-8 relative z-10 max-w-[97%] lg:max-w-[95%]">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-stagger-fade-in-1">
                Soluciones TI Modernas para el 
                <span className="block text-blue-200">Crecimiento de tu Negocio</span>
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 leading-relaxed animate-stagger-fade-in-2">
                Servicios tecnológicos profesionales que transforman tu infraestructura TI para maximizar la eficiencia, seguridad y crecimiento de tu empresa.
              </p>
              <div className="animate-stagger-fade-in-3">
                <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-[hsl(var(--cytek-blue))] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  <Link to="/contact">
                    Solicitar Presupuesto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-blue-100 animate-stagger-fade-in-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-200" />
                  <span>Consulta gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-200" />
                  <span>Soporte 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-200" />
                  <span>Soluciones personalizadas</span>
                </div>
              </div>
            </div>

            {/* Right Column - Flickering Grid Animation (mobile only) */}
            <div className="md:hidden animate-stagger-fade-in-4">
              <FlickeringGridHero />
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
                  <div className="font-semibold text-lg text-foreground">Ana López</div>
                  <div className="text-muted-foreground">Directora General, Empresa de Servicios</div>
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