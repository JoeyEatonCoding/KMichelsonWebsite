import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl mb-6 text-primary">
              Expert Clinical Trial Planning & Strategy
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Navigate the complex world of clinical trials with confidence. KMichelson Consulting provides 
              strategic planning, regulatory guidance, and operational excellence to bring your therapeutic 
              innovations to market faster and more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=600&fit=crop"
                alt="Clinical trial planning workspace"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}