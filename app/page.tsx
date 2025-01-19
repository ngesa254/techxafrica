// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Home() {
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
//   const [isPlaying, setIsPlaying] = useState(true);

//   // Calculate progress for the circle
//   const radius = 90;
//   const circumference = 2 * Math.PI * radius;
//   const progressOffset = ((300 - timeLeft) / 300) * circumference;

//   // Timer effect
//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isPlaying && timeLeft > 0) {
//       timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isPlaying, timeLeft]);

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             {/* Logo */}
//             <div className="flex items-center">
//               <Image
//                 src="/google-home-logo.png"
//                 alt="Google Home"
//                 width={32}
//                 height={32}
//                 className="h-8 w-8"
//                 priority
//               />
//               <span className="ml-2 text-xl text-gray-800 font-normal">Google Home</span>
//             </div>

//             {/* Navigation Tabs */}
//             <div className="hidden md:flex items-center">
//               <div className="relative">
//                 <nav className="flex space-x-8">
//                   {['Welcome', 'About Google Home', 'Get inspired', 'Explore devices'].map((item, index) => (
//                     <button
//                       key={item}
//                       className={`px-1 py-2 text-base ${
//                         index === 0
//                           ? 'text-blue-600 border-b-2 border-blue-600'
//                           : 'text-gray-500 hover:text-gray-700'
//                       }`}
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </nav>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
//               Go to Google Home
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <main className="pt-16">
//         <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
//           {/* Wooden Floor Background */}
//           <div 
//             className="absolute inset-0 opacity-50"
//             style={{
//               backgroundImage: `repeating-linear-gradient(
//                 90deg,
//                 rgb(210, 180, 140, 0.1) 0px,
//                 rgb(210, 180, 140, 0.1) 150px,
//                 rgb(200, 170, 130, 0.1) 150px,
//                 rgb(200, 170, 130, 0.1) 300px
//               )`
//             }}
//           />

//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               {/* Text Content */}
//               <div className="relative z-10">
//                 <h1 className="text-7xl font-light text-gray-900 leading-tight">
//                   Welcome<br />
//                   to a more<br />
//                   helpful home
//                 </h1>
//               </div>

//               {/* Robot Vacuum Section */}
//               <div className="relative">
//                 <div className="relative w-full aspect-square">
//                   {/* Vacuum Robot */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-64 h-64 bg-white rounded-full shadow-xl relative">
//                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gray-200 rounded-full" />
//                       <div className="absolute bottom-4 right-4 w-4 h-4 bg-gray-300 rounded-full" />
//                     </div>
//                   </div>

//                   {/* Progress Circle */}
//                   <div className="absolute right-0 top-1/2 -translate-y-1/2">
//                     <div className="relative w-48 h-48">
//                       <svg className="w-full h-full transform -rotate-90">
//                         {/* Background circle */}
//                         <circle
//                           className="text-gray-200"
//                           strokeWidth="4"
//                           stroke="currentColor"
//                           fill="transparent"
//                           r={radius}
//                           cx="96"
//                           cy="96"
//                         />
//                         {/* Progress circle */}
//                         <circle
//                           className="text-blue-400"
//                           strokeWidth="4"
//                           strokeLinecap="round"
//                           stroke="currentColor"
//                           fill="transparent"
//                           r={radius}
//                           cx="96"
//                           cy="96"
//                           strokeDasharray={circumference}
//                           strokeDashoffset={progressOffset}
//                           style={{ transition: 'stroke-dashoffset 0.5s' }}
//                         />
//                       </svg>

//                       {/* Control Buttons */}
//                       <div className="absolute bottom-0 right-0 flex space-x-2">
//                         <button 
//                           className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
//                           onClick={() => setIsPlaying(false)}
//                         >
//                           <div className="w-3 h-3 bg-gray-600" />
//                         </button>
//                         <button 
//                           className="w-12 h-8 bg-blue-100 rounded-full shadow-lg flex items-center justify-center"
//                           onClick={() => setIsPlaying(true)}
//                         >
//                           <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-blue-600" />
//                         </button>
//                       </div>

//                       {/* Time Display */}
//                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                         <p className="text-sm font-medium text-gray-700">
//                           {Math.floor(timeLeft / 60)} mins left
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {isPlaying ? 'Playing' : 'Pause'}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }







// // app/page.tsx
// 'use client';

// import React, { useState } from 'react';
// import { Home } from 'lucide-react';

