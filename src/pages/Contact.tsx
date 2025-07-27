import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "¡Mensaje Enviado!",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });
    setFormData({
      nombreCompleto: '',
      correoElectronico: '',
      telefono: '',
      mensaje: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: '+34 900 123 456',
      description: 'Llámanos para asistencia inmediata'
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      details: 'info@cytek.es',
      description: 'Envíanos tus consultas en cualquier momento'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      details: 'Calle Tecnología, 123\n28001 Madrid, España',
      description: 'Visita nuestro moderno espacio de oficinas'
    },
    {
      icon: Clock,
      title: 'Horario',
      details: 'Lunes a Viernes: 9:00h - 17:00h\nSábados: 10:00h - 14:00h',
      description: 'Soporte de emergencia disponible 24/7'
    }
  ];

  const reasons = [
    {
      icon: MessageSquare,
      title: 'Consulta Gratuita',
      description: 'Obtén asesoramiento experto adaptado a las necesidades de tu negocio'
    },
    {
      icon: Calendar,
      title: 'Respuesta Rápida',
      description: 'Respondemos a todas las consultas en un máximo de 4 horas'
    },
    {
      icon: Users,
      title: 'Equipo Dedicado',
      description: 'Trabaja directamente con nuestros profesionales experimentados'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Ponte en Contacto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Preparado para transformar tu empresa con soluciones TI fiables? 
            Contacta con nuestro equipo de expertos hoy mismo para una consulta gratuita 
            y descubre cómo podemos ayudar a que tu negocio prospere.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo en 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nombreCompleto">Nombre Completo *</Label>
                    <Input
                      id="nombreCompleto"
                      value={formData.nombreCompleto}
                      onChange={(e) => handleChange('nombreCompleto', e.target.value)}
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="correoElectronico">Correo Electrónico *</Label>
                    <Input
                      id="correoElectronico"
                      type="email"
                      value={formData.correoElectronico}
                      onChange={(e) => handleChange('correoElectronico', e.target.value)}
                      placeholder="juan@empresa.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleChange('telefono', e.target.value)}
                      placeholder="+34 600 123 456"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={(e) => handleChange('mensaje', e.target.value)}
                      placeholder="Cuéntanos sobre tus necesidades tecnológicas y cómo podemos ayudarte..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full hover-scale">
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-sm text-foreground whitespace-pre-line mb-1">
                        {info.details}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Contact Us */}
        <section className="bg-secondary rounded-2xl p-12 mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por Qué Contactar con Cytek?</h2>
            <p className="text-muted-foreground">
              Estamos aquí para ayudar a que tu empresa tenga éxito con soluciones TI fiables
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit hover-scale">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-muted-foreground">
              Respuestas rápidas a consultas comunes sobre nuestros servicios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">¿Qué rapidez tienen vuestros tiempos de respuesta?</h3>
                <p className="text-sm text-muted-foreground">
                  Garantizamos respuesta en 4 horas para solicitudes estándar y 1 hora para problemas críticos. 
                  El soporte de emergencia está disponible 24/7.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">¿Trabajáis con empresas de todos los tamaños?</h3>
                <p className="text-sm text-muted-foreground">
                  Nos especializamos en pequeñas y medianas empresas (5-500 empleados) y adaptamos 
                  nuestras soluciones a tus necesidades específicas y presupuesto.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">¿Qué incluyen vuestros servicios gestionados?</h3>
                <p className="text-sm text-muted-foreground">
                  Nuestros servicios gestionados incluyen monitoreo 24/7, mantenimiento regular, 
                  actualizaciones de seguridad, gestión de copias de seguridad y llamadas de soporte ilimitadas.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">¿Podéis ayudar con la migración a la nube?</h3>
                <p className="text-sm text-muted-foreground">
                  Sí, proporcionamos servicios integrales de migración a la nube incluyendo planificación, 
                  ejecución y gestión continua para garantizar una transición sin problemas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">¿Ofrecéis evaluaciones de ciberseguridad?</h3>
                <p className="text-sm text-muted-foreground">
                  Proporcionamos evaluaciones completas de seguridad para identificar vulnerabilidades 
                  y desarrollar estrategias para proteger tu empresa de amenazas cibernéticas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">¿Cuáles son vuestros acuerdos de nivel de servicio?</h3>
                <p className="text-sm text-muted-foreground">
                  Ofrecemos garantías de disponibilidad del 99,9% con SLA claramente definidos 
                  para tiempos de respuesta, objetivos de resolución y métricas de rendimiento.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;