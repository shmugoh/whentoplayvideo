"use client";

import React, { useState, useEffect } from "react";
import { InputForm } from "@/components/layout/form";
import { YouTubeVideoEmbed } from "@/components/layout/video";

import { TimeSlot } from "@/components/layout/time";

export default function Home() {
  /* Hooks */
  // YouTube Hooks
  const [videoId, setVideoId] = React.useState("");
  const [duration, setDuration] = React.useState(0);
  const [currentLength, setCurrentLength] = React.useState(0);

  // Time Hooks
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between p-12 ml-8 mr-8 lg:ml-0 lg:mr-0">
        <div>
          <h1 className="mb-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-white">
            When to Play Video?
          </h1>
        </div>

        <InputForm setVideoId={setVideoId} />
        {videoId && (
          <>
            <YouTubeVideoEmbed
              className="mt-8"
              videoId={videoId}
              setDurationHook={setDuration}
              setLengthHook={setCurrentLength}
            />

            <TimeSlot
              className="mt-16"
              currentLength={currentLength}
              HourHook={setHour}
              MinHook={setMinute}
              SecsHook={setSecond}
            />
          </>
        )}
      </div>
    </main>
  );
}
