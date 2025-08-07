import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, Star, Users, Zap, TrendingUp, Mail, Target, BarChart3, Shield } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Marketing Automation",
      description: "Create personalized drip campaigns that nurture leads automatically and drive conversions."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Advanced Targeting",
      description: "Segment your audience with precision using behavioral data and engagement patterns."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Real-time Analytics",
      description: "Track campaign performance with detailed metrics and actionable insights."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Smart Automation",
      description: "AI-powered sequences that adapt based on recipient behavior and engagement."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "Marketing Director",
      content: "DemandgenCentral transformed our lead nurturing process. We saw a 300% increase in qualified leads within 3 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Growth Dynamics",
      role: "VP of Sales",
      content: "The automation capabilities are incredible. Our team can now focus on high-value activities while the platform handles the rest.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "Scale Ventures",
      role: "CEO",
      content: "ROI was immediate. The platform paid for itself in the first month through improved conversion rates.",
      rating: 5
    }
  ];

  const stats = [
    { value: "300%", label: "Average Lead Increase" },
    { value: "85%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Automation Running" },
    { value: "50+", label: "Integrations Available" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-scale-in">
            🚀 #1 iEMA Platform for B2B Growth
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Automate Your Email Marketing.<br />
            <span className="text-primary">Amplify Your Results.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            DemandgenCentral's iEMA platform transforms how B2B companies nurture leads through intelligent 
            email automation, personalized campaigns, and data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="shadow-glow animate-float" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful iEMA Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground">See what our customers say about our platform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Email Marketing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of B2B companies already using our iEMA platform to drive growth and increase conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="shadow-glow" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Your Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://salescentri.com/contact/sales-inquiry" target="_blank" rel="noopener noreferrer">
                Contact Sales
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
