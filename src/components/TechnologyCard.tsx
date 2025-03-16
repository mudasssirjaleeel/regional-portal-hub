
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Atom, Server, FileCode, Cloud, Smartphone, ArrowRight } from 'lucide-react';
import { Technology } from '@/types';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ technology }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="h-8 w-8 text-salt-blue" />;
      case 'Server':
        return <Server className="h-8 w-8 text-salt-blue" />;
      case 'FileCode':
        return <FileCode className="h-8 w-8 text-salt-blue" />;
      case 'Cloud':
        return <Cloud className="h-8 w-8 text-salt-blue" />;
      case 'Smartphone':
        return <Smartphone className="h-8 w-8 text-salt-blue" />;
      default:
        return <FileCode className="h-8 w-8 text-salt-blue" />;
    }
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        {getIcon(technology.icon)}
        <h3 className="font-semibold">{technology.name}</h3>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm text-gray-600 mb-4">{technology.description}</p>
        <Link to={`/technologies/${technology.id}`}>
          <Button variant="ghost" className="p-0 hover:bg-transparent text-salt-blue hover:text-salt-darkBlue flex items-center gap-2">
            Learn More
            <ArrowRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TechnologyCard;
