// 'use client';
// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// export default function DevicesSection() {
//   return (
//     <section className="w-full min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-6">
//           Thousands of devices. Endless possibilities.
//         </h1>
        
//         <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
//           Enjoy seamless compatibility across all of your favorite Google
//           devices, and thousands of Works with Google Home partner brands.
//         </p>

//         <button 
//           className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
//         >
//           Explore all devices
//           <ArrowRight className="ml-2 w-5 h-5" />
//         </button>
//       </div>
//     </section>
//   );
// }


'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function DevicesSection() {
  return (
    <section className="w-full min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-medium text-gray-900 mb-6">
          Thousands of devices. Endless possibilities.
        </h1>
        
        <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
          Enjoy seamless compatibility across all of your favorite Smart
          devices, and thousands of Works with TECH X partner brands.
        </p>

        <button 
          className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Explore all devices
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
}