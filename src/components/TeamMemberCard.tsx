
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TeamMember } from '@/types';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { useRegion } from '@/context/RegionContext';
import { regions } from '@/data';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const { currentRegion } = useRegion();
  const regionData = regions.find(r => r.id === member.region);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
          {regionData?.flag} {regionData?.name}
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg">{member.name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{member.position}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
