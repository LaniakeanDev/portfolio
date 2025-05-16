export const dynamic = 'force-dynamic'; // defaults to auto

export async function fetcher(data: IEmailBody): Promise<IEmailResponse> {
  const id: string | undefined = process.env.MJ_ID;
  const pwd: string | undefined = process.env.MJ_PW;
  const credentials = Buffer.from(`${id}:${pwd}`).toString('base64');
  const senderEmail: string = process.env.SENDER_EMAIL || '';
  const receiverEmail: string = process.env.RECEIVER_EMAIL || '';

  console.log({senderEmail});

  const { name, email, message } = data;
  const mailjetData: IMailjetEmailBody = {
    // SandboxMode: true,
    Messages: [
      {
        From: {
          Email: senderEmail,
          Name: 'Portfolio Contact Form',
        },
        To: [
          {
            Email: receiverEmail,
            Name: 'Laniakean',
          },
        ],
        Subject: `Portfolio Contact from ${name}`,
        TextPart: message,
        HTMLPart: `<h3>Sender info</h3><p>Nom: ${name}<br>Email: ${email}</p><p>Message:</p><p>${message}</p>`,
      },
    ],
  };
  try {
    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(mailjetData),
    });
    const responseData = await response.json();
    return { 
      message: responseData.Messages[0].Status
    };
  }
  catch {
    return { 
      message: 'An error occurred while sending the email'
    }
  }
}
