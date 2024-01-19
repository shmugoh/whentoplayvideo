export function calculateTime(
  videoTime: number,
  timeHour: number,
  timeMinute: number,
  timeSecond: number,
  meridiem: string
): string {
  // for pre-set values in carosuel so it can do the calculations
  if (timeHour == 0) {
    timeHour = 12;
  }

  const totalSecondsInput = timeHour * 3600 + timeMinute * 60 + timeSecond;
  const timeDifferenceSecs = totalSecondsInput - videoTime;

  var finalHours = Math.floor(timeDifferenceSecs / 3600);
  if (finalHours === 0) {
    // just so it can switch back
    finalHours = 12;
  }

  console.log(timeDifferenceSecs);
  console.log(12 * 3600);
  console.log("---");

  // meridiem basic logic
  let finalMeridiem: string;
  if (timeDifferenceSecs < 12 * 3600) {
    finalMeridiem = meridiem === "AM" ? "PM" : "AM";
  } else {
    finalMeridiem = meridiem;
  }

  const finalMinutes = Math.floor((timeDifferenceSecs % 3600) / 60);
  const finalSecs = Math.floor(timeDifferenceSecs % 60);

  const formattedHours = finalHours.toString().padStart(2, "0");
  const formattedMinutes = finalMinutes.toString().padStart(2, "0");
  const formattedSecs = finalSecs.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSecs} ${finalMeridiem}`;
}
