import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useLuxuryParallax, useBackgroundParallax } from "../hooks/useParallax";
import whiteTraditional from "@/assets/white-traditional.jpg";
import whiteBridal from "@/assets/white-bridal.jpg";
import whiteFestive from "@/assets/white-festive.jpg";

const collections = [
  {
    id: 1,
    title: "Traditional White",
    description: "Pure white Kerala sarees with authentic golden kasavu borders, perfect for traditional occasions",
    image: whiteTraditional,
    category: "Traditional",
    price: "₹15,000 - ₹25,000"
  },
  {
    id: 2,
    title: "Bridal White",
    description: "Exquisite white bridal sarees with heavy zari work and intricate golden embroidery",
    image: whiteBridal,
    category: "Bridal",
    price: "₹35,000 - ₹75,000"
  },
  {
    id: 3,
    title: "Festive White",
    description: "Elegant white festive sarees with temple borders and golden thread work",
    image: whiteFestive,
    category: "Festive",
    price: "₹20,000 - ₹40,000"
  },
];

const CollectionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Parallax refs for different elements
  const backgroundRef = useBackgroundParallax(0.3);
  const headerRef = useLuxuryParallax({ speed: 0.1, direction: 'up', opacity: true });
  const cardsRef = useLuxuryParallax({ speed: 0.15, direction: 'up', scale: 1.02 });

  return (
    <section id="collections" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Parallax Background Designs */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          // Subtle gold and maroon gradients for luxury effect
          background: `
            radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.10) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.10) 0%, transparent 60%),
            radial-gradient(circle at 40% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 60%)
          `,
        }}
      >
        {/* Parallax floating gold ring */}
        <div
          style={{
            position: "absolute",
            top: "12%",
            left: "8%",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "4px solid rgba(212,175,55,0.18)",
            boxShadow: "0 0 32px 8px rgba(212,175,55,0.10)",
            transform: "translateY(-30px) scale(1.1)",
            willChange: "transform",
            zIndex: 1,
            pointerEvents: "none",
          }}
          className="parallax-gold-ring"
        />
        {/* Parallax floating maroon dot */}
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            right: "12%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "rgba(139,69,19,0.13)",
            boxShadow: "0 0 24px 4px rgba(139,69,19,0.10)",
            transform: "translateY(20px) scale(1.05)",
            willChange: "transform",
            zIndex: 1,
            pointerEvents: "none",
          }}
          className="parallax-maroon-dot"
        />
        {/* Parallax gold shimmer bar */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "320px",
            height: "32px",
            background: "linear-gradient(90deg, rgba(212,175,55,0.08) 0%, rgba(255,255,255,0.0) 100%)",
            borderRadius: "16px",
            transform: "translate(-50%, -50%) rotate(-8deg) scale(1.05)",
            willChange: "transform",
            zIndex: 1,
            pointerEvents: "none",
          }}
          className="parallax-gold-bar"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header with Parallax */}
        <div 
          ref={headerRef}
          className="text-center mb-16"
        >
          <h2 
            className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6"
            style={{
              textShadow: `0 4px 20px rgba(0,0,0,0.1)`,
            }}
          >
            Pure White Kerala Sarees
          </h2>
          <p 
            className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{
              textShadow: `0 2px 10px rgba(0,0,0,0.05)`,
            }}
          >
            Discover our exclusive collection of pristine white Kerala sarees, where
            tradition meets timeless elegance in every golden thread.
          </p>
        </div>

        {/* Enhanced Collections Grid with Parallax */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {collections.map((collection, index) => (
            <Card
              key={collection.id}
              className="group overflow-hidden bg-card border-0 shadow-luxury transition-all duration-500 hover:shadow-gold hover:scale-105 relative"
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: `translateY(${index * 10}px)`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{
                    filter: `brightness(${hoveredCard === collection.id ? '1.1' : '1'}) contrast(${hoveredCard === collection.id ? '1.05' : '1'})`,
                  }}
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Luxury Shimmer Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    transform: 'translateX(-100%)',
                    animation: hoveredCard === collection.id ? 'shimmer 1.5s ease-in-out' : 'none',
                  }}
                />
                
                {/* Enhanced Category Tag */}
                <div 
                  className="absolute top-4 left-4 bg-luxury-gold text-primary px-3 py-1 rounded-full text-sm font-inter font-semibold backdrop-blur-sm"
                  style={{
                    boxShadow: `0 4px 15px rgba(212, 175, 55, 0.3)`,
                    transform: `scale(${hoveredCard === collection.id ? '1.05' : '1'})`,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {collection.category}
                </div>
                
                {/* Enhanced Price Tag */}
                <div 
                  className="absolute top-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-inter font-semibold backdrop-blur-sm"
                  style={{
                    boxShadow: `0 4px 15px rgba(0,0,0,0.1)`,
                    transform: `scale(${hoveredCard === collection.id ? '1.05' : '1'})`,
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {collection.price}
                </div>

                {/* Enhanced Hover Content */}
                <div 
                  className={`absolute inset-0 flex items-end p-6 transition-all duration-500 ${
                    hoveredCard === collection.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-white">
                    <h3 
                      className="font-luxury text-2xl font-bold mb-2"
                      style={{
                        textShadow: `0 2px 10px rgba(0,0,0,0.5)`,
                      }}
                    >
                      {collection.title}
                    </h3>
                    <p 
                      className="font-inter text-white/90 mb-3"
                      style={{
                        textShadow: `0 1px 5px rgba(0,0,0,0.5)`,
                      }}
                    >
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span 
                        className="font-inter text-luxury-gold font-semibold"
                        style={{
                          textShadow: `0 1px 5px rgba(0,0,0,0.5)`,
                        }}
                      >
                        {collection.price}
                      </span>
                      <button 
                        className="bg-luxury-gold text-primary px-4 py-2 rounded-full text-sm font-inter font-semibold hover:bg-luxury-gold/90 transition-all duration-300 hover:scale-105"
                        style={{
                          boxShadow: `0 4px 15px rgba(212, 175, 55, 0.4)`,
                        }}
                      >
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Static Content */}
              <div 
                className={`p-6 transition-all duration-500 ${
                  hoveredCard === collection.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 
                  className="font-luxury text-2xl font-bold text-primary mb-3"
                  style={{
                    textShadow: `0 2px 10px rgba(0,0,0,0.05)`,
                  }}
                >
                  {collection.title}
                </h3>
                <p 
                  className="font-inter text-muted-foreground mb-3"
                  style={{
                    textShadow: `0 1px 5px rgba(0,0,0,0.05)`,
                  }}
                >
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <span 
                    className="font-inter text-primary font-semibold"
                    style={{
                      textShadow: `0 1px 5px rgba(0,0,0,0.05)`,
                    }}
                  >
                    {collection.price}
                  </span>
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-gradient-gold text-primary px-4 py-2 rounded-full text-sm font-inter font-semibold hover:bg-luxury-gold transition-all duration-300 hover:scale-105 shadow-gold"
                    style={{
                      boxShadow: `0 4px 15px rgba(212, 175, 55, 0.3)`,
                    }}
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div 
          className="text-center mt-12"
          style={{
            transform: `translateY(${20}px)`,
          }}
        >
          <p 
            className="font-inter text-lg text-muted-foreground mb-6"
            style={{
              textShadow: `0 2px 10px rgba(0,0,0,0.05)`,
            }}
          >
            Each white saree embodies the purity and elegance of Kerala's textile tradition
          </p>
          <div 
            className="w-24 h-px bg-gradient-gold mx-auto"
            style={{
              boxShadow: `0 0 10px rgba(212, 175, 55, 0.5)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;