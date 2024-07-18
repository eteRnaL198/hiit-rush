import Frame from "@/components/frame";
import useMusicSettings from "../helper/useMusicSettings";

const Music = () => {
  const { id } = useMusicSettings();

  return (
    <div className="flex flex-col justify-center items-center mb-8">
      {id ? (
        <iframe
          className="w-full sm:w-4/5 h-auto aspect-video"
          src={`https://www.youtube.com/embed/playlist?list=${id}`}
          title="Background Music"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
      ) : (
        <Frame className="w-3/5 text-center">Music is not set</Frame>
      )}
    </div>
  );
};

export default Music;
