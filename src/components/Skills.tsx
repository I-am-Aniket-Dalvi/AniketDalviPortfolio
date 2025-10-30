import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Network, Shield, Cloud, Database, Wrench } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const skillCategories = [
    {
      icon: Monitor,
      category: "Operating Systems",
      skills: ["Windows Server 2003/2008/2012/2016", "Mac OS", "Ubuntu", "Windows XP/7/8/10/11"],
      gradient: "from-primary to-secondary",
      position: "top-right"
    },
    {
      icon: Network,
      category: "Hardware & Networking",
      skills: ["CISCO Routers", "D-Link Switches", "IP Surveillance", "Access Points", "Network Configuration"],
      gradient: "from-secondary to-accent",
      position: "bottom-left"
    },
    {
      icon: Shield,
      category: "Security Solutions",
      skills: ["Fortinet Firewall", "Sophos Firewall", "Seqrite Endpoint Security", "Network Security", "Compliance"],
      gradient: "from-accent to-muted",
      position: "top-left"
    },
    {
      icon: Cloud,
      category: "Virtualization & Cloud",
      skills: ["VMware", "Microsoft Virtual PC", "Oracle VM VirtualBox", "Hyper-V", "AWS", "Azure", "P-Cloud"],
      gradient: "from-muted to-primary",
      position: "bottom-right"
    },
    {
      icon: Database,
      category: "Enterprise Software",
      skills: ["Tally Prime", "AutoCAD", "Revit", "ZW CAD", "Gstar CAD", "SAP", "Microsoft 365"],
      gradient: "from-primary to-accent",
      position: "top-right"
    },
    {
      icon: Wrench,
      category: "Core Competencies",
      skills: ["Network Troubleshooting", "Hardware Performance", "System Optimization", "Active Directory", "Microsoft Azure"],
      gradient: "from-secondary to-muted",
      position: "bottom-left"
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div ref={ref} className="container mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text tracking-tight">Technical Expertise</h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-accent to-muted rounded-full mx-auto mb-6 shadow-lg shadow-accent/30" />
          <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-3xl mx-auto px-4 font-medium tracking-wide">
            Comprehensive skill set spanning infrastructure, security, cloud, and enterprise solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const decorPosition = category.position === "top-right" ? "top-0 right-0 rounded-bl-[100px]" :
                                  category.position === "bottom-left" ? "bottom-0 left-0 rounded-tr-[100px]" :
                                  category.position === "top-left" ? "top-0 left-0 rounded-br-[100px]" :
                                  "bottom-0 right-0 rounded-tl-[100px]";
            
            return (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                
                <Card 
                  className={`relative p-6 lg:p-7 border-2 border-accent/30 hover:border-accent/60 hover:scale-105 smooth-transition hover:shadow-xl hover:shadow-accent/20 bg-card/50 backdrop-blur-sm overflow-hidden card-depth tilt-hover will-change-transform scroll-fade-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative Element */}
                  <div className={`absolute ${decorPosition} w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Icon Header */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 smooth-transition shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground relative tracking-tight">{category.category}</h3>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2 relative">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs smooth-transition hover:bg-accent hover:text-white hover:scale-110 cursor-default border border-accent/20 hover:border-accent/50 hover:shadow-md tilt-hover will-change-transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
