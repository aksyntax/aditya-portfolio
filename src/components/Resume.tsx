import { GraduationCap, Award } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "University Name",
      period: "2023 - Present",
      status: "Ongoing"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "College Name",
      period: "2020 - 2023",
      grade: "9.16 CGPA"
    }
  ];

  const certifications = [
    {
      title: "Java Programming",
      issuer: "NPTEL",
      year: "2023"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Online Platform",
      year: "2022"
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text">Resume</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree}
                  className="glass-card p-6 rounded-xl hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{edu.period}</span>
                    {edu.grade && (
                      <span className="font-semibold text-primary">{edu.grade}</span>
                    )}
                    {edu.status && (
                      <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="glass-card p-6 rounded-xl hover-glow"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <h4 className="text-lg font-bold mb-1">{cert.title}</h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <span className="text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
