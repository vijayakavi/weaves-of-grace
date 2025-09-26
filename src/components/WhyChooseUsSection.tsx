import { Card } from "@/components/ui/card";
import { Crown, Sparkles, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Royal Heritage",
    description: "Each saree carries the legacy of Kerala's royal textile traditions, crafted with patterns passed down through generations."
  },
  {
    icon: Sparkles,
    title: "Exquisite Craftsmanship", 
    description: "Master artisans dedicate weeks to create each piece, ensuring perfect weaving and intricate golden detailing."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest silk threads and authentic zari work are used, guaranteeing durability and timeless beauty."
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description: "We understand that each saree is special. Our personalized service ensures you find your perfect match."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Our
            <br />
            <span className="text-luxury-gold">Kerala Sarees</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our sarees the perfect choice for your special moments
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-8 text-center bg-card border-0 shadow-luxury transition-all duration-500 hover:shadow-gold hover:scale-105 hover:bg-gradient-to-br hover:from-luxury-cream hover:to-background"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-gold rounded-full group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <h3 className="font-luxury text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>
              
              <p className="font-inter text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-luxury p-8 rounded-2xl shadow-luxury max-w-4xl mx-auto">
            <h3 className="font-luxury text-3xl font-bold text-white mb-4">
              Experience Luxury Redefined
            </h3>
            <p className="font-inter text-white/90 text-lg mb-6">
              Step into a world where tradition meets elegance, where every thread tells a story of Kerala's magnificent heritage.
            </p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Sparkles key={i} className="h-6 w-6 text-luxury-gold-light animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;