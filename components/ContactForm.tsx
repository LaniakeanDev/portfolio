"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import contactSchema from '@/app/utils/validate';
import postEmail from '@/app/api/email/postEmail';
import CheckBox from "./CheckBox";
import { useState } from "react";


function ContactForm({lang}:{lang: supportedLanguages}) {
  const content = {
    sentMessage: {
      en: 'Your email has been sent successfully',
      fr: 'Votre email a été envoyé avec succès'
    },
    legalText: {
      en: ['I consent to the processing of the information entered. This form is protected by reCAPTCHA. The Google','Privacy Policy', 'and','Terms of Service','apply'],
      fr: [
        'Je consens au traitement des informations saisies. Ce formulaire est protégé par reCAPTCHA. Les',
        'Politique de confidentialité',
        'et',
        'Conditions d’utilisation',
        'de Google s’appliquent.'
      ]
    },
    submit: {
      en: 'Submit',
      fr: 'Envoyer'
    },
    message: {
      en: 'Your message here',
      fr: 'Votre message ici'
    },
    name: {
      en: 'Name',
      fr: 'Nom'
    }
  }
  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
    reset,
    watch
  } = useForm<ContactFormData>({ 
    mode: 'onBlur', 
    reValidateMode: 'onChange', 
    resolver: zodResolver(contactSchema),
  });

  const gdprAcceptedIsChecked = watch('gdprAccepted', false);

  const [isSent, setIsSent] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const submitHandler = async (data: ContactFormValues) => {
    if (!isValid || !executeRecaptcha) {
      return;
    }
    const gRecaptchaToken = await executeRecaptcha('inquirySubmit');
    const captchaRes = await fetch('/api/userverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gRecaptchaToken })
    }); 
    const bodyData = await captchaRes.json();
    // console.log('bodyData:', bodyData);
    if (!bodyData.success) {
      return;
    }
    const response = await postEmail(data);
    if (response.message === 'success') setIsSent(true)
    reset();
  };


  return isSent ? 
    (
      <div className="max-w-[600px] min-h-[657px] w-full p-6 min-[500px]:p-10 sm:p-16 bg-pfLightBlue rounded-md grid place-items-center">
        <p className="text-center">
          Your email has been sent successfully
        </p>
      </div>
    )
    :
    (
    <form 
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-[400px] xs:max-w-[600px] py-8 px-6 min-[500px]:p-10 sm:p-16 card rounded-md"
    >
      <input 
        type="text" 
        aria-invalid={errors.name ? 'true' : 'false'}
        placeholder={content.name[lang]}
        {...register('name')}
        className="w-full p-2 rounded-sm text-black form-field"
        autoComplete="on"
      />
      <div className="min-h-6 mb-2">
        <p>
          {errors.name && (
            <span className="text-red-400 text-xs font-Poppins" role="alert">
              {errors?.name?.message}
            </span>
          )}
        </p>
      </div>
      <input
        type="email"
        aria-invalid={errors.email ? 'true' : 'false'}
        placeholder="Email"
        {...register('email')}
        className="w-full p-2 rounded-sm text-black form-field"
        autoComplete="on"
      />
      <div className="min-h-6 mb-2">
        <p>
          {errors.email && (
            <span className="text-red-400 text-xs font-Poppins" role="alert">
              {errors?.email?.message}
            </span>
          )}
        </p>
      </div>
      <textarea
        aria-invalid={errors.message ? 'true' : 'false'}
        placeholder={content.message[lang]}
        {...register('message')}
        className="w-full p-2 rounded-sm text-black min-h-64 form-field"
      />
      <div className="min-h-6 mb-2">
        <p>
          {errors.message && (
            <span className="text-red-400 text-xs font-Poppins" role="alert">
              {errors?.message?.message}
            </span>
          )}
        </p>
      </div>
      <div className="flex gap-1">
        <div className="relative min-w-6">
          <input
            className="absolute top-0 left-0 w-4 h-4 z-10 opacity-0"
            id="rgpd"
            type="checkbox"
            {...register('gdprAccepted')}
            disabled={false}
          />
          <CheckBox 
            isChecked={gdprAcceptedIsChecked} 
            className="absolute top-0 left-0 w-4 h-4 z-0" 
            height={16}
            width={16}
          />
        </div>
        <p className="w-[90%] text-xs mb-6 hidden text-white">
          I consent to the processing of the information entered. {/*To learn more [about my rights and the purposes of the processing], I consult the privacy policy.*/} This form is protected by reCAPTCHA. The Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
        <p className="w-[90%] text-xs mb-6 text-white">
          {content.legalText[lang][0]} <a href="https://policies.google.com/privacy">{content.legalText[lang][1]}</a> {content.legalText[lang][2]} <a href="https://policies.google.com/terms">{content.legalText[lang][3]}</a> {content.legalText[lang][4]}.
        </p>
      </div>
      <div className="w-full grid place-items-end">
        <button
          className={`py-2 w-96 ${!isValid || !gdprAcceptedIsChecked ? 'opacity-50 !cursor-default' : ''} bg-pfYellow rounded-md cursor-pointer max-w-40 grid place-items-center text-black`}
          type="submit"
          disabled={!isValid || !gdprAcceptedIsChecked }
        >
          {content.submit[lang]}
        </button>
      </div>
    </form>
  )

  // :
  // (
  //   <div className="max-w-[600px] min-h-[657px] w-full p-6 min-[500px]:p-10 sm:p-16 bg-pfLightBlue rounded-md grid place-items-center">
  //     <p className="text-center">
  //       Your email has been sent successfully
  //     </p>
  //   </div>
  // )
}

export default ContactForm;