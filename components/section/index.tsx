import Title from '../title';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

export default function PageSection({ children, className = '', id = '', title }: PageSectionProps) {
  return (
    <section
      className={`flex flex-col justify-center items-center px-2 sm:px-6 py-16 w-full mb-16 ${className}`}
      id={id}
    >
      {title && (
        <Title
          level="h2"
          titleClassName="mb-16 sm:mb-20 md:mb-24 text-center text-2xl 2xs:text-3xl sm:text-5xl font-semibold title-color"
        >
          {title}
        </Title>
      )}
      {children}
    </section>
  );
}
