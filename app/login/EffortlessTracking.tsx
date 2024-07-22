import React from "react";

const EffortlessTracking = () => {
  return (
    <div className="mywrapper w-full min-h-[374px] py-[60px] bg-gray-50 flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="self-stretch h-[254px] flex-col justify-start items-center gap-[45px] flex">
        <div className="w-full justify-between items-center inline-flex">
          <div className="w-full flex-col justify-start items-center gap-[18px] inline-flex">
            <div className="text-center text-zinc-950 text-[50px] font-extrabold font-['Bricolage Grotesque'] leading-[64px]">
              Effortless Tracking
            </div>
            <div className="max-w-[982px] text-center text-sky-950 text-base font-normal font-['Bricolage Grotesque'] leading-[30px]">
              Don't miss out on the latest in GIS technology and insights.
              Subscribe to our newsletter and be the first to know about new
              features, industry trends, and expert tips.
            </div>
          </div>
        </div>
        <div className="max-w-[257px] w-full h-[67px] px-5 py-6 bg-sky-950 rounded-[50px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-lg font-semibold font-['Bricolage Grotesque']">
            View Services
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffortlessTracking;
