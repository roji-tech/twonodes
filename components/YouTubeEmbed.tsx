import React from "react";

const YouTubeEmbed = () => (
  <section className="mywrapper w-full flex justify-center">
    <div className="w-full max-w-[800px] max-h-[100vw]">
      <div className="relative overflow-hidden pb-[56.25%] h-0 max-w-[800px] mx-auto">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LapeR9T4ZhY?si=9YJZrPsq9tFnhrPa"
          title="TwoNodes Technologies"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default YouTubeEmbed;
