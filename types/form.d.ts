type ContactFormData = {
  name: string;
  email: string;
  message: string;
  gdprAccepted: boolean;
};

type ContactFormValues = ContactFormData /* | import('react-hook-form').FieldValues */;
