import useMusicSettings from "../helper/useMusicSettings";

const Music = () => {
  const { id } = useMusicSettings();

  return (
    <div className="flex flex-col justify-center items-center mb-8">
      {id ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/playlist?list=${id}`}
          title="Background Music"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
      ) : (
        <p className="w-3/5 p-6 text-center rounded-xl shadow-lg">
          Music is not set
        </p>
      )}
    </div>
  );
};

export default Music;
