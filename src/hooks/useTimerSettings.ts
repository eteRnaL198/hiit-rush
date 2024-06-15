import {
  LOCALSTORAGE_KEY,
  DEFAULT_READY_TIME,
  DEFAULT_REST_TIME,
  DEFAULT_SET_COUNT,
  DEFAULT_WORKOUT_TIME,
} from "@/utils/constants";
import { TimerData } from "@/utils/types";
import { useEffect, useState } from "react";

import useLocalstorage from "./useLocalstorage";

const defaultTimerSettings: TimerData = {
  readyTime: DEFAULT_READY_TIME,
  workoutTime: DEFAULT_WORKOUT_TIME,
  restTime: DEFAULT_REST_TIME,
  setCount: DEFAULT_SET_COUNT,
};

const useTimerSettings = () => {
  const { value: storedSettings, setValue: setStoredSettings } =
    useLocalstorage(LOCALSTORAGE_KEY, defaultTimerSettings);
  const [readyTime, setReadyTime] = useState(storedSettings.readyTime);
  const [workoutTime, setWorkoutTime] = useState(storedSettings.workoutTime);
  const [restTime, setRestTime] = useState(storedSettings.restTime);
  const [setCount, setSetCount] = useState(storedSettings.setCount);

  useEffect(() => {
    setStoredSettings({ readyTime, workoutTime, restTime, setCount });
  }, [readyTime, workoutTime, restTime, setCount, setStoredSettings]);

  return {
    readyTime,
    setReadyTime,
    workoutTime,
    setWorkoutTime,
    restTime,
    setRestTime,
    setCount,
    setSetCount,
  };
};
export default useTimerSettings;
