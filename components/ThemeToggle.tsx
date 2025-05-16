'use client'


import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
// import SunIcon from '../public/icons/sun.svg';
// import MoonIcon from '../public/icons/moon.svg';
import Image from 'next/image';
import ThemedIcon from './ThemedIcon';

export default function ThemeToggle({className}:{className?:string}) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();


  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button className="btn btn-ghost btn-circle">
        <div className="w-[28px] h-[28px]"></div> {/* Placeholder */}
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`btn btn-ghost btn-circle ${className}`}
      aria-label="Toggle theme"
    >
      {/* {theme === 'dark' ? (
        // <SunIcon className="w-5 h-5" />
        <Image 
          src="icons/sun.svg"
          alt="light color scheme"
          width={28}
          height={28}
        />
      ) : (
        // <MoonIcon className="w-5 h-5" />
        <Image 
          src="icons/moon.svg"
          alt="dark color scheme"
          width={28}
          height={28}
        />
      )} */}
      <ThemedIcon
        src="icons/moon.svg"
        darkSrc="icons/sun.svg"
        alt="theme toggle icon"
        width={28}
        height={28}
      />
    </button>
  )
}