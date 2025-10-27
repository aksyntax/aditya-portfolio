import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, ArrowUp, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Let's build something creative together.
        </p>
        
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full"
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full group" size="lg">
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border">
            <a 
              href="https://github.com/aksyntax" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>github.com/aksyntax</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/adityak-abc0101/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn-Aditya</span>
            </a>
            <a 
              href="mailto:adiityak1@gmail.com"
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>adiityak1@gmail.com</span>
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Aditya — Built with passion and precision.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
