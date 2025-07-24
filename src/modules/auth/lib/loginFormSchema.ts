import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "Required field")
});

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
