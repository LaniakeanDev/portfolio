interface ThemedIconProps {
  icon: SVGComponent;
  darkIcon?: SVGComponent;
  alt: string;
  className: string;
  onClick?: () => void;
}

// type IconProps = Omit<ThemedIconProps, 'onClick' | 'darkSrc'>;

// function Icon({ icon: Icon, alt, className }: IconProps) {
// 	return (
// 		<Icon className={className} aria-label={alt} />
// 	)
// }

type DualIconProps = Omit<ThemedIconProps, 'onClick'>;

function DualIcon({ icon: Icon, alt, darkIcon: DarkIcon, className }: DualIconProps) {
  return (
    <>
      {!DarkIcon && <Icon className={className} aria-label={alt} />}
      {DarkIcon && (
        <>
          <Icon className={`hide-on-dark ${className}`} aria-label={alt} />
          <DarkIcon className={`show-on-dark ${className}`} aria-label={alt} />
        </>
      )}
    </>
  );
}

export default function ThemedIcon({ icon, alt, darkIcon, className, onClick }: ThemedIconProps) {
  return (
    <>
      {onClick ? (
        <button onClick={onClick} aria-label={alt}>
          <DualIcon icon={icon} darkIcon={darkIcon} alt={alt} className={className} />
        </button>
      ) : (
        <DualIcon icon={icon} darkIcon={darkIcon} alt={alt} className={className} />
      )}
    </>
  );
}
