// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Brain, Building2, Code, Binary, CircuitBoard } from 'lucide-react';

// /**
//  * AiSolutions component showcases various AI-related services or products
//  * in a stylized grid format.
//  */
// export default function AiSolutions() {
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);

//   // List of AI solutions
//   const solutions = [
//     {
//       id: 'enterprise',
//       title: 'Enterprise AI',
//       description:
//         'Moving beyond chatbots, enterprise AI equips companies to transform every corner of their business and drive meaningful results.',
//       image: '/enterprise-ai.jpg',
//       icon: Brain,
//     },
//     {
//       id: 'smart-cities',
//       title: 'Smart Cities',
//       description:
//         'Municipalities can use AI to improve many facets of everyday life, from infrastructure and safety to EV charging and connected services.',
//       image: '/smart-cities.jpg',
//       icon: Building2,
//     },
//     {
//       id: 'data-analytics',
//       title: 'Data Analytics',
//       description:
//         'Businesses and cities are awash with data. Advanced analytics uncovers insights and accelerates the decision-making process.',
//       image: '/data-analytics.jpg',
//       icon: Binary,
//     },
//     {
//       id: 'iot',
//       title: 'IoT & Digital Twin',
//       description:
//         'From factory to farm to Fortune 500, IoT and digital twin technology helps monitor, refine and reinvent the enterprise.',
//       image: '/iot.jpg',
//       icon: CircuitBoard,
//     },
//     {
//       id: 'software',
//       title: 'Software Engineering',
//       description:
//         'Our software experts go beyond coding. We build intelligence into cloud-based platforms that fuel innovation and growth.',
//       image: '/software.jpg',
//       icon: Code,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#2E1065] text-white">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
//         <h1 className="text-5xl font-bold mb-6 text-[#67E8F9]">
//           Our AI Solutions
//         </h1>
//         <p className="text-xl max-w-4xl">
//           Global enterprises and governments trust our AI and data solutions to address
//           their most pressing challenges. We&apos;ve spent a decade developing advanced
//           tools that leverage technology for good, with an eye toward solving some of
//           the world&apos;s biggest problems.
//         </p>
//       </div>

//       {/* Solutions Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         {/* Main Solutions */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {solutions.slice(0, 2).map((solution) => {
//             const Icon = solution.icon;
//             return (
//               <div
//                 key={solution.id}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredCard(solution.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div
//                   className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
//                     hoveredCard === solution.id
//                       ? 'ring-2 ring-[#67E8F9] animate-border-pulse'
//                       : ''
//                   }`}
//                 >
//                   <div className="aspect-video relative">
//                     <Image
//                       src={solution.image}
//                       alt={solution.title}
//                       fill
//                       className="object-cover transition-transform duration-300 group-hover:scale-105"
//                       priority
//                     />
//                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
//                   </div>
//                   <div className="p-6 bg-[#2E1065]/90 relative">
//                     <div className="flex items-center gap-3">
//                       <Icon className="w-8 h-8 text-[#67E8F9]" />
//                       <h3 className="text-2xl font-semibold">
//                         {solution.title}
//                       </h3>
//                     </div>
//                     <p className="mt-3 text-gray-300">
//                       {solution.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Additional Solutions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//           {solutions.slice(2).map((solution) => {
//             const Icon = solution.icon;
//             return (
//               <div
//                 key={solution.id}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredCard(solution.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div
//                   className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
//                     hoveredCard === solution.id
//                       ? 'ring-2 ring-[#67E8F9] animate-border-pulse'
//                       : ''
//                   }`}
//                 >
//                   <div className="aspect-video relative">
//                     <Image
//                       src={solution.image}
//                       alt={solution.title}
//                       fill
//                       className="object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
//                   </div>
//                   <div className="p-6 bg-[#2E1065]/90 relative">
//                     <div className="flex items-center gap-3">
//                       <Icon className="w-8 h-8 text-[#67E8F9]" />
//                       <h3 className="text-xl font-semibold">
//                         {solution.title}
//                       </h3>
//                     </div>
//                     <p className="mt-3 text-sm text-gray-300">
//                       {solution.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }



// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Brain, Building2, Code, Binary, CircuitBoard } from 'lucide-react';

// /**
//  * AiSolutions component showcases various AI-related services or products
//  * in a stylized grid format.
//  */
// export default function AiSolutions() {
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);

//   // List of AI solutions
//   const solutions = [
//     {
//       id: 'enterprise',
//       title: 'Enterprise AI',
//       description:
//         'Moving beyond chatbots, enterprise AI equips companies to transform every corner of their business and drive meaningful results.',
//       image: '/enterprise-ai.jpg',
//       icon: Brain,
//     },
//     {
//       id: 'gen-ai',
//       title: 'Gen AI and Chatbots',
//       description:
//         '...',
//       image: '/ai-research.jpg',
//       icon: Brain,
//     },
//     {
//       id: 'smart-cities',
//       title: 'Smart Cities',
//       description:
//         'Municipalities can use AI to improve many facets of everyday life, from infrastructure and safety to EV charging and connected services.',
//       image: '/smart-cities.jpg',
//       icon: Building2,
//     },
//     {
//       id: 'smart-homes',
//       title: 'Smart Homes',
//       description:
//         '...',
//       image: '/smart-home-access.jpg',
//       icon: Building2,
//     },
//     {
//       id: 'data-analytics',
//       title: 'Data Analytics',
//       description:
//         'Businesses and cities are awash with data. Advanced analytics uncovers insights and accelerates the decision-making process.',
//       image: '/data-analytics.jpg',
//       icon: Binary,
//     },
//     {
//       id: 'electrical',
//       title: 'Eletrical Engineering',
//       description:
//         '...',
//       image: '/iot.jpg',
//       icon: CircuitBoard,
//     },
//     {
//       id: 'software',
//       title: 'Software Engineering',
//       description:
//         'Our software experts go beyond coding. We build intelligence into cloud-based platforms that fuel innovation and growth.',
//       image: '/software.jpg',
//       icon: Code,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#2E1065] text-white">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
//         <h1 className="text-5xl font-bold mb-6 text-[#67E8F9]">
//           Our AI Solutions
//         </h1>
//         <p className="text-xl max-w-4xl">
//           Global enterprises and governments trust our AI and data solutions to address
//           their most pressing challenges. We&apos;ve spent a decade developing advanced
//           tools that leverage technology for good, with an eye toward solving some of
//           the world&apos;s biggest problems.
//         </p>
//       </div>

//       {/* Solutions Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         {/* Main Solutions */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {solutions.slice(0, 4).map((solution) => {
//             const Icon = solution.icon;
//             return (
//               <div
//                 key={solution.id}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredCard(solution.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div
//                   className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
//                     hoveredCard === solution.id
//                       ? 'ring-2 ring-[#67E8F9] animate-border-pulse'
//                       : ''
//                   }`}
//                 >
//                   <div className="aspect-video relative">
//                     <Image
//                       src={solution.image}
//                       alt={solution.title}
//                       fill
//                       className="object-cover transition-transform duration-300 group-hover:scale-105"
//                       priority
//                     />
//                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
//                   </div>
//                   <div className="p-6 bg-[#2E1065]/90 relative">
//                     <div className="flex items-center gap-3">
//                       <Icon className="w-8 h-8 text-[#67E8F9]" />
//                       <h3 className="text-2xl font-semibold">
//                         {solution.title}
//                       </h3>
//                     </div>
//                     <p className="mt-3 text-gray-300">
//                       {solution.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Additional Solutions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//           {solutions.slice(4).map((solution) => {
//             const Icon = solution.icon;
//             return (
//               <div
//                 key={solution.id}
//                 className="relative group"
//                 onMouseEnter={() => setHoveredCard(solution.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div
//                   className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
//                     hoveredCard === solution.id
//                       ? 'ring-2 ring-[#67E8F9] animate-border-pulse'
//                       : ''
//                   }`}
//                 >
//                   <div className="aspect-video relative">
//                     <Image
//                       src={solution.image}
//                       alt={solution.title}
//                       fill
//                       className="object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
//                   </div>
//                   <div className="p-6 bg-[#2E1065]/90 relative">
//                     <div className="flex items-center gap-3">
//                       <Icon className="w-8 h-8 text-[#67E8F9]" />
//                       <h3 className="text-xl font-semibold">
//                         {solution.title}
//                       </h3>
//                     </div>
//                     <p className="mt-3 text-sm text-gray-300">
//                       {solution.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Brain, Building2, Code, Binary, CircuitBoard } from 'lucide-react';

/**
 * AiSolutions component showcases various AI-related services or products
 * in a stylized grid format.
 */
export default function AiSolutions() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // List of AI solutions
  const solutions = [
    {
      id: 'enterprise',
      title: 'Enterprise AI',
      description:
        'Moving beyond chatbots, enterprise AI equips companies to transform every corner of their business and drive meaningful results.',
      image: '/enterprise-ai.jpg',
      icon: Brain,
    },
    {
      id: 'gen-ai',
      title: 'Gen AI and Chatbots',
      description:
        'Leveraging cutting-edge generative AI and natural language processing to create intelligent, context-aware conversational interfaces that transform user experiences.',
      image: '/gen-ai.jpg',
      icon: Brain,
    },
    {
      id: 'smart-cities',
      title: 'Smart Cities',
      description:
        'Municipalities can use AI to improve many facets of everyday life, from infrastructure and safety to EV charging and connected services.',
      image: '/smartcities.avif',
      icon: Building2,
    },
    {
      id: 'smart-buildings',
      title: 'Smart Buildings',
      description:
        'Creating intelligent living spaces that adapt to residents\'s needs, integrating automation, security, and energy management for enhanced comfort and efficiency.',
      image: '/smart-house.jpg',
      icon: Building2,
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description:
        'Businesses and cities are awash with data. Advanced analytics uncovers insights and accelerates the decision-making process.',
      image: '/data-analytics.jpg',
      icon: Binary,
    },
    {
      id: 'electrical',
      title: 'Electrical Engineering',
      description:
        'Designing and implementing sophisticated electrical systems that power the future of technology, from renewable energy solutions to smart grid infrastructure.',
      image: '/iot.jpg',
      icon: CircuitBoard,
    },
    {
      id: 'software',
      title: 'Software Engineering',
      description:
        'Our software experts go beyond coding. We build intelligence into cloud-based platforms that fuel innovation and growth.',
      image: '/software.jpg',
      icon: Code,
    },
  ];

  return (
    <div className="min-h-screen bg-[#2E1065] text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <h1 className="text-5xl font-bold mb-6 text-[#67E8F9]">
        Your Agentic AI future begins here:
        </h1>
        <p className="text-xl max-w-4xl">
          Global enterprises and governments trust our AI and data solutions to address
          their most pressing challenges. We&apos;ve spent a decade developing advanced
          tools that leverage technology for good, with an eye toward solving some of
          the world&apos;s biggest problems.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Main Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.slice(0, 4).map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    hoveredCard === solution.id
                      ? 'ring-2 ring-[#67E8F9] animate-border-pulse'
                      : ''
                  }`}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                  <div className="p-6 bg-[#2E1065]/90 relative">
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8 text-[#67E8F9]" />
                      <h3 className="text-2xl font-semibold">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-gray-300">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {solutions.slice(4).map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    hoveredCard === solution.id
                      ? 'ring-2 ring-[#67E8F9] animate-border-pulse'
                      : ''
                  }`}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                  <div className="p-6 bg-[#2E1065]/90 relative">
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8 text-[#67E8F9]" />
                      <h3 className="text-xl font-semibold">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm text-gray-300">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}