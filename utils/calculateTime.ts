type TimeCalculationOutput = {
  day: number;
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
  // internally convert 12-hour format to 24-hour format
  // for accurate calculations
  if (meridiem === "PM" && timeHour < 12) {
    timeHour += 12;
  } else if (meridiem === "AM" && timeHour === 12) {
    timeHour = 0;
  }

  // calculate user input in seconds & difference with video's time
  let totalSecondsInput = timeHour * 3600 + timeMinute * 60 + timeSecond;
  let timeDifferenceSecs = totalSecondsInput - videoTime;

  // handle negative time difference
  let finalDays = 0;
  if (timeDifferenceSecs < 0) {
    finalDays = Math.floor(Math.abs(timeDifferenceSecs) / (3600 * 24)) + 1;
    timeDifferenceSecs += finalDays * 24 * 3600;
  }

  // / calculate from seconds: hours, minutes, and seconds from the remaining timeDifference
  finalDays = finalDays > 0 ? finalDays - 1 : 0; // subtracting one to maintain accuracy, as the negative time difference logic sums up a day
  let finalHours = Math.floor(timeDifferenceSecs / 3600);
  const finalMinutes = Math.floor((timeDifferenceSecs % 3600) / 60);
  const finalSecs = Math.floor(timeDifferenceSecs % 60);

  // convert back to 12-hour format
  // for better readibility
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

  // return formatted
  const formattedDays = finalDays;
  const formattedHours = finalHours.toString().padStart(2, "0");
  const formattedMinutes = finalMinutes.toString().padStart(2, "0");
  const formattedSecs = finalSecs.toString().padStart(2, "0");
  return {
    day: formattedDays,
    hour: formattedHours,
    minute: formattedMinutes,
    second: formattedSecs,
    meridiem: finalMeridiem,
  };
}
