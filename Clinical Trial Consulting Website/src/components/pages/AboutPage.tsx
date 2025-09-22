import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import headshot from "figma:asset/3967d4e24017ed50b559c013f9ddf81b585b9eb1.png";

const expertise = [
  "Oncology", "Cardiology", "Neurology", "Rare Diseases", 
  "Medical Devices", "Biologics", "Phase I-III Trials", "Regulatory Affairs"
];

const achievements = [
  "25+ years in clinical research and development leadership",
  "Built and led global Clinical Operations and Trial Management organizations", 
  "Experience across biotech, CRO, and medical device environments",
  "Successful label expansion, portfolio governance, and process optimization initiatives",
  "Global study execution with FDA and international regulatory experience"
];

const experience = [
  {
    id: "igm-2023",
    company: "IGM Biosciences, Inc.",
    title: "Senior Vice President, Development Operations",
    dates: "May 2023 – Mar 2025",
    location: "United States • Hybrid",
    highlights: [
      "Led end-to-end Development Operations (Clinical Ops, governance, budget, inspection readiness)."
    ]
  },
  {
    id: "medpace-svp-2021",
    company: "Medpace",
    title: "Senior Vice President, Clinical Trial Management",
    dates: "Dec 2021 – Feb 2024",
    location: "Cincinnati, OH, USA",
    highlights: [
      "Directed global CTM focused on predictable delivery, quality KPIs, and portfolio resourcing."
    ]
  },
  {
    id: "medtronic-2010",
    company: "Medtronic (Spinal & Biologics)",
    title: "Senior Director, Clinical Operations & Research",
    dates: "2010 – Jul 2017",
    location: "Greater Memphis Area",
    highlights: [
      "Global head; delivered label expansions and drove efficiency initiatives."
    ]
  },
  {
    id: "abraxis-2008",
    company: "Abraxis BioScience",
    title: "Vice President, Clinical Trial Management",
    dates: "2008 – 2010",
    location: "Global",
    highlights: [
      "Built CTM infrastructure (records, monitoring, CTA) for pivotal programs."
    ]
  },
  {
    id: "amgen-2005-2007",
    company: "Amgen",
    title: "Director, Clinical Research Services",
    dates: "2005 – 2007",
    location: "Thousand Oaks, CA, USA",
    highlights: [
      "Led NA Clinical Ops (start-up, analytics, reporting); drove major process improvements."
    ]
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-[#b3deac]/10 to-[#a8bbd5]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              About KMichelson Consulting
            </h1>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Bringing decades of experience in clinical trial planning and execution to help 
              biotechnology and pharmaceutical companies navigate the complex world of clinical research.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Meet Your Clinical Trial Expert
              </h2>
              <p className="text-foreground mb-6 text-lg leading-relaxed">
                With over 25 years of clinical research and development leadership, 
                I’ve led high-performing organizations across biotech, CRO, and medical device, 
                including executive roles at IGM Biosciences, Medpace, and Medtronic. 
                I bring deep expertise in designing and executing successful clinical trials, 
                operational governance, and inspection readiness across multiple therapeutic areas.
              </p>
              <p className="text-foreground mb-8 text-lg leading-relaxed">
                My approach is rooted in practical solutions that are realistic, sustainable, 
                and tailored to each client's unique needs. I understand that no two clinical 
                trials are alike, and I pride myself on creating customized strategies that 
                drive results while maintaining the highest standards of quality and compliance.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-3 flex-shrink-0"></div>
                      <span className="text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <ImageWithFallback
                  src={headshot}
                  alt="Kimberly Michelson portrait"
                  className="w-full h-96 object-cover rounded-lg mb-4"
                />
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-primary mb-2">K. Michelson</h4>
                  <p className="text-muted-foreground">Clinical Trial Strategy Consultant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Therapeutic Areas & Expertise
              </h3>
              <p className="text-lg text-foreground max-w-3xl mx-auto">
                Extensive experience across diverse therapeutic areas and clinical development phases
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {expertise.map((area, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm px-4 py-2 bg-white text-primary border border-primary/20"
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-primary">Career Highlights</h2>
            <p className="text-foreground max-w-3xl mx-auto">
              Executive leadership across biotech, CRO, and medical devices with a focus on Clinical Operations, Clinical Trial Management, and portfolio delivery.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-accent"></div>
            <ul className="space-y-10">
              {experience.map((item) => (
                <li key={item.id} className="relative pl-10 sm:pl-14">
                  <div className="absolute left-3 sm:left-5 top-1 w-3 h-3 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                    <div>
                      <h3 className="text-primary">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.company} • {item.location}
                      </p>
                    </div>
                    <p className="text-muted-foreground md:text-right">{item.dates}</p>
                  </div>
                  <p className="mt-2 text-foreground">
                    {item.highlights[0]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-foreground max-w-4xl mx-auto">
              Every client partnership is built on these core principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Practical Solutions</h3>
              <p className="text-foreground leading-relaxed">
                Real-world solutions that are feasible, sustainable, and aligned with your resources and timelines.
              </p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Strategic Partnership</h3>
              <p className="text-foreground leading-relaxed">
                Collaborative approach that integrates seamlessly with your team and adapts to your organization's culture.
              </p>
            </div>

            <div className="text-center p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Quality Excellence</h3>
              <p className="text-foreground leading-relaxed">
                Unwavering commitment to regulatory compliance and industry best practices in every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}