import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "general"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "", inquiryType: "general" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-primary mb-6">
            Purchase Inquiry & Contact
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to own a beautiful white Kerala saree? Send us your inquiry and we'll
            help you find the perfect piece for your special occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-luxury text-3xl font-bold text-primary mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-subtle border-0 shadow-gold">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-luxury-gold rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-primary">Phone</h4>
                    <p className="font-inter text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-subtle border-0 shadow-gold">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-luxury-gold rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-primary">Email</h4>
                    <p className="font-inter text-muted-foreground">example@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-subtle border-0 shadow-gold">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-luxury-gold rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter font-semibold text-primary">Location</h4>
                    <p className="font-inter text-muted-foreground">Salem, Tamil Nadu, India</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Owner Info */}
            <div className="mt-8 p-6 bg-gradient-luxury rounded-2xl shadow-luxury">
              <h4 className="font-luxury text-2xl font-bold text-white mb-2">Siva</h4>
              <p className="font-inter text-white/90">
                Curator of Fine Kerala Sarees
              </p>
              <p className="font-inter text-white/75 mt-2 text-sm">
                "Every saree in our collection is personally selected for its beauty,
                quality, and the story it tells."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-0 shadow-luxury">
            <div className="mb-6">
              <h3 className="font-luxury text-2xl font-bold text-primary mb-2 flex items-center">
                <ShoppingBag className="h-6 w-6 mr-2" />
                Purchase Inquiry Form
              </h3>
              <p className="font-inter text-muted-foreground">
                Fill out the form below and we'll respond within 24 hours with pricing, availability, and customization options.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => handleInputChange("inquiryType", value)}
                >
                  <SelectTrigger className="bg-background border-border focus:border-luxury-gold">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="purchase">Purchase Inquiry</SelectItem>
                    <SelectItem value="custom">Custom Order</SelectItem>
                    <SelectItem value="bulk">Bulk Order</SelectItem>
                    <SelectItem value="bridal">Bridal Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-background border-border focus:border-luxury-gold"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-background border-border focus:border-luxury-gold"
                  required
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-background border-border focus:border-luxury-gold"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your preferences: Which saree caught your eye? What's the occasion? Any specific requirements for size, customization, or delivery timeline..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="min-h-32 bg-background border-border focus:border-luxury-gold resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-gold hover:bg-luxury-gold text-primary font-inter font-semibold py-4 shadow-gold"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Purchase Inquiry
              </Button>
              
              <div className="text-center">
                <p className="font-inter text-sm text-muted-foreground">
                  🔒 Your inquiry is secure and confidential. We'll respond with detailed pricing and availability within 24 hours.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;