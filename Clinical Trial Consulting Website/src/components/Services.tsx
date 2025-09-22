import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FileText, Users, Target, Shield, BarChart3, Clock } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Protocol Development",
    description: "Comprehensive clinical trial protocol design and development tailored to your therapeutic area and regulatory requirements."
  },
  {
    icon: Shield,
    title: "Regulatory Strategy",
    description: "Expert guidance on FDA and international regulatory pathways to ensure compliance and accelerate approval timelines."
  },
  {
    icon: Users,
    title: "Site Selection & Management",
    description: "Strategic site identification, evaluation, and management to optimize patient recruitment and data quality."
  },
  {
    icon: Target,
    title: "Endpoint Strategy",
    description: "Development of meaningful primary and secondary endpoints that align with regulatory expectations and commercial objectives."
  },
  {
    icon: BarChart3,
    title: "Feasibility Assessment",
    description: "Thorough feasibility analysis including patient population assessment, competitive landscape, and operational considerations."
  },
  {
    icon: Clock,
    title: "Timeline Optimization",
    description: "Strategic timeline development and risk mitigation to accelerate study initiation and completion."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4 text-primary">
            Comprehensive Clinical Trial Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From early-stage planning to regulatory submission, I provide end-to-end strategic 
            consulting to ensure your clinical trials are designed for success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}