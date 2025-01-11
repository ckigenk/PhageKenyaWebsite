import React from 'react';
import { PublicationCard } from './PublicationCard';
import { publications } from '../../data/publications';

export function PublicationsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {publications.map((publication) => (
        <PublicationCard key={publication.id} publication={publication} />
      ))}
    </div>
  );
}