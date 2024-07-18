import Button from "@/components/button";
import sound from "/public/ticktack.mp3";
import useTimer from "@/features/timer/helper/useTimer";
import { useRouter } from "next/navigation";
import Frame from "@/components/frame";

const Timer = () => {
  const {
    currentTime,
    currentState,
    currentSet,
    isRunning,
    setIsRunning,
    reset,
  } = useTimer({
    sound,
  });

  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-8">
      <p className="text-4xl">{currentState}</p>
      <p className="text-4xl">{currentSet}</p>
      <p className="text-8xl">{currentTime}</p>
      <div className="flex w-full justify-around">
        <Button label="↺ Reset" onClick={reset} />
        {isRunning ? (
          <Button label="■ Stop" onClick={() => setIsRunning(false)} />
        ) : (
          <Button
            label="▶ Start"
            onClick={() => setIsRunning(true)}
            disabled={currentState === "Completed"}
          />
        )}
      </div>
      {currentState === "Completed" && (
        <Frame className="flex flex-col items-center gap-4">
          <p>Great job! Check it off on the calendar.</p>
          <Button
            label="↗ Calendar"
            onClick={() => {
              router.push("/calendar");
            }}
          />
        </Frame>
      )}
    </div>
  );
};

export default Timer;
