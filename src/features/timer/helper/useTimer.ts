import { useState, useEffect } from "react";

import { TimerState } from "@/utils/types";
import useTimerSettings from "@/features/timer/helper/useTimerSettings";

interface TimerProps {
  sound: string;
}

const useTimer = ({ sound }: TimerProps) => {
  const { readyTime, workoutTime, restTime, setCount } = useTimerSettings();
  const [currentTime, setCurrentTime] = useState(readyTime);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerState, setTimerState] = useState<TimerState>("Ready");
  const [currentSet, setCurrentSet] = useState(1);

  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio(sound));
    }
  }, [sound]);

  useEffect(() => {
    if (isRunning && audio) {
      const timer = setInterval(() => {
        if (currentTime >= 1 && currentTime <= 4) {
          audio.play();
        }
        setCurrentTime((prevTime) => prevTime - 1);
        if (currentTime !== 0) {
          return;
        }
        if (timerState === "Ready") {
          setCurrentTime(workoutTime);
          setTimerState("Workout");
        } else if (timerState === "Workout") {
          setCurrentTime(restTime);
          setTimerState("Rest");
          if (currentSet === setCount) {
            setCurrentTime(readyTime);
            setTimerState("Ready");
            setIsRunning(false);
          }
        } else if (timerState === "Rest") {
          setCurrentSet((prevSet) => prevSet + 1);
          setCurrentTime(workoutTime);
          setTimerState("Workout");
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [
    isRunning,
    timerState,
    workoutTime,
    restTime,
    setCount,
    currentSet,
    readyTime,
    audio,
    setIsRunning,
    setTimerState,
    setCurrentSet,
    currentTime,
  ]);

  return {
    readyTime,
    currentTime,
    setCurrentTime,
    timerState,
    setTimerState,
    currentSet,
    setCurrentSet,
    isRunning,
    setIsRunning,
  };
};

export default useTimer;