// export default function HomePage() {
//   const [activeTab, setActiveTab] = useState('welcome');

//   const tabs = [
//     { id: 'welcome', label: 'Welcome' },
//     { id: 'about', label: 'About' },
//     { id: 'services', label: 'Services' },
//     { id: 'inspired', label: 'Get inspired' },
//     { id: 'partner', label: 'Become a partner' },
//     { id: 'explore', label: 'Explore devices' },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Bar */}
//       <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
//         <div className="flex items-center space-x-2">
//           <Home className="w-8 h-8 text-blue-500" />
//           <span className="text-xl font-medium">TECH X</span>
//         </div>

//         <div className="hidden md:flex">
//           <div className="flex space-x-8">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`relative py-4 text-base transition-colors duration-200 ${
//                   activeTab === tab.id ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 {tab.label}
//                 {activeTab === tab.id && (
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>

//         <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
//           Get A Quote
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative px-6 pt-16 pb-24 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//           {/* Left Column - Text */}
//           <div className="space-y-8">
//             <h1 className="text-6xl font-bold text-gray-900 leading-tight">
//               Welcome to a more helpful home
//             </h1>
//             <p className="text-xl text-gray-600 max-w-lg">
//               Discover smart devices that make your home more comfortable, 
//               efficient, and connected than ever before.
//             </p>
//             <div className="flex space-x-4">
//               <button className="px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
//                 Learn More
//               </button>
//               <button className="px-8 py-3 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
//                 Shop Devices
//               </button>
//             </div>
//           </div>

//           {/* Right Column - Device Display */}
//           <div className="relative">
//             <div className="relative w-full aspect-square">
//               {/* Circular Progress Indicator */}
//               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48">
//                 <div className="relative w-full h-full">
//                   <svg className="w-full h-full transform -rotate-90">
//                     <circle
//                       className="text-gray-200"
//                       strokeWidth="6"
//                       stroke="currentColor"
//                       fill="transparent"
//                       r="90"
//                       cx="96"
//                       cy="96"
//                     />
//                     <circle
//                       className="text-blue-500"
//                       strokeWidth="6"
//                       strokeLinecap="round"
//                       stroke="currentColor"
//                       fill="transparent"
//                       r="90"
//                       cx="96"
//                       cy="96"
//                       strokeDasharray="565.48"
//                       strokeDashoffset="141.37"
//                     />
//                   </svg>
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                     <p className="text-sm text-gray-600">5 mins left</p>
//                     <p className="text-xs text-gray-500">Pause</p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Device Image Placeholder */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-64 h-64 bg-gray-200 rounded-full relative">
//                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// // START

// 'use client';

// import React, { useState } from 'react';
// import NavigationBar from '../component/NavigationBar';
// import Welcome from '../component/Welcome';

// /**
//  * HomePage is the main entry point for the Next.js application.
//  * It manages the active tab state and renders the NavigationBar
//  * and the Welcome (hero) components.
//  */
// export default function HomePage() {
//   // State for currently active navigation tab
//   const [activeTab, setActiveTab] = useState('welcome');

//   // Define navigation tabs
//   const tabs = [
//     { id: 'welcome', label: 'Welcome' },
//     { id: 'about', label: 'About' },
//     { id: 'services', label: 'Services' },
//     { id: 'inspired', label: 'Get inspired' },
//     { id: 'partner', label: 'Become a partner' },
//     { id: 'explore', label: 'Explore devices' },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation Bar */}
//       <NavigationBar
//         tabs={tabs}
//         activeTab={activeTab}
//         setActiveTab={setActiveTab}
//       />

//       {/* Welcome (Hero) Section */}
//       <Welcome />
//     </div>
//   );
// }



'use client';

import React, { useState } from 'react';

/* 
  Importing our components from the 'component' folder.
  Ensure these files exist and are named exactly as imported.
*/
import NavigationBar from '../component/NavigationBar';
import Welcome from '../component/Welcome';
import AiSolutions from '../component/AiSolutions';
import IotSolutions from '../component/IotSolutions';
import ExtraComponent from '../component/ExtraComponent';

/**
 * HomePage is the main entry point for the Next.js application.
 * It manages the active tab state and renders the NavigationBar,
 * Welcome, AiSolutions, IotSolutions, and ExtraComponent sections.
 */
