'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download } from 'lucide-react';

/**
 * ExtraComponent demonstrates additional promotional content
 * with images, text, and calls-to-action.
 */
export default function ExtraComponent() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="relative rounded-[32px] bg-[#f8f3f1] overflow-hidden p-12">
          <div className="max-w-md">
            <h1 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
              A smarter home starts with TECH X
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              The complete solution to control and automate devices in your home.
              <sup className="text-xs ml-1">1</sup>
            </p>
            <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 hover:bg-white/50 transition-colors">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="relative h-[400px] mt-8">
            <Image
              src="/family-couch.jpg"
              alt="Mother and daughter on yellow couch with smart home devices"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="relative rounded-[32px] bg-[#f1f4f9] overflow-hidden p-12">
          <div className="max-w-md">
            <h2 className="text-[40px] md:text-[48px] font-medium leading-tight mb-4">
              Your smart home, everywhere you go.
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              See what&apos;s happening at home with a glance and avoid missing important
              moments.
              <sup className="text-xs ml-1">2</sup>
            </p>
            <button className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#e8effe] hover:bg-[#d8e5fe] transition-colors">
              <Download className="w-4 h-4" />
              Download the app
            </button>
          </div>

          <div className="relative mt-12 flex justify-center">
            <div className="relative w-[280px] h-[560px]">
              <div className="absolute inset-0 -right-32 w-[600px] h-[600px] bg-[#e8effe] rounded-full -z-10" />
              <Image
                src="/app-screen.png"
                alt="TECH X app interface showing smart home controls"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}