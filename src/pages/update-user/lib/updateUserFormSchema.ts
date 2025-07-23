import z from "zod";

export const updateUserFormSchema = z.object({
  name: z.string().min(1, "Required field").max(64, "Max length - 64 chars"),
  surName: z.string().min(1, "Required field").max(64, "Max length - 64 chars"),
  fullName: z.string().min(1, "Required field").max(130, "Max length - 130 chars"),
  password: z.string().optional(),
  email: z.email("Invalid Email").min(1, "Required field"),
  birthDate: z.date().optional(),
  telephone: z.string().optional(),
  employment: z.string().optional(),
  userAgreement: z.boolean().optional()
});

export type TUpdateUserFormSchema = z.infer<typeof updateUserFormSchema>;
