import { useState } from "react";
import Button from "@/components/button";
import sound from "/public/ticktack.mp3";
import { TimerState } from "@/utils/types";
import useTimer from "@/hooks/useTimer";
import useTimerSettings from "@/hooks/useTimerSettings";

const Timer = () => {
  const { readyTime, workoutTime, restTime, setCount } = useTimerSettings();
  const [displayTime, setDisplayTime] = useState(readyTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerState, setTimerState] = useState<TimerState>("Ready");
  const [currentSet, setCurrentSet] = useState(1);

  useTimer({
    sound,
    workoutTime,
    restTime,
    setCount,
    readyTime,
    isRunning,
    timerState,
    time: displayTime,
    currentSet,
    setIsRunning,
    setTimerState,
    setTime: setDisplayTime,
    setCurrentSet,
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-4xl">{timerState}</p>
      <p className="text-4xl">{currentSet}</p>
      <p className="text-8xl">{displayTime}</p>
      <div className="flex w-full justify-around">
        <Button
          onClick={() => {
            setDisplayTime(readyTime);
            setTimerState("Ready");
            setCurrentSet(1);
            setIsRunning(false);
          }}
          label="Reset"
        />
        <Button
          onClick={() => setIsRunning(!isRunning)}
          label={isRunning ? "Stop" : "Start"}
        />
      </div>
    </div>
  );
};

export default Timer;
