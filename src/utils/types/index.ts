export type TimerState = "Ready" | "Workout" | "Rest" | "Completed";

export type TimerData = {
  readyTime: number;
  workoutTime: number;
  restTime: number;
  setCount: number;
};

export type MusicData = {
  id: string;
};

export type CalendarData = {
  [year: number]: {
    [month: number]: number[];
  };
};
