"use client";

import React, { useState, useEffect } from "react";

import { InputForm } from "@/components/layout/form";
import { YouTubeVideoEmbed } from "@/components/layout/youtube-video";
import { TimeSlot } from "@/components/layout/time";

import { Foot } from "@/components/footer";

import { calculateTime } from "@/utils/calculateTime";

type HomeProps = {
  videoId: string | null;
  timestamp: string | number | null;
};

export default function Home(props: HomeProps) {
  /* Hooks */
  // YouTube Hooks
  const [videoId, setVideoId] = React.useState({
    domain: "",
    videoId: props.videoId ? props.videoId : "",
    timestamp: props.timestamp ? props.timestamp : 0,
  });
  // sorry
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
          <h1 className="pr-12 lg:pr-0 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl dark:text-white">
            When to Play Video?
          </h1>

          <InputForm
            formClassName="space-y-4"
            inputClassName="w-full"
            buttonClassName="w-full"
            setVideoId={setVideoId}
          />
        </div>
        {videoId.videoId != "" && (
          <>
            <div id="videoContainer" className="w-full">
              <YouTubeVideoEmbed
                className=""
                videoId={videoId.videoId}
                timestamp={videoId.timestamp}
                setDurationHook={setDuration}
                setLengthHook={setCurrentLength}
              />
            </div>

            <div
              id="settingsContainer"
              className="flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center w-full"
            >
              <div className="text-base w-full md:w-1/2 lg:w-3/5 bg-red-500 text-white max-w py-4 px-4 rounded-md flex flex-col mb-4 lg:mb-0">
                <p className="font-bold text-left">Play at...</p>

                <div className="font-mono text-4xl font-black flex justify-between space-x-4 md:text-5xl lg:text-6xl">
                  <p>
                    {time.hour}:{time.minute}:{time.second}
                  </p>
                  <p className="ml-auto">{time.meridiem}</p>
                </div>

                <p className="font-bold text-left md:text-right">
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
      <Foot />
    </main>
  );
}
