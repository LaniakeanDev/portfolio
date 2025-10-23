import Title from '@/components/title';
import IconComponent from '../../icon/IconComponent';

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  list: string[];
  // lang: TSupportedLanguages;
}

export default function ServiceCard({ icon, title, description, list /* lang */ }: ServiceCardProps) {
  return (
    <li className="rounded-2xl p-8 w-[95vw] max-w-md min-h-[500px] select-none hover-scale card">
      <IconComponent name={icon} className="w-12 h-12 mb-4" />
      <Title level="h3" titleClassName="text-2xl mt-4 mb-6 font-semibold text-(--gold)">
        {title}
      </Title>
      <p className="mb-8 mx-4">{description}</p>
      <ul className="list-disc mx-8">
        {list.map((item, idx) => (
          <li key={`${title}-list-${String(idx)}`}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
