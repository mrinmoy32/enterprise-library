import {z} from "zod";

export const signUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.email(),
    universityId: z.coerce.number(),
    universityCard: z.string().nonempty("university card is required"),
    password: z.string().min(8, "Password must be at least 6 characters long"),
})

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must be at least 6 characters long"),
})