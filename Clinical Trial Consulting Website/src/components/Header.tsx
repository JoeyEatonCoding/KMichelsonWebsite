import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import kmichelsonLogo from 'figma:asset/2ca73b50d5f0b631fe0b443645e2501b1713b9f6.png';

type Page = 'home' | 'about' | 'services' | 'clinical-operations' | 'project-management' | 'standin-staffing' | 'infrastructure';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

export function Header({ currentPage, navigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: "Home", page: "home" as Page },
    { label: "About", page: "about" as Page },
    { 
      label: "Services", 
      page: "services" as Page,
      hasDropdown: true,
      dropdownItems: [
        { label: "Clinical Operations Strategy", page: "clinical-operations" as Page },
        { label: "Project & Vendor Management", page: "project-management" as Page },
        { label: "Stand-In Staffing", page: "standin-staffing" as Page },
        { label: "Infrastructure Support", page: "infrastructure" as Page }
      ]
    }
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src={kmichelsonLogo} 
                alt="KMichelson Consulting, LLC" 
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.page} className="relative">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      onClick={() => navigate(item.page)}
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                        currentPage === item.page || 
                        ['clinical-operations', 'project-management', 'standin-staffing', 'infrastructure'].includes(currentPage)
                          ? 'text-primary' 
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-border rounded-lg shadow-lg py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.page}
                            onClick={() => {
                              navigate(dropdownItem.page);
                              setIsServicesOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => navigate(item.page)}
                    className={`text-sm font-medium transition-colors ${
                      currentPage === item.page 
                        ? 'text-primary' 
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => navigate('about')}
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white"
            >
              Get in Touch
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.page}>
                <button
                  onClick={() => {
                    navigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left text-sm font-medium py-2 ${
                    currentPage === item.page 
                      ? 'text-primary' 
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-2 mt-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <button
                        key={dropdownItem.page}
                        onClick={() => {
                          navigate(dropdownItem.page);
                          setIsMenuOpen(false);
                        }}
                        className={`block w-full text-left text-sm py-1 ${
                          currentPage === dropdownItem.page 
                            ? 'text-primary' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button 
              onClick={() => {
                navigate('about');
                setIsMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}