import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">DC</span>
              </div>
              <span className="font-bold text-lg">DemandgenCentral</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Automating personalized email campaigns to increase lead engagement and drive B2B growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <div className="space-y-2 text-sm">
              <a href="https://salescentri.com/solutions/psa-suite" className="block text-background/80 hover:text-primary transition-colors">
                PSA Suite
              </a>
              <a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator" className="block text-background/80 hover:text-primary transition-colors">
                AI Aggregator
              </a>
              <a href="https://salescentri.com/platforms/lead-management/lead-generation" className="block text-background/80 hover:text-primary transition-colors">
                Lead Generation
              </a>
              <a href="https://salescentri.com/solutions/use-case-navigator/demo" className="block text-background/80 hover:text-primary transition-colors">
                Interactive Demo
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2 text-sm">
              <a href="https://salescentri.com/resources/case-studies" className="block text-background/80 hover:text-primary transition-colors">
                Case Studies
              </a>
              <a href="https://salescentri.com/resources/whitepapers-ebooks" className="block text-background/80 hover:text-primary transition-colors">
                Whitepapers
              </a>
              <a href="https://salescentri.com/resources/tutorials-webinars" className="block text-background/80 hover:text-primary transition-colors">
                Tutorials
              </a>
              <a href="https://salescentri.com/docs/user-guide" className="block text-background/80 hover:text-primary transition-colors">
                User Guide
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-background/80">Dallas, TX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:+1234567890" className="text-background/80 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:info@demandgencentral.com" className="text-background/80 hover:text-primary transition-colors">
                  info@demandgencentral.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <a href="https://salescentri.com/trust/security-privacy" className="hover:text-primary transition-colors">Security</a>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">© 2024 DemandgenCentral Solutions. All rights reserved.</p>
              <p>
                <a 
                  href="https://salescentri.com?utm_source=demandgencentral.com&utm_medium=footer&utm_campaign=partner_network" 
                  className="text-primary hover:text-primary-glow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by Sales Intelligence Platform
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;