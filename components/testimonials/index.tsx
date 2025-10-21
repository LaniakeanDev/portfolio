import PageSection from '../section';
import { content, testimonials } from './content';

interface StarProps {
  className: string;
}

function Star({ className }: StarProps) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,20 122,70 176,76 136,112 148,164 100,138 52,164 64,112 24,76 78,70" fill="#FFD700" />
    </svg>
  );
}

export default function Testimonials({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <ul>
        {testimonials.map((testimonial, idx) => (
          <li key={`test${String(idx)}`} className="bg-white/10 rounded-xl px-8 pt-6 pb-4 w-[95vw] max-w-sm">
            <ul className="flex flex-row gap-0.5">
              {Array.from({ length: testimonial.stars }).map((_, idx) => (
                <li key={`star-${String(idx)}`}>
                  <Star className="w-6 h-6" />
                </li>
              ))}
            </ul>
            <p className="my-4">{testimonial.text[lang]}</p>
            <p className="text-right">{testimonial.name}</p>
            <p className="text-right">{testimonial.role}</p>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
