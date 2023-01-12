const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 6;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();



  if(actualSleepHours === idealSleepHours) {
    console.log("You got perfect amount of sleep");
  }else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed.");
  }else if (actualSleepHours < idealSleepHours) {
    console.log("You need more sleep.");
  }else {
    console.log("Error! Something went wrong, check your code.");
  }
};

calculateSleepDebt();
