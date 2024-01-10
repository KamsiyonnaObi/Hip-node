"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { Editor } from "@tinymce/tinymce-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { PodcastSchema } from "@/lib/validations";
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "../ui/form";
import { Button } from "../ui/Button";
import OutlineIcon from "../icons/OutlineIcon";
import { useTheme } from "next-themes";
import { CldUploadWidget } from "next-cloudinary";
import { createPodcast, updatePodcast } from "@/utils/actions/podcast.action";
import { toast } from "../ui/use-toast";

export function InputPodcast({ editDetail }: { editDetail?: string }) {
  const { theme } = useTheme();

  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const parsedDetail = editDetail && JSON.parse(editDetail || "");

  const [coverUrl, setCoverUrl] = useState(parsedDetail?.image || "");
  const [audioUrl, setAudioUrl] = useState(parsedDetail?.audioPath || "");

  const updateForm = (url: string) => {
    setCoverUrl(url);
  };

  const updateAudio = (url: string) => {
    setAudioUrl(url);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof PodcastSchema>>({
    resolver: zodResolver(PodcastSchema),
    defaultValues: {
      title: parsedDetail?.title || "",
      desc: parsedDetail?.desc || "",
      type: parsedDetail?.type || "",
      episode: parsedDetail?.episode || 0,
      location: parsedDetail?.location || "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async () => {
    setIsSubmitting(true);
    try {
      const values = form.getValues();
      const podcastData = {
        title: values.title,
        desc: values.desc,
        image: coverUrl,
        audioPath: audioUrl,
        type: values.type,
        episode: values.episode,
        location: values.location,
      };
      if (editDetail) {
        await updatePodcast({
          ...podcastData,
          podcastId: parsedDetail?._id,
        });
      } else {
        await createPodcast(podcastData);
      }
      return toast({
        title: `${editDetail ? "Edited" : "Created"} Podcast`,
        variant: "default",
      });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
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
                      uploadPreset="ml_audio"
                      options={{ clientAllowedFormats: ["mp3", "mp4"] }}
                      onUpload={(result: any) => {
                        updateAudio(result?.info?.secure_url);
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
                                <OutlineIcon.Upload />
                                <p className="text-xs-regular md:text-xs-semibold text-secondary2 dark:text-background2">
                                  Set Audio
                                </p>
                              </Button>
                            </div>
                          </div>
                        );
                      }}
                    </CldUploadWidget>
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
          name="desc"
          render={({ field }) => (
            <FormItem>
              <div className="flex">
                <Link
                  href="/info/code-of-conduct"
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
                  initialValue={parsedDetail?.desc || `Podcast Details...`}
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
          name="episode"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormControl className="flex flex-col">
                <div className="gap-5">
                  <h3 className="h3-semibold text-secondary2 dark:text-background2">
                    Episode #:
                  </h3>
                  <Input
                    defaultValue={1}
                    type="number"
                    className="h3-semibold md:h1-semibold w-[20%] border-none bg-background2 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
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
          name="type"
          render={({ field }) => (
            <FormItem className="mb-10">
              <FormControl className="flex flex-col">
                <div className="gap-5">
                  <Input
                    className="h3-semibold md:h1-semibold border-none bg-background2 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
                    placeholder="Type..."
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
                    className="h3-semibold md:h1-semibold border-none bg-background2 text-secondary2 placeholder:text-secondary3 dark:bg-dark4 dark:text-background2"
                    placeholder="Location..."
                    {...field}
                  />
                </div>
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
            onClick={() => router.push("/podcast")}
          >
            <p className="text-secondary3">Cancel</p>
          </Button>
        </div>
      </form>
    </Form>
  );
}
