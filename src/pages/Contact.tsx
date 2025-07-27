import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@cytek.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Business Ave, Suite 100\nTech City, TC 12345',
      description: 'Visit our modern office space'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
      description: 'Emergency support available 24/7'
    }
  ];

  const reasons = [
    {
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'Get expert advice tailored to your business needs'
    },
    {
      icon: Calendar,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 4 hours'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Work directly with our experienced professionals'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with reliable IT solutions? 
            Contact our team of experts today for a free consultation and discover 
            how we can help your business thrive.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select onValueChange={(value) => handleChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cybersecurity">Cybersecurity Solutions</SelectItem>
                        <SelectItem value="cloud">Cloud Migration & Management</SelectItem>
                        <SelectItem value="infrastructure">IT Infrastructure Management</SelectItem>
                        <SelectItem value="support">24/7 Technical Support</SelectItem>
                        <SelectItem value="network">Network Design & Management</SelectItem>
                        <SelectItem value="backup">Data Backup & Recovery</SelectItem>
                        <SelectItem value="other">Other / Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your IT needs and how we can help..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg">
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
        <section className="bg-secondary rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Contact Cytek?</h2>
            <p className="text-muted-foreground">
              We're here to help your business succeed with reliable IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How quickly can you respond to support requests?</h3>
                <p className="text-sm text-muted-foreground">
                  We guarantee response within 4 hours for standard requests and 1 hour for critical issues. 
                  Emergency support is available 24/7.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you work with businesses of all sizes?</h3>
                <p className="text-sm text-muted-foreground">
                  We specialize in small and medium-sized businesses (5-500 employees) and tailor our 
                  solutions to fit your specific needs and budget.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's included in your managed services?</h3>
                <p className="text-sm text-muted-foreground">
                  Our managed services include 24/7 monitoring, regular maintenance, security updates, 
                  backup management, and unlimited support calls.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can you help with cloud migration?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we provide comprehensive cloud migration services including planning, execution, 
                  and ongoing management to ensure a smooth transition.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you offer cybersecurity assessments?</h3>
                <p className="text-sm text-muted-foreground">
                  We provide comprehensive security assessments to identify vulnerabilities and develop 
                  strategies to protect your business from cyber threats.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What are your service level agreements?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer 99.9% uptime guarantees with clearly defined SLAs for response times, 
                  resolution targets, and performance metrics.
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