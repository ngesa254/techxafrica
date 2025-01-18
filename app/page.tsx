// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }



// "use client";

// import Image from "next/image";
// import Head from "next/head";

// export default function Home() {
//   return (
//     <>
//       {/* Basic SEO/head */}
//       <Head>
//         <title>Google Home Clone</title>
//         <meta
//           name="description"
//           content="Google Home-like homepage clone using Next.js"
//         />
//       </Head>

//       {/* Top Navigation Bar */}
//       <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
//         <div className="flex items-center space-x-2">
//           {/* Logo area -- you can replace with a real logo image */}
//           <div className="w-6 h-6">
//             <Image
//               src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Home_logo.png/640px-Google_Home_logo.png"
//               alt="Google Home Logo"
//               width={24}
//               height={24}
//             />
//           </div>
//           <span className="font-semibold text-lg">Google Home</span>
//         </div>

//         {/* Nav Links */}
//         <nav className="hidden md:flex space-x-8 text-sm font-medium">
//           <a href="#" className="hover:underline">
//             Welcome
//           </a>
//           <a href="#" className="hover:underline">
//             About Google Home
//           </a>
//           <a href="#" className="hover:underline">
//             Get inspired
//           </a>
//           <a href="#" className="hover:underline">
//             Explore devices
//           </a>
//         </nav>

//         {/* CTA Button */}
//         <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 text-sm">
//           Go to Google Home
//         </button>
//       </header>

//       {/* Hero Section */}
//       <main className="relative w-full h-[80vh] overflow-hidden">
//         {/* Background / Robot Vacuum Image */}
//         <div className="absolute inset-0 -z-10">
//           {/* Make sure you have a file named robot-vacuum.jpg in your /public/images folder */}
//           <Image
//             src="/images/robot-vacuum.jpg"
//             alt="Robot Vacuum on Wooden Floor"
//             fill
//             style={{ objectFit: "cover", objectPosition: "center" }}
//           />
//         </div>

//         {/* Overlay with gradient or slight darkening if needed */}
//         <div className="absolute inset-0 bg-white/40" />

//         {/* Content Container */}
//         <div className="relative flex flex-col items-start justify-center h-full px-8">
//           <h1 className="text-5xl md:text-7xl font-bold max-w-[600px] mb-6">
//             Welcome to a more helpful home
//           </h1>
//           {/* If you want a subheading or descriptive text below */}
//           {/* <p className="text-xl md:text-2xl max-w-[500px] mb-8">
//             Subheading text here...
//           </p> */}

//           {/* Circular UI overlay (simulate the vacuum overlay circle) */}
//           <div className="absolute right-8 bottom-16 w-40 h-40 rounded-full border-4 border-blue-300 flex flex-col items-center justify-center text-center bg-white/50 backdrop-blur-sm shadow-lg">
//             {/* Inside the circle */}
//             <div className="flex space-x-4 mb-2">
//               {/* Square icon - Pause */}
//               <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-md cursor-pointer">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <rect x="6" y="4" width="4" height="16" />
//                   <rect x="14" y="4" width="4" height="16" />
//                 </svg>
//               </div>

//               {/* Play icon - or skip icon, etc. */}
//               <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-md cursor-pointer">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path d="M5 3v18l15-9-15-9z" />
//                 </svg>
//               </div>
//             </div>

//             {/* Text under the icons */}
//             <p className="text-sm font-medium text-gray-700">
//               5 mins left
//               <br />
//               <span className="text-xs text-gray-500">Pause</span>
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }


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







// app/page.tsx
'use client';

import React, { useState } from 'react';
import { Home } from 'lucide-react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('welcome');

  const tabs = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'about', label: 'About tech x africa ' },
    { id: 'services', label: 'Services' },
    { id: 'inspired', label: 'Get inspired' },
    { id: 'explore', label: 'Explore devices' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <div className="flex items-center space-x-2">
          <Home className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-medium">TECH X</span>
        </div>

        <div className="hidden md:flex">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-4 text-base transition-colors duration-200 ${
                  activeTab === tab.id ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
          Get in Touch
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 pt-16 pb-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-gray-900 leading-tight">
              Welcome to a more helpful home
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Discover smart devices that make your home more comfortable, 
              efficient, and connected than ever before.
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
                Learn More
              </button>
              <button className="px-8 py-3 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
                Shop Devices
              </button>
            </div>
          </div>

          {/* Right Column - Device Display */}
          <div className="relative">
            <div className="relative w-full aspect-square">
              {/* Circular Progress Indicator */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48">
                <div className="relative w-full h-full">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      className="text-gray-200"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="96"
                      cy="96"
                    />
                    <circle
                      className="text-blue-500"
                      strokeWidth="6"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="90"
                      cx="96"
                      cy="96"
                      strokeDasharray="565.48"
                      strokeDashoffset="141.37"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <p className="text-sm text-gray-600">5 mins left</p>
                    <p className="text-xs text-gray-500">Pause</p>
                  </div>
                </div>
              </div>
              
              {/* Device Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-200 rounded-full relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}