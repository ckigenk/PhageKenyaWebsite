import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons for left and right arrows

const images = [
  '/images/hero/image1.jpeg',
  '/images/hero/image2.jpeg',
  '/images/hero/image3.jpeg',
  '/images/hero/image4.jpeg',
  '/images/hero/image5.jpeg',
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Handle next and previous image change
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Join our upcoming symposium.{' '}
                <a href="/events" className="whitespace-nowrap font-semibold text-indigo-600">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Advancing Phage Research in Kenya
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A community of researchers dedicated to bacteriophage research, fostering collaboration
              and innovation in microbiology across Kenya.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="https://docs.google.com/forms/d/1TvQWvJhGOEO62pLr4FEGbubfoXydRchTbjoy4r0OGLA/viewform?pli=1&pli=1&edit_requested=true" target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join the Society
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel with arrows */}
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="h-[90%] w-full bg-gradient-to-br from-indigo-50 to-white p-8">
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg">
              {/* Image carousel */}
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${
                    currentImage === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Left arrow */}
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-indigo-600 hover:bg-indigo-100 focus:outline-none"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Right arrow */}
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg text-indigo-600 hover:bg-indigo-100 focus:outline-none"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
