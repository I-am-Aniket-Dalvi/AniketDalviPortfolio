import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Facebook, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aniketd741@gmail.com",
      href: "mailto:aniketd741@gmail.com",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8830105103",
      href: "tel:+918830105103",
      gradient: "from-secondary to-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nallasopara East, Maharashtra",
      href: null,
      gradient: "from-accent to-muted"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aniket-dalvi-9bb4b5190",
      gradient: "from-primary to-secondary"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/aniket.dalvi.982",
      gradient: "from-secondary to-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 wave-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16 sm:mb-20 fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text tracking-tight">Let's Connect</h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-accent to-muted rounded-full mx-auto mb-6 shadow-lg shadow-accent/30" />
          <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-3xl mx-auto px-4 font-medium tracking-wide">
            Ready to transform your IT infrastructure? Let's discuss how I can help
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative p-8 border-2 border-accent/30 shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-[100px]" />
                <h3 className="text-2xl font-bold mb-6 text-foreground relative">Get in Touch</h3>
                
                <div className="space-y-6 relative">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 group/item">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 smooth-transition shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary smooth-transition"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-accent/20 relative">
                  <p className="text-sm text-muted-foreground mb-4">Connect on Social Media</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:scale-125 smooth-transition shadow-lg hover:shadow-xl hover:shadow-accent/40 hover:rotate-6 tilt-hover focus-glow will-change-transform`}
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Download */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-muted/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative p-6 border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-muted/5 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground mb-3">Need my full details?</p>
                <Button 
                  variant="premium" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="/Aniket_Dalvi_Resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <Card className="relative p-8 border-2 border-accent/30 shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-[100px]" />
                <h3 className="text-2xl font-bold mb-6 text-foreground relative">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2 border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-lg focus:shadow-accent/10 bg-card/50 backdrop-blur-sm smooth-transition focus-glow will-change-transform"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-2 border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-lg focus:shadow-accent/10 bg-card/50 backdrop-blur-sm smooth-transition focus-glow will-change-transform"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="border-2 border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:shadow-lg focus:shadow-accent/10 min-h-[150px] bg-card/50 backdrop-blur-sm smooth-transition focus-glow will-change-transform"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="lg" 
                    className="w-full shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/50 pulse-glow-button button-press ripple-effect"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
