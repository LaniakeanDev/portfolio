import Image from "next/image";
import ContactForm from "./ContactForm";
import GoogleReCaptchaWrapper from "./GoogleReCaptchaWrapper";

export default function Contact({lang}:{lang: supportedLanguages}) {
  const content = {
    tagline: {
      en: 'Feel free to Contact me by submitting the form below and I will get back to you as soon as possible',
      fr: 'N’hésitez pas à me contacter en remplissant le formulaire ci-dessous, et je vous répondrai dès que possible.'
    }
  }
  return (
    <section className="w-full relative flex flex-col justify-center items-center px-4 py-10 sm:p-10 sm:py-16 bg-pfBlue" id="contact">
      <h2 className="mb-10">Contact</h2>
      <p className="text-md sm:text-xl text-center mb-12 lg:mb-24 max-w-[600px]">{content.tagline[lang]}</p>
      <GoogleReCaptchaWrapper>
        <ContactForm lang={lang} />
      </GoogleReCaptchaWrapper>
    </section>
  )
}