import React, { useEffect } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type EmbedProps = {
  className: string;
  videoId: string;
};

export function YouTubeVideoEmbed(props: EmbedProps) {
  const url = `https://www.youtube-nocookie.com/embed/${props.videoId}`;

  return (
    <div className={props.className}>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}
