import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  Mail, Target, BarChart3, Zap, Users, Globe, Shield, Clock, 
  ArrowRight, CheckCircle, TrendingUp, Workflow, Database, MessageSquare 
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Email Marketing Automation",
      description: "Create sophisticated drip campaigns that automatically nurture leads through your sales funnel with personalized messaging.",
      features: ["Visual campaign builder", "A/B testing", "Smart send times", "Personalization tokens"]
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Advanced Segmentation",
      description: "Segment your audience with laser precision using behavioral data, demographics, and engagement patterns.",
      features: ["Behavioral triggers", "Dynamic segments", "Custom attributes", "Lead scoring"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Real-time Analytics",
      description: "Track campaign performance with comprehensive metrics and actionable insights to optimize your strategy.",
      features: ["Live dashboards", "ROI tracking", "Heat maps", "Custom reports"]
    },
    {
      icon: <Workflow className="w-12 h-12 text-primary" />,
      title: "Workflow Automation",
      description: "Build complex automation workflows that respond to customer behavior and trigger appropriate actions.",
      features: ["Drag-drop builder", "Multi-channel flows", "Conditional logic", "API integrations"]
    }
  ];

  const additionalFeatures = [
    { icon: <Users />, title: "CRM Integration", description: "Seamlessly sync with popular CRM platforms" },
    { icon: <Globe />, title: "Multi-channel Campaigns", description: "Coordinate email, SMS, and social campaigns" },
    { icon: <Shield />, title: "Enterprise Security", description: "Bank-level security with GDPR compliance" },
    { icon: <Clock />, title: "24/7 Support", description: "Round-the-clock technical support and assistance" },
    { icon: <Database />, title: "Data Management", description: "Clean and enrich your contact database automatically" },
    { icon: <MessageSquare />, title: "Chat Integration", description: "Connect email campaigns with live chat and chatbots" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            iEMA Platform Features
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need for 
            <span className="text-primary block">Email Marketing Success</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover the powerful features that make DemandgenCentral the leading iEMA platform for B2B companies.
          </p>
          <Button size="lg" asChild>
            <a href="https://salescentri.com/solutions/use-case-navigator/demo" target="_blank" rel="noopener noreferrer">
              Try Interactive Demo <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-lg">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete iEMA Solution</h2>
            <p className="text-xl text-muted-foreground">Additional features that set us apart</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {React.cloneElement(feature.icon, { className: "w-8 h-8 text-primary" })}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Seamless Integrations</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect with over 50+ popular tools and platforms to create a unified marketing ecosystem.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {["Salesforce", "HubSpot", "Pipedrive", "Slack", "Zapier", "WordPress"].map((integration, index) => (
              <div key={index} className="p-4 bg-card rounded-lg border hover:shadow-lg transition-all duration-300 w-full text-center">
                <div className="text-lg font-semibold text-muted-foreground">{integration}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button asChild>
              <a href="https://salescentri.com/solutions/psa-suite/integrations" target="_blank" rel="noopener noreferrer">
                View All Integrations
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">Start your free trial and see the difference our iEMA platform can make.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;