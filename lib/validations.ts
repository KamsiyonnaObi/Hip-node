import { z } from "zod";

export const PostSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(60, {
      message:
        "Title must be less than 60 characters. Must choose a cover image, group and relation.",
    }),
  groupId: z.string().min(12, { message: "Must choose a group." }),
  contents: z
    .string()
    .min(12, {
      message: "Contents must be at least 5 characters.",
    })
    .max(200, { message: "Contents must be less than 200 characters." }),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const MeetupSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(60, {
      message: "Title must be less than 60 characters.",
    }),
  subtitle: z.string().max(100, {
    message: "Subtitle must be less than 100 characters.",
  }),
  jobType: z.array(z.string()).min(1, {
    message: "Select at least one job type.",
  }),
  location: z
    .string()
    .min(5, {
      message: "Location must be at least 5 characters.",
    })
    .max(100, {
      message: "Location must be less than 100 characters.",
    }),
  desc: z
    .string()
    .min(12, {
      message: "Description must be at least 12 characters.",
    })
    .max(200, {
      message: "Description must be less than 200 characters.",
    }),
});

export const GroupSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(20, { message: "Must be 20 or less characters long" }),
  coverUrl: z.string(),
  groupUrl: z.string(),
  description: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(200, { message: "Must be 200 or less characters long" }),

  admins: z.string().refine(
    (val) => {
      const toArr = JSON.parse(val);
      return toArr.length > 0;
    },
    { message: "Must choose at least one admin" }
  ),
  members: z.string().refine(
    (val) => {
      const toArr = JSON.parse(val);
      return toArr.length > 0;
    },
    { message: "Must choose at least one member" }
  ),
});

export const PodcastSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(60, { message: "Title must be less than 60 characters." }),
  desc: z
    .string()
    .min(12, {
      message: "Contents must be at least 5 characters.",
    })
    .max(200, { message: "Contents must be less than 200 characters." }),
  type: z
    .string()
    .min(3, {
      message: "Type must be at least 3 characters.",
    })
    .max(60, { message: "Type must be less than 60 characters." }),
  episode: z.number(),
  location: z.string(),
});

export const InterviewSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(60, { message: "Title must be less than 60 characters." }),
  desc: z
    .string()
    .min(12, {
      message: "Description must be at least 12 characters.",
    })
    .max(200, { message: "Description must be less than 200 characters." }),
  interviewTags: z.array(z.string().min(1).max(15)).min(1).max(3),
  revenue: z.number(),
  updates: z.number(),
  website: z.string(),
});

export const emailSchema = z.string().email("Invalid email address.");
export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters.");

export const profileSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(20, { message: "Username must be less than 20 characters" }),
  bio: z.string().optional(),
  occupation: z.string(),
  website: z.union([
    z.literal(""),
    z.string().trim().url({ message: "Invalid website url" }),
  ]),
  twitter: z.union([
    z.literal(""),
    z
      .string()
      .trim()
      .includes("twitter", { message: "invalid twitter profile" })
      .url(),
  ]),
  facebook: z.union([
    z.literal(""),
    z
      .string()
      .trim()
      .url()
      .includes("facebook", { message: "invalid facebook profile" }),
  ]),
  instagram: z.union([
    z.literal(""),
    z
      .string()
      .trim()
      .includes("instagram", { message: "invalid instagram profile" })
      .url(),
  ]),
  profileImage: z.string(),
  bannerImage: z.string(),
});
