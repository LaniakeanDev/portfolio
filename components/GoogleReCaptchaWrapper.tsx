"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function GoogleReCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RC_KEY;
  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={reCaptchaKey ?? "UNDEFINED"}
    >
      { children }
    </GoogleReCaptchaProvider>
  )
}