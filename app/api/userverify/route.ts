import { NextResponse } from "next/server";

  export async function POST(request: Request): Promise<NextResponse> {
  const secretKey = process.env.RC_SECRET || '';
  const postData = await request.json();
  const { gRecaptchaToken } = postData;
  
  try {
    const apiResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(gRecaptchaToken)}`,
    });
    const apiResponseData = await apiResponse.json();
    // console.log('gResponse', resData);
    return NextResponse.json({success: apiResponseData.success});
  }
  catch (error) {
    return NextResponse.json({ success: false, error: 'An Error occured' }, {
      status: 500,
    })
  }
}