export default function HomePage() {
  // State for currently active navigation tab
  const [activeTab, setActiveTab] = useState('welcome');

  // Define navigation tabs
  const tabs = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'inspired', label: 'Get inspired' },
    { id: 'partner', label: 'Become a partner' },
    { id: 'explore', label: 'Explore devices' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <NavigationBar
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Welcome (Hero) Section */}
      <Welcome />

      {/* AI Solutions Section */}
      <AiSolutions />

      {/* IoT Solutions Section */}
      <IotSolutions />

      {/* Extra Section */}
      <ExtraComponent />
    </div>
  );
}



// AISolutions component
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Brain, Building2, Code, Binary, CircuitBoard } from 'lucide-react';

// export default function HomePage() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const solutions = [
//     {
//       id: 'enterprise',
//       title: 'Enterprise AI',
//       description: 'Moving beyond chatbots, enterprise AI equips companies to transform every corner of their business and drive meaningful results.',
//       image: '/enterprise-ai.jpg',
//       icon: Brain,
//     },
//     {
//       id: 'smart-cities',
//       title: 'Smart Cities',
//       description: 'Municipalities can use AI to improve many facets of everyday life, from infrastructure and safety to EV charging and connected services.',
//       image: '/smart-cities.jpg',
//       icon: Building2,
//     },
//     {
//       id: 'data-analytics',
//       title: 'Data Analytics',
//       description: 'Businesses and cities are awash with data. Advanced analytics uncovers insights and accelerates the decision-making process.',
//       image: '/data-analytics.jpg',
//       icon: Binary,
//     },
//     {
//       id: 'iot',
//       title: 'IoT & Digital Twin',
//       description: 'From factory to farm to Fortune 500, IoT and digital twin technology helps monitor, refine and reinvent the enterprise.',
//       image: '/iot.jpg',
//       icon: CircuitBoard,
//     },
//     {
//       id: 'software',
//       title: 'Software Engineering',
//       description: 'Our software experts go beyond coding. We build intelligence into cloud-based platforms that fuel innovation and growth.',
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
//           Global enterprises and governments trust our AI and data solutions to address their most pressing challenges. We've spent a decade developing advanced tools that leverage technology for good, with an eye toward solving some of the world's biggest problems.
//         </p>
//       </div>

//       {/* Solutions Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
//         {/* Main Solutions */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {solutions.slice(0, 2).map((solution) => (
//             <div
//               key={solution.id}
//               className="relative group"
//               onMouseEnter={() => setHoveredCard(solution.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div 
//                 className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
//                   hoveredCard === solution.id ? 'ring-2 ring-[#67E8F9] animate-border-pulse' : ''
//                 }`}
//               >
//                 <div className="aspect-video relative">
//                   <Image
//                     src={solution.image}
//                     alt={solution.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                     priority={true}
//                   />
//                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
//                 </div>
//                 <div className="p-6 bg-[#2E1065]/90 relative">
//                   <div className="flex items-center gap-3">
//                     <solution.icon className="w-8 h-8 text-[#67E8F9]" />
//                     <h3 className="text-2xl font-semibold">{solution.title}</h3>
//                   </div>
//                   <p className="mt-3 text-gray-300">{solution.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Solutions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//           {solutions.slice(2).map((solution) => (
//             <div
//               key={solution.id}
//               className="relative group"
//               onMouseEnter={() => setHoveredCard(solution.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div 
//                 className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
//                   hoveredCard === solution.id ? 'ring-2 ring-[#67E8F9] animate-border-pulse' : ''
//                 }`}
//               >
//                 <div className="aspect-video relative">
//                   <Image
//                     src={solution.image}
//                     alt={solution.title}
//                     fill
//                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
//                 </div>
//                 <div className="p-6 bg-[#2E1065]/90 relative">
//                   <div className="flex items-center gap-3">
//                     <solution.icon className="w-8 h-8 text-[#67E8F9]" />
//                     <h3 className="text-xl font-semibold">{solution.title}</h3>
//                   </div>
//                   <p className="mt-3 text-sm text-gray-300">{solution.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// // app/page.tsx remove
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Brain, Building2, Code, Binary, CircuitBoard } from 'lucide-react';

// export default function HomePage() {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const solutions = [
//     {
//       id: 'enterprise',
//       title: 'Enterprise AI',
//       description: 'Moving beyond chatbots, enterprise AI equips companies to transform every corner of their business and drive meaningful results.',
//       image: '/enterprise-ai.jpg',
//       icon: Brain,
//     },
//     {
//       id: 'smart-cities',
//       title: 'Smart Cities',
//       description: 'Municipalities can use AI to improve many facets of everyday life, from infrastructure and safety to EV charging and connected services.',
//       image: '/smart-cities.jpg',
//       icon: Building2,
//     },
//     {
//       id: 'data-analytics',
//       title: 'Data Analytics',
//       description: 'Businesses and cities are awash with data. Advanced analytics uncovers insights and accelerates the decision-making process.',
//       image: '/data-analytics.jpg',
//       icon: Binary,
//     },
//     {
//       id: 'iot',
//       title: 'IoT & Digital Twin',
//       description: 'From factory to farm to Fortune 500, IoT and digital twin technology helps monitor, refine and reinvent the enterprise.',
//       image: '/iot.jpg',
//       icon: CircuitBoard,
//     },
//     {
//       id: 'software',
//       title: 'Software Engineering',
//       description: 'Our software experts go beyond coding. We build intelligence into cloud-based platforms that fuel innovation and growth.',
//       image: '/software.jpg',
//       icon: Code,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#2E1065]">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-8 pt-20 pb-16">
//         <h1 className="text-[64px] font-bold mb-8 text-[#67E8F9] leading-tight">
//           Our AI Solutions
//         </h1>
//         <p className="text-[20px] max-w-4xl text-white/90 leading-relaxed">
//           Global enterprises and governments trust our AI and data solutions to address their most pressing challenges. We've spent a decade developing advanced tools that leverage technology for good, with an eye toward solving some of the world's biggest problems.
//         </p>
//       </div>

//       {/* Solutions Grid */}
//       <div className="max-w-7xl mx-auto px-8 pb-32">
//         {/* Main Solutions */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {solutions.slice(0, 2).map((solution) => (
//             <div
//               key={solution.id}
//               className="relative group"
//               onMouseEnter={() => setHoveredCard(solution.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div 
//                 className={`relative rounded-lg overflow-hidden transition-all duration-500 ${
//                   hoveredCard === solution.id ? 'outline outline-2 outline-[#67E8F9]' : ''
//                 }`}
//               >
//                 <div className="aspect-[16/9] relative">
//                   <Image
//                     src={solution.image}
//                     alt={solution.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     priority={true}
//                   />
//                   <div className="absolute inset-0 bg-[#2E1065]/30 mix-blend-multiply" />
//                 </div>
//                 <div className="p-8 bg-[#2E1065] relative">
//                   <div className="flex items-center gap-4">
//                     <solution.icon className="w-10 h-10 text-[#67E8F9]" />
//                     <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
//                   </div>
//                   <p className="mt-4 text-[17px] text-white/80 leading-relaxed">{solution.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Solutions */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
//           {solutions.slice(2).map((solution) => (
//             <div
//               key={solution.id}
//               className="relative group"
//               onMouseEnter={() => setHoveredCard(solution.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div 
//                 className={`relative rounded-lg overflow-hidden transition-all duration-500 ${
//                   hoveredCard === solution.id ? 'outline outline-2 outline-[#67E8F9]' : ''
//                 }`}
//               >
//                 <div className="aspect-[16/9] relative">
//                   <Image
//                     src={solution.image}
//                     alt={solution.title}
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-[#2E1065]/30 mix-blend-multiply" />
//                 </div>
//                 <div className="p-6 bg-[#2E1065] relative">
//                   <div className="flex items-center gap-3">
//                     <solution.icon className="w-8 h-8 text-[#67E8F9]" />
//                     <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
//                   </div>
//                   <p className="mt-3 text-[15px] text-white/80 leading-relaxed">{solution.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// //IoT SOlutions component

// 'use client';

// import React, { useState, useCallback } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// const slides = [
//   {
//     id: 1,
//     title: 'Access your smart home wherever you roam',
//     description: 'Smart home controls that are flexible and customizable for every user, on any device.',
//     image: '/smart-home-access.jpg',
//     bgColor: 'bg-[#f8f3f1]',
//   },
//   {
//     id: 2,
//     title: 'Google TV puts your smart home in the spotlight',
//     description: 'Google TV Streamer ushers in new capabilities and control for your smart home',
//     image: '/google-tv.jpg',
//     bgColor: 'bg-[#f1f4f6]',
//   },
//   {
//     id: 3,
//     title: 'Smart home tips for stress-free school breaks',
//     description: 'Google Home is your secret to thriving, not just surviving, when school\'s out for the kids.',
//     image: '/school-breaks.jpg',
//     bgColor: 'bg-[#f1f4f6]',
//   },
//   {
//     id: 4,
//     title: 'Spring 2024 Google Home Update',
//     description: 'Enhanced controls and more.',
//     image: '/spring-update.jpg',
//     bgColor: 'bg-[#f8f3f1]',
//   },
//   {
//     id: 5,
//     title: 'Brighten up your pet\'s day',
//     description: 'Learn how to create a pet-friendly smart home',
//     image: '/pet-home.jpg',
//     bgColor: 'bg-[#e8e8e8]',
//   },
//   {
//     id: 6,
//     title: 'Smart lighting is helpful lighting',
//     description: 'Sleep better, feel safer, save energy',
//     image: '/smart-lighting.jpg',
//     bgColor: 'bg-[#f3f1f8]',
//   },
// ];

// export default function HomePage() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const goToSlide = useCallback((index: number) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide(index);
//     setTimeout(() => setIsAnimating(false), 500);
//   }, [isAnimating]);

//   const nextSlide = useCallback(() => {
//     const nextIndex = (currentSlide + 2) % slides.length;
//     goToSlide(nextIndex);
//   }, [currentSlide, goToSlide]);

//   const prevSlide = useCallback(() => {
//     const prevIndex = currentSlide === 0 ? slides.length - 2 : currentSlide - 2;
//     goToSlide(prevIndex);
//   }, [currentSlide, goToSlide]);

//   return (
//     <div className="min-h-screen px-4 py-16 mx-auto max-w-[1400px]">
//       {/* Carousel */}
//       <div className="relative">
//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
//           aria-label="Previous slides"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
        
//         <button
//           onClick={nextSlide}
//           className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
//           aria-label="Next slides"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Slides Container */}
//         <div className="grid grid-cols-2 gap-6">
//           {slides.slice(currentSlide, currentSlide + 2).map((slide) => (
//             <div
//               key={slide.id}
//               className={`rounded-[32px] overflow-hidden transition-all duration-500 ${slide.bgColor}`}
//             >
//               <div className="p-12 pb-0 space-y-4">
//                 <h2 className="text-[32px] font-medium leading-tight">
//                   {slide.title}
//                 </h2>
//                 <p className="text-gray-600 text-lg">
//                   {slide.description}
//                 </p>
//                 <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors">
//                   Read more
//                   <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </div>
//               <div className="relative h-[400px] mt-8">
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-3 mt-12">
//           {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index * 2)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 Math.floor(currentSlide / 2) === index
//                   ? 'bg-blue-600 w-4'
//                   : 'bg-gray-300'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* See All Button */}
//         <div className="flex justify-center mt-8">
//           <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
//             See all
//             <ArrowRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



//Extra component
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { ArrowRight, Download } from 'lucide-react';

// export default function Home() {
//   return (
//     <main className="min-h-screen p-4 md:p-8 max-w-[1400px] mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left Column */}
//         <div className="relative rounded-[32px] bg-[#f8f3f1] overflow-hidden p-12">
//           <div className="max-w-md">
//             <h1 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
//               A smarter home starts with Google Home
//             </h1>
//             <p className="text-gray-600 text-lg mb-8">
//               The complete solution to control and automate devices in your home.
//               <sup className="text-xs ml-1">1</sup>
//             </p>
//             <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 hover:bg-white/50 transition-colors">
//               Learn More
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
          
//           <div className="relative h-[400px] mt-8">
//             <Image
//               src="/family-couch.jpg"
//               alt="Mother and daughter on yellow couch with smart home devices"
//               fill
//               className="object-cover rounded-2xl"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="relative rounded-[32px] bg-[#f1f4f9] overflow-hidden p-12">
//           <div className="max-w-md">
//             <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
//               Your smart home, everywhere you go.
//             </h2>
//             <p className="text-gray-600 text-lg mb-8">
//               See what's happening at home with a glance and avoid missing important moments.
//               <sup className="text-xs ml-1">2</sup>
//             </p>
//             <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#e8effe] hover:bg-[#d8e5fe] transition-colors">
//               <Download className="w-4 h-4" />
//               Download the app
//             </button>
//           </div>

//           <div className="relative mt-12 flex justify-center">
//             <div className="relative w-[280px] h-[560px]">
//               <div className="absolute inset-0 -right-32 w-[600px] h-[600px] bg-[#e8effe] rounded-full -z-10" />
//               <Image
//                 src="/app-screen.png"
//                 alt="Google Home app interface showing smart home controls"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }