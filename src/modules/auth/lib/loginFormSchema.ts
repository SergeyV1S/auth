import { z } from "zod";

export const loginFormSchema = z
  .object({
    email: z.email("Invalid email"),
    password: z.string().min(1, "Required field"),
    confirmPassword: z.string().min(1, "Required field")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  });

export type TLoginFormSchema = z.infer<typeof loginFormSchema>;
