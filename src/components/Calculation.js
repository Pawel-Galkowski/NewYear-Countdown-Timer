const Calculation = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`01/01/${year+1}`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
/* eslint-disable */
    if (timeLeft.days < 10) {
        timeLeft.days = "0" + timeLeft.days;
      } else {
        timeLeft.days = timeLeft.days;
      }

    if (timeLeft.hours < 10) {
      timeLeft.hours = "0" + timeLeft.hours;
    } else {
      timeLeft.hours = timeLeft.hours;
    }

    if (timeLeft.minutes < 10) {
      timeLeft.minutes = "0" + timeLeft.minutes;
    } else {
      timeLeft.minutes = timeLeft.minutes;
    }

    if (timeLeft.seconds < 10) {
      timeLeft.seconds = "0" + timeLeft.seconds;
    } else {
      timeLeft.seconds = timeLeft.seconds;
    }
  }
/* eslint-disable */
  return timeLeft;
};

export default Calculation;
