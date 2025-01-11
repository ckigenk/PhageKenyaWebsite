import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedNews } from '../components/FeaturedNews';
import { Documentaries } from '../components/Documentaries';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <FeaturedNews />
      <Documentaries />
      <Contact />
    </main>
  );
}