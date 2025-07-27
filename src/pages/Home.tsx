import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Cloud, 
  Settings, 
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
  Server,
  Lock,
  Zap
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.'
    },
    {
      icon: Settings,
      title: 'IT Management',
      description: 'Proactive IT support and management to keep your systems running smoothly 24/7.'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with rapid response times for critical issues.'
    }
  ];

  const benefits = [
    'Reduced operational costs',
    'Improved security posture',
    'Enhanced productivity',
    'Scalable solutions',
    'Expert consultation',
    'Rapid deployment'
  ];

  const stats = [
    { number: '500+', label: 'Satisfied Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-cytek-blue to-cytek-blue-dark text-white py-20 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 110, 253, 0.9), rgba(13, 110, 253, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Reliable IT Solutions for 
                <span className="block text-cytek-blue-light">Growing Businesses</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your business with cutting-edge technology solutions. 
                We provide comprehensive IT services designed specifically for small 
                and medium-sized enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-primary font-semibold">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Server className="h-12 w-12 text-cytek-blue-light mb-4" />
                    <h3 className="font-semibold">Server Management</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Lock className="h-12 w-12 text-cytek-blue-light mb-4" />
                    <h3 className="font-semibold">Security</h3>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Cloud className="h-12 w-12 text-cytek-blue-light mb-4" />
                    <h3 className="font-semibold">Cloud Services</h3>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <Zap className="h-12 w-12 text-cytek-blue-light mb-4" />
                    <h3 className="font-semibold">Performance</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver comprehensive IT solutions tailored to meet the unique needs 
              of small and medium-sized businesses across all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose Cytek?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our proven track record and commitment to excellence make us the 
                preferred IT partner for businesses looking to grow and succeed 
                in today's digital landscape.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h3>
              <p className="text-muted-foreground text-center mb-6">
                Let's discuss how we can help transform your business with 
                reliable IT solutions.
              </p>
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Get a Free Consultation
                </Button>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-cytek-blue-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who trust Cytek for their IT needs.
          </p>
          <Button size="lg" variant="secondary" className="text-primary font-semibold">
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;