"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import contactSchema from '@/app/utils/validate';
import postEmail from '@/app/api/email/postEmail';
import CheckBox from "./CheckBox";


function ContactForm() {
  const {
    formState: { isValid, errors },
    register,
    handleSubmit,
    reset,
    // resetField,
    // setValue,
    watch
  } = useForm<ContactFormData>({ 
    mode: 'onBlur', 
    reValidateMode: 'onChange', 
    resolver: zodResolver(contactSchema),
  });

  const gdprAcceptedIsChecked = watch('gdprAccepted', false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const submitHandler = async (data: ContactFormValues) => {
    if (!isValid || !executeRecaptcha) {
      // console.error('form not validated');
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
    console.log(captchaRes);
    if (!captchaRes.ok) {
      return;
    }
    // add here action to be triggered when submitting
    const response = await postEmail(data);
    console.log('postEmail fetcher response', response);
    reset();
  };

  return (
    <form 
      onSubmit={handleSubmit(submitHandler)}
      className="max-w-[600px] p-6 min-[500px]:p-10 sm:p-16 bg-pfLightBlue rounded-md"
    >
      <input 
        type="text" 
        aria-invalid={errors.name ? 'true' : 'false'}
        placeholder="Name"
        {...register('name')}
        className="w-full p-2 rounded-sm text-black"
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
        className="w-full p-2 rounded-sm text-black"
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
        placeholder="Your message here"
        {...register('message')}
        className="w-full p-2 rounded-sm text-black min-h-64"
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
        <p className="w-[90%] text-xs mb-6">
          I consent to the processing of the information entered. {/*To learn more [about my rights and the purposes of the processing], I consult the privacy policy.*/} This form is protected by reCAPTCHA. The Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </p>
      </div>
      <div className="w-full grid place-items-end">
        <button
          className={`py-2 w-96 ${!isValid || !gdprAcceptedIsChecked ? 'opacity-50 !cursor-default' : ''} bg-pfYellow rounded-md cursor-pointer max-w-40 grid place-items-center text-black`}
          type="submit"
          disabled={!isValid || !gdprAcceptedIsChecked }
        >
          Submit
        </button>
      </div>
    </form>
  );

}

export default ContactForm;