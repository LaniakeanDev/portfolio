"use client";

interface MenuItemProps {
  label: string;
  target: string;
  textClassName?: string;
  menuCloser?: (bool: boolean) => void;
}

export default function MenuItem({label, target, textClassName, menuCloser}:MenuItemProps) {
  const handleClick = (destination: string) => {
    menuCloser && menuCloser(false);
    document.getElementById(destination)?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <button
      type="button"
      onClick={() => handleClick(target)}
    >
      <p className={`text-xl ${menuCloser ? 'text-white' : ''} sm:text-base ${textClassName}`}>{label}</p>
    </button>
  )
}