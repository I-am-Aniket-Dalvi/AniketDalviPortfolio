import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Calendar } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Certifications = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const certifications = [
    {
      title: "CCNA Routing and Switching",
      issuer: "Cisco",
      category: "Networking",
      icon: "🌐",
      gradient: "from-primary to-secondary"
    },
    {
      title: "ITIL",
      issuer: "Axelos",
      category: "IT Service Management",
      icon: "📊",
      gradient: "from-secondary to-accent"
    },
    {
      title: "CCC",
      issuer: "NIELIT",
      category: "Computer Concepts",
      icon: "💻",
      gradient: "from-accent to-muted"
    },
    {
      title: "Programming Certifications",
      issuer: "Multiple Institutions",
      category: "C, C++, Java, SQL",
      icon: "⚙️",
      gradient: "from-muted to-primary"
    },
    {
      title: "MS-CIT",
      issuer: "MKCL",
      category: "IT Literacy",
      icon: "🎓",
      gradient: "from-primary to-accent"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "VIVA College",
      year: "April 2018",
      type: "Graduation",
      gradient: "from-primary to-secondary"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "VIVA Junior College",
      year: "March 2014",
      type: "12th Grade",
      gradient: "from-secondary to-accent"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Nutan Vidyalaya",
      year: "March 2012",
      type: "10th Grade",
      gradient: "from-accent to-muted"
    }
  ];

  return (
    <section id="certifications" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div ref={ref} className="container mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text tracking-tight">Certifications & Education</h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-accent to-muted rounded-full mx-auto mb-6 shadow-lg shadow-accent/30" />
          <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-3xl mx-auto px-4 font-medium tracking-wide">
            Continuous learning and professional development
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 lg:mb-10 fade-in-up">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-muted flex items-center justify-center shadow-lg hover:scale-110 smooth-transition">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Professional Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                <Card 
                  className={`relative p-6 lg:p-7 border-2 border-accent/30 hover:border-accent/60 hover:scale-105 smooth-transition hover:shadow-xl hover:shadow-accent/20 bg-card/50 backdrop-blur-sm overflow-hidden card-depth tilt-hover will-change-transform scroll-fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${cert.gradient} opacity-10 rounded-bl-[80px] group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-125 group-hover:rotate-12 smooth-transition">{cert.icon}</div>
                    <Badge variant="secondary" className="text-xs border border-accent/30 hover:border-accent/50 hover:scale-110 smooth-transition tilt-hover will-change-transform">
                      {cert.category}
                    </Badge>
                  </div>
                  <h4 className="relative text-lg font-bold mb-2 text-foreground group-hover:text-primary smooth-transition tracking-tight">
                    {cert.title}
                  </h4>
                  <p className="relative text-sm text-muted-foreground/80">{cert.issuer}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8 lg:mb-10 fade-in-up">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg hover:scale-110 smooth-transition">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Education</h3>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                <Card 
                  className={`relative p-6 lg:p-8 border-2 border-accent/30 hover:border-accent/60 hover:scale-[1.02] smooth-transition hover:shadow-lg hover:shadow-accent/20 bg-card/50 backdrop-blur-sm overflow-hidden card-depth will-change-transform scroll-fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  {/* Decorative Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${edu.gradient}`} />
                  
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-foreground tracking-tight">{edu.degree}</h4>
                      <p className="text-muted-foreground/80">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <Badge variant="secondary" className="w-fit border border-accent/30 hover:border-accent/50 hover:scale-110 smooth-transition tilt-hover will-change-transform">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.year}
                      </Badge>
                      <Badge className="w-fit bg-accent/20 text-primary hover:bg-accent/30 hover:scale-110 border border-accent/40 smooth-transition tilt-hover will-change-transform">
                        {edu.type}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
