export function calculateTime(
  videoTime: number,
  timeHour: number,
  timeMinute: number,
  timeSecond: number
) {
  // Calculate minutes and seconds
  const getHours = Math.floor(videoTime / 60);
  const getMins = Math.floor(videoTime / 60);
  const getSecs = videoTime % 60;

  if (timeMinute === 0) {
    timeMinute = 59;
  }
  if (timeSecond === 0) {
    timeSecond = 60;
  }

  // Calculate remaining time
  const FinalHours = timeHour - getHours === 0 ? timeHour : timeHour;
  const FinalMinutes = timeMinute - getMins;
  const FinalSecs = timeSecond - getSecs;

  return `${FinalHours}:${FinalMinutes}:${FinalSecs}`;
}
