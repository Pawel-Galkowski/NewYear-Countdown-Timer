import React, { useState, useEffect } from "react";
import Calculation from "./Calculation";

const countdown = () => {
  /* eslint-disable */
  const [timeLeft, setTimeLeft] = useState(Calculation());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(Calculation());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={index}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const [year] = useState(new Date().getFullYear());
  /* eslint-enable */
  return (
    <div className="shadow-background">
      <div className="countdown-header">
        <h1>New year in</h1>
      </div>
      <div className="countdown-container">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default countdown;
