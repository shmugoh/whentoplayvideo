import React, { useEffect, useRef } from "react";
import YTPlayer from "yt-player";

type EmbedProps = {
  className: string;
  videoId: string;
  timestamp: number;
  setDurationHook: React.Dispatch<React.SetStateAction<number>>;
  setLengthHook: React.Dispatch<React.SetStateAction<number>>;
};

export function YouTubeVideoEmbed(props: EmbedProps) {
  const playerRef = useRef("");

  useEffect(() => {
    // Create new player instance once component is mounted
    const player = new YTPlayer(playerRef.current, {
      controls: true,
      autoplay: true, // doesn't work but i'm keeping it here cuz y not lol
      width: "100%",
      start: props.timestamp ? props.timestamp : 0,
      // height: "100%",
    });

    console.log(props.videoId, props.timestamp);

    // Load Video
    player.load(props.videoId);
    player.on("unstarted", () => {
      // Obtain Duration
      var durationVal = player.getDuration();
      props.setDurationHook(durationVal);
    });

    // Autoplays video, as opts.autoplay doesn't work for some reason
    player.on("cued", () => {
      player.play();
      player.seek(props.timestamp ? props.timestamp : 0);
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
