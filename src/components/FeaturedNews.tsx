import React from 'react';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  
  {
    id: 5,
    title: "Could a virus be the cure? Phage-hunters search contaminated waters for bacteria-targeting viruses",
    date: "December 09, 2024",
    description: "While most would recognize these polluted water sources as a health hazard and steer clear, infectious disease researchers Martin Georges and Moses “Musa” Gachoya seek them out to try to find helpful bacteriophages that can combat antibiotic-resistant superbugs.",
    imageUrl: "/images/news/news1.webp",
  url: "https://www.dvidshub.net/news/480731/could-virus-cure-phage-hunters-search-contaminated-waters-bacteria-targeting-viruses"
},
  {
    id: 6,
    title: "An alternative to antibiotics could work wonders in Africa. It isn’t being used.",
    date: "October 1, 2024",
    description: "Bacteria-eating viruses might be able to fight antibiotic resistance where new treatments are most needed.",
    imageUrl: "/images/news/news2.webp",
    url: "https://www.vox.com/the-highlight/373174/phage-therapy-antiobiotic-resistance-africa-innovation"
  },
  {
    id: 2,
    title: "Are cures for some of the world’s deadliest diseases hiding in our sewers?",
    date: "December 16, 2022",
    description: "Scientists are turning to a surprising ally in the battle against drug-resistant bacteria: A special type of virus found in our most polluted places.",
    imageUrl: "https://i.natgeofe.com/n/bd6db176-dfa1-4e5a-b956-03f72f42466f/7.jpg?w=2560&h=1706",
    url: "https://www.nationalgeographic.com/magazine/article/are-cures-deadliest-diseases-sewers-superbug-resistant-bacteriophage-phage-virus"
  },
  {
    id: 3,
    title: "Kenya: Viruses to Complement Antibiotics in Treatment",
    date: "March 23, 2022",
    description: "Though viruses have been known to cause diseases in human beings and animals, they could be the solution to fighting antimicrobial resistance (AMR) and averting 10 million deaths expected annually by 2050.s",
    imageUrl: "/images/news/news4.jpg",
    url: "https://scienceafrica.co.ke/2022/03/23/kenya-viruses-to-complement-antibiotics-in-treatment/"
  },
  {
    id: 1,
    title: "Kenyan scientists find viruses to kill stubborn bacteria",
    date: "March 22, 2022",
    description: "These viruses only attack and kill the bacteria but are harmless to people",
    imageUrl: "/images/news/news5.jpg",
    url: "https://www.the-star.co.ke/news/2022-03-22-kenyan-scientists-find-viruses-to-kill-stubborn-bacteria"
  },
  {
    id: 4,
    title: "The role of phages: A fight against antibiotic resistance in poultry farms in Kenya",
    date: "June 24, 2019",
    description: "Scientists at the International Livestock Research Institute (ILRI) are looking at using phages to kill strains of bacteria that are known to cause disease in poultry farms in Kenya.",
    imageUrl: "/images/news/news6.jpg",
    url: "https://www.amr-insights.eu/the-role-of-phages-a-fight-against-antibiotic-resistance-in-poultry-farms-in-kenya/"
  },
];

export function FeaturedNews() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest News</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay updated with the latest developments in phage research and community activities
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.id} className="flex flex-col items-start">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="aspect-[16/9] w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <time className="text-sm leading-6 text-indigo-600">{item.date}</time>
                <h3 className="mt-2 text-xl font-semibold leading-6 text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={item.url} target="_blank"
                  className="inline-flex items-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}