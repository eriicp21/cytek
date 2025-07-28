import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Award,
  Users,
  Target,
  Clock,
  CheckCircle,
  ArrowRight,
  Linkedin
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';

const About = () => {
  useSEO({
    title: 'Sobre Nosotros | Expertos TI desde 2008 - Cytek',
    description: 'Conoce al equipo de Cytek. Más de 15 años de experiencia ofreciendo soluciones TI empresariales a pymes. Valores, misión y compromiso con la excelencia.'
  });

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive business success.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term partnerships with our clients, understanding their unique needs and growing together.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that keep our clients competitive.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Our clients depend on us for critical IT services, and we deliver with unwavering reliability and uptime.'
    }
  ];

  const team = [
    {
      name: 'Michael Chen',
      role: 'CEO & Founder',
      description: 'Over 20 years of experience in enterprise IT solutions and business strategy.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and cybersecurity with 15+ years in the field.',
      image: '👩‍💻'
    },
    {
      name: 'David Rodriguez',
      role: 'VP of Operations',
      description: 'Specializes in IT infrastructure and project management for SMB clients.',
      image: '👨‍🔧'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Client Success',
      description: 'Dedicated to ensuring our clients achieve maximum value from their IT investments.',
      image: '👩‍💼'
    }
  ];

  const milestones = [
    { year: '2008', event: 'Founded Cytek with a vision to democratize enterprise IT for SMBs' },
    { year: '2012', event: 'Expanded to cloud services, helping 100+ businesses migrate to the cloud' },
    { year: '2016', event: 'Launched 24/7 support center with industry-leading response times' },
    { year: '2020', event: 'Achieved 99.9% uptime guarantee and grew to serve 500+ clients' },
    { year: '2024', event: 'Recognized as a top IT service provider with advanced cybersecurity offerings' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About Cytek
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2008, we've been empowering small and medium-sized businesses with 
            enterprise-grade IT solutions. Our mission is simple: make advanced technology 
            accessible, affordable, and effective for growing companies.
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the technology gap for small and medium-sized businesses by providing 
                  enterprise-level IT solutions that are accessible, reliable, and cost-effective. 
                  We believe every business deserves world-class technology support to compete and thrive 
                  in today's digital economy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted IT partner for growing businesses, known for our expertise, 
                  reliability, and commitment to client success. We envision a future where technology 
                  barriers no longer limit business potential, and every company can leverage cutting-edge 
                  solutions to achieve their goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
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
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.image}</div>
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
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20 bg-secondary rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              Key milestones in our growth and evolution
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why Businesses Choose Cytek
              </h2>
              <div className="space-y-4">
                {[
                  'Proven track record with 500+ satisfied clients',
                  '99.9% uptime guarantee backed by SLA',
                  '24/7 expert support with rapid response times',
                  'Tailored solutions for your specific industry',
                  'Transparent pricing with no hidden costs',
                  'Proactive monitoring and maintenance'
                ].map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-0 shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
                <p className="text-muted-foreground mb-6">
                  Join hundreds of businesses that trust Cytek for their IT needs. 
                  Let's discuss how we can help your business grow.
                </p>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Download Company Profile
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;