import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { TimerState } from "@/types";

interface TimerProps {
  sound: string;
  workoutTime: number;
  restTime: number;
  setCount: number;
  readyTime: number;
  isRunning: boolean;
  timerState: TimerState;
  time: number;
  currentSet: number;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setTimerState: Dispatch<SetStateAction<TimerState>>;
  setTime: Dispatch<SetStateAction<number>>;
  setCurrentSet: Dispatch<SetStateAction<number>>;
}

const useTimer = ({
  sound,
  workoutTime,
  restTime,
  setCount,
  readyTime,
  isRunning,
  timerState,
  time,
  currentSet,
  setIsRunning,
  setTimerState,
  setTime,
  setCurrentSet,
}: TimerProps): void => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio(sound));
    }
  }, [sound]);

  useEffect(() => {
    if (isRunning && audio) {
      const timer = setInterval(() => {
        if (time >= 1 && time <= 4) {
          audio.play();
        }
        setTime((prevTime) => prevTime - 1);
        if (time !== 0) {
          return;
        }
        if (timerState === "Ready") {
          setTime(workoutTime);
          setTimerState("Workout");
        } else if (timerState === "Workout") {
          setTime(restTime);
          setTimerState("Rest");
          if (currentSet === setCount) {
            setTime(readyTime);
            setTimerState("Ready");
            setIsRunning(false);
          }
        } else if (timerState === "Rest") {
          setCurrentSet((prevSet) => prevSet + 1);
          setTime(workoutTime);
          setTimerState("Workout");
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [
    isRunning,
    time,
    timerState,
    workoutTime,
    restTime,
    setCount,
    currentSet,
    readyTime,
    audio,
    setIsRunning,
    setTime,
    setTimerState,
    setCurrentSet,
  ]);
};

export default useTimer;
