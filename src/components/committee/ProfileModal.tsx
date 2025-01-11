import React from 'react';
import { X } from 'lucide-react';
import { CommitteeMember } from '../../types/committee';

interface ProfileModalProps {
  member: CommitteeMember;
  onClose: () => void;
}

export function ProfileModal({ member, onClose }: ProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left side: Fixed content */}
            <div className="md:col-span-1 sticky top-4 mb-4 md:mb-0">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full rounded-lg"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Expertise</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Scrollable content */}
            <div className="md:col-span-2 overflow-y-auto max-h-[60vh]">
              <div>
                <h3 className="font-semibold text-gray-900">Biography</h3>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900">Publications</h3>
                <div className="mt-2 space-y-4">
                  {member.publications.map((pub) => (
                    <div key={pub.doi} className="border-l-4 border-indigo-200 pl-4">
                      <p className="text-gray-900">{pub.title}</p>
                      <p className="text-sm text-gray-500">
                        {pub.journal} ({pub.year})
                      </p>
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        DOI: {pub.doi}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
