type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant?: string;
}

const Button = ({ type, title, /*icon,*/ variant }: ButtonProps) => {
  return (
    <button
    className={`flexCenter rounded-md ${variant} bg-pfYellow border-2 border-white text-pfDark px-16 py-2`}
      type={type}
    >
      <label>{title}</label>      
    </button>
  )
}

export default Button