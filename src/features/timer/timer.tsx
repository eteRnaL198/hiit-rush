import { useState } from "react";
import Button from "@/components/button";
import IntervalSetting from "@/features/timer/interval-setting";
import {
  DEFAULT_READY_TIME,
  DEFAULT_WORKOUT_TIME,
  DEFAULT_REST_TIME,
  DEFAULT_SET_COUNT,
} from "@/constant";
import sound from "/public/ticktack.mp3";
import { TimerState } from "@/types";
import useTimer from "@/hooks/useTimer";

const Timer = () => {
  const [readyTime, setReadyTime] = useState(DEFAULT_READY_TIME);
  const [workoutTime, setWorkoutTime] = useState(DEFAULT_WORKOUT_TIME);
  const [restTime, setRestTime] = useState(DEFAULT_REST_TIME);
  const [setCount, setSetCount] = useState(DEFAULT_SET_COUNT);

  const [time, setTime] = useState(DEFAULT_READY_TIME);
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
    time,
    currentSet,
    setIsRunning,
    setTimerState,
    setTime,
    setCurrentSet,
  });

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
      <p className="text-4xl">{timerState}</p>
      <p className="text-4xl">{currentSet}</p>
      <p className="text-8xl">{time}</p>
      <div className="flex w-full justify-around">
        <Button
          onClick={() => {
            setTime(readyTime);
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
