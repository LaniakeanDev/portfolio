import Title from '@/components/title';

interface ServiceCardProps {
  icon: SVGComponent;
  title: string;
  description: string;
  list: LocalizedText[];
  lang: supportedLanguages;
}

export default function ServiceCard({ icon: Icon, title, description, list, lang }: ServiceCardProps) {
  return (
    <div>
      <Icon />
      <Title level="h3">{title}</Title>
      <p>{description}</p>
      <ul>
        {list.map((item, idx) => (
          <li key={`${title}-list-${String(idx)}`}>
            <p>{item[lang]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
