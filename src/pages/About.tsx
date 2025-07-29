import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Target, MapPin, CheckCircle, ArrowRight, Linkedin, Settings, Shield } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import React from 'react';
const About = () => {
  useSEO({
    title: 'Sobre Nosotros | Soluciones TI Innovadoras - Cytek',
    description: 'Conoce al equipo de Cytek. Empresa joven con visión innovadora ofreciendo soluciones TI modernas para pymes. Valores, misión y compromiso con la excelencia.'
  });
  const values = [{
    icon: Target,
    title: 'Excelencia',
    description: 'Nos esforzamos por la excelencia en cada proyecto, entregando soluciones que superan expectativas e impulsan el éxito empresarial.'
  }, {
    icon: Users,
    title: 'Colaboración',
    description: 'Construimos alianzas a largo plazo con nuestros clientes, entendiendo sus necesidades únicas y creciendo juntos.'
  }, {
    icon: Award,
    title: 'Innovación',
    description: 'Nos mantenemos a la vanguardia de las tendencias tecnológicas para proporcionar soluciones de vanguardia que mantienen competitivos a nuestros clientes.'
  }, {
    icon: MapPin,
    title: 'Cercanía',
    description: 'Construimos relaciones cercanas con nuestros clientes, siendo accesibles y comprometidos para brindar atención personalizada en cada interacción.'
  }];
  const team = [{
    name: 'Pol García',
    role: 'CEO y Fundador',
    description: 'Fundé Cytek con la convicción de que cada empresa merece acceso a tecnología de calidad. Me motiva ayudar a los empresarios a transformar sus desafíos tecnológicos en oportunidades de crecimiento.',
    image: '/lovable-uploads/b1836e60-4273-4011-a3b3-b9e25f8d0b22.png'
  }];
  const commitments = [{
    title: 'Tecnología de Vanguardia',
    description: 'Implementamos las últimas tecnologías y mejores prácticas del sector para garantizar soluciones modernas y eficientes que impulsen tu negocio hacia el futuro.',
    icon: Settings
  }, {
    title: 'Atención Personalizada',
    description: 'Cada cliente es único, por eso adaptamos nuestras soluciones a las necesidades específicas de tu empresa, asegurando un servicio personalizado y resultados óptimos.',
    icon: Users
  }, {
    title: 'Soporte Confiable',
    description: 'Nuestro compromiso va más allá de la implementación. Proporcionamos soporte continuo y proactivo para asegurar que tu infraestructura TI funcione sin interrupciones.',
    icon: Shield
  }, {
    title: 'Crecimiento Conjunto',
    description: 'Creemos en construir relaciones a largo plazo. Tu éxito es nuestro éxito, y trabajamos como socios para hacer crecer tu negocio con soluciones escalables.',
    icon: Target
  }];
  return <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre Cytek
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">En Cytek, ayudamos a pequeñas y medianas empresas a crecer con soluciones TI modernas, accesibles y efectivas. Aunque somos una empresa joven, nacimos con una misión clara: acercar la tecnología de nivel empresarial a quienes más la necesitan, con un enfoque cercano, ágil y transparente.</p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Nuestra Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Cerrar la brecha tecnológica para pequeñas y medianas empresas proporcionando 
                  soluciones TI de nivel empresarial que sean accesibles, fiables y rentables. 
                  Creemos que cada empresa merece soporte tecnológico de clase mundial para competir y prosperar 
                  en la economía digital actual.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Nuestra Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Ser el socio TI más confiable para empresas en crecimiento, conocidos por nuestra experiencia, 
                  fiabilidad y compromiso con el éxito del cliente. Visionamos un futuro donde las barreras tecnológicas 
                  ya no limiten el potencial empresarial, y cada empresa pueda aprovechar soluciones de vanguardia 
                  para alcanzar sus objetivos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores Fundamentales</h2>
            <p className="text-muted-foreground">
              Los principios que guían todo lo que hacemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conoce a Nuestro Fundador</h2>
            <p className="text-muted-foreground">
              El visionario detrás de Cytek y su compromiso con la excelencia tecnológica
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-sm">
              <Card className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={team[0].image} alt={team[0].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl">{team[0].name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {team[0].role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {team[0].description}
                  </p>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-20 bg-secondary rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Compromiso</h2>
            <p className="text-muted-foreground">
              Los pilares fundamentales que guían nuestra forma de trabajar contigo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => <Card key={index} className="border-0 shadow-lg group hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                      <commitment.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{commitment.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {commitment.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Por Qué las Empresas Eligen Cytek
              </h2>
              <div className="space-y-4">
                {['Equipo altamente capacitado y certificado', 'Compromiso con la disponibilidad y confiabilidad', 'Soporte técnico especializado y personalizado', 'Soluciones adaptadas a tu sector específico', 'Precios transparentes sin costos ocultos', 'Monitoreo y mantenimiento proactivo'].map((reason, index) => <div key={index} className="flex items-center space-x-3 animate-fade-in">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>)}
              </div>
            </div>
            
            <Card className="border-0 shadow-lg p-8 hover-scale">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">¿Listo para Asociarte con Nosotros?</h3>
                <p className="text-muted-foreground mb-6">
                  Comienza tu transformación digital con Cytek. Descubre cómo nuestro enfoque innovador puede ayudar a que tu negocio crezca.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full hover-scale" size="lg">
                    <Link to="/contact">
                      Programar una Consulta
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>;
};
export default About;