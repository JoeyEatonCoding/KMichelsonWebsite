import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FileText, Users, UserCheck, Settings, CheckCircle, Clock, Shield } from "lucide-react";

type Page = 'home' | 'about' | 'services' | 'clinical-operations' | 'project-management' | 'standin-staffing' | 'infrastructure';

interface ServicesPageProps {
  navigate: (page: Page) => void;
}

const serviceAreas = [
  {
    icon: FileText,
    title: "Clinical Operations Strategy",
    page: "clinical-operations" as Page,
    description: "Comprehensive strategic planning for clinical trial design, protocol development, and regulatory pathway optimization.",
    highlights: ["Protocol Development", "Regulatory Strategy", "Feasibility Assessment", "Risk Management Planning"]
  },
  {
    icon: Users,
    title: "Project & Vendor Management",
    page: "project-management" as Page,
    description: "Expert oversight of project timelines, vendor relationships, and cross-functional team coordination.",
    highlights: ["Project Planning & Execution", "Vendor Selection & Oversight", "Team Coordination", "Timeline Management"]
  },
  {
    icon: UserCheck,
    title: "Stand-In Staffing",
    page: "standin-staffing" as Page,
    description: "Executive and team-level staffing coverage during transitional periods and organizational growth phases.",
    highlights: ["Executive Coverage", "Maternity/Paternity Leave Support", "Long-term Illness Coverage", "Early Company Build Support"]
  },
  {
    icon: Settings,
    title: "Infrastructure Support",
    page: "infrastructure" as Page,
    description: "Operational infrastructure setup and optimization to support efficient clinical trial execution.",
    highlights: ["Systems Setup", "Process Optimization", "Quality Assurance", "Compliance Support"]
  }
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Proven Experience",
    description: "Over 15 years of experience with 50+ successful trial completions across multiple therapeutic areas."
  },
  {
    icon: Clock,
    title: "Flexible Engagement", 
    description: "Customized service models that adapt to your timeline, budget, and organizational needs."
  },
  {
    icon: Shield,
    title: "Regulatory Excellence",
    description: "Deep expertise in FDA and international regulations ensuring compliant and successful outcomes."
  }
];

export function ServicesPage({ navigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clinical Trial Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive consulting services designed to optimize your clinical trial operations 
            from planning through execution and regulatory submission.
          </p>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {serviceAreas.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => navigate(service.page)}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose KMichelson Consulting?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients consistently achieve better outcomes through our proven methodology and experienced guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Optimize Your Clinical Trials?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can be tailored to your specific needs and objectives.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('about')}
            className="bg-white text-primary hover:bg-gray-100 hover:text-primary px-8 py-4 text-lg"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}