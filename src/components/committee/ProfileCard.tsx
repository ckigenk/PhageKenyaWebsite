import React from 'react';
import { Twitter, Linkedin, BookOpen, Database, Mail } from 'lucide-react'; // Add Mail icon
import { CommitteeMember } from '../../types/committee';

interface ProfileCardProps {
  member: CommitteeMember;
  onClick: (member: CommitteeMember) => void;
}

export function ProfileCard({ member, onClick }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img
            src={member.imageUrl || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
        <p className="text-sm text-indigo-600 mt-1">{member.role}</p>
        <p className="text-sm text-gray-500 mt-1">{member.institution}</p>
        
        <div className="mt-3 flex items-center space-x-3">
          {member.socialLinks.twitter && (
            <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4 text-gray-400 hover:text-blue-400" />
            </a>
          )}
          {member.socialLinks.linkedin && (
            <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 text-gray-400 hover:text-blue-700" />
            </a>
          )}
          {member.socialLinks.googleScholar && (
            <a href={member.socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
              <BookOpen className="h-4 w-4 text-gray-400 hover:text-green-600" />
            </a>
          )}
          {member.socialLinks.researchGate && (
            <a href={member.socialLinks.researchGate} target="_blank" rel="noopener noreferrer">
              <Database className="h-4 w-4 text-gray-400 hover:text-blue-500" />
            </a>
          )}
          {/* Add the Mail icon for email */}
          {member.socialLinks.email && (
            <a href={`mailto:${member.socialLinks.email}`} target="_blank" rel="noopener noreferrer">
              <Mail className="h-4 w-4 text-gray-400 hover:text-green-500" />
            </a>
          )}
        </div>
        
        <button
          onClick={() => onClick(member)}
          className="mt-4 w-full bg-indigo-50 text-indigo-600 py-2 px-3 rounded-md text-sm hover:bg-indigo-100 transition-colors duration-300"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
