import PageSection from '../section';
import { content, testimonials } from './content';

export default function Testimonials({ lang }: ILang) {
  return (
    <PageSection title={content.title[lang]}>
      <ul>
        {testimonials.map((testimonial, idx) => (
          <li key={`test${String(idx)}`}>
            <div>stars</div>
            <p>{testimonial.text[lang]}</p>
            <p>{testimonial.name}</p>
            <p>{testimonial.role}</p>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
