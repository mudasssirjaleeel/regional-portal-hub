
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRegion } from '@/context/RegionContext';
import { regions } from '@/data';

interface HeroProps {
  small?: boolean;
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  small = false, 
  title = "Delivering bespoke software solutions across industries.",
  subtitle = "We create custom software applications that solve complex business challenges, streamline operations, and drive growth for companies worldwide."
}) => {
  const { currentRegion } = useRegion();
  const regionData = regions.find(r => r.id === currentRegion);

  return (
    <div className={`hero-gradient text-white ${small ? 'py-12' : 'py-20 md:py-28'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-white/10 rounded-full">
            <span className="text-sm font-medium">Software Development for {regionData?.flag} {regionData?.name}</span>
          </div>
          <h1 className={`${small ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold mb-6 leading-tight`}>
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-salt-blue hover:bg-gray-100">
                Get a Free Consultation
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
