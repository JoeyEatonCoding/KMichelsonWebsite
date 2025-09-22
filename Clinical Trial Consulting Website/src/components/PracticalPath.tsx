import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PracticalPath() {
  const services = [
    {
      title: "Planning",
      description: "We understand the risks. Let us help you plan with the end in mind, and prepare for the unexpected.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=300&fit=crop"
    },
    {
      title: "Start-up",
      description: "We oversee vendors and pay attention to the details during this critical activation stage. We navigate the complex landscape ahead and foster a trusting and transparent team environment.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop"
    },
    {
      title: "Execution",
      description: "We apply our expertise in clinical trial management to hold teams accountable, manage risks, and keep delivery on track against milestones.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            The Practical Path
          </h2>
          <p className="text-xl text-foreground max-w-4xl mx-auto">
            Our Services are customized to the unique needs of your pipeline throughout the clinical trial lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-48 h-48 mx-auto rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-foreground text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}