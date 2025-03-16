
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={caseStudy.image} 
          alt={caseStudy.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-2">Client: {caseStudy.client}</p>
        <p className="text-sm text-gray-600">{caseStudy.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/case-studies/${caseStudy.id}`}>
          <Button variant="ghost" className="p-0 hover:bg-transparent text-salt-blue hover:text-salt-darkBlue flex items-center gap-2">
            View Case Study
            <ArrowRight size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CaseStudyCard;
