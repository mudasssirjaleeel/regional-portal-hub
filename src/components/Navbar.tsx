
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { regions } from '@/data';
import { useRegion } from '@/context/RegionContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentRegion, setCurrentRegion } = useRegion();
  
  const currentRegionData = regions.find(r => r.id === currentRegion);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-salt-blue">SALT</span>
            </Link>
          </div>

          {/* Region Selector */}
          <div className="hidden md:flex ml-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <Globe size={16} />
                  <span>{currentRegionData?.name || 'Select Region'}</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {regions.map((region) => (
                  <DropdownMenuItem 
                    key={region.id} 
                    onClick={() => setCurrentRegion(region.id)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span>{region.flag}</span>
                      <span>{region.name}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-salt-blue">
              Home
            </Link>
            <Link to="/services" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-salt-blue">
              Services
            </Link>
            <Link to="/case-studies" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-salt-blue">
              Case Studies
            </Link>
            <Link to="/technologies" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-salt-blue">
              Technologies
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-salt-blue">
              About Us
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-salt-blue">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-salt-blue rounded-full hover:bg-gray-100">
              <Search size={20} />
            </button>
            <Link to="/contact">
              <Button className="bg-salt-blue hover:bg-salt-darkBlue text-white">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-salt-blue hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-salt-blue hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-salt-blue hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/case-studies" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-salt-blue hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Case Studies
            </Link>
            <Link to="/technologies" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-salt-blue hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Technologies
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-salt-blue hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-salt-blue hover:bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            
            <div className="pt-2">
              <p className="px-3 text-sm font-medium text-gray-500">Select Region</p>
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => {
                    setCurrentRegion(region.id);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-salt-blue hover:bg-gray-100 rounded-md"
                >
                  <span className="mr-2">{region.flag}</span>
                  <span>{region.name}</span>
                </button>
              ))}
            </div>
            
            <div className="pt-2">
              <Link to="/contact" className="block w-full" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-salt-blue hover:bg-salt-darkBlue text-white">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
