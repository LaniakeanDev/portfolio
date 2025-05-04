"use client";

interface MenuItemProps {
  label: string;
  target: string;
}

export default function MenuItem({label, target}:MenuItemProps) {
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
      <p>{label}</p>
    </button>
  )
}