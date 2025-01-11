import React from 'react';
import { PublicationsGrid } from '../components/publications/PublicationsGrid';

export function Publications() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Publications
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore our latest research and contributions to phage science
          </p>
        </div>
        <PublicationsGrid />
      </div>
    </div>
  );
}