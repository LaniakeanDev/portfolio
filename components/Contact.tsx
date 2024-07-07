import Image from "next/image";
import ContactForm from "./ContactForm";
import GooGleCaptchaWrapper from "./GoogleCaptchaWrapper";

export default function Contact() {
  return (
    <section className="w-full relative flex flex-col justify-center items-center px-4 py-10 sm:p-10">
      <Image
        src="/contact.png" 
        alt="Fractal Background Image"
        className="bgImg"
        fill
      />
      <h2 className="mb-10">Contact</h2>
      <p className="text-md sm:text-xl text-center mb-12 lg:mb-24 max-w-[600px]">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <GooGleCaptchaWrapper>
        <ContactForm />
      </GooGleCaptchaWrapper>
    </section>
  )
}