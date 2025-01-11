import React from 'react';
import { ExternalLink } from 'lucide-react';

const opportunities = [
  {
    title: "Development of effective phage cocktails for precise crop protection measures",
    deadline: "January 16, 2025",
    description: "Funded PhD Project (Students Worldwide)",
    url: "https://warwick.ac.uk/fac/cross_fac/mibtp/phd/supervisors/mrabiey/",
    organization: "University of Warwick"
  },
  {
    title: "Genetic engineering of bacteriophages to understand their biology and utilise in biotech applications",
    deadline: "January 16, 2025",
    description: "Competition Funded PhD Project (Students Worldwide)",
    url: "https://le.ac.uk/study/research-degrees/funded-opportunities/bbsrc-mibtp",
    organization: "University of Leicester"
  },
  {
    title: "15th International Bacteriophage Conference - Oxford ",
    deadline: "Oral Abstracts: 30 Jun 2025 | Poster Abstracts: 15 Aug 2025 | Digital Posters and flash-talk videos: 25 Aug 2025 | Standard Registration Deadline: 29 Aug 2025",
    description: "15th annual Oxford bacteriophage conference on 01-02 September 2025 as a ‘virtual/in-person’ hybrid event at St Edmund Hall, Oxford, UK. ",
    url: "http://lpmhealthcare.com/phages-2025/",
    organization: "Phage Oxford"
  },
  {
    title: "Combat Antibiotic Resistance Through Phage Therapy Research",
    deadline: "January 28, 2025",
    description: "NIAID will fund two or three Centers in fiscal year 2026. Application budgets are not expected to exceed $1.2 million in annual direct costs. The scope of the project should determine the project period, with a maximum project period of 5 years.",
    url: "https://grants.nih.gov/grants/guide/rfa-files/RFA-AI-24-069.html",
    organization: "Centers for Accelerating Phage (Bacteriophage) Therapy to Combat ESKAPE Pathogens (CAPT-CEP)"
  }
];

export function Opportunities() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Funding Opportunities
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore current funding and training opportunities in phage research
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {opportunities.map((opportunity) => (
            <a
              key={opportunity.title}
              href={opportunity.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                <ExternalLink className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="text-sm text-indigo-600 mt-2">{opportunity.organization}</p>
              <p className="text-gray-600 mt-2">{opportunity.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Deadline: {opportunity.deadline}
                </span>
                <span className="text-sm font-medium text-indigo-600">
                  Learn more →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}