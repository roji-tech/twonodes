import Link from "next/link";
import React from "react";
// import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div className="mywrapper heroImg bg-cover overflow-hidden">
      <div className="w-full min-h-[602px] py-[70px] bg-black/opacity-60 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-[70px] flex">
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-center text-white text-lg font-normal font-['Bricolage Grotesque'] leading-[30px]">
                Integrity | Innovation | Training | Research
              </div>
              <div className="max-w-[887px] pb-2.5 flex-col justify-start items-start flex">
                <div className="max-w-[887px] text-white text-[64px] font-extrabold font-['Bricolage Grotesque'] leading-[74px]">
                  The Platform for Industry Based GIS Solutions
                </div>
                <div className="">
                  <div className="text-center text-sky-500 text-[64px] font-extrabold font-['Bricolage Grotesque'] leading-[74px]">
                    with ease
                    {/* <br />
                    at glance
                    <br />
                    efficiently */}
                  </div>
                </div>
              </div>
              <div className="max-w-[856px] text-white text-lg font-normal font-['Bricolage Grotesque'] leading-[30px]">
                Discover specific local industry based Geographic Information
                System solutions for your businesses. Unleash the power of
                geospatial intelligence for your industry.
              </div>
            </div>

            <Link
              href={"/services"}
              className="w-[min(100%, 470px)] px-[45px] py-[15px] bg-gray-900 rounded-[30px] justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-white text-lg font-semibold font-['Bricolage Grotesque'] leading-[30px]">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
