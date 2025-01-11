import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { labLocations } from '../data/labLocations';
import { Microscope } from 'lucide-react';

// Fix for default marker icon
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export function Labs() {
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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


        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-1 sticky top-0 mb-4 md:mb-0" style={{ height: '600px' }}>
              <MapContainer
                center={[-0.0236, 37.9062]}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {labLocations.map((lab) => (
                  <Marker
                    key={lab.id}
                    position={lab.coordinates}
                    icon={customIcon}
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
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="space-y-4">
            {labLocations.map((lab) => (
              <div key={lab.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
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