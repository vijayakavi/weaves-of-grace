import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import { useBackgroundParallax, useLuxuryParallax } from "../hooks/useParallax";
import whiteProduct1 from "@/assets/white-product-1.jpg";
import whiteProduct2 from "@/assets/white-product-2.jpg";
import whiteProduct3 from "@/assets/white-product-3.jpg";
import whiteProduct4 from "@/assets/white-product-4.jpg";
import whiteProduct5 from "@/assets/white-product-5.jpg";
import whiteProduct6 from "@/assets/white-product-6.jpg";

const products = [
  {
    id: 1,
    name: "Classic White Kasavu",
    price: "₹18,500",
    originalPrice: "₹22,000",
    image: whiteProduct1,
    badge: "Bestseller",
    description: "Pure white Kerala saree with minimal golden kasavu border",
    category: "Casual"
  },
  {
    id: 2,
    name: "Double Border Elegance",
    price: "₹24,500",
    originalPrice: null,
    image: whiteProduct2,
    badge: "New Arrival",
    description: "Traditional handwoven design with double kasavu border",
    category: "Traditional"
  },
  {
    id: 3,
    name: "Temple White Classic",
    price: "₹32,000",
    originalPrice: "₹38,000",
    image: whiteProduct3,
    badge: "Premium",
    description: "White saree with intricate golden temple motifs",
    category: "Festive"
  },
  {
    id: 4,
    name: "Contemporary Gold",
    price: "₹28,000",
    originalPrice: null,
    image: whiteProduct4,
    badge: "Featured",
    description: "Modern white saree with golden tissue work",
    category: "Contemporary"
  },
  {
    id: 5,
    name: "Peacock Motif Royal",
    price: "₹45,000",
    originalPrice: "₹52,000",
    image: whiteProduct5,
    badge: "Exclusive",
    description: "White saree with broad kasavu border and peacock motifs",
    category: "Bridal"
  },
  {
    id: 6,
    name: "Floral Embroidery",
    price: "₹35,500",
    originalPrice: null,
    image: whiteProduct6,
    badge: "Limited",
    description: "White saree with golden floral embroidery work",
    category: "Designer"
  }
];

const ProductsSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  
  // Parallax refs
  const backgroundRef = useBackgroundParallax(0.2);
  const headerRef = useLuxuryParallax({ speed: 0.1, direction: 'up', opacity: true });
  const productsRef = useLuxuryParallax({ speed: 0.15, direction: 'up', scale: 1.02 });

  const handleInquire = (productName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Auto-fill product name in contact form (if implemented)
      setTimeout(() => {
        const messageField = document.querySelector('textarea[placeholder*="preferences"]') as HTMLTextAreaElement;
        if (messageField) {
          messageField.value = `I'm interested in the ${productName}. Please provide more details about pricing, availability, and customization options.`;
          messageField.focus();
        }
      }, 1000);
    }
  };

  return (
    <section id="products" className="py-20 bg-background relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full opacity-5"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(139, 69, 19, 0.08) 0%, transparent 50%)
          `,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Our White Saree Collection
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium white Kerala sarees, each piece
            representing the finest in traditional craftsmanship and contemporary elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={productsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden bg-card border-0 shadow-luxury hover:shadow-gold transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                <Badge 
                  className="absolute top-4 left-4 bg-luxury-gold text-primary font-inter font-semibold"
                >
                  {product.badge}
                </Badge>

                {/* Hover Actions */}
                <div 
                  className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
                    hoveredProduct === product.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-lg"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-lg"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs font-inter">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="font-luxury text-xl font-bold text-primary mb-2">
                  {product.name}
                </h3>
                
                <p className="font-inter text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-inter text-lg font-bold text-primary">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="font-inter text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      Save {Math.round(((parseInt(product.originalPrice.replace(/[₹,]/g, '')) - parseInt(product.price.replace(/[₹,]/g, ''))) / parseInt(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                    </Badge>
                  )}
                </div>

                <Button
                  onClick={() => handleInquire(product.name)}
                  className="w-full bg-gradient-gold hover:bg-luxury-gold text-primary font-inter font-semibold shadow-gold"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Inquire Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More / View All */}
        <div className="text-center mt-12">
          <Button
            onClick={() => handleInquire("our complete collection")}
            variant="outline"
            size="lg"
            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-primary font-inter font-semibold px-8"
          >
            View Complete Collection
          </Button>
          <p className="font-inter text-sm text-muted-foreground mt-4">
            Can't find what you're looking for? Contact us for custom designs and special requests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;