// 'use client';

// import React from 'react';

// /**
//  * The Welcome component renders the hero section
//  * that welcomes users and showcases a device display demo.
//  */
// export default function Welcome() {
//   return (
//     <div className="relative px-6 pt-16 pb-24 lg:px-8">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//         {/* Left Column - Text */}
//         <div className="space-y-8">
//           <h1 className="text-6xl font-bold text-gray-900 leading-tight">
//             Welcome to a more helpful home
//           </h1>
//           <p className="text-xl text-gray-600 max-w-lg">
//             Discover smart devices that make your home more comfortable,
//             efficient, and connected than ever before.
//           </p>
//           <div className="flex space-x-4">
//             <button className="px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
//               Learn More
//             </button>
//             <button className="px-8 py-3 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200">
//               Shop Devices
//             </button>
//           </div>
//         </div>

//         {/* Right Column - Device Display */}
//         <div className="relative">
//           <div className="relative w-full aspect-square">
//             {/* Circular Progress Indicator */}
//             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48">
//               <div className="relative w-full h-full">
//                 <svg className="w-full h-full transform -rotate-90">
//                   <circle
//                     className="text-gray-200"
//                     strokeWidth="6"
//                     stroke="currentColor"
//                     fill="transparent"
//                     r="90"
//                     cx="96"
//                     cy="96"
//                   />
//                   <circle
//                     className="text-blue-500"
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                     stroke="currentColor"
//                     fill="transparent"
//                     r="90"
//                     cx="96"
//                     cy="96"
//                     strokeDasharray="565.48"
//                     strokeDashoffset="141.37"
//                   />
//                 </svg>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                   <p className="text-sm text-gray-600">5 mins left</p>
//                   <p className="text-xs text-gray-500">Pause</p>
//                 </div>
//               </div>
//             </div>

//             {/* Device Image Placeholder */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="w-64 h-64 bg-gray-200 rounded-full relative">
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import React from 'react';

/**
 * The Welcome component renders the hero section
 * that welcomes users and showcases a device display demo.
 */
export default function Welcome() {
  return (
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
  );
}

