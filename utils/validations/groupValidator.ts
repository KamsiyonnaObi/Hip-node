import { z } from "zod";

export const schema = z.object({
    title: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(20, { message: "Must be 20 or less characters long" }),
    image: z
    .string(),
    userId: z
    .number()
    .positive()
    .min(1, { message: "Must be 1 or more" }),
    createdAt: z
    .number()
    .positive()
    .min(1, { message: "Must be 1 or more" })
    .max(10, { message: "Must be 10 or less" }),
    descTitle: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(20, { message: "Must be 100 or less characters long" }),
    desc: z
    .number()
    .positive()
    .min(1, { message: "Must be 1 or more" })
    .max(80, { message: "Must be 200 or less" }),
    admins: z
    .string(),
    members: z
    .string()
    .url(),
});
