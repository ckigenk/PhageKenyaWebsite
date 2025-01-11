import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Publication } from '../../types/publication';

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const doiUrl = `https://doi.org/${publication.doi}`;

  return (
    <a 
      href={doiUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
    >
      {publication.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={publication.imageUrl}
            alt={publication.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{publication.title}</h3>
          <ExternalLink className="h-5 w-5 text-indigo-600" />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {publication.authors.join(', ')} • {publication.year}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3">{publication.abstract}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {publication.keywords.map((keyword) => (
            <span
              key={keyword}
              className="px-2 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{publication.journal}</span>
          <span className="text-sm text-indigo-600">DOI: {publication.doi}</span>
        </div>
      </div>
    </a>
  );
}