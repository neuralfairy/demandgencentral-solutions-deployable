import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageSquare, Calendar, Users } from "lucide-react";

const Contact = () => {
  const contactOptions = [
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Sales Inquiry",
      description: "Speak with our sales team about your needs",
      action: "Call Sales",
      link: "https://salescentri.com/contact/sales-inquiry"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Book Demo",
      description: "Schedule a personalized product demo",
      action: "Book Demo",
      link: "https://salescentri.com/get-started/book-demo"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Support",
      description: "Get help with technical issues",
      action: "Submit Ticket",
      link: "https://salescentri.com/contact/support-request/submit-ticket"
    }
  ];

  const officeInfo = [
    {
      title: "Dallas Office",
      address: "123 Business District Drive, Dallas, TX 75201",
      phone: "(214) 555-0123",
      email: "info@demandgencentral.com"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <span className="text-primary block">Email Marketing?</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our team is here to help you succeed. Choose the best way to connect with us.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <a href={option.link} target="_blank" rel="noopener noreferrer">
                      {option.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" action="https://salescentri.com/get-started/contact" method="GET">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input id="company" name="company" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      placeholder="Tell us about your email marketing goals..."
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-6 animate-slide-in-right">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Office Information</CardTitle>
                  <CardDescription>Visit us or reach out directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {officeInfo.map((office, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="font-semibold text-lg">{office.title}</h3>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <a href={`tel:${office.phone}`} className="text-sm hover:text-primary transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href={`mailto:${office.email}`} className="text-sm hover:text-primary transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  ))}
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold">Business Hours</h4>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM CST</p>
                      <p>Saturday: 9:00 AM - 1:00 PM CST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/get-started/calendly" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 w-4 h-4" />
                      Schedule a Meeting
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/contact/partnerships/partner-inquiry" target="_blank" rel="noopener noreferrer">
                      <Users className="mr-2 w-4 h-4" />
                      Partner with Us
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://salescentri.com/contact/sales-inquiry/request-quote" target="_blank" rel="noopener noreferrer">
                      <Mail className="mr-2 w-4 h-4" />
                      Request Quote
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Prefer to Talk Directly?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a call with our team to discuss your specific needs and see our platform in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book Demo Call <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;