
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Region } from '@/types';

interface RegionContextType {
  currentRegion: Region;
  setCurrentRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

interface RegionProviderProps {
  children: ReactNode;
}

export const RegionProvider: React.FC<RegionProviderProps> = ({ children }) => {
  const [currentRegion, setCurrentRegion] = useState<Region>('usa');

  useEffect(() => {
    // Try to get the saved region from localStorage
    const savedRegion = localStorage.getItem('region') as Region | null;
    if (savedRegion) {
      setCurrentRegion(savedRegion);
    }
  }, []);

  const handleSetRegion = (region: Region) => {
    setCurrentRegion(region);
    localStorage.setItem('region', region);
  };

  return (
    <RegionContext.Provider value={{ currentRegion, setCurrentRegion: handleSetRegion }}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = (): RegionContextType => {
  const context = useContext(RegionContext);
  if (context === undefined) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};
