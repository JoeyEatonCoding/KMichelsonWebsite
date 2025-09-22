import { Button } from "./ui/button";

type Page = 'home' | 'about' | 'services' | 'clinical-operations' | 'project-management' | 'standin-staffing' | 'infrastructure';

interface HomeHeroProps {
  navigate: (page: Page) => void;
}

export function HomeHero({ navigate }: HomeHeroProps) {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-[#b3deac]/5 to-[#a8bbd5]/10 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Strategic Clinical Trial Consulting
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            Expert guidance for biotechnology and pharmaceutical companies navigating 
            the complex world of clinical research. Practical solutions tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={() => navigate('about')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            >
              Learn More
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('about')}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}