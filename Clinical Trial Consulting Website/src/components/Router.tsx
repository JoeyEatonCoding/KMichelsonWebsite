import { useState, useEffect } from "react";

type Page = 'home' | 'about' | 'services' | 'clinical-operations' | 'project-management' | 'standin-staffing' | 'infrastructure';

interface RouterProps {
  children: (currentPage: Page, navigate: (page: Page) => void) => React.ReactNode;
}

export function Router({ children }: RouterProps) {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as Page;
      if (hash) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  return <>{children(currentPage, navigate)}</>;
}