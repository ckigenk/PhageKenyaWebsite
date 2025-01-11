import React from 'react';
import { AboutHero } from '../components/AboutHero';
import { AboutContent } from '../components/AboutContent';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutContent />
    </div>
  );
}