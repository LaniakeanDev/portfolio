interface ButtonProps {
  label?: string;
  icon?: SVGComponent;
  alt?: string;
  submit?: boolean;
  disabled?: boolean;
  children?: string | React.ReactElement;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  label,
  icon: Icon,
  alt,
  submit,
  disabled,
  children,
  onClick,
  className = '',
}: ButtonProps) {
  return Icon ? (
    <Icon
      role="button"
      type={submit ? 'submit' : 'button'}
      aria-label={alt}
      className={`grid place-items-center ${disabled ? 'cursor-default' : ''} ${className}`}
      onClick={onClick}
    />
  ) : (
    <button
      type={submit ? 'submit' : 'button'}
      className={`grid place-items-center ${disabled ? 'cursor-default' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
}
