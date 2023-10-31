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
    .min(12, {
      message: "Contents must be at least 5 characters.",
    })
    .max(200, { message: "Contents must be less than 200 characters." }),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});


export const GroupSchema = z.object({
  title: z
  .string()
  .min(3, { message: "Must be 3 or more characters long" })
  .max(20, { message: "Must be 20 or less characters long" }),
   image: z
    .string(),
    userId: z
    .number()
    .positive()
    .min(1, { message: "Must be 1 or more" }),  createdAt: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  descTitle: z
  .string()
  .min(3, { message: "Must be 3 or more characters long" })
  .max(20, { message: "Must be 100 or less characters long" }),
  desc: z
  .number()
  .positive()
  .min(8, { message: "Must be 8 or more" })
  .max(80, { message: "Must be 200 or less" }),  admins: z.array(z.string()),
  members: z.array(z.string()),
});