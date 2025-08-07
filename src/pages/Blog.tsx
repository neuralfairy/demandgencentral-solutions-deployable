import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { Calendar, User, ArrowRight, Search, TrendingUp, Mail, Target, BarChart3 } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "The Complete Guide to B2B Email Marketing Automation in 2024",
    excerpt: "Discover the latest strategies, tools, and best practices for creating high-converting email automation campaigns that drive B2B growth.",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    readTime: "12 min read",
    category: "Email Marketing",
    image: "/api/placeholder/600/300"
  };

  const blogPosts = [
    {
      title: "10 Email Segmentation Strategies That Boost Open Rates by 300%",
      excerpt: "Learn how to segment your email list effectively to deliver personalized content that resonates with your audience.",
      date: "March 10, 2024",
      author: "Michael Chen", 
      readTime: "8 min read",
      category: "Strategy",
      icon: <Target className="w-6 h-6 text-primary" />
    },
    {
      title: "ROI Calculator: Measuring the True Impact of Email Automation",
      excerpt: "Use our comprehensive guide to calculate and optimize the ROI of your email marketing automation campaigns.",
      date: "March 5, 2024",
      author: "Emma Rodriguez",
      readTime: "6 min read", 
      category: "Analytics",
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    },
    {
      title: "Drip Campaign Best Practices: From Setup to Optimization",
      excerpt: "Master the art of creating drip campaigns that nurture leads and drive conversions throughout the buyer's journey.",
      date: "February 28, 2024",
      author: "David Kim",
      readTime: "10 min read",
      category: "Automation",
      icon: <Mail className="w-6 h-6 text-primary" />
    },
    {
      title: "Integration Deep Dive: Connecting Your CRM with Email Automation",
      excerpt: "Step-by-step guide to integrating popular CRM platforms with your email marketing automation system.",
      date: "February 22, 2024",
      author: "Sarah Johnson",
      readTime: "15 min read",
      category: "Integrations",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: "GDPR and Email Marketing: Compliance Best Practices for 2024",
      excerpt: "Stay compliant while maintaining effective email marketing campaigns with our comprehensive GDPR guide.",
      date: "February 15, 2024",
      author: "Michael Chen",
      readTime: "7 min read",
      category: "Compliance",
      icon: <Target className="w-6 h-6 text-primary" />
    },
    {
      title: "A/B Testing Your Email Campaigns: What to Test and Why",
      excerpt: "Maximize your email performance with strategic A/B testing techniques and statistical significance guidelines.",
      date: "February 8, 2024",
      author: "Emma Rodriguez",
      readTime: "9 min read",
      category: "Optimization",
      icon: <BarChart3 className="w-6 h-6 text-primary" />
    }
  ];

  const categories = ["All", "Strategy", "Analytics", "Automation", "Integrations", "Compliance", "Optimization"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            iEMA Insights & Resources
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Email Marketing Automation
            <span className="text-primary block">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stay ahead with the latest insights, strategies, and best practices in email marketing automation.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 pr-4 py-3 rounded-full border-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-primary"></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <CardTitle className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button asChild>
                    <a href="https://salescentri.com/resources/whitepapers-ebooks" target="_blank" rel="noopener noreferrer">
                      Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    {post.icon}
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="https://salescentri.com/resources/case-studies" target="_blank" rel="noopener noreferrer">
                        Read More <ArrowRight className="ml-1 w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://salescentri.com/resources/tutorials-webinars" target="_blank" rel="noopener noreferrer">
                Load More Articles
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with Email Marketing Insights</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest articles, case studies, and industry insights delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <form className="flex gap-2" action="https://salescentri.com/get-started/contact" method="GET">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-primary-foreground text-primary"
                name="email"
                required
              />
              <Button variant="secondary" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
          <p className="text-sm opacity-80">
            No spam. Unsubscribe at any time. Read our <a href="#" className="underline">privacy policy</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;