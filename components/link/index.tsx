import Link from 'next/link';

export function InternalLink({
  href,
  label,
  icon: Icon,
  iconClassName = '',
  alt,
  children,
  className = '',
  opensInNewTab = false,
  // inline,
}: ILink) {
  return Icon ? (
    <Link
      href={href}
      className={`flex flex-row justify-center items-center gap-2 ${className}`}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
    >
      <Icon role="img" aria-label={alt} className={iconClassName} />
      {label && <p>{label}</p>}
    </Link>
  ) : (
    <Link
      href={href}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
      className={`grid place-items-center ${className}`}
    >
      {label || children}
    </Link>
  );
}

export function ExternalLink({
  href,
  label,
  icon: Icon,
  iconClassName = '',
  alt,
  children,
  className = '',
  opensInNewTab = true,
  inline,
}: ILink) {
  return Icon ? (
    <a
      href={href}
      aria-label={alt}
      className={`${className}`}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
    >
      <div className={`flex flex-row justify-center items-center gap-2 ${className}`}>
        <Icon role="img" aria-label={alt} className={iconClassName} />
        {label && <p>{label}</p>}
      </div>
    </a>
  ) : (
    <a
      href={href}
      aria-label={label}
      className={`${className}`}
      target={opensInNewTab ? '_blank' : undefined}
      rel={opensInNewTab ? 'noopener noreferrer' : undefined}
    >
      {inline ? (
        <span>{label}</span>
      ) : (
        <div className={`grid place-items-center`}>
          {/* <p>{label || children}</p> */}
          {label && <p>{label}</p>}
          {children && children}
        </div>
      )}
    </a>
  );
}
