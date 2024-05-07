import { useEffect, useState } from "react";
import Button from "@/components/button";
import IntervalSetting from "@/features/timer/interval-setting";
import {
  DEFAULT_READY_TIME,
  DEFAULT_WORKOUT_TIME,
  DEFAULT_REST_TIME,
  DEFAULT_SET_COUNT,
} from "@/constant";
import sound from "/public/ticktack.mp3";

type TimeState = "Ready" | "Workout" | "Rest";

const Timer = () => {
  const [readyTime, setReadyTime] = useState(DEFAULT_READY_TIME);
  const [workoutTime, setWorkoutTime] = useState(DEFAULT_WORKOUT_TIME);
  const [restTime, setRestTime] = useState(DEFAULT_REST_TIME);
  const [setCount, setSetCount] = useState(DEFAULT_SET_COUNT);

  const [time, setTime] = useState(DEFAULT_READY_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeState, setTimeState] = useState<TimeState>("Ready");
  const [currentSet, setCurrentSet] = useState(1);

  useEffect(() => {
    const audio = new Audio(sound);
    if (isRunning) {
      const timer = setInterval(() => {
        if (time >= 1 && time <= 4) {
          audio.play();
        }
        setTime((time) => time - 1);
        if (time !== 0) {
          return;
        }
        if (timeState === "Ready") {
          setTime(workoutTime);
          setTimeState("Workout");
        } else if (timeState === "Workout") {
          setTime(restTime);
          setTimeState("Rest");
          if (currentSet === setCount) {
            setTime(readyTime);
            setTimeState("Ready");
            setIsRunning(false);
          }
        } else if (timeState === "Rest") {
          setCurrentSet((currentSet) => currentSet + 1);
          setTime(workoutTime);
          setTimeState("Workout");
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [
    isRunning,
    time,
    timeState,
    workoutTime,
    restTime,
    setCount,
    currentSet,
    readyTime,
  ]);

  return (
    <div className="flex flex-col items-center gap-8">
      <IntervalSetting
        readyTime={readyTime}
        workoutTime={workoutTime}
        restTime={restTime}
        setCount={setCount}
        setReadyTime={setReadyTime}
        setWorkoutTime={setWorkoutTime}
        setRestTime={setRestTime}
        setSetCount={setSetCount}
      />
      <p className="text-4xl">{timeState}</p>
      <p className="text-4xl">{currentSet}</p>
      <p className="text-8xl">{time}</p>
      <div className="flex w-full justify-around">
        <Button
          onClick={() => {
            setTime(readyTime);
            setTimeState("Ready");
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
