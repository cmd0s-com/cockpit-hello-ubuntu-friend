
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const CockpitHeader = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-[#151515] text-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {isMobile && (
            <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          )}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 48 48" width="24" height="24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.365 24.784l-2.597 12.641H9.7L6 15.883h5.254l1.606 11.598c.186 1.375.3 2.652.33 3.83.042-1.33.19-2.642.435-3.928l1.771-11.5h6.022l1.797 11.5c.196 1.158.334 2.456.415 3.879.02-1.008.144-2.27.367-3.782l1.624-11.597h5.254L24.838 37.425h-5.06l-2.587-12.641z"/>
            </svg>
            <span className="font-bold text-lg">Cockpit</span>
          </div>
          
          {!isMobile && (
            <nav>
              <ul className="flex space-x-4">
                <li className="h-16 flex items-center border-b-2 border-red-500 font-medium">
                  Hello Ubuntu
                </li>
              </ul>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">admin@localhost</span>
        </div>
      </div>
    </header>
  );
};

export default CockpitHeader;
