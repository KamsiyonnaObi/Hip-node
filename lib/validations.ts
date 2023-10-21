import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Username must be at least 5 characters.",
    })
    .max(130, { message: "Username must be less than 130 characters." }),
  contents: z.string().max(200),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
