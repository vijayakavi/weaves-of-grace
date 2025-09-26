import { Card } from "@/components/ui/card";
import craftsmanship from "@/assets/craftsmanship.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-8">
              Heritage Woven in
              <br />
              <span className="text-luxury-gold">Every Thread</span>
            </h2>
            
            <div className="space-y-6 font-inter text-lg text-muted-foreground">
              <p>
                For generations, the art of Kerala saree weaving has been passed down
                through skilled artisans who understand the sacred nature of their craft.
                Each saree is more than fabric—it's a celebration of Kerala's rich
                cultural heritage.
              </p>
              
              <p>
                Our master weavers use traditional handlooms and time-honored techniques
                to create sarees that embody elegance, grace, and authenticity. The
                golden kasavu borders, intricate patterns, and luxurious silk speak
                to centuries of textile excellence.
              </p>
              
              <p>
                From the selection of the finest silk threads to the final golden
                touches, every step is executed with meticulous attention to detail,
                ensuring that each saree becomes a treasured heirloom.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="font-luxury text-3xl font-bold text-primary mb-2">50+</div>
                <div className="font-inter text-sm text-muted-foreground">Years of Heritage</div>
              </div>
              <div className="text-center">
                <div className="font-luxury text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="font-inter text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-luxury text-3xl font-bold text-primary mb-2">100%</div>
                <div className="font-inter text-sm text-muted-foreground">Handwoven</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-luxury">
              <img
                src={craftsmanship}
                alt="Traditional Kerala saree weaving process"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </Card>
            
            {/* Floating Element */}
            <div className="absolute -top-6 -right-6 bg-luxury-gold p-6 rounded-full shadow-gold">
              <div className="font-luxury text-primary font-bold text-center">
                <div className="text-2xl">100%</div>
                <div className="text-xs">AUTHENTIC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;