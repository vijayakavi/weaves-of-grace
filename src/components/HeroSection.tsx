import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroSaree from "@/assets/hero-saree.jpg";
import { useBackgroundParallax, useLuxuryParallax } from "../hooks/useParallax";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Parallax refs
  const backgroundRef = useBackgroundParallax(0.5);
  const contentRef = useLuxuryParallax({ speed: 0.2, direction: 'up', opacity: true });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCollections = () => {
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={heroSaree}
          alt="Luxury Kerala Saree"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-luxury-maroon/40" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-luxury text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Grace of Kerala,
          <br />
          <span className="text-luxury-gold-light">Pure White Elegance</span>
        </h1>
        <p className="font-inter text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover the pristine beauty of authentic white Kerala sarees, where traditional
          craftsmanship meets timeless elegance in pure golden threads.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToCollections}
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-primary font-inter font-semibold px-8 py-4 text-lg shadow-gold"
          >
            Explore White Collection
          </Button>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary font-inter font-semibold px-8 py-4 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;