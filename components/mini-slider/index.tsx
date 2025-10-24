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
    <div className={`w-full h-full gap-6 relative rounded-t-2xl ${className}`}>
      <div className="relative rounded-t-2xl w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={`slide${String(idx)}`}
            className={`absolute rounded-t-2xl top-0 left-0 w-full h-full ${idx == currentSlideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-800`}
          >
            <Image src={slide.src} alt={slide.alt[lang]} fill className="rounded-t-2xl" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 h-6 w-full grid place-items-center">
        <div className="flex flex-row gap-2 z-20">
          {Array.from({ length: slideCount }).map((_, idx) => (
            <div
              key={`dot-${String(idx)}`}
              className={`p-1 h-1 w-1 cursor-pointer rounded-full ${idx === currentSlideIndex ? 'bg-(--gold)' : 'bg-slate-400'} ${className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
