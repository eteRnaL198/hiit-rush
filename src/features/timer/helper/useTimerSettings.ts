import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  DEFAULT_READY_TIME,
  DEFAULT_REST_TIME,
  DEFAULT_SET_COUNT,
  DEFAULT_WORKOUT_TIME,
} from "@/utils/constants";
import { TimerData } from "@/utils/types";
import { getStoredData } from "@/services/localstorage";

const defaultTimerSettings: TimerData = {
  readyTime: DEFAULT_READY_TIME,
  workoutTime: DEFAULT_WORKOUT_TIME,
  restTime: DEFAULT_REST_TIME,
  setCount: DEFAULT_SET_COUNT,
};

const useTimerSettings = () => {
  const [readyTime, setReadyTime] = useState(defaultTimerSettings.readyTime);
  const [workoutTime, setWorkoutTime] = useState(
    defaultTimerSettings.workoutTime
  );
  const [restTime, setRestTime] = useState(defaultTimerSettings.restTime);
  const [setCount, setSetCount] = useState(defaultTimerSettings.setCount);
  const router = useRouter();
  useEffect(() => {
    const storedSettings = getStoredData<TimerData>();
    if (!storedSettings) return;
    setReadyTime(storedSettings.readyTime);
    setWorkoutTime(storedSettings.workoutTime);
    setRestTime(storedSettings.restTime);
    setSetCount(storedSettings.setCount);
  }, [router]);

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
