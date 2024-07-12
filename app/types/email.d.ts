

interface IEmailResponse {
  status?: number;
  message: string;
}

interface IEmailBody {
  name: string;
  email: string;
  message: string;
  gdprAccepted: boolean;
}

interface IMailjetEmailBody {
  SandboxMode?: boolean;
  Messages: [
    {
      From: {
        Email: string;
        Name: string;
      };
      To: [
        {
          Email: string;
          Name: string;
        },
      ];
      Subject: string;
      TextPart: string;
      HTMLPart: string;
    },
  ];
}