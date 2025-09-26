import { useState } from "react";
import { Card } from "@/components/ui/card";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

const collections = [
  {
    id: 1,
    title: "Traditional Collections",
    description: "Timeless designs with authentic Kerala patterns and golden kasavu borders",
    image: collection1,
    category: "Traditional"
  },
  {
    id: 2,
    title: "Bridal Elegance",
    description: "Luxurious bridal sarees with heavy zari work and intricate embroidery",
    image: collection2,
    category: "Bridal"
  },
  {
    id: 3,
    title: "Festive Celebrations",
    description: "Rich colors and elaborate designs perfect for special occasions",
    image: collection3,
    category: "Festive"
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
            Our Collections
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite range of Kerala sarees, each piece crafted with
            meticulous attention to detail and traditional artistry.
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
                    <p className="font-inter text-white/90">
                      {collection.description}
                    </p>
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
                <p className="font-inter text-muted-foreground">
                  {collection.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="font-inter text-lg text-muted-foreground mb-6">
            Each saree tells a story of Kerala's rich textile heritage
          </p>
          <div className="w-24 h-px bg-gradient-gold mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;