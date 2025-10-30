import { Button } from "@/components/ui/button";
import { Download, Mail, Award, Users, TrendingUp } from "lucide-react";
import profileImage from "@/assets/aniket-profile.jpeg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent pt-20 md:pt-0">
      {/* Animated Background Elements with Parallax Effect */}
      <div 
        className="absolute inset-0 opacity-30 parallax-container will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-muted rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>
      
      {/* Diagonal Light Sweep Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-12 animate-diagonal-sweep" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up text-primary-foreground">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full bg-muted/20 backdrop-blur-sm border border-muted/30 animate-scale-in">
                <p className="text-sm font-semibold tracking-widest uppercase text-muted">IT Infrastructure Expert</p>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-text-reveal">
                Aniket Dalvi
              </h1>
              
              <div className="h-1.5 w-28 bg-accent rounded-full animate-expand-width" />
              
              <p className="text-xl sm:text-2xl text-muted max-w-xl leading-relaxed tracking-wide animate-text-reveal" style={{ animationDelay: "0.3s" }}>
                Transforming complex IT infrastructures into secure, scalable, and high-performance solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="premium" 
                size="xl"
                asChild
                className="group shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:shadow-3xl pulse-glow-button ripple-effect button-press"
              >
                <a href="/Aniket_Dalvi_Resume.pdf" download>
                  <Download className="group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
              <Button 
                variant="hero" 
                size="xl"
                asChild
                className="shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:shadow-2xl ripple-effect button-press"
              >
                <a href="#contact">
                  <Mail />
                  Hire Me
                </a>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-card/10 backdrop-blur-sm border border-muted/20 rounded-2xl p-3 sm:p-4 hover:border-accent/50 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl sm:text-3xl font-bold">5+</p>
                  <p className="text-[10px] sm:text-xs text-muted tracking-wide">Years Exp.</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-card/10 backdrop-blur-sm border border-muted/20 rounded-2xl p-3 sm:p-4 hover:border-accent/50 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl sm:text-3xl font-bold">30%</p>
                  <p className="text-[10px] sm:text-xs text-muted tracking-wide">Less Downtime</p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-card/10 backdrop-blur-sm border border-muted/20 rounded-2xl p-3 sm:p-4 hover:border-accent/50 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-2xl sm:text-3xl font-bold">100+</p>
                  <p className="text-[10px] sm:text-xs text-muted tracking-wide">Systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller Profile Image */}
          <div className="relative fade-in-up flex justify-center lg:justify-end mt-8 lg:mt-0" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-56 sm:w-72 lg:w-80 xl:w-96">
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-muted rounded-3xl blur-3xl opacity-50 animate-pulse-glow" />
              
              {/* Image Container with Enhanced Shadow and Tilt */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-muted/30 shadow-2xl backdrop-blur-sm hover:scale-105 tilt-hover transition-all duration-500 hover:border-accent/50 hover:shadow-accent/30 hover:shadow-3xl will-change-transform">
                <img 
                  src={profileImage} 
                  alt="Aniket Dalvi - IT Infrastructure Expert"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Availability Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-card rounded-2xl p-3 sm:p-4 shadow-2xl border-2 border-accent/30 animate-float backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="font-semibold text-card-foreground text-xs sm:text-sm">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
