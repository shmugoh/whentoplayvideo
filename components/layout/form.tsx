"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { processUrl } from "@/utils/processUrl";

const formSchema = z.object({
  videoId: z.string(),
  // .min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),
});

type InputProps = {
  setVideoId: any;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
};

export function InputForm(props: InputProps) {
  const defaultVideoURL = "https://www.youtube.com/watch?v=FtutLA63Cp8";

  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoId: "",
    },
  });

  // Form OnSubmit
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values["videoId"] == "") {
      values["videoId"] = defaultVideoURL;
    }

    const videoId = processUrl(values["videoId"]);
    props.setVideoId(videoId); // TODO: fix this ts error later
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={props.formClassName}
      >
        <FormField
          control={form.control}
          name="videoId"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Link</FormLabel> */}
              <FormControl>
                <Input
                  className={props.inputClassName}
                  placeholder="https://www.youtube.com/watch?v=FtutLA63Cp8"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className={props.buttonClassName} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
