import Title from '../title';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function PageSection({ children, className = '', title }: PageSectionProps) {
  return (
    <section className={`flex flex-col justify-center items-center px-2 sm:px-6 py-8 w-full ${className}`}>
      {title && (
        <Title level="h2" titleClassName="mb-12 sm:mb-16 text-center text-3xl sm:text-5xl font-semibold font-cinzel">
          {title}
        </Title>
      )}
      {children}
    </section>
  );
}