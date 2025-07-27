import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Cloud, 
  Settings, 
  HeadphonesIcon,
  Server,
  MonitorSpeaker,
  Network,
  Database,
  Lock,
  Smartphone,
  Globe,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive protection against cyber threats with advanced firewalls, intrusion detection, and security monitoring.',
      features: ['24/7 Security Monitoring', 'Threat Detection & Response', 'Employee Security Training', 'Compliance Auditing']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Seamless cloud adoption with scalable infrastructure solutions tailored to your business needs.',
      features: ['Cloud Strategy Consulting', 'Migration Planning', 'Multi-Cloud Management', 'Cost Optimization']
    },
    {
      icon: Settings,
      title: 'IT Infrastructure Management',
      description: 'Proactive management of your IT systems to ensure optimal performance and minimal downtime.',
      features: ['System Monitoring', 'Preventive Maintenance', 'Performance Optimization', 'Asset Management']
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Technical Support',
      description: 'Round-the-clock expert support to keep your business running smoothly with rapid response times.',
      features: ['Remote Support', 'On-site Assistance', 'Priority Escalation', 'Regular Health Checks']
    },
    {
      icon: Network,
      title: 'Network Design & Management',
      description: 'Design, implement, and manage robust network infrastructure for reliable connectivity.',
      features: ['Network Architecture', 'WiFi Solutions', 'VPN Setup', 'Bandwidth Optimization']
    },
    {
      icon: Database,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection strategies to safeguard your business-critical information.',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Recovery Testing']
    },
    {
      icon: MonitorSpeaker,
      title: 'Hardware Procurement',
      description: 'Expert guidance on technology purchases with volume discounts and lifecycle management.',
      features: ['Hardware Assessment', 'Vendor Negotiations', 'Installation Services', 'Warranty Management']
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Secure and efficient management of mobile devices and applications across your organization.',
      features: ['Device Provisioning', 'App Management', 'Security Policies', 'Remote Wipe Capabilities']
    },
    {
      icon: Globe,
      title: 'Web Development & Hosting',
      description: 'Professional website development and reliable hosting solutions to establish your online presence.',
      features: ['Custom Web Development', 'E-commerce Solutions', 'SSL Certificates', 'Performance Monitoring']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our IT Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to help small and medium-sized 
            businesses thrive in today's digital landscape. From cybersecurity to cloud 
            migration, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="py-16 bg-secondary rounded-2xl mb-16">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground">
                A proven methodology that ensures successful project delivery and long-term success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'We analyze your current IT infrastructure and identify improvement opportunities'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop a customized technology roadmap aligned with your business goals'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Execute the solution with minimal disruption to your business operations'
                },
                {
                  step: '04',
                  title: 'Support',
                  description: 'Provide ongoing monitoring, maintenance, and support for optimal performance'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-cytek-blue-dark text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our experts design a comprehensive IT solution that grows with your business. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary font-semibold">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Download Service Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;