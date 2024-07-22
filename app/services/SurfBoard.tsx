import React from "react";

const SurfBoard = () => {
  return (
    <section className="mywrapper w-full min-h-[1111px] py-[75px] bg-white flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="flex-col justify-start items-center gap-[70px] flex">
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-center gap-[15px] flex">
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium leading-[34px]">
                What You Need To Know
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[18px] flex">
              <div className="text-center text-zinc-950 text-[50px] font-extrabold leading-[54px]">
                SurfBoard
              </div>
            </div>
          </div>
          <div className="max-w-[1019px] text-center text-neutral-600 text-lg font-normal leading-[30px]">
            A Geographic Information System (GIS) solution meticulously designed
            to present survey-based information in a user-friendly manner,
            facilitating convenient access, efficient management, and the
            extraction of valuable data-driven insights for enhanced
            decision-making processes.
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-12 flex">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
            <img
              className="max-w-full w-full max-h-full rounded-[10px]"
              src="https://via.placeholder.com/570x570"
            />
            <div className="min-h-[434px] justify-center items-start gap-[30px] grid grid-cols-1 lg:grid-cols-2">
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <img
                  className="max-w-16 h-16"
                  src="https://via.placeholder.com/64x64"
                />
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="max-w-[270px] text-center text-zinc-950 text-xl font-semibold leading-[30px]">
                    Smart Forms
                  </div>
                  <div className="max-w-[270px] text-center text-neutral-600 text-sm font-normal leading-normal">
                    A convenient form for you to upload PDF survey plans, CAD
                    drawings, and evidence of lodgment for all surveys you have
                    completed.
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <img
                  className="w-16 h-16"
                  src="https://via.placeholder.com/64x64"
                />
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="w-[270px] text-center text-zinc-950 text-xl font-semibold leading-[30px]">
                    Dashboard
                  </div>
                  <div className="max-w-[270px] text-center text-neutral-600 text-sm font-normal leading-normal">
                    Analyze spatial designs and discover patterns in your survey
                    records.
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <img
                  className="w-16 h-16"
                  src="https://via.placeholder.com/64x64"
                />
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="max-w-[270px] text-center text-zinc-950 text-xl font-semibold leading-[30px]">
                    Record Viewer
                  </div>
                  <div className="max-w-[270px] text-center text-neutral-600 text-sm font-normal leading-normal">
                    Query your survey records efficiently by searching with the
                    plan number, survey plan name, or coordinates to get
                    specific results.
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-6 inline-flex">
                <img
                  className="w-16 h-16"
                  src="https://via.placeholder.com/64x64"
                />
                <div className="flex-col justify-start items-center gap-3 flex">
                  <div className="max-w-[270px] text-center text-zinc-950 text-xl font-semibold leading-[30px]">
                    Field - Office Module
                  </div>
                  <div className="max-w-[270px] text-center text-neutral-600 text-sm font-normal leading-normal">
                    Better workforce coordination between associates in the
                    field and in the office.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="max-w-[470px] px-[45px] py-[15px] bg-sky-950 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-center text-white text-lg font-semibold leading-[30px]">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfBoard;
