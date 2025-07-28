import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Target, Clock, CheckCircle, ArrowRight, Linkedin } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
const About = () => {
  useSEO({
    title: 'Sobre Nosotros | Expertos TI desde 2008 - Cytek',
    description: 'Conoce al equipo de Cytek. Más de 15 años de experiencia ofreciendo soluciones TI empresariales a pymes. Valores, misión y compromiso con la excelencia.'
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
    icon: Clock,
    title: 'Fiabilidad',
    description: 'Nuestros clientes dependen de nosotros para servicios TI críticos, y entregamos con fiabilidad inquebrantable y máximo tiempo de actividad.'
  }];
  const team = [{
    name: 'Carlos Mendoza',
    role: 'CEO y Fundador',
    description: 'Más de 20 años de experiencia en soluciones TI empresariales y estrategia de negocio.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format'
  }, {
    name: 'Ana Rodríguez',
    role: 'Directora Técnica',
    description: 'Experta en arquitectura cloud y ciberseguridad con más de 15 años en el sector.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b618?w=400&h=400&fit=crop&auto=format'
  }, {
    name: 'Miguel Santos',
    role: 'VP de Operaciones',
    description: 'Especialista en infraestructura TI y gestión de proyectos para clientes pyme.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format'
  }, {
    name: 'Laura Fernández',
    role: 'Directora de Éxito del Cliente',
    description: 'Dedicada a asegurar que nuestros clientes obtengan el máximo valor de sus inversiones TI.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&auto=format'
  }];
  const milestones = [{
    year: '2008',
    event: 'Fundamos Cytek con la visión de democratizar la TI empresarial para pymes'
  }, {
    year: '2012',
    event: 'Expandimos a servicios cloud, ayudando a más de 100 empresas a migrar a la nube'
  }, {
    year: '2016',
    event: 'Lanzamos centro de soporte 24/7 con tiempos de respuesta líderes en la industria'
  }, {
    year: '2020',
    event: 'Alcanzamos garantía de disponibilidad del 99,9% y crecimos a servir más de 500 clientes'
  }, {
    year: '2024',
    event: 'Reconocidos como proveedor líder de servicios TI con ofertas avanzadas de ciberseguridad'
  }];
  return <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre Cytek
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde 2008, hemos estado empoderando a pequeñas y medianas empresas con 
            soluciones TI de nivel empresarial. Nuestra misión es simple: hacer que la tecnología 
            avanzada sea accesible, asequible y efectiva para empresas en crecimiento.
          </p>
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
            <h2 className="text-3xl font-bold mb-4">Conoce a Nuestro Equipo Directivo</h2>
            <p className="text-muted-foreground">
              Profesionales experimentados dedicados a tu éxito
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <Card key={index} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300 hover-scale">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.description}
                  </p>
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer mx-auto transition-colors" />
                </CardContent>
              </Card>)}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20 bg-secondary rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Recorrido</h2>
            <p className="text-muted-foreground">
              Hitos clave en nuestro crecimiento y evolución
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => <div key={index} className="flex items-start space-x-6 animate-fade-in">
                <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-bold hover-scale">
                  {milestone.year}
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>)}
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
                {['Historial probado con más de 500 clientes satisfechos', 'Garantía de disponibilidad del 99,9% respaldada por SLA', 'Soporte experto 24/7 con tiempos de respuesta rápidos', 'Soluciones adaptadas a tu sector específico', 'Precios transparentes sin costos ocultos', 'Monitoreo y mantenimiento proactivo'].map((reason, index) => <div key={index} className="flex items-center space-x-3 animate-fade-in">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>)}
              </div>
            </div>
            
            <Card className="border-0 shadow-lg p-8 hover-scale">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">¿Listo para Asociarte con Nosotros?</h3>
                <p className="text-muted-foreground mb-6">
                  Únete a cientos de empresas que confían en Cytek para sus necesidades TI. 
                  Hablemos sobre cómo podemos ayudar a que tu negocio crezca.
                </p>
                <div className="space-y-4">
                  <Button className="w-full hover-scale" size="lg">
                    Programar una Consulta
                    <ArrowRight className="ml-2 h-5 w-5" />
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