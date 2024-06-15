import NumberInput from "@/components/number-input";
import useTimerSettings from "@/features/timer/helper/useTimerSettings";

const TimerSettings = () => {
  const {
    readyTime,
    setReadyTime,
    workoutTime,
    setWorkoutTime,
    restTime,
    setRestTime,
    setCount,
    setSetCount,
  } = useTimerSettings();

  return (
    <div className="grid grid-cols-2 gap-4 place-items-center">
      <label htmlFor="interval-ready">Ready</label>
      <div className="grid grid-cols-2 gap-1">
        <NumberInput
          defaultValue={readyTime.toString()}
          id="interval-ready"
          handleValidChange={setReadyTime}
        />
        <p>sec</p>
      </div>
      <label htmlFor="interval-workout">Workout</label>
      <div className="grid grid-cols-2 gap-1">
        <NumberInput
          defaultValue={workoutTime.toString()}
          id="interval-workout"
          handleValidChange={setWorkoutTime}
        />
        <p>sec</p>
      </div>
      <label htmlFor="interval-rest">Rest</label>
      <div className="grid grid-cols-2 gap-1">
        <NumberInput
          defaultValue={restTime.toString()}
          id="interval-rest"
          handleValidChange={setRestTime}
        />
        <p>sec</p>
      </div>
      <label htmlFor="interval-set">Set</label>
      <div className="grid grid-cols-2 gap-1">
        <NumberInput
          defaultValue={setCount.toString()}
          id="interval-set"
          handleValidChange={setSetCount}
        />
        <p>set</p>
      </div>
    </div>
  );
};

export default TimerSettings;
