import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Settings, CheckCircle, ArrowRight, Server, Monitor, Lock, Database, Network, Globe } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import React from 'react';
const Services = () => {
  useSEO({
    title: 'Servicios TI | Ciberseguridad y Cloud - Cytek',
    description: 'Servicios TI gestionados, soluciones de ciberseguridad y migración cloud para pymes. Soporte 24/7 y gestión proactiva de infraestructura.'
  });
  const coreServices = [{
    id: 'managed-it',
    icon: Settings,
    title: 'Servicios TI Gestionados',
    image: 'photo-1531297484001-80022131f5a1',
    description: 'Nuestros servicios TI gestionados proporcionan una gestión completa y proactiva de toda tu infraestructura tecnológica. Desde el monitoreo continuo hasta el mantenimiento preventivo, nos encargamos de que tus sistemas funcionen de manera óptima las 24 horas del día, los 7 días de la semana.',
    detailedDescription: 'Fundados con una visión innovadora y enfoque en la excelencia, ofrecemos una gestión integral que abarca desde servidores físicos y virtuales hasta redes de comunicación y sistemas de almacenamiento. Nuestro enfoque proactivo previene problemas antes de que afecten a tu negocio, garantizando máxima disponibilidad y rendimiento.',
    features: ['Monitoreo 24/7 de todos los sistemas críticos', 'Mantenimiento preventivo programado', 'Gestión de actualizaciones y parches de seguridad', 'Soporte técnico remoto y presencial', 'Gestión de copias de seguridad automatizadas', 'Informes mensuales de rendimiento y estado', 'Planificación de capacidad y escalabilidad', 'Gestión de licencias de software']
  }, {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Soluciones de Ciberseguridad',
    image: 'photo-1518770660439-4636190af475',
    description: 'Protegemos tu negocio contra las amenazas cibernéticas más avanzadas con soluciones de seguridad multicapa. Desde firewalls de nueva generación hasta sistemas de detección de intrusiones, implementamos las mejores prácticas de seguridad adaptadas a tu sector.',
    detailedDescription: 'En un mundo donde las amenazas cibernéticas evolucionan constantemente, es crucial contar con una estrategia de seguridad robusta y actualizada. Nuestras soluciones incluyen evaluaciones de riesgo, implementación de controles de seguridad y formación de empleados para crear una cultura de ciberseguridad en tu organización.',
    features: ['Evaluación completa de vulnerabilidades', 'Implementación de firewalls avanzados', 'Sistemas de detección y prevención de intrusiones', 'Antivirus y anti-malware empresarial', 'Filtrado de correo electrónico y web', 'Formación en concienciación sobre seguridad', 'Planes de respuesta ante incidentes', 'Cumplimiento normativo (RGPD, LOPD)']
  }, {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Servicios Cloud',
    image: 'photo-1487058792275-0ad4aaf24ca7',
    description: 'Acelera la transformación digital de tu empresa con nuestras soluciones cloud personalizadas. Ofrecemos migración completa, gestión multi-cloud y optimización de costos para maximizar el retorno de inversión en tecnología cloud.',
    detailedDescription: 'La nube ofrece flexibilidad, escalabilidad y eficiencia que las empresas modernas necesitan para competir. Nuestros expertos certificados te guían en todo el proceso de adopción cloud, desde la estrategia inicial hasta la optimización continua, garantizando una transición sin interrupciones.',
    features: ['Estrategia y planificación de migración cloud', 'Migración de aplicaciones y datos', 'Gestión de infraestructura multi-cloud', 'Optimización de costos cloud', 'Backup y recuperación en la nube', 'Monitoreo y gestión de rendimiento', 'Implementación de DevOps y automatización', 'Soporte y mantenimiento continuo']
  }];
  const additionalServices = [{
    icon: Server,
    title: 'Gestión de Servidores',
    description: 'Administración completa de servidores físicos y virtuales'
  }, {
    icon: Network,
    title: 'Redes y Comunicaciones',
    description: 'Diseño e implementación de infraestructuras de red'
  }, {
    icon: Database,
    title: 'Gestión de Bases de Datos',
    description: 'Optimización y mantenimiento de bases de datos empresariales'
  }, {
    icon: Monitor,
    title: 'Soporte de Usuario Final',
    description: 'Asistencia técnica para empleados y equipos de trabajo'
  }, {
    icon: Lock,
    title: 'Auditorías de Seguridad',
    description: 'Evaluaciones periódicas de seguridad y cumplimiento'
  }, {
    icon: Globe,
    title: 'Diseño y Desarrollo Web',
    description: 'Creación de sitios web profesionales y aplicaciones empresariales'
  }];
  return <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento 
            y la eficiencia de empresas pequeñas y medianas en el entorno digital actual.
          </p>
        </div>

        {/* Core Services Detailed Sections */}
        <div className="space-y-20 mb-20">
          {coreServices.map((service, index) => <section key={service.id} className="animate-fade-in">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>)}
                  </div>

                  <Button asChild className="hover-scale">
                    <Link to="/contact">
                      Más Información
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative group">
                    <img src={`https://images.unsplash.com/${service.image}?w=600&h=400&fit=crop&auto=format`} alt={service.title} className="rounded-xl shadow-lg w-full h-80 object-cover hover-scale" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </section>)}
        </div>

        {/* Additional Services */}
        <section className="py-16 bg-secondary rounded-2xl mb-16 animate-fade-in">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Servicios Adicionales</h2>
              <p className="text-muted-foreground">
                Amplía las capacidades de tu empresa con nuestros servicios especializados
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-scale">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-lg w-fit">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gradient-to-br from-background to-secondary/50 rounded-2xl mb-16 animate-fade-in">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestro Proceso</h2>
              <p className="text-muted-foreground">
                Una metodología probada que garantiza la entrega exitosa de proyectos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
              step: '01',
              title: 'Análisis',
              description: 'Evaluamos tu infraestructura actual e identificamos oportunidades de mejora'
            }, {
              step: '02',
              title: 'Estrategia',
              description: 'Desarrollamos una hoja de ruta tecnológica personalizada y alineada con tus objetivos'
            }, {
              step: '03',
              title: 'Implementación',
              description: 'Ejecutamos la solución con mínima interrupción de tus operaciones comerciales'
            }, {
              step: '04',
              title: 'Soporte',
              description: 'Proporcionamos monitoreo, mantenimiento y soporte continuo para un rendimiento óptimo'
            }].map((process, index) => <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 hover-scale">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-[hsl(var(--cytek-blue-dark))] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para transformar tu infraestructura TI?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Permítenos diseñar una solución TI integral que crezca con tu empresa. 
              Comienza con una consulta gratuita hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-primary font-semibold hover-scale">
                <Link to="/contact">
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Services;