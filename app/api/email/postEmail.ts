

export default async function postEmail(formData: ContactFormValues): Promise<IEmailResponse> {
  try {
    const response: Response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    // console.log('POST handler response', response);
    const data = await response.json();
    // console.log('returned data', data);
    return {
      status: response.status,
      message: data.message,
    };
  } catch (error) {
    return {
      status: 500,
      message: 'Internal server error',
    };
  }
}