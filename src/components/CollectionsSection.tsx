import { useState } from "react";
import { Card } from "@/components/ui/card";
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

  return (
    <section id="collections" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Pure White Kerala Sarees
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exclusive collection of pristine white Kerala sarees, where
            tradition meets timeless elegance in every golden thread.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group overflow-hidden bg-card border-0 shadow-luxury transition-all duration-500 hover:shadow-gold hover:scale-105"
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-luxury-gold text-primary px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  {collection.category}
                </div>
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-inter font-semibold">
                  {collection.price}
                </div>

                {/* Hover Content */}
                <div 
                  className={`absolute inset-0 flex items-end p-6 transition-all duration-500 ${
                    hoveredCard === collection.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="text-white">
                    <h3 className="font-luxury text-2xl font-bold mb-2">
                      {collection.title}
                    </h3>
                    <p className="font-inter text-white/90 mb-3">
                      {collection.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-luxury-gold font-semibold">
                        {collection.price}
                      </span>
                      <button className="bg-luxury-gold text-primary px-4 py-2 rounded-full text-sm font-inter font-semibold hover:bg-luxury-gold/90 transition-colors">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Content (visible when not hovering) */}
              <div 
                className={`p-6 transition-all duration-500 ${
                  hoveredCard === collection.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="font-luxury text-2xl font-bold text-primary mb-3">
                  {collection.title}
                </h3>
                <p className="font-inter text-muted-foreground mb-3">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-primary font-semibold">
                    {collection.price}
                  </span>
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-gradient-gold text-primary px-4 py-2 rounded-full text-sm font-inter font-semibold hover:bg-luxury-gold transition-colors shadow-gold"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="font-inter text-lg text-muted-foreground mb-6">
            Each white saree embodies the purity and elegance of Kerala's textile tradition
          </p>
          <div className="w-24 h-px bg-gradient-gold mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;