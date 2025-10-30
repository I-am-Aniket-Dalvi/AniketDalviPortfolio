import { Button } from "@/components/ui/button";
import { Download, Linkedin, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Aniket Dalvi</h3>
            <p className="text-sm text-muted opacity-80">
              IT Infrastructure & Cloud Solutions Expert
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/aniket-dalvi-9bb4b5190"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center smooth-transition shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://www.facebook.com/aniket.dalvi.982"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent flex items-center justify-center smooth-transition shadow-lg"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Download Resume */}
          <div className="flex justify-center md:justify-end">
            <Button 
              variant="hero" 
              size="lg"
              asChild
            >
              <a href="/Aniket_Dalvi_Resume.pdf" download>
                <Download />
                Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-muted/20 text-center">
          <p className="text-sm text-muted opacity-60 flex items-center justify-center gap-2">
            © {currentYear} Aniket Dalvi. Crafted with <Heart className="w-4 h-4 text-accent" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
