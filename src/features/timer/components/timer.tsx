import Button from "@/components/button";
import sound from "/public/ticktack.mp3";
import useTimer from "@/features/timer/helper/useTimer";

const Timer = () => {
  const {
    readyTime,
    currentTime,
    setCurrentTime,
    timerState,
    setTimerState,
    currentSet,
    setCurrentSet,
    isRunning,
    setIsRunning,
  } = useTimer({
    sound,
  });

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-4xl">{timerState}</p>
      <p className="text-4xl">{currentSet}</p>
      <p className="text-8xl">{currentTime}</p>
      <div className="flex w-full justify-around">
        <Button
          label="Reset"
          onClick={() => {
            setCurrentTime(readyTime);
            setTimerState("Ready");
            setCurrentSet(1);
            setIsRunning(false);
          }}
        />
        <Button
          label={isRunning ? "Stop" : "Start"}
          onClick={() => setIsRunning(!isRunning)}
        />
      </div>
    </div>
  );
};

export default Timer;
