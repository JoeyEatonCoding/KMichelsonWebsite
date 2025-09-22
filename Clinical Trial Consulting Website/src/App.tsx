import { Router } from "./components/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeHero } from "./components/HomeHero";
import { HomeServices } from "./components/HomeServices";
import { Testimonials } from "./components/Testimonials";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";

import { StandInStaffingPage } from "./components/pages/StandInStaffingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Router>
        {(currentPage, navigate) => (
          <>
            <Header currentPage={currentPage} navigate={navigate} />
            
            <main>
              {currentPage === 'home' && (
                <>
                  <HomeHero navigate={navigate} />
                  <HomeServices navigate={navigate} />
                  <Testimonials />
                </>
              )}
              
              {currentPage === 'about' && <AboutPage />}
              
              {currentPage === 'services' && <ServicesPage navigate={navigate} />}
              
              {currentPage === 'clinical-operations' && (
                <div className="py-20 bg-gradient-to-br from-primary/5 via-[#b3deac]/10 to-white">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-6">Clinical Operations Strategy</h1>
                      <p className="text-xl text-gray-600 mb-8">
                        Comprehensive strategic planning for clinical trial design, protocol development, and regulatory pathway optimization.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        This page is ready for you to add detailed content about your Clinical Operations Strategy services. 
                        You can edit this content to include specific information about protocols, regulatory strategies, 
                        feasibility assessments, and other strategic planning services you offer.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {currentPage === 'project-management' && (
                <div className="py-20 bg-gradient-to-br from-[#a8bbd5]/10 via-primary/5 to-white">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-6">Project & Vendor Management</h1>
                      <p className="text-xl text-gray-600 mb-8">
                        Expert oversight of project timelines, vendor relationships, and cross-functional team coordination throughout the clinical trial lifecycle.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        This page is ready for you to add detailed content about your Project & Vendor Management services. 
                        You can edit this content to include specific information about project planning, vendor selection, 
                        timeline management, and team coordination services you provide.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {currentPage === 'standin-staffing' && <StandInStaffingPage navigate={navigate} />}
              
              {currentPage === 'infrastructure' && (
                <div className="py-20 bg-gradient-to-br from-[#b3deac]/10 via-[#a8bbd5]/5 to-white">
                  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-6">Infrastructure Support</h1>
                      <p className="text-xl text-gray-600 mb-8">
                        Operational infrastructure setup and optimization to support efficient clinical trial execution and regulatory compliance.
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        This page is ready for you to add detailed content about your Infrastructure Support services. 
                        You can edit this content to include specific information about systems setup, process optimization, 
                        quality assurance, and compliance support services you offer.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </main>
            
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}