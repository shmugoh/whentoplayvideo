"use client";

import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";

import { InputForm } from "@/components/layout/form";
import { YouTubeVideoEmbed } from "@/components/layout/video";
import { TimeSlot } from "@/components/layout/time";

import { calculateTime } from "@/utils/calculateTime";

import { Moon, Sun, Github, Coffee } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";

import { Noto_Color_Emoji } from "next/font/google";
const noto = Noto_Color_Emoji({ weight: "400", subsets: ["emoji"] });

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

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-background flex flex-col">
      <div className="flex flex-col p-16 items-center justify-between space-y-8 flex-1">
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
            <YouTubeVideoEmbed
              className=""
              videoId={videoId}
              setDurationHook={setDuration}
              setLengthHook={setCurrentLength}
            />

            <div className="flex space-x-8 flex-wrap self-stretch justify-center items-center">
              <div className="bg-red-500 text-white text-6xl max-w font-bold py-4 px-4 rounded-md flex flex-col mb-12 lg:mb-0 xl:mb-0 2xl:mb-0">
                <p className="text-left font-semibold text-base">Play at...</p>
                <p>{calculateTime(currentLength, hour, minute, second)}</p>
                <p className="text-right font-semibold text-base">
                  to sync at around:
                </p>
              </div>
              <TimeSlot
                className=""
                currentLength={currentLength}
                HourHook={setHour}
                MinHook={setMinute}
                SecsHook={setSecond}
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
                Made with <span className={noto.className}>💙</span> in{" "}
                <span className={noto.className}>🇨🇴</span> by{" "}
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
