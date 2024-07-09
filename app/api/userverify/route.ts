import { NextResponse } from "next/server";

// export async function POST(request: Request, response: Response) {
  export async function POST(request: Request) {
  const secretKey = process.env.RC_SECRET;
  const postData = await request.json();
  const { gRecaptchaToken } = postData;
  
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        secret: secretKey,
        response: gRecaptchaToken
      }),
    });
    // const gResponse = await res.json();
    console.log('reponse de google', res);
    return res;
  }
  catch {}
}