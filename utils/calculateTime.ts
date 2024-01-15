export function calculateTime(
  videoTime: number,
  timeHour: number,
  timeMinute: number,
  timeSecond: number
): string {
  // for default carousel value as its left blank
  if (timeHour == 0) {
    timeHour = 12;
  }

  const totalSecondsInput = timeHour * 3600 + timeMinute * 60 + timeSecond;
  const timeDifferenceSecs = totalSecondsInput - videoTime;

  const finalHours = Math.floor(timeDifferenceSecs / 3600);
  const finalMinutes = Math.floor((timeDifferenceSecs % 3600) / 60);
  const finalSecs = Math.floor(timeDifferenceSecs % 60);

  const formattedHours = finalHours.toString().padStart(2, "0");
  const formattedMinutes = finalMinutes.toString().padStart(2, "0");
  const formattedSecs = finalSecs.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSecs}`;
}
