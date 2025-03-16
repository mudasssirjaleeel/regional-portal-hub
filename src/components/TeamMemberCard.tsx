
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
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
