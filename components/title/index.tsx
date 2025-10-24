interface TitleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  titleClassName?: string;
  containerClassName?: string;
}

export default function Title({ level: Level, children, titleClassName = '', containerClassName }: TitleProps) {
  const titleElement = <Level className={titleClassName}>{children}</Level>;

  if (containerClassName) {
    return <div className={containerClassName}>{titleElement}</div>;
  }

  return titleElement;
}