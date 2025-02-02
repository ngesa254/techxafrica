'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

/**
 * IotSolutions component displays a carousel of IoT-related content,
 * each with an image, title, description, and a call-to-action.
 */
export default function IotSolutions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // // Slides data
  // const slides = [
  //   {
  //     id: 1,
  //     title: 'Access your smart home wherever you roam',
  //     description:
  //       'Smart home controls that are flexible and customizable for every user, on any device.',
  //     image: '/smart-home-access.jpg',
  //     bgColor: 'bg-[#f8f3f1]',
  //   },
  //   {
  //     id: 2,
  //     title: 'TV puts your smart home in the spotlight',
  //     description:
  //       'TV Streamer ushers in new capabilities and control for your smart home',
  //     image: '/google-tv.jpg',
  //     bgColor: 'bg-[#f1f4f6]',
  //   },
  //   {
  //     id: 3,
  //     title: "Smart home tips for stress-free school breaks",
  //     description:
  //       "Home is your secret to thriving, not just surviving, when school's out for the kids.",
  //     image: '/school-breaks.jpg',
  //     bgColor: 'bg-[#f1f4f6]',
  //   },
  //   {
  //     id: 4,
  //     title: 'Spring 2024  Home Update',
  //     description: 'Enhanced controls and more.',
  //     image: '/spring-update.jpg',
  //     bgColor: 'bg-[#f8f3f1]',
  //   },
  //   {
  //     id: 5,
  //     title: "Brighten up your pet's day",
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


  const slides = [
    {
      id: 1,
      title: 'Home Security',
      description:
        'Tech X is the one you can rely on for smart home security. We offer monitoring, intrusion alarming, environmental protection to address safety concerns.',
      image: '/home-security1.jpg',
      bgColor: 'bg-[#f8f3f1]',
    },
    {
      id: 2,
      title: 'Industrial Application',
      description:
        'Tech X commit to deliver professional solutions to the industries, addressing different industrial requirement.',
      image: '/energy.jpg',
      bgColor: 'bg-[#f1f4f6]',
    },
    {
      id: 3,
      title: 'Enterprise - Energy Management',
      description:
        'Energy management and monitor, turn off all the air-con & lights at one time, saving labor cost. Integration with conference room reservation system, automatically releasing the conference if there is no people inside. Region and Role management, easy for the operator to manage. Live lighting and motion status on map.',
      image: '/school-breaks.jpg',
      bgColor: 'bg-[#f1f4f6]',
    },
    // {
    //   id: 3,
    //   title: 'Enterprise - Energy Management',
    //   description:
    //     'Optimize energy use by turning off all air-conditioning and lights at once, reducing labor costs. Seamless integration with conference room reservation systems ensures automatic room release if unoccupied. Region and role-based management simplifies operations, while live lighting and motion status updates provide real-time monitoring.',
    //   image: '/school-breaks.jpg',
    //   bgColor: 'bg-[#f1f4f6]',
    // },
    {
      id: 4,
      title: 'Real Estate',
      description:
        'Alarm monitoring when home owner is away. Public area ernegy management. APIs for property management system.',
      image: '/spring-update.jpg',
      bgColor: 'bg-[#f8f3f1]',
    },
    {
      id: 5,
      title: 'Hotel',
      description:
        'Dedicated QR code to control smart devices in your room after check-in. Automatically shut down lights and air-cons when away. APIs for hotel management system.',
      image: '/pet-home.jpg',
      bgColor: 'bg-[#e8e8e8]',
    },
    {
      id: 6,
      title: 'Smart lighting is helpful lighting',
      description: 'Sleep better, feel safer, save energy',
      image: '/smart-lighting.jpg',
      bgColor: 'bg-[#f3f1f8]',
    },
  ];

  /**
   * goToSlide moves the carousel to the specified index,
   * respecting animation state to prevent accidental double-clicks.
   */
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  /**
   * nextSlide shifts the carousel forward by 2 slides,
   * wrapping around if necessary.
   */
  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 2) % slides.length;
    goToSlide(nextIndex);
  }, [currentSlide, goToSlide, slides.length]);

  /**
   * prevSlide shifts the carousel backward by 2 slides,
   * wrapping around if necessary.
   */
  const prevSlide = useCallback(() => {
    const prevIndex = currentSlide === 0 ? slides.length - 2 : currentSlide - 2;
    goToSlide(prevIndex);
  }, [currentSlide, goToSlide, slides.length]);

  return (
    <div className="min-h-screen px-4 py-16 mx-auto max-w-[1400px]">
      {/* Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          aria-label="Previous slides"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
          aria-label="Next slides"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slides Container (2 columns at a time) */}
        <div className="grid grid-cols-2 gap-6">
          {slides.slice(currentSlide, currentSlide + 2).map((slide) => (
            <div
              key={slide.id}
              className={`rounded-[32px] overflow-hidden transition-all duration-500 ${slide.bgColor}`}
            >
              <div className="p-12 pb-0 space-y-4">
                <h2 className="text-[32px] font-medium leading-tight">
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-lg">{slide.description}</p>
                <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <div className="relative h-[400px] mt-8">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 2)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / 2) === index
                  ? 'bg-blue-600 w-4'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}