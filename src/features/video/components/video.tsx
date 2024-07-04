const Video = () => {
  return (
    <div className="flex justify-center mb-8">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/playlist?list=PLLcFi7xY7GTVEIBJvavOocTQlI-UT4dH7"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>
  );
};

export default Video;
