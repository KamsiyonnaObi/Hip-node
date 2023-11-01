"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Badge } from "../ui/badge";
import { PostSchema } from "@/lib/validations";
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
import useThemeState from "@/store/themeStore";

export function InputPost() {
  const { theme } = useThemeState();
  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      contents: "",
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof PostSchema>) {
    setIsSubmitting(true);
    try {
      // async call to API
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleInputKeydown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters.",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("tags", newTags);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-2xl bg-background p-5 dark:bg-dark3"
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
                    <Button
                      color="blackWhite"
                      className="items-center justify-between px-2.5 py-2 text-secondary2 dark:text-background2"
                    >
                      <OutlineIcon.Image1 />
                      <p className="text-xs-regular md:text-xs-semibold text-secondary2 dark:text-background2">
                        Set Cover
                      </p>
                    </Button>
                    <Button
                      color="blackWhite"
                      className="items-center justify-between px-2.5 py-2"
                    >
                      <p className="text-xs-regular md:text-xs-semibold text-secondary2 dark:text-background2">
                        Select Group
                      </p>
                      <OutlineIcon.DownArrow className="h-3 w-3 fill-secondary6 dark:fill-secondary3" />
                    </Button>
                    <Button
                      color="blackWhite"
                      className="items-center justify-between px-2.5 py-2  "
                    >
                      <p className="text-xs-regular md:text-xs-semibold text-secondary2 dark:text-background2">
                        <span className="text-secondary3">Create</span> - Post
                      </p>
                      <OutlineIcon.DownArrow className="h-3 w-3 fill-secondary6 dark:fill-secondary3" />
                    </Button>
                  </div>
                </div>
              </FormControl>
              <FormMessage className="text-red90" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contents"
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
                  initialValue="<p>Tell your story...</p>"
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
                          window.open("/codeofconduct", "_blank");
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
          name="tags"
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
          <Button
            type="submit"
            color="blue"
            className="md:display-semibold body-semibold px-10 py-2.5"
            disabled={isSubmitting}
          >
            {isSubmitting ? <>Posting...</> : <>Publish</>}
          </Button>
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
