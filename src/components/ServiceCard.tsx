
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Code, Palette, CheckCircle, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="h-8 w-8 text-salt-blue" />;
      case 'Smartphone':
        return <Smartphone className="h-8 w-8 text-salt-blue" />;
      case 'Code':
        return <Code className="h-8 w-8 text-salt-blue" />;
      case 'Palette':
        return <Palette className="h-8 w-8 text-salt-blue" />;
      case 'CheckCircle':
        return <CheckCircle className="h-8 w-8 text-salt-blue" />;
      case 'Repeat':
        return <Repeat className="h-8 w-8 text-salt-blue" />;
      default:
        return <Code className="h-8 w-8 text-salt-blue" />;
    }
  };

  return (
    <Card className="transition-all duration-300 service-card h-full flex flex-col">
      <CardHeader>
        <div className="mb-4">
          {getIcon(service.icon)}
        </div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-sm text-gray-600 mb-4">
          {service.details.substring(0, 100)}...
        </p>
        <Link to={`/services/${service.id}`}>
          <Button variant="ghost" className="p-0 hover:bg-transparent text-salt-blue hover:text-salt-darkBlue flex items-center gap-2">
            Learn More
            <ArrowRight size={16} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
