"use client";

import React, { useState, useEffect } from "react";
import { InputForm } from "@/components/layout/form";
import { YouTubeVideoEmbed } from "@/components/layout/video";

import { TimeSlot } from "@/components/layout/time";

import { calculateTime } from "@/utils/calculateTime";

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
    <main className="min-h-screen bg-gray-100 p-16">
      <div className="flex flex-col items-center justify-between space-y-8">
        <div id="headerContainer" className="space-y-8">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl dark:text-white">
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

            <div className="flex space-x-8 space-y-5">
              <div className="bg-red-500 text-white text-6xl max-w font-bold py-4 px-4 rounded-md flex flex-col">
                <p className="text-left font-semibold text-base">Play at...</p>
                <p>{calculateTime(currentLength, hour, minute, second)} AM</p>
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
    </main>
  );
}
