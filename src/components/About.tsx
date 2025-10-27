import { Users, Lightbulb, Target } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const softSkills = [
    { icon: Users, label: "Collaboration", description: "Team player with strong communication" },
    { icon: Lightbulb, label: "Curiosity", description: "Eager to learn new technologies" },
    { icon: Target, label: "Design Thinking", description: "User-focused problem solver" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <img 
                src={profileImg} 
                alt="Adityakumar Vijay Gupta" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>
          
          {/* Bio */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently pursuing my <span className="text-primary font-semibold">MCA (Master of Computer Applications)</span> and 
              have a strong passion for creating beautiful, functional web applications. With a background in Computer Science 
              (B.Sc. CS - 9.16 CGPA), I've developed a keen interest in frontend technologies and full-stack development.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise lies in the <span className="text-secondary font-semibold">MERN stack</span> and modern frontend frameworks. 
              I'm fascinated by <span className="text-primary font-semibold">AI-driven development</span> and cloud technologies, 
              constantly exploring how they can enhance user experiences and solve real-world problems.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code, thoughtful design, and creative problem-solving to build 
              applications that make a difference.
            </p>
            
            {/* Soft Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill.label}
                  className="glass-card p-4 text-center hover-glow rounded-xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold mb-1">{skill.label}</h3>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
