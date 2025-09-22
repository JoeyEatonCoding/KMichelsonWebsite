import { Button } from "./ui/button";
import { FileText, Users, UserCheck, Settings } from "lucide-react";

type Page = 'home' | 'about' | 'services' | 'clinical-operations' | 'project-management' | 'standin-staffing' | 'infrastructure';

interface HomeServicesProps {
  navigate: (page: Page) => void;
}

export function HomeServices({ navigate }: HomeServicesProps) {
  const services = [
    {
      title: "Clinical Operations Strategy",
      page: "clinical-operations" as Page,
      icon: FileText,
      description: "Comprehensive strategic planning for clinical trial design, protocol development, and regulatory pathway optimization."
    },
    {
      title: "Project & Vendor Management", 
      page: "project-management" as Page,
      icon: Users,
      description: "Expert oversight of project timelines, vendor relationships, and cross-functional team coordination throughout the clinical trial lifecycle."
    },
    {
      title: "Stand-In Staffing",
      page: "standin-staffing" as Page,
      icon: UserCheck,
      description: "Executive and team-level staffing coverage during early company build, maternity leaves, long-term illness, and other transitional periods."
    },
    {
      title: "Infrastructure Support",
      page: "infrastructure" as Page,
      icon: Settings,
      description: "Operational infrastructure setup and optimization to support efficient clinical trial execution and regulatory compliance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting services designed to optimize your clinical trial operations 
            from planning through execution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  {index === 0 && (
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#a8bbd520' }}>
                      <Icon className="w-6 h-6" style={{ color: '#a8bbd5' }} />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: '#b3deac20' }}>
                      <Icon className="w-6 h-6" style={{ color: '#b3deac' }} />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  onClick={() => navigate(service.page)}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}