// components/Layout.js
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - hidden on mobile */}
      <div className={`${isMobile ? 'fixed inset-0 z-40' : 'relative'} ${sidebarOpen ? 'block' : 'hidden'} md:block md:relative`}>
        {sidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
        <div className={`${isMobile ? 'fixed inset-y-0 left-0 z-50 w-64' : 'relative'} bg-white shadow-lg`}>
          <Sidebar />
        </div>
      </div>
      
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header with toggle button */}
        <Header setSidebarOpen={setSidebarOpen} />
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}