"use client";

import React, { useState, useEffect } from "react";
import { InputForm } from "@/components/layout/form";
import { YouTubeVideoEmbed } from "@/components/layout/video";

export default function Home() {
  const [videoId, setVideoId] = React.useState("");

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-between p-12 ml-8 mr-8 lg:ml-0 lg:mr-0">
        <div>
          <h1 className="mb-8 text-5xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-6xl dark:text-white">
            When to Play Video?
          </h1>
        </div>

        <InputForm setVideoId={setVideoId} />
        <YouTubeVideoEmbed className="mt-8" videoId={videoId} />
      </div>
    </main>
  );
}
