import React, { useEffect, useRef, useState } from "react";
import YTPlayer from "yt-player";

type EmbedProps = {
  className: string;
  videoId: string;
  setDurationHook: React.Dispatch<React.SetStateAction<number>>;
  setLengthHook: React.Dispatch<React.SetStateAction<number>>;
};

export function YouTubeVideoEmbed(props: EmbedProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
  const videoSizePercentage = 40;

  useEffect(() => {
    const player = new YTPlayer(playerRef.current!, {
      controls: true,
      width: isMobile ? "100%" : (windowSize.width * videoSizePercentage) / 100, // Set width to 100% for mobile, 60% for other screens
      height: isMobile
        ? windowSize.width * 0.5625
        : (windowSize.height * videoSizePercentage) / 100, // Set height based on aspect ratio for mobile, 30% for other screens
    });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    player.load(props.videoId);

    player.on("unstarted", () => {
      const durationVal = player.getDuration();
      props.setDurationHook(durationVal);
    });

    player.on("timeupdate", () => {
      const currentTime = Math.floor(player.getCurrentTime());
      props.setLengthHook(currentTime);
    });

    return () => {
      player.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [props.videoId, windowSize]);

  // sets resolution dynamically
  useEffect(() => {
    if (playerRef.current) {
      const playerElement = playerRef.current;
      const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
      playerElement.style.width = isMobile
        ? "100%"
        : `${(windowSize.width * videoSizePercentage) / 100}px`; // Set width to 100% for mobile, 60% for other screens
      playerElement.style.height = isMobile
        ? `${windowSize.width * 0.5625}px`
        : `${(windowSize.height * videoSizePercentage) / 100}px`; // Set height based on aspect ratio for mobile, 30% for other screens
    }
  }, [windowSize]);

  return <div className={props.className} ref={playerRef}></div>;
}
