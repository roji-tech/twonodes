"use client";

import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export const EfficientGISSolutions = () => {
  const [element, setElement] = useState({
    number: 1,
    title: "Survey Data Management",
    desc: "Renders Surveyor's data in a manner that provides easy access, management and data-driven insight.",
    img: "gis.png",
  });

  const plugin = useRef(Autoplay({ delay: 2000, playOnInit: true }));

  const GIS = [
    {
      number: 1,
      title: "Survey Data Management",
      desc: "Renders Surveyor's data in a manner that provides easy access, management and data-driven insight.",
      img: "gis.png",
    },
    {
      number: 2,
      title: "Oil and Gas ROW and Utility Asset Network Management",
      desc: "Keep track of all your assets, from pipelines to valve pits, metering stations, place markers, ensuring they are always up-to-date, accurately mapped, and accessible real-time with a mobile app.",
      img: "GIS1.png",
    },
    {
      number: 3,
      title: "Electric Utility Network Management",
      desc: "Visualize your entire electric grid in real-time, allowing for better monitoring and control of your assets.",
      img: "GIS2.png",
    },
    {
      number: 4,
      title: "Telecommunication Asset in Real-Time",
      desc: "Visualize your entire telecommunication asset in real-time, allowing for better monitoring and control of your assets.",
      img: "GIS3.png",
    },
  ];

  return (
    <div className="mywrapper w-full min-h-[792px] py-[75px] bg-white flex-col items-center gap-12 inline-flex">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[50px] 2xl:gap-[70px]">
        <div className="lg:basis-1/2 flex flex-col justify-start items-start gap-20">
          <div className="min-h-[172px] flex flex-col justify-start items-start gap-[30px]">
            <div className="flex justify-start items-center gap-[15px]">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium leading-[34px]">
                Our Core Solution
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[18px]">
              <div className="w-[331px] text-sky-950 text-[50px] font-extrabold leading-[54px]">
                Efficient GIS Solutions
              </div>
            </div>
          </div>
          <div className="min-h-[110px] w-full flex flex-col justify-start items-start gap-6">
            <div className="max-w-[570px] flex justify-start items-start gap-6">
              <div className="w-16 h-16 rounded-full border-2 border-sky-950 text-center text-sky-950 text-2xl font-bold leading-[34px] grid place-items-center">
                {element.number}
              </div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="w-[482px] text-sky-950 text-2xl font-bold leading-[34px]">
                  Survey Data Management {element.number}
                </div>
                <div className="w-[482px] text-neutral-600 text-base font-normal leading-7">
                  Renders Surveyor's data in a manner that provides easy access,
                  management and data-driven insight.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="w-[470px] px-[45px] py-[15px] bg-sky-950 rounded-[30px] flex justify-center items-center gap-2.5">
              <div className="text-center text-white text-lg font-semibold leading-[30px]">
                Get Started Today
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[530px] lg:basis-1/2 max-h-[642px] bg-black/opacity-20 rounded-lg mt-6 lg:mt-0 lg:ml-6 flex items-center">
          <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent className="flex gap-7">
              {GIS.map((item, ind) => (
                <CarouselItem key={ind} className="p-6 basis-full">
                  <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-[50px] 2xl:gap-[70px]">
                    <img
                      src={item?.img}
                      className="w-full h-auto lg:h-full object-cover rounded-lg"
                      alt="GIS Solutions"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
              <CarouselNext /> */}
          </Carousel>
        </div>
      </div>

      {/* <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-[50px] 2xl:gap-[70px]">
        <div className="lg:basis-1/2 flex flex-col justify-start items-start gap-20">
          <div className="h-[172px] flex flex-col justify-start items-start gap-[30px]">
            <div className="flex justify-start items-center gap-[15px]">
              <div className="w-5 h-[0px] border-2 border-sky-950"></div>
              <div className="text-sky-950 text-xl font-medium leading-[34px]">
                Our Core Solution
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[18px]">
              <div className="w-[331px] text-sky-950 text-[50px] font-extrabold leading-[54px]">
                Efficient GIS Solutions
              </div>
            </div>
          </div>
          <div className="min-h-[110px] flex flex-col justify-start items-start gap-6">
            <Carousel plugins={[plugin.current]} className="w-full">
              <CarouselContent className="flex gap-7">
                {GIS.map((item, ind) => (
                  <CarouselItem key={ind} className="p-6 basis-full">
                    <div className="w-[570px] flex justify-start items-start gap-6">
                      <div className="w-16 h-16 relative">
                        <div className="w-16 h-16 left-0 top-0 absolute rounded-full border-2 border-sky-950" />
                        <div className="left-[28px] top-[15px] absolute text-center text-sky-950 text-2xl font-bold leading-[34px]">
                          {ind + 1}
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start gap-5">
                        <div className="w-[482px] text-sky-950 text-2xl font-bold leading-[34px]">
                          {item?.title}
                        </div>
                        <div className="w-[482px] text-neutral-600 text-base font-normal leading-7">
                          Renders Surveyor's data in a manner that provides easy
                          access, management and data-driven insight.
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <Link
              href={"/services"}
              className="max-w-[470px] w-full px-[45px] py-[15px] bg-sky-950 rounded-[30px] flex justify-center items-center gap-2.5"
            >
              <div className="text-center text-white text-lg font-semibold leading-[30px]">
                Get Started Today
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-[530px] lg:basis-1/2 max-h-[642px] bg-black/opacity-20 rounded-lg mt-6 lg:mt-0 lg:ml-6 flex items-center">
          <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent className="flex gap-7">
              {GIS.map((item, ind) => (
                <CarouselItem key={ind} className="p-6 basis-full">
                  <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-center gap-[50px] 2xl:gap-[70px]">
                    <img
                      src={item?.img}
                      className="w-full h-auto lg:h-full object-cover rounded-lg"
                      alt="GIS Solutions"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div> */}
    </div>
  );
};
