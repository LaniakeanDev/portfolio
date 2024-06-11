type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant?: string;
}

const Button = ({ type, title, /*icon,*/ variant }: ButtonProps) => {
  return (
    <button
    className={`flexCenter rounded-sm ${variant}`}
      type={type}
    >
      <label>{title}</label>      
    </button>
  )
}

export default Button