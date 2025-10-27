import { Code, Server, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "text-primary",
      skills: [
        { name: "HTML & CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "ReactJS", level: 88 },
        { name: "TailwindCSS", level: 92 },
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "text-secondary",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 83 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 87 },
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-primary",
      skills: [
        { name: "AWS EC2", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 },
      ]
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "text-secondary",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
        { name: "Figma", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card p-8 rounded-2xl hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-8 h-8 ${category.color}`} />
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
