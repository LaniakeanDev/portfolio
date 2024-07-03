import { z } from 'zod';

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Your name should be at least two characters long" })
    .max(128, { message: "Your name should be at most 128 characters long" }),
  email: z.string().min(1, { message: 'Please provide an email address' }).email({ message: 'Invalid email address' }),
  message: z
    .string()
    .min(10, { message: "Your message should be at least ten characters long" })
    .max(4096, { message: "Your message should be at most 4096 characters long" }),
  gdprAccepted: z.boolean(),
});

export default contactSchema;
