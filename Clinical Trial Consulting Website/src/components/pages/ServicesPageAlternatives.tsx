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

export function ServicesPageAlternatives({ navigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="p-8 space-y-16">
        <h1 className="text-3xl font-bold text-center mb-8">Circle Alternative Designs</h1>
        
        {/* Option 1: Diamond/Badge Style */}
        <section className="py-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-8">Option 1: Diamond/Badge Style</h2>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const colors = [
                  { bg: 'bg-primary/10', icon: 'text-primary', border: 'border-primary/20' },
                  { bg: 'bg-[#a8bbd5]/10', icon: 'text-[#a8bbd5]', border: 'border-[#a8bbd5]/20' },
                  { bg: 'bg-[#b3deac]/10', icon: 'text-[#b3deac]', border: 'border-[#b3deac]/20' }
                ];
                const colorScheme = colors[index % 3];
                
                return (
                  <div key={index} className="text-center group">
                    <div className="relative mx-auto mb-6 w-20 h-20">
                      <div className={`w-full h-full ${colorScheme.bg} border-2 ${colorScheme.border} transform rotate-45 rounded-xl transition-transform group-hover:scale-105`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${colorScheme.icon}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Option 2: Hexagonal Style */}
        <section className="py-8 bg-white rounded-lg border">
          <h2 className="text-2xl font-semibold text-center mb-8">Option 2: Hexagonal Style</h2>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const colors = [
                  { bg: 'bg-primary/15', icon: 'text-primary' },
                  { bg: 'bg-[#a8bbd5]/15', icon: 'text-[#a8bbd5]' },
                  { bg: 'bg-[#b3deac]/15', icon: 'text-[#b3deac]' }
                ];
                const colorScheme = colors[index % 3];
                
                return (
                  <div key={index} className="text-center group">
                    <div className="relative mx-auto mb-6 w-20 h-20">
                      {/* Hexagon using clip-path simulation with multiple divs */}
                      <div className={`w-full h-full ${colorScheme.bg} transform rotate-30`}
                           style={{
                             clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                           }}>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className={`w-8 h-8 ${colorScheme.icon}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Option 3: Soft Rounded Rectangles */}
        <section className="py-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-8">Option 3: Soft Rounded Rectangles</h2>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const colors = [
                  { bg: 'bg-primary/10', icon: 'text-primary', border: 'border-primary/20' },
                  { bg: 'bg-[#a8bbd5]/10', icon: 'text-[#a8bbd5]', border: 'border-[#a8bbd5]/20' },
                  { bg: 'bg-[#b3deac]/10', icon: 'text-[#b3deac]', border: 'border-[#b3deac]/20' }
                ];
                const colorScheme = colors[index % 3];
                
                return (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-16 ${colorScheme.bg} border-2 ${colorScheme.border} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-105`}>
                      <Icon className={`w-8 h-8 ${colorScheme.icon}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Option 4: Gradient Cards */}
        <section className="py-8 bg-white rounded-lg border">
          <h2 className="text-2xl font-semibold text-center mb-8">Option 4: Gradient Cards</h2>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const gradients = [
                  'bg-gradient-to-br from-primary/10 to-primary/5',
                  'bg-gradient-to-br from-[#a8bbd5]/10 to-[#a8bbd5]/5',
                  'bg-gradient-to-br from-[#b3deac]/10 to-[#b3deac]/5'
                ];
                const iconColors = ['text-primary', 'text-[#a8bbd5]', 'text-[#b3deac]'];
                
                return (
                  <div key={index} className="text-center group">
                    <div className={`w-20 h-20 ${gradients[index % 3]} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all group-hover:scale-105 group-hover:shadow-lg border border-gray-100`}>
                      <Icon className={`w-10 h-10 ${iconColors[index % 3]}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Option 5: Simple Badge Style */}
        <section className="py-8 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-8">Option 5: Simple Badge Style</h2>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const colors = [
                  { bg: 'bg-primary', icon: 'text-white' },
                  { bg: 'bg-[#a8bbd5]', icon: 'text-white' },
                  { bg: 'bg-[#b3deac]', icon: 'text-white' }
                ];
                const colorScheme = colors[index % 3];
                
                return (
                  <div key={index} className="text-center group">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colorScheme.bg} rounded-xl mx-auto mb-6 transition-transform group-hover:scale-110 shadow-md`}>
                      <Icon className={`w-8 h-8 ${colorScheme.icon}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Option 6: No Container - Just Icons */}
        <section className="py-8 bg-white rounded-lg border">
          <h2 className="text-2xl font-semibold text-center mb-8">Option 6: Minimal - Icons Only</h2>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const colors = ['text-primary', 'text-[#a8bbd5]', 'text-[#b3deac]'];
                
                return (
                  <div key={index} className="text-center group">
                    <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center">
                      <Icon className={`w-12 h-12 ${colors[index % 3]} transition-transform group-hover:scale-110`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}