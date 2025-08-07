import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small businesses starting with email automation",
      popular: false,
      features: [
        "Up to 2,500 contacts",
        "5 automation workflows",
        "Basic email templates",
        "Email & chat support",
        "Basic analytics",
        "CRM integration"
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Ideal for growing businesses with advanced automation needs",
      popular: true,
      features: [
        "Up to 10,000 contacts",
        "Unlimited automation workflows",
        "Advanced email templates",
        "Priority support",
        "Advanced analytics & reporting",
        "A/B testing",
        "Lead scoring",
        "Multi-channel campaigns"
      ],
      cta: "Start Free Trial",
      link: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex needs",
      popular: false,
      features: [
        "Unlimited contacts",
        "Custom automation workflows",
        "White-label options",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "Custom reporting",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      link: "https://salescentri.com/contact/sales-inquiry"
    }
  ];

  const addOns = [
    {
      name: "Advanced AI Features",
      price: "$29/month",
      description: "AI-powered content optimization and predictive analytics"
    },
    {
      name: "Premium Support",
      price: "$99/month", 
      description: "24/7 phone support with dedicated success manager"
    },
    {
      name: "Custom Integrations",
      price: "Contact us",
      description: "Build custom integrations with your existing tools"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose the Perfect Plan for
            <span className="text-primary block">Your Business</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Start with our free trial and upgrade as you grow. No hidden fees, no setup costs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in ${
                  plan.popular ? 'border-primary shadow-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                    </span>
                    {plan.period && <span className="text-muted-foreground">/{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-4 text-base">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'shadow-glow' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href={plan.link} target="_blank" rel="noopener noreferrer">
                      {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enhance Your Plan</h2>
            <p className="text-xl text-muted-foreground">Optional add-ons to supercharge your email marketing</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{addon.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Got questions? We've got answers.</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any differences."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, all plans come with a 14-day free trial. No credit card required to start."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and can arrange invoice billing for Enterprise customers."
              },
              {
                question: "Do you offer discounts for annual plans?",
                answer: "Yes, you can save up to 20% by choosing annual billing instead of monthly."
              }
            ].map((faq, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of businesses already using our platform to grow.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/get-started/free-trial" target="_blank" rel="noopener noreferrer">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
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

export default Pricing;