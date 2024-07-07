"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function GooGleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const reCaptchaKey = process.env.RC_KEY;
  return (
    <GoogleReCaptchaProvider 
      reCaptchaKey={reCaptchaKey ?? "UNDEFINED"}
    >
      { children }
    </GoogleReCaptchaProvider>
  )
}