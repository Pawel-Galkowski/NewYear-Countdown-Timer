import React, { useState, useEffect } from "react";
import Calculation from "./Calculation";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(Calculation);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(Calculation);
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).map((interval, index) => {
    if (timeLeft[interval]) {
      timerComponents.push(
        <span key={index}>
          {timeLeft[interval]} {interval}
        </span>
      );
    }
    return null;
  });

  return (
    <div className="shadow-background">
      <div className="countdown-header">
        <h1>New year in</h1>
      </div>
      <div className="countdown-container">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Happy new YEAR!</span>
        )}
      </div>
    </div>
  );
};

export default Countdown;
