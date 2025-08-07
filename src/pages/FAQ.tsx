import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { Search, ArrowRight, MessageSquare, Phone, Mail, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: <HelpCircle className="w-6 h-6 text-primary" />,
      questions: [
        {
          question: "What is iEMA (Email Marketing Automation)?",
          answer: "iEMA stands for intelligent Email Marketing Automation. It's our comprehensive platform that automates personalized email campaigns, nurtures leads through the sales funnel, and provides advanced analytics to optimize your marketing efforts."
        },
        {
          question: "How quickly can I get started with DemandgenCentral?",
          answer: "You can get started immediately with our free trial. Setup typically takes less than 30 minutes, and our onboarding team will help you import your contacts, create your first campaign, and configure integrations."
        },
        {
          question: "Do I need technical expertise to use the platform?",
          answer: "No technical expertise required! Our drag-and-drop campaign builder and intuitive interface make it easy for marketers of all skill levels. We also provide comprehensive training and support."
        },
        {
          question: "Can I import my existing email list?",
          answer: "Yes, you can easily import contacts from CSV files, other email platforms, or connect directly with your CRM. We support all major email platforms and CRM systems for seamless migration."
        }
      ]
    },
    {
      title: "Features & Functionality",
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      questions: [
        {
          question: "What types of email campaigns can I create?",
          answer: "You can create drip campaigns, welcome sequences, nurture campaigns, re-engagement campaigns, event-triggered emails, and complex multi-branch automation workflows based on user behavior."
        },
        {
          question: "How does the lead scoring feature work?",
          answer: "Our lead scoring system automatically assigns points based on email engagement, website visits, content downloads, and custom actions you define. This helps you identify and prioritize your most qualified leads."
        },
        {
          question: "Can I integrate with my existing CRM?",
          answer: "Yes, we integrate with 50+ popular CRM platforms including Salesforce, HubSpot, Pipedrive, and more. Data syncs in real-time to keep your sales and marketing teams aligned."
        },
        {
          question: "What analytics and reporting features are available?",
          answer: "Our platform provides comprehensive analytics including open rates, click rates, conversion tracking, revenue attribution, A/B test results, and custom reports. All data is available in real-time dashboards."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      icon: <Phone className="w-6 h-6 text-primary" />,
      questions: [
        {
          question: "Is there a free trial available?",
          answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade at any time during or after your trial."
        },
        {
          question: "Can I change my plan at any time?",
          answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
        },
        {
          question: "What happens if I exceed my contact limit?",
          answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or remove inactive contacts. We never charge overage fees without your approval."
        },
        {
          question: "Do you offer discounts for annual plans?",
          answer: "Yes, you can save up to 20% by choosing annual billing. We also offer special pricing for non-profits and educational institutions."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <Mail className="w-6 h-6 text-primary" />,
      questions: [
        {
          question: "What support options are available?",
          answer: "We offer email support for all plans, live chat for Professional and Enterprise plans, and phone support for Enterprise customers. Our support team is available 24/7."
        },
        {
          question: "How do I ensure my emails don't go to spam?",
          answer: "We provide built-in deliverability tools including SPF, DKIM, and DMARC setup, spam score checking, and best practice recommendations. Our platform maintains high sender reputation scores."
        },
        {
          question: "Is my data secure and GDPR compliant?",
          answer: "Yes, we're fully GDPR compliant and use enterprise-grade security including SSL encryption, regular security audits, and data backups. Your data is stored securely and never shared with third parties."
        },
        {
          question: "Can I export my data if I need to leave?",
          answer: "Absolutely. We believe in data portability. You can export all your contacts, campaign data, and analytics at any time in standard formats like CSV and JSON."
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our expert team",
      action: "Submit Ticket",
      icon: <Mail className="w-5 h-5" />,
      link: "https://salescentri.com/contact/support-request/submit-ticket"
    },
    {
      title: "Live Chat",
      description: "Chat with us in real-time",
      action: "Start Chat",
      icon: <MessageSquare className="w-5 h-5" />,
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      title: "Book Demo",
      description: "See the platform in action",
      action: "Schedule Demo",
      icon: <Phone className="w-5 h-5" />,
      link: "https://salescentri.com/get-started/book-demo"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get Answers About
            <span className="text-primary block">iEMA Platform</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our email marketing automation platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search FAQ..." 
                className="pl-10 pr-4 py-3 rounded-full border-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {action.icon}
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <a href={action.link} target="_blank" rel="noopener noreferrer">
                      {action.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="flex items-center space-x-3 mb-8">
                {category.icon}
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border border-border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a href="https://salescentri.com/contact/support-request" target="_blank" rel="noopener noreferrer">
                Contact Support <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer">
                Browse Documentation
              </a>
            </Button>
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">User Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive documentation and tutorials
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://salescentri.com/docs/user-guide" target="_blank" rel="noopener noreferrer">
                    View Guide
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Step-by-step video walkthroughs
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                    Watch Videos
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">API Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Developer documentation and API guides
                </CardDescription>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://salescentri.com/docs/api-reference" target="_blank" rel="noopener noreferrer">
                    API Docs
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Try our platform risk-free with a 14-day trial. No credit card required.
          </p>
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

export default FAQ;