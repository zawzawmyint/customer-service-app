"use client";
import React, { useState, useEffect } from "react";

const DateAndTime: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formattedTime = date.toLocaleTimeString("en-US", options);
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:flex-row text-primary font-mono">
      <div className="font-semibold text-xs sm:text-sm">New York </div>
      <div className="font-semibold text-xs sm:text-sm">{time}</div>
    </div>
  );
};

export default DateAndTime;
