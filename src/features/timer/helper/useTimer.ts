import { useState, useEffect } from "react";

import { useSound } from "use-sound";

import { TimerState } from "@/utils/types";
import useTimerSettings from "@/features/timer/helper/useTimerSettings";

interface TimerProps {
  sound: string;
}

const useTimer = ({ sound }: TimerProps) => {
  const { readyTime, workoutTime, restTime, setCount } = useTimerSettings();
  const [currentTime, setCurrentTime] = useState(readyTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentState, setCurrentState] = useState<TimerState>("Ready");
  const [currentSet, setCurrentSet] = useState(1);

  const [play] = useSound(sound);

  useEffect(() => {
    setCurrentTime(readyTime);
    setIsRunning(false);
    setCurrentState("Ready");
    setCurrentSet(1);
  }, [readyTime]);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (currentTime >= 1 && currentTime <= 4) {
          play();
        }
        setCurrentTime((prevTime) => prevTime - 1);
        if (currentTime !== 0) {
          return;
        }
        if (currentState === "Ready") {
          setCurrentTime(workoutTime);
          setCurrentState("Workout");
          return;
        }
        if (currentState === "Workout" && currentSet !== setCount) {
          setCurrentTime(restTime);
          setCurrentState("Rest");
          return;
        }
        if (currentState === "Workout" && currentSet === setCount) {
          setCurrentTime(0);
          setCurrentState("Completed");
          setIsRunning(false);
          return;
        }
        if (currentState === "Rest") {
          setCurrentSet((prevSet) => prevSet + 1);
          setCurrentTime(workoutTime);
          setCurrentState("Workout");
          return;
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [
    isRunning,
    currentState,
    workoutTime,
    restTime,
    setCount,
    currentSet,
    readyTime,
    setIsRunning,
    setCurrentState,
    setCurrentSet,
    currentTime,
    play,
  ]);

  const reset = () => {
    setCurrentTime(readyTime);
    setCurrentState("Ready");
    setCurrentSet(1);
    setIsRunning(false);
  };

  return {
    readyTime,
    currentTime,
    currentState,
    currentSet,
    isRunning,
    setIsRunning,
    reset,
  };
};

export default useTimer;
