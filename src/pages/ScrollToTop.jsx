import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname } = useLocation();
    console.log("hii", pathname)

  useEffect(() => {
    // Try multiple methods to ensure scroll works
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also scroll any scrollable containers
    const scrollContainers = document.querySelectorAll('[style*="overflow"]');
    scrollContainers.forEach(container => {
      container.scrollTop = 0;
    });
    
    // If you have a specific main container, target it directly
    const mainContainer = document.querySelector('#root') || 
                          document.querySelector('.app') ||
                          document.querySelector('main');
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}