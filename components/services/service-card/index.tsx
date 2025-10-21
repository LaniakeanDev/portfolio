import Title from '@/components/title';
import IconComponent from '../../icon/IconComponent';

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  list: string[];
  // lang: supportedLanguages;
}

export default function ServiceCard({ icon, title, description, list /* lang */ }: ServiceCardProps) {
  return (
    <li className="bg-black/30 rounded-2xl p-8 w-[95vw] max-w-sm h-[450px] select-none hover:scale-105 transition-all duration-300 border border-white/10 hover:border-(--light-blue)/60">
      <IconComponent name={icon} className="w-12 h-12 mb-4" />
      <Title level="h3" titleClassName="text-2xl mt-4 mb-8 font-semibold">
        {title}
      </Title>
      <p className="mb-4">{description}</p>
      <ul className="list-disc mx-4">
        {list.map((item, idx) => (
          <li key={`${title}-list-${String(idx)}`}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </li>
  );
}
