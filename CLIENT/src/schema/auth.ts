import { z } from "zod";

const genderSchema = z.enum(["PRIA", "PEREMPUAN"]);

const signupRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gender: genderSchema,
  email: z
    .string()
    .min(1, "Invalid email field is empty")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "confirm Password must be at least 6 characters long"),
});

// const signupResponseSchema = z.object({
//   access_token: z.string(),
//   refresh_token: z.string(),
// });

const signinRequestSchema = z.object({
  email: z
    .string()
    .min(1, "Invalid email field is empty")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "confirm Password must be at least 6 characters long"),
});

// const signinResponseSchema = z.object({
//   access_token: z.string(),
//   refresh_token: z.string(),
// });

export {
  signupRequestSchema,
  // signupResponseSchema,
  signinRequestSchema,
  // signinResponseSchema,
  genderSchema,
};
