import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

const expertise = [
  "Oncology", "Cardiology", "Neurology", "Rare Diseases", 
  "Medical Devices", "Biologics", "Phase I-III Trials"
];

const achievements = [
  "15+ years in clinical research",
  "50+ successful trial completions",
  "FDA and EMA regulatory experience",
  "Global study execution expertise"
];

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-6 text-primary">
              Meet Your Clinical Trial Expert
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in clinical research and regulatory affairs, 
              I bring deep expertise in designing and executing successful clinical trials 
              across multiple therapeutic areas. My background spans biotechnology, 
              pharmaceutical, and medical device companies, providing me with a comprehensive 
              understanding of the clinical development landscape.
            </p>
            
            <div className="mb-8">
              <h3 className="mb-4 text-primary">Key Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-primary">Therapeutic Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((area, index) => (
                  <Badge key={index} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1594824694996-f431d1b26dbc?w=500&h=600&fit=crop"
                alt="Professional consultant reviewing clinical trial documents"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h4 className="text-primary">Dr. K. Michelson</h4>
                <p className="text-muted-foreground">Clinical Trial Strategy Consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}