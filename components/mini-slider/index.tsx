'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface MiniSliderProps extends ILang {
  slides: Img[];
  className?: string;
  autoPlayInterval?: number;
}

export default function MiniSlider({ slides, className = '', autoPlayInterval = 5000, lang }: MiniSliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
    }, autoPlayInterval);
    return () => clearTimeout(timer);
  }, [currentSlideIndex, slideCount, autoPlayInterval]);

  return (
    <div className={`w-full grid place-items-center gap-6 relative ${className}`}>
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => (
          <div key={`slide${String(idx)}`} className="absolute top-0 left-0">
            <Image src={slide.src} alt={slide.alt[lang]} fill className="" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 h-12 w-full grid place-items-center">
        <div className="flex flex-row gap-4 z-20">
          {Array.from({ length: slideCount }).map((_, idx) => (
            <div
              key={`dot-${String(idx)}`}
              className={`p-2 h-2 w-2 cursor-pointer rounded-full ${idx === currentSlideIndex ? 'bg-red-500' : 'bg-slate-500'} ${className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
