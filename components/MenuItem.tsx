"use client";

interface MenuItemProps {
  label: string;
  target: string;
  textClassName?: string;
}

export default function MenuItem({label, target, textClassName}:MenuItemProps) {
  const handleClick = (destination: string) => {
    document.getElementById(destination)?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <button
      type="button"
      onClick={() => handleClick(target)}
    >
      <p className={`text-xl sm:text-base ${textClassName}`}>{label}</p>
    </button>
  )
}