import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { UserCheck, Clock, Shield, Users, Briefcase, Heart, Building2 } from "lucide-react";

type Page = 'home' | 'about' | 'services' | 'clinical-operations' | 'project-management' | 'standin-staffing' | 'infrastructure';

interface StandInStaffingPageProps {
  navigate: (page: Page) => void;
}

const staffingSolutions = [
  {
    icon: Building2,
    title: "Early Company Build Support",
    description: "Strategic leadership and operational support during the critical early stages of company development.",
    details: [
      "Interim executive leadership",
      "Team structure development", 
      "Process establishment",
      "Culture foundation"
    ]
  },
  {
    icon: Heart,
    title: "Maternity/Paternity Leave Coverage",
    description: "Seamless coverage for key personnel during family leave periods to maintain continuity.",
    details: [
      "Full role assumption",
      "Project continuity planning",
      "Team communication management",
      "Smooth transition protocols"
    ]
  },
  {
    icon: Shield,
    title: "Long-term Illness Coverage",
    description: "Comprehensive support during extended medical leave periods for critical team members.",
    details: [
      "Immediate response deployment",
      "Sensitive transition management",
      "Confidentiality assurance",
      "Return integration planning"
    ]
  },
  {
    icon: Briefcase,
    title: "Executive-Level Staffing",
    description: "Senior-level expertise for C-suite and VP-level positions during transitional periods.",
    details: [
      "Strategic leadership",
      "Board-level communication",
      "Organizational alignment",
      "Change management"
    ]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Quick integration with minimal onboarding time, allowing immediate productivity and continuity."
  },
  {
    icon: Users,
    title: "Experienced Leadership",
    description: "Senior-level professionals with proven track records in biotechnology and pharmaceutical environments."
  },
  {
    icon: Shield,
    title: "Confidential & Secure",
    description: "Highest levels of confidentiality and security protocols to protect sensitive company information."
  }
];

export function StandInStaffingPage({ navigate }: StandInStaffingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-[#b3deac]/5 to-[#a8bbd5]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserCheck className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Stand-In Staffing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professional coverage and leadership support during transitional periods, ensuring 
              business continuity and operational excellence when your team needs it most.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Staffing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible staffing solutions tailored to your organization's unique needs and circumstances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {staffingSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-gray-600">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure smooth transitions and maintained productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assessment", description: "Evaluate your specific needs and requirements" },
              { step: "2", title: "Matching", description: "Select the ideal professional for your situation" },
              { step: "3", title: "Integration", description: "Seamless onboarding and team integration" },
              { step: "4", title: "Transition", description: "Smooth handoff when permanent staff returns" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Staffing Solutions?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  {index === 0 && (
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#b3deac20' }}>
                      <Icon className="w-8 h-8" style={{ color: '#b3deac' }} />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#a8bbd520' }}>
                      <Icon className="w-8 h-8" style={{ color: '#a8bbd5' }} />
                    </div>
                  )}
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
            Need Immediate Staffing Support?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your staffing needs and learn how we can provide 
            the right leadership coverage for your organization.
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