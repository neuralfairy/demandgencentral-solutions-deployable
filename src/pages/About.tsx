import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Users, Target, Award, TrendingUp, ArrowRight, Linkedin } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in marketing automation and B2B sales. Previously led growth at two successful SaaS exits.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former engineering lead at major email platforms. Expert in scalable automation systems and AI integration.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Emma Rodriguez",
      role: "VP of Customer Success",
      bio: "Passionate about helping businesses succeed. 10+ years in customer success and marketing operations.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product strategist with deep expertise in marketing technology and user experience design.",
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Customer-Centric",
      description: "Every decision we make is driven by what's best for our customers and their success."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results-Driven",
      description: "We're obsessed with helping our customers achieve measurable, meaningful results."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in email marketing automation."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth Mindset",
      description: "We believe in continuous learning and improvement, both for us and our customers."
    }
  ];

  const milestones = [
    { year: "2020", event: "DemandgenCentral founded in Dallas, TX" },
    { year: "2021", event: "Launched first iEMA platform beta" },
    { year: "2022", event: "Reached 1,000+ active customers" },
    { year: "2023", event: "Series A funding completed" },
    { year: "2024", event: "AI-powered features launched" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            About DemandgenCentral
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Empowering B2B Growth Through
            <span className="text-primary block">Intelligent Automation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're on a mission to help B2B companies scale their marketing efforts and drive 
            meaningful growth through our innovative iEMA platform.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At DemandgenCentral, we believe that every B2B company deserves access to enterprise-level 
                marketing automation tools. Our iEMA platform democratizes advanced email marketing 
                capabilities, making them accessible and affordable for businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in Dallas, TX, we've helped thousands of companies transform their marketing 
                operations and achieve unprecedented growth through intelligent automation and 
                data-driven insights.
              </p>
              <Button asChild>
                <a href="https://salescentri.com/company/careers" target="_blank" rel="noopener noreferrer">
                  Join Our Team <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                    <div className="text-sm text-muted-foreground mb-4">Active Customers</div>
                    <div className="text-4xl font-bold text-primary mb-2">300%</div>
                    <div className="text-sm text-muted-foreground mb-4">Average ROI Increase</div>
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Platform Uptime</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground">The experts driving innovation in email marketing automation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in our company's growth</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{milestone.year}</span>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <p className="font-semibold">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our team can help transform your email marketing strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://salescentri.com/get-started/book-demo" target="_blank" rel="noopener noreferrer">
                Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://salescentri.com/contact" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;