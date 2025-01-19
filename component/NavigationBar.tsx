// 'use client';

// import React from 'react';
// import { Home } from 'lucide-react';

// /**
//  * NavigationBarProps defines the shape of the props
//  * that this component receives from its parent.
//  */
// interface NavigationBarProps {
//   tabs: { id: string; label: string }[];
//   activeTab: string;
//   setActiveTab: React.Dispatch<React.SetStateAction<string>>;
// }

// /**
//  * NavigationBar component displays the site logo, a tab-based menu,
//  * and the "Get A Quote" button.
//  */
// export default function NavigationBar({
//   tabs,
//   activeTab,
//   setActiveTab,
// }: NavigationBarProps) {
//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <Home className="w-8 h-8 text-blue-500" />
//         <span className="text-xl font-medium">TECH X</span>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="hidden md:flex">
//         <div className="flex space-x-8">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`relative py-4 text-base transition-colors duration-200 ${
//                 activeTab === tab.id
//                   ? 'text-blue-600'
//                   : 'text-gray-600 hover:text-gray-900'
//               }`}
//             >
//               {tab.label}
//               {activeTab === tab.id && (
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
//               )}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Get A Quote Button */}
//       <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
//         Get A Quote
//       </button>
//     </nav>
//   );
// }


'use client';

import React from 'react';
import { Home } from 'lucide-react';

/**
 * NavigationBarProps defines the shape of the props
 * that this component receives from its parent.
 */
interface NavigationBarProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * NavigationBar component displays the site logo, a tab-based menu,
 * and the "Get A Quote" button.
 */
export default function NavigationBar({
  tabs,
  activeTab,
  setActiveTab,
}: NavigationBarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Home className="w-8 h-8 text-blue-500" />
        <span className="text-xl font-medium">TECH X</span>
      </div>

      {/* Navigation Tabs (visible on md+ screens) */}
      <div className="hidden md:flex">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative py-4 text-base transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
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

      {/* Get A Quote Button */}
      <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
        Get A Quote
      </button>
    </nav>
  );
}