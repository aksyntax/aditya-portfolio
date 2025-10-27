import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import ResumePDF from "../assets/Aditya_Gupta_Resume.pdf";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Enthusiast",
    "MERN Stack Developer",
    "Cloud Learner"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Adityakumar</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium min-h-[2rem]">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          {/* <p className="text-lg md:text-xl text-foreground mb-4 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
            Frontend Developer crafting modern, responsive, and aesthetic web experiences.
          </p> */}
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I combine design, logic, and performance to build digital experiences that feel seamless.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="default" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={ResumePDF} className="flex items-center gap-2" download>
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a 
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
