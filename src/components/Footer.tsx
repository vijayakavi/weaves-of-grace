import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-luxury text-2xl font-bold mb-4 text-luxury-gold-light">
              Kerala Sarees
            </h3>
            <p className="font-inter text-primary-foreground/80 leading-relaxed">
              Preserving the timeless elegance of Kerala's textile heritage through
              authentic handwoven sarees that celebrate tradition and craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-luxury-gold-light">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <button
                onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                className="block font-inter text-primary-foreground/80 hover:text-luxury-gold-light transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" })}
                className="block font-inter text-primary-foreground/80 hover:text-luxury-gold-light transition-colors"
              >
                Collections
              </button>
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="block font-inter text-primary-foreground/80 hover:text-luxury-gold-light transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="block font-inter text-primary-foreground/80 hover:text-luxury-gold-light transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter font-semibold mb-4 text-luxury-gold-light">
              Contact Information
            </h4>
            <div className="space-y-2 font-inter text-primary-foreground/80">
              <p>Siva - Curator of Fine Sarees</p>
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>Email: example@gmail.com</p>
              <p>Location: Salem, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-primary-foreground/60 text-sm">
              © 2024 Kerala Sarees. All rights reserved.
            </p>
            <p className="font-inter text-primary-foreground/60 text-sm flex items-center mt-2 md:mt-0">
              Crafted with <Heart className="h-4 w-4 mx-1 text-luxury-gold-light" /> for tradition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;