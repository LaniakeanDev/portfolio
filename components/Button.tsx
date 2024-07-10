"use client"

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant?: string;
  target?: string;
}

const Button = ({ type, title, /*icon,*/ variant, target }: ButtonProps) => {
  const handleClick = () => {
    if (target) {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth'
    })
    }
  }
  return (
    <button
    className={`flexCenter rounded-md ${variant} bg-pfYellow border-2 border-white text-pfDark px-16 py-2 cursor-pointer`}
      type={type}
      onClick={handleClick}
    >
      {title}      
    </button>
  )
}

export default Button