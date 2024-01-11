"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { z } from "zod";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Badge } from "../ui/badge";
import { MeetupSchema } from "@/lib/validations";
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "../ui/form";
import { Button } from "../ui/Button";
import OutlineIcon from "../icons/OutlineIcon";
import { useTheme } from "next-themes";
import { CldUploadWidget } from "next-cloudinary";
import { createMeetup } from "@/utils/actions/meetup.action";
import { toast } from "../ui/use-toast";

export function InputMeetup() {
  const { theme } = useTheme();
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [coverUrl, setCoverUrl] = useState("");

  const router = useRouter();

  const [month, setMonth] = useState("JAN");
  const [day, setDay] = useState(1);

  const updateForm = (url: string) => {
    setCoverUrl(url);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    // Extract month and day from the selected date and save it to your variable
    const monthAbbreviation = new Intl.DateTimeFormat("en", {
      month: "short",
    }).format(date);
    setMonth(monthAbbreviation.toUpperCase());
    setDay(date.getDate());
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof MeetupSchema>>({
    resolver: zodResolver(MeetupSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      jobType: [],
      location: "",
      desc: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      const values = form.getValues();

      const meetupData = {
        title: values.title,
        subtitle: values.subtitle,
        jobType: values.jobType,
        location: values.location,
        desc: values.desc,
        image: coverUrl,
        month,
        day: day.toString(),
      };

      await createMeetup(meetupData);
      return toast({
        title: "Created Meetup",
        variant: "default",
      });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputKeydown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "jobType") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("jobType", {
            type: "required",
            message: "Tag must be less than 15 characters.",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("jobType", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("jobType");
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("jobType", newTags);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-2xl bg-background p-5 shadow-lg dark:bg-dark3"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormControl className="flex flex-col">
                <div className="gap-5">
                  <Input
                    placeholder="Title..."
                    className="h3-semibold md:h1-semibold border-none bg-background2 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
                    {...field}
                  />
                  <div className="flex justify-between md:justify-start md:gap-5">
                    <CldUploadWidget
                      uploadPreset="ml_images"
                      options={{ clientAllowedFormats: ["png", "jpg", "jpeg"] }}
                      onUpload={(result: any) => {
                        updateForm(result?.info?.secure_url);
                      }}
                    >
                      {({ open }) => {
                        function handleOnClick(e: React.MouseEvent) {
                          e.preventDefault();
                          open();
                        }
                        return (
                          <div className="mb-[1.25rem]">
                            <div className="flex">
                              <Button
                                color="blackWhite"
                                type="button"
                                onClick={handleOnClick}
                                className="items-center justify-between px-2.5 py-2 text-secondary2 dark:text-background2"
                              >
                                <OutlineIcon.Image1 />
                                <p className="text-xs-regular md:text-xs-semibold text-secondary2 dark:text-background2">
                                  Set Image
                                </p>
                              </Button>
                            </div>
                          </div>
                        );
                      }}
                    </CldUploadWidget>
                  </div>
                </div>
              </FormControl>
              <FormMessage className="text-red90" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormControl className="flex flex-col">
                <div className="gap-5">
                  <Input
                    placeholder="Subtitle..."
                    className="h3-semibold md:h1-semibold border-none bg-background2 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red90" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormControl className="flex flex-col">
                <div className="gap-5">
                  <Input
                    placeholder="Location..."
                    className="h3-semibold md:h1-semibold border-none bg-background2 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red90" />
            </FormItem>
          )}
        />

        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd"
          placeholderText="Select a date"
          className="h3-semibold md:h1-semibold mb-5 rounded-[8px] border-none bg-background2 p-1 pl-3 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
        />

        <FormField
          control={form.control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <div className="flex">
                <Link
                  href="/"
                  className="body-semibold md:display-semibold px-3.5 text-secondary2 dark:text-background2 md:hidden"
                >
                  Code of Conduct
                </Link>
              </div>
              <FormControl>
                <Editor
                  onEditorChange={(content) => field.onChange(content)}
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) =>
                    // @ts-ignore
                    (editorRef.current = editor)
                  }
                  key={theme}
                  initialValue="Meetup Details..."
                  init={{
                    height: 376,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "print",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "paste",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar_mode: "floating",
                    skin: theme === "dark" ? "oxide-dark" : "oxide",
                    toolbar:
                      "codeofconduct h1 bold italic underline strikethrough link image alignleft aligncenter " +
                      "alignright bullist numlist",
                    mobile: {
                      toolbar:
                        "h1 bold italic underline strikethrough link image alignleft aligncenter " +
                        "alignright bullist numlist",
                      toolbar_mode: "floating",
                    },
                    content_css: theme === "dark" ? "dark" : "light",
                    setup: (editor) => {
                      editor.ui.registry.addButton("codeofconduct", {
                        text: "Code of Conduct",
                        onAction: () => {
                          window.open("/info/code-of-conduct", "_blank");
                        },
                      });
                    },
                  }}
                />
              </FormControl>
              <FormMessage className="text-red90" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem className="my-5">
              <FormLabel className="caption-semibold md:body-semibold text-secondary2 dark:text-background2">
                Add or change tags (up to 5) so readers know what your story is
                about
              </FormLabel>
              <FormControl>
                <>
                  <Input
                    placeholder="Add a tag..."
                    className="caption-regular md:body-regular border-none bg-background2 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
                    onKeyDown={(e) => handleInputKeydown(e, field)}
                  />
                  {Array.isArray(field.value) && field.value.length > 0 && (
                    <div className="mt-2.5 flex items-start gap-2.5">
                      {field.value.map((tag: any) => (
                        <Badge
                          key={tag}
                          className="flex items-center justify-center gap-2 rounded-md border-none bg-background px-4 py-2 capitalize text-secondary2 hover:bg-background/80 dark:bg-dark4 dark:text-background2 hover:dark:bg-dark4/80"
                          onClick={() => handleTagRemove(tag, field)}
                        >
                          {tag}
                          <OutlineIcon.Close className="cursor-pointer object-contain invert-0 dark:invert" />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormMessage className="text-red90" />
            </FormItem>
          )}
        />

        <div className="flex justify-start gap-5">
          <Link href="/meetups">
            <Button
              type="submit"
              color="blue"
              className="md:display-semibold body-semibold px-10 py-2.5"
              disabled={isSubmitting}
              onClick={() => {
                onSubmit();
              }}
            >
              {isSubmitting ? <>Posting...</> : <>Publish</>}
            </Button>
          </Link>

          <Button
            type="button"
            color="gray"
            className="md:display-semibold body-semibold px-10 py-2.5"
            onClick={() => router.push("/")}
          >
            <p className="text-secondary3">Cancel</p>
          </Button>
        </div>
      </form>
    </Form>
  );
}
