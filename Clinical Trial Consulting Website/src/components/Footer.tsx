import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-primary mb-4">
                KMichelson Consulting, LLC
              </h3>
              <p className="text-foreground leading-relaxed mb-6">
                Expert clinical trial planning and strategic consulting to accelerate 
                your therapeutic innovations from concept to market with practical, 
                sustainable solutions.
              </p>
              <div className="text-sm text-foreground leading-relaxed">
                <p>Remote & On-site Consultations Available</p>
                <p>Cincinnati, Ohio</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Clinical Operations Strategy</li>
                <li>Project & Vendor Management</li>
                <li>Stand-In Staffing</li>
                <li>Infrastructure Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm text-foreground">
                <p>
                  <a href="mailto:info@kmichelsonconsulting.com" className="hover:text-primary transition-colors">
                    info@kmichelsonconsulting.com
                  </a>
                </p>
                <p>
                  <a href="tel:+19199377062" className="hover:text-primary transition-colors">
                    (919) 937-7062
                  </a>
                </p>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://www.linkedin.com/in/kimberly-michelson-1340465/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-border/50" />
        
        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 KMichelson Consulting, LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}