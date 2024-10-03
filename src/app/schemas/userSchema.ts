import { z } from "zod";

export const formUser = z.object({
  firstname: z
    .string()
    .min(0, { message: "This field is required" })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
      message: "First name must only contain letters",
    }),
  lastname: z
    .string()
    .min(2, { message: "This field is required" })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
      message: "Last name must only contain letters",
    }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  enquiryType: z.string(),
  message: z.string().min(12),
  consent: z.boolean().refine((v) => v === true, {
    message: "To submit this form, please consent to being contacted",
  }),
});

export type Inputs = z.infer<typeof formUser>;
