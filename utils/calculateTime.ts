type TimeCalculationOutput = {
  hour: string;
  minute: string;
  second: string;
  meridiem: string;
};

export function calculateTime(
  videoTime: number,
  timeHour: number,
  timeMinute: number,
  timeSecond: number,
  meridiem: string
): TimeCalculationOutput {
  // convert 12-hour format to 24-hour format
  if (meridiem === "PM" && timeHour < 12) {
    timeHour += 12;
  } else if (meridiem === "AM" && timeHour === 12) {
    timeHour = 0;
  }

  const totalSecondsInput = timeHour * 3600 + timeMinute * 60 + timeSecond;
  let timeDifferenceSecs = totalSecondsInput - videoTime;

  // handle negative time difference
  if (timeDifferenceSecs < 0) {
    timeDifferenceSecs += 24 * 3600; // Add a day
  }

  let finalHours = Math.floor(timeDifferenceSecs / 3600);
  const finalMinutes = Math.floor((timeDifferenceSecs % 3600) / 60);
  const finalSecs = Math.floor(timeDifferenceSecs % 60);

  // convert back to 12-hour format
  let finalMeridiem: string;
  if (finalHours >= 12) {
    finalMeridiem = "PM";
    if (finalHours > 12) {
      finalHours -= 12;
    }
  } else {
    finalMeridiem = "AM";
    if (finalHours === 0) {
      finalHours = 12;
    }
  }

  const formattedHours = finalHours.toString().padStart(2, "0");
  const formattedMinutes = finalMinutes.toString().padStart(2, "0");
  const formattedSecs = finalSecs.toString().padStart(2, "0");

  return {
    hour: formattedHours,
    minute: formattedMinutes,
    second: formattedSecs,
    meridiem: finalMeridiem,
  };
}
