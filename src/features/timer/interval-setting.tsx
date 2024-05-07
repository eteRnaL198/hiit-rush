import Input from "@/components/input";

type Props = {
  readyTime: number;
  workoutTime: number;
  restTime: number;
  setCount: number;
  setReadyTime: (value: number) => void;
  setWorkoutTime: (value: number) => void;
  setRestTime: (value: number) => void;
  setSetCount: (value: number) => void;
};

const IntervalSetting = ({
  readyTime,
  workoutTime,
  restTime,
  setCount,
  setReadyTime,
  setWorkoutTime,
  setRestTime,
  setSetCount,
}: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4 place-items-center">
      <label htmlFor="interval-ready">Ready</label>
      <div className="grid grid-cols-2 gap-1">
        <Input
          id="interval-ready"
          type="number"
          value={readyTime}
          onChange={(e) => {
            setReadyTime(Number(e.target.value));
          }}
        />
        <p>sec</p>
      </div>
      <label htmlFor="interval-workout">Workout</label>
      <div className="grid grid-cols-2 gap-1">
        <Input
          id="interval-workout"
          type="number"
          value={workoutTime}
          onChange={(e) => {
            setWorkoutTime(Number(e.target.value));
          }}
        />
        <p>sec</p>
      </div>
      <label htmlFor="interval-rest">Rest</label>
      <div className="grid grid-cols-2 gap-1">
        <Input
          id="interval-rest"
          type="number"
          value={restTime}
          onChange={(e) => {
            setRestTime(Number(e.target.value));
          }}
        />
        <p>sec</p>
      </div>
      <label htmlFor="interval-set">Set</label>
      <div className="grid grid-cols-2 gap-1">
        <Input
          id="interval-set"
          type="number"
          value={setCount}
          onChange={(e) => {
            setSetCount(Number(e.target.value));
          }}
        />
        <p>set</p>
      </div>
    </div>
  );
};

export default IntervalSetting;
