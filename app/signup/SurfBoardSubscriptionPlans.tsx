import React from "react";

const SurfBoardSubscriptionPlans = () => {
  return (
    <div className="mywrapper w-full min-h-[968.26px] py-[75px] bg-white flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="w-full flex-col justify-start items-center gap-[70px] flex">
        <div className="w-full flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-center gap-[15px] flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium font-['Bricolage Grotesque'] leading-[34px]">
                Sign Up
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
              <div className="text-center text-zinc-950 text-[50px] font-extrabold font-['Bricolage Grotesque'] leading-[54px]">
                SurfBoard Subscription Plans
              </div>
            </div>
          </div>
          <div className="text-center text-neutral-600 text-lg font-normal font-['Bricolage Grotesque'] leading-[30px]">
            A customizable subscription plan made for you to buy only what you
            truly require.
          </div>
        </div>
        <div className="w-full justify-evenly items-center gap-[30px] flex flex-wrap">
          <div className="max-w-[369.28px] min-h-[465.26px] p-[9.14px] bg-white rounded-[9.14px] shadow flex-col justify-start items-start gap-[9.14px] inline-flex">
            <div className="min-h-[387.26px] flex-col justify-center items-center gap-[40.84px] flex">
              <img
                className="max-w-[203.84px] max-h-[203.84px]"
                src="https://via.placeholder.com/204x204"
              />
              <div className="flex-col justify-start items-center gap-[14.29px] flex">
                <div className="text-center text-zinc-950 text-[28px] font-bold font-['Bricolage Grotesque'] leading-9">
                  Basic
                </div>
                <div className="max-w-[290.67px] text-center text-slate-800 text-base font-medium font-['Bricolage Grotesque'] leading-tight">
                  Do you do an average of 13 jobs per quarter?
                </div>
                <div className="max-w-[290.67px] text-center text-neutral-600 text-sm font-normal font-['Bricolage Grotesque'] leading-[18.20px]">
                  The Basic Plan allows you to manage up to 55 records annually.
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[369.28px] min-h-[465.26px] p-[9.14px] bg-white rounded-[9.14px] shadow flex-col justify-start items-start gap-[9.14px] inline-flex">
            <div className="min-h-[396.36px] flex-col justify-center items-center gap-[40.84px] flex">
              <img
                className="max-w-[203.84px] max-h-[212.94px]"
                src="https://via.placeholder.com/204x213"
              />
              <div className="flex-col justify-start items-center gap-[14.29px] flex">
                <div className="text-center text-zinc-950 text-[28px] font-bold font-['Bricolage Grotesque'] leading-9">
                  Intermediate
                </div>
                <div className="max-w-[290.67px] text-center text-slate-800 text-base font-medium font-['Bricolage Grotesque'] leading-tight">
                  Do you do an average of 25 jobs per quarter?
                </div>
                <div className="max-w-[290.67px] text-center text-neutral-600 text-sm font-normal font-['Bricolage Grotesque'] leading-[18.20px]">
                  The Intermediate Plan allows you to manage up to 110 records
                  annually.
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[369.28px] min-h-[465.26px] p-[9.14px] bg-white rounded-[9.14px] shadow flex-col justify-start items-start gap-[9.14px] inline-flex">
            <div className="min-h-[387.26px] flex-col justify-center items-center gap-[40.84px] flex">
              <img
                className="max-w-[203.84px] max-h-[203.84px]"
                src="https://via.placeholder.com/204x204"
              />
              <div className="flex-col justify-start items-center gap-[14.29px] flex">
                <div className="text-center text-zinc-950 text-[28px] font-bold font-['Bricolage Grotesque'] leading-9">
                  Advanced
                </div>
                <div className="max-w-[290.67px] text-center text-slate-800 text-base font-medium font-['Bricolage Grotesque'] leading-tight">
                  Do you do more than 25 jobs per quarter?
                </div>
                <div className="max-w-[290.67px] text-center text-neutral-600 text-sm font-normal font-['Bricolage Grotesque'] leading-[18.20px]">
                  The Advanced Plan allows you to manage up to 220 records
                  annually.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[520px] w-full px-[45px] py-[15px] bg-sky-950 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-lg font-semibold font-['Bricolage Grotesque'] leading-[30px]">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurfBoardSubscriptionPlans;