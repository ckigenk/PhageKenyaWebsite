import React from 'react';
import { Microscope } from 'lucide-react';

export function AboutHero() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Microscope className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">About PhageKenya</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Advancing phage research and applications in Kenya
          </p>
        </div>
      </div>
    </div>
  );
}