const Calculation = () => {
  const year = new Date().getFullYear();
  const difference = new Date(`01/01/${year + 1}`) - new Date();
  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  if (difference >= 0) {
    if (timeLeft.days < 10) {
      timeLeft.days = `0${timeLeft.days}`;
    }

    if (timeLeft.hours < 10) {
      timeLeft.hours = `0${timeLeft.hours}`;
    }

    if (timeLeft.minutes < 10) {
      timeLeft.minutes = `0${timeLeft.minutes}`;
    }

    if (timeLeft.seconds < 10) {
      timeLeft.seconds = `0${timeLeft.seconds}`;
    }
  }
  return timeLeft;
};

export default Calculation;
