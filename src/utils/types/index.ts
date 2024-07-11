export type TimerState = "Ready" | "Workout" | "Rest";

export type TimerData = {
  readyTime: number;
  workoutTime: number;
  restTime: number;
  setCount: number;
};

export type MusicData = {
  id: string;
};
