import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import HealthRecImg from "../assets/healthrec.png";
import DSCCImg from "../assets/dscc.png";
import ZomatoImg from "../assets/zomato.png";

const Projects = () => {
  const projects = [
    {
      title: "HealthRec",
      description: "A health record management system built using React and Node.js, integrated with Java for backend logic and data validation.",
      features: "CRUD operations, secure login, and data visualization dashboard.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Java"],
      github: "https://github.com/aksyntax/HealthRec",
      demo: "#",
      gradient: "from-primary/10 to-secondary/10",
      image: HealthRecImg,
    },
    {
      title: "DSCC Cloud Project",
      description: "Cloud-deployed web application hosted on GCP with automated deployment and server monitoring.",
      features: "Automated deployment, server uptime monitoring, and scalability testing.",
      tags: ["Google Bucket", "GitHub Actions", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/aksyntax/DSCC-CLOUD-PROJECT",
      demo: "#",
      gradient: "from-secondary/10 to-accent/10",
      image: DSCCImg,
    },
    {
      title: "Zomato-Style Food Reel App",
      description: "A frontend project inspired by Zomato's modern feed — scrollable restaurant reels with smooth transitions and animations.",
      features: "Smooth scrolling reels, responsive cards, and clean UI animations.",
      tags: ["ReactJS", "TailwindCSS", "REST API", "MongoDB"],
      github: "https://github.com/aksyntax/Zomato-Reel",
      demo: "#",
      gradient: "from-accent/10 to-primary/10",
      image: ZomatoImg,
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A showcase of my work combining design, development, and cloud technologies
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center transition-transform group-hover:scale-105`}>
                <img
                  src={project.image || HealthRecImg} // 
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                {project.description}
              </p>
              <p className="text-xs text-muted-foreground/80 mb-4 italic">
                {project.features}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                {/* <Button variant="default" size="sm" asChild className="flex-1">
                  <a href={project.demo} className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    No-Demo
                  </a>
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
