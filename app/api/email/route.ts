import { NextRequest, NextResponse } from 'next/server';
import payloadSchema from '@/app/utils/validate';

import { fetcher as sendEmail } from '@/app/api/email/sendMailjetEmail';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data: IEmailBody = await request.json();

    data.name = data.name.trim();
    data.email = data.email.trim();
    data.message = data.message.trim();

    const validation = payloadSchema.safeParse(data);
    if (!validation.success) {
      return NextResponse.json({ message: validation.error.format() }, { status: 400 });
    }

    const response = await sendEmail(data);
    // console.log('our mailjet fetcher response', response);
    const { status } = response;
    if (status === 200) {
      return NextResponse.json({ message: 'success' }, { status: 200 });
    }
    return NextResponse.json({ message: 'an error occurred' }, { status });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
