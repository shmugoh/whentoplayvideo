"use client";

import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { InputForm } from "@/components/layout/form";
import { YouTubeVideoEmbed } from "@/components/layout/youtube-video";
import { TimeSlot } from "@/components/layout/time";

import { calculateTime } from "@/utils/calculateTime";

import { Moon, Sun, Github, Coffee } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";

export default function Home() {
  /* Hooks */
  // UI Hooks
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // YouTube Hooks
  const [videoId, setVideoId] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  const [currentLength, setCurrentLength] = React.useState(0);

  // Time Hooks
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [meridiem, setMeridiem] = React.useState("AM");
  const time = calculateTime(currentLength, hour, minute, second, meridiem);

  return (
    <main className="min-h-screen bg-background dark:bg-background flex flex-col mx-auto">
      <div className="flex flex-col p-16 items-center justify-between space-y-8 flex-1 lg:w-fit lg:mx-auto">
        {/* regarding w-fit&mx-auto: stupid hack but it can do for now */}
        <div id="headerContainer" className="space-y-8">
          <h1 className="pr-12 lg:pr-0 xl:pr-0 2xl:pr-0 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl xl:text-6x1 2xl:text6x1 dark:text-white">
            When to Play Video?
          </h1>

          <InputForm
            formClassName="space-y-4"
            inputClassName="w-full"
            buttonClassName="w-full"
            setVideoId={setVideoId}
          />
        </div>
        {videoId && (
          <>
            <div id="videoContainer" className="w-full">
              <YouTubeVideoEmbed
                className=""
                videoId={videoId}
                setDurationHook={setDuration}
                setLengthHook={setCurrentLength}
              />
            </div>

            <div
              id="settingsContainer"
              className="flex space-x-8 flex-wrap lg:flex-nowrap justify-center items-center w-full"
            >
              <div className="text-base w-full lg:w-3/5 bg-red-500 text-white max-w py-4 px-4 rounded-md flex flex-col mb-12 lg:mb-0 xl:mb-0 2xl:mb-0">
                <p className="font-bold text-left">Play at...</p>

                <div className="font-mono text-5xl font-black lg:flex lg:justify-between lg:space-x-4 lg:text-6xl">
                  <p>
                    {time.hour}:{time.minute}:{time.second}
                  </p>
                  <p className="ml-auto">{time.meridiem}</p>
                </div>

                <p className="font-bold text-left lg:text-right">
                  to sync at around:
                </p>
              </div>
              <TimeSlot
                className=""
                currentLength={currentLength}
                HourHook={setHour}
                MinHook={setMinute}
                SecsHook={setSecond}
                meridiem={meridiem}
                setMeridiem={setMeridiem}
              />
            </div>
          </>
        )}
      </div>

      <Separator className="bg-primary" />
      <footer className="bg-grey-200 relative mt-auto py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Made with ❤️ in Colombia by{" "}
                <a
                  href="https://twitter.com/shmugo_"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  shmugo
                </a>
              </p>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://ko-fi.com/shmugo"
              className="flex space-x-2 relative"
            >
              <p className="flex font-medium text-primary underline underline-offset-4">
                Buy me a Coffee
              </p>
              <Coffee />
            </a>
            <Separator className="h-8" orientation="vertical" />
            <a href="https://github.com/shmugoh/whentoplayvideo">
              <Github />
            </a>
            <Separator className="h-8" orientation="vertical" />

            {theme === "light" ? (
              <Moon onClick={toggleTheme} />
            ) : (
              <Sun onClick={toggleTheme} />
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
