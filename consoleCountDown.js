let endDate = Date.parse("June 5, 2026, 00:00:00");

function countDown(date) {
  let currentDate = new Date();
  return date - currentDate;
}

function update() {
  // Calculate remaining time in milliseconds
  let remainingMilliseconds = countDown(endDate);

  // Calculate days, hours, minutes, and seconds
  let getDays = Math.floor(remainingMilliseconds / 86400000); // 1 day = 86400000 ms
  remainingMilliseconds = remainingMilliseconds % 86400000;

  let getHours = Math.floor(remainingMilliseconds / 3600000); // 1 hour = 3600000 ms
  remainingMilliseconds = remainingMilliseconds % 3600000;

  let getMinutes = Math.floor(remainingMilliseconds / 60000); // 1 minute = 60000 ms
  remainingMilliseconds = remainingMilliseconds % 60000;

  let getSeconds = Math.floor(remainingMilliseconds / 1000); // 1 second = 1000 ms

  // Store values in an object
  const timeRemaining = {
    days: getDays,
    hours: getHours,
    minutes: getMinutes,
    seconds: getSeconds,
    milliseconds: remainingMilliseconds,
  };

  // Temporary variable to hold the object
  let outputString = "";

  // Loop through the properties of the object
  for (let property in timeRemaining) {
    if (timeRemaining.hasOwnProperty(property)) {
      outputString += `${property}: ${timeRemaining[property]} `;
    }
  }

  // Print the output result to the console
  console.log(outputString);
}

// Set a timer to run the update function every second (1,000 ms)
setInterval(update, 1000);
