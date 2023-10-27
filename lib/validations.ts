import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(60, { message: "Title must be less than 60 characters." }),
  contents: z
    .string()
    .min(5, {
      message: "Contents must be at least 5 characters.",
    })
    .max(200, { message: "Contents must be less than 200 characters." }),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});
