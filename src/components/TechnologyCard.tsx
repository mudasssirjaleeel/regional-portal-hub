
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Atom, Server, FileCode, Cloud, Smartphone } from 'lucide-react';
import { Technology } from '@/types';

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
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        {getIcon(technology.icon)}
        <h3 className="font-semibold">{technology.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{technology.description}</p>
      </CardContent>
    </Card>
  );
};

export default TechnologyCard;
