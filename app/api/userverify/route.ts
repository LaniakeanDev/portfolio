import { NextResponse } from "next/server";

  export async function POST(request: Request) {
  const secretKey = process.env.RC_SECRET || '';
  const postData = await request.json();
  const { gRecaptchaToken } = postData;
  
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(gRecaptchaToken)}`,
    });
    const resData = await res.json();
    // console.log('gResponse', resData);
    return NextResponse.json({success: resData.success});
  }
  catch {}
}