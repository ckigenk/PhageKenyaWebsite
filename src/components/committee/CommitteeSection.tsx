import React, { useState } from 'react';
import { ProfileCard } from './ProfileCard';
import { ProfileModal } from './ProfileModal';
import { committeeMembers } from '../../data/committeeMembers';
import { CommitteeMember } from '../../types/committee';

export function CommitteeSection() {
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null);

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Committee
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Meet the dedicated researchers leading phage research in Kenya
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {committeeMembers.map((member) => (
            <ProfileCard
              key={member.id}
              member={member}
              onClick={setSelectedMember}
            />
          ))}
        </div>
      </div>
      
      {selectedMember && (
        <ProfileModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}