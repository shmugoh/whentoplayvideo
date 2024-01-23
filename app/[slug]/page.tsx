"use client";
import { useSearchParams } from "next/navigation";

import Home from "@/app/page";
import NotFoundPage from "@/app/not-found";
import { processID } from "@/utils/processUrl";

export default function SlugPage({ params }: { params: { slug: string } }) {
  const parameters = useSearchParams();
  const videoId = params.slug === "watch" ? parameters.get("v") : params.slug;
  const timestamp = parameters.get("t");

  if (processID(videoId)) {
    return <Home initialVideoId={videoId} timestamp={timestamp} />;
  } else {
    return <NotFoundPage />;
  }
}
