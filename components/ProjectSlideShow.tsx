"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProjectSlideShowProps {
  picSrcs: string[];
  alt: string;
  className?: string;
}

export default function ProjectSlideShow({picSrcs, alt, className}: ProjectSlideShowProps) {
  const [currentPicScrIndex1, setCurrentPicSrcIndex1] = useState<number>(0);
  const [currentPicScrIndex2, setCurrentPicSrcIndex2] = useState<number>(1);
  const imgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    const nextPic1 = () => {
      img.classList.remove('fade');
      setCurrentPicSrcIndex1((currentPicScrIndex1 + 2) % picSrcs.length);
      setTimeout(() => {
        setCurrentPicSrcIndex2((currentPicScrIndex2 + 2) % picSrcs.length)
        img.classList.add('fade');
      }, 3000);
    }
    const intervalID = setInterval(nextPic1, 5000);
    return () => {
      clearInterval(intervalID);
    };
  },[currentPicScrIndex1, currentPicScrIndex2, picSrcs.length]);
  return (
    <div className={className}>
      <div ref={imgRef} className="img-transition absolute top-0 left-0 h-full w-full z-10">
        <Image 
          src={picSrcs[currentPicScrIndex1]}
          alt={alt}
          fill
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full z-0">
        <Image 
          src={picSrcs[currentPicScrIndex2]}
          alt={alt}
          fill
        />
      </div>
    </div>
  )
}