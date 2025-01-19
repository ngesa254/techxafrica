
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
    { id: 'services', label: 'Digital Services' },
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