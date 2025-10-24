'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BackToTopProps {
  className?: string;
}

export default function BackToTop({ className }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    if (!isVisible && window.scrollY > window.innerHeight * 0.75) {
      setIsVisible(true);
    } else if (isVisible && window.scrollY < window.innerHeight * 0.75) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisible);
    return () => {
      window.removeEventListener('scroll', handleVisible);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`h-9 w-9 md:h-11 md:w-11 fixed bottom-4 right-4 z-50 sm:opacity-80 hover:opacity-100 ${className}`}>
      <Image
        src="/back-to-top.svg"
        alt="Back To Top"
        className={`scrollToTopButton ${isVisible ? 'visible' : ''}`}
        onClick={() => scrollToTop()}
        fill
      />
    </div>
  );
}
