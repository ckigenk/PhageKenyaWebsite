import React from 'react';

const documentaryItems = [
  {
    id: 1,
    title: "Scientists turn to natural viruses to deal with bacteria",
    description: "Scientists turn to natural viruses to deal with bacteria. Viruses eat bacteria that are resistant to antibiotics. Researchers say viruses eat harmful bacteria in the body",
    videoUrl: "https://www.youtube.com/embed/229uh4RQJGE", // Correct embed URL
    thumbnail: "",
  },
  {
    id: 2,
    title: "The Good Virus_15M_African Focus_Master",
    description: "Through PHAGES FOR GLOBAL HEALTH, Rosie Dransfeld and her team at ID Productions made a phage documentary on 'The Good Virus' featuring several researchers across the world.",
    videoUrl: "https://player.vimeo.com/video/1021125536?h=97e62a4e08&amp", // Correct embed URL
    thumbnail: "",
  },
  {
    id: 3,
    title: "Health Watch: The use of bacteriophages which can be a useful alternative to antibiotics",
    description: "Kenya Scientists speak on the burden of antimicrobial resistance (AMR) and the potential of bacteriophages as alternative to antibiotics",
    videoUrl: "https://www.youtube.com/embed/y1PlI81bXz4", // Correct embed URL
    thumbnail: "",
  },
];

export function Documentaries() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Documentaries</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Watch documentaries and news highlights that explore the phage research and therapy in Kenya.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {documentaryItems.map((doc) => (
            <div key={doc.id} className="flex flex-col items-start">
              <div className="w-full overflow-hidden rounded-lg">
                <div className="relative pb-[56.25%] w-full"> {/* 16:9 aspect ratio */}
                  <iframe
                    src={doc.videoUrl}
                    title={doc.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold leading-6 text-gray-900">{doc.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
