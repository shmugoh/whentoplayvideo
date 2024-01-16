import React, { useEffect, useRef } from "react";
import YTPlayer from "yt-player";

type EmbedProps = {
  className: string;
  videoId: string;
  setDurationHook: React.Dispatch<React.SetStateAction<number>>;
  setLengthHook: React.Dispatch<React.SetStateAction<number>>;
};

export function YouTubeVideoEmbed(props: EmbedProps) {
  const playerRef = useRef("");

  useEffect(() => {
    // Create a new player instance when the component mounts
    const player = new YTPlayer(playerRef.current, {
      controls: true, // Add any additional configurations you need
    });

    // Load Video
    player.load(props.videoId);
    player.on("unstarted", () => {
      // Obtain Duration
      var durationVal = player.getDuration();
      props.setDurationHook(durationVal);
    });

    player.on("timeupdate", () => {
      // Update Current Time Update
      var currentTime = Math.floor(player.getCurrentTime());
      props.setLengthHook(currentTime);
    });

    // Destroy when new videoId is parsed
    return () => {
      player.destroy();
    };
  }, [props.videoId]);

  return <div className={props.className} ref={playerRef}></div>;
}
