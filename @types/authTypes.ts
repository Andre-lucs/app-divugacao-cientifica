import { LoginSchema } from "@/src/components/Forms/LoginForm";
import { RegisterFormStepOneSchema, RegisterFormStepTwoSchema } from "@/src/components/Forms/RegisterForm";
import { z } from "zod";

export interface AuthContextDataType {
  isSignedIn: boolean;
  username: string;
  authToken: string;
  email: string;
}

export type LoginData = z.infer<typeof LoginSchema>;
export type RegisterFormResponse = z.infer<typeof RegisterFormStepOneSchema> & z.infer<typeof RegisterFormStepTwoSchema>;

