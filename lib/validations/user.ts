import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "MINIMUM OF THREE CHARACTERS" })
    .max(30, { message: "MAXIMIUM OF THIRTY CHARACTERS" }),
  username: z
    .string()
    .min(3, { message: "MINIMUM OF THREE CHARACTERS" })
    .max(30, { message: "MAXIMIUM OF THIRTY CHARACTERS" }),
  bio: z.string().min(3).max(1000),
});
