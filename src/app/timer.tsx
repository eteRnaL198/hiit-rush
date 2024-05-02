import { useEffect, useState } from "react";
import Button from "@/components/button";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      console.log("timer started");

      return () => {
        console.log("timer stopped");
        clearInterval(timer);
      };
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-8xl">{time}</p>
      <Button
        onClick={() => setIsRunning(!isRunning)}
        label={isRunning ? "Stop" : "Start"}
      />
      <Button onClick={() => setTime(60)} label="Reset" />
    </div>
  );
};

export default Timer;
