import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { labLocations } from '../data/labLocations';
import { Microscope } from 'lucide-react';

// Default Marker Icon (smaller by default)
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [30, 45], // Default smaller size
  iconAnchor: [15, 45],
});

export function Labs() {
  const [highlightedLabId, setHighlightedLabId] = useState(null);
  const markersRef = useRef([]);

  useEffect(() => {
    // Fix for CSS issues with Leaflet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Microscope className="h-8 w-8 text-indigo-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Phage Research Labs in Kenya
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-600">
            Explore the network of laboratories conducting phage research across Kenya
          </p>
        </div>

        {/* Two Column Layout for Larger Screens */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Map Section (only visible on larger screens) */}
          <div className="md:col-span-2 hidden md:block sticky top-0" style={{ height: '600px' }}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '100%' }}>
              <MapContainer
                center={[-0.0236, 37.9062]}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {labLocations.map((lab, index) => (
                  <React.Fragment key={lab.id}>
                    <Marker
                      position={lab.coordinates}
                      icon={customIcon} // Default pin size
                      ref={(el) => (markersRef.current[index] = el)}
                    >
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-lg">{lab.name}</h3>
                          <p className="text-sm text-gray-600">{lab.institution}</p>
                          <p className="mt-2 text-sm">{lab.description}</p>
                          <p className="mt-2 text-sm font-semibold">Contact: {lab.contact}</p>
                          <a
                            href={lab.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 block"
                          >
                            Visit Website →
                          </a>
                        </div>
                      </Popup>
                    </Marker>

                    {/* Highlight the marker with a circle on hover */}
                    {highlightedLabId === lab.id && (
                      <Circle
                        center={lab.coordinates}
                        radius={100} // Larger radius for the circle on hover
                        pathOptions={{
                          color: 'red',
                          fillColor: 'red',
                          fillOpacity: 0.3
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Scrollable Lab Details */}
          <div className="space-y-4 overflow-y-auto max-h-[600px] md:col-span-1">
            {labLocations.map((lab) => (
              <div
                key={lab.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHighlightedLabId(lab.id)} // Highlight on hover
                onMouseLeave={() => setHighlightedLabId(null)} // Remove highlight when hover ends
              >
                <h3 className="font-bold text-lg text-gray-900">{lab.name}</h3>
                <a href={lab.website} target="_blank" className="text-sm text-indigo-600">{lab.institution}</a>
                <p className="mt-2 text-sm text-gray-600">{lab.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{lab.contact}</span>
                  <a
                    href={`mailto:${lab.email}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    Contact →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* One Column Layout for Smaller Screens */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Scrollable Lab Details on Mobile */}
          <div className="space-y-4 overflow-y-auto max-h-[600px]">
            {labLocations.map((lab) => (
              <div
                key={lab.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHighlightedLabId(lab.id)} // Highlight on hover
                onMouseLeave={() => setHighlightedLabId(null)} // Remove highlight when hover ends
              >
                <h3 className="font-bold text-lg text-gray-900">{lab.name}</h3>
                <a href={lab.website} target="_blank" className="text-sm text-indigo-600">{lab.institution}</a>
                <p className="mt-2 text-sm text-gray-600">{lab.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">{lab.contact}</span>
                  <a
                    href={`mailto:${lab.email}`}
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    Contact →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
