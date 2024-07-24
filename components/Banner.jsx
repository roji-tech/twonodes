"use client";

import Link from "next/link";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, playOnInit: true }));

  const CarouselTexts = ["with ease", "at glance", "efficiently"];

  return (
    <div className="mywrapper heroImg bg-cover overflow-hidden">
      <div className="w-full min-h-[602px] py-[70px] bg-black/opacity-60 flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-[70px] flex">
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-center text-white text-lg font-normal leading-[30px]">
                Integrity | Innovation | Training | Research
              </div>
              <div className="max-w-[887px] pb-2.5 flex-col justify-start items-start flex">
                <div className="max-w-[887px] text-white text-[64px] font-extrabold leading-[74px]">
                  The Platform for Industry Based GIS Solutions
                </div>
                <div className="">
                  <div className="text-center text-sky-500 text-[64px] font-extrabold leading-[0px]">
                    <Carousel
                      plugins={[plugin.current]}
                      opts={{
                        align: "start",
                      }}
                      orientation="vertical"
                      className="w-full"
                    >
                      <CarouselContent className="h-16">
                        {CarouselTexts.map((text, index) => (
                          <CarouselItem key={index} className="basis-full">
                            {text}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {/* <CarouselPrevious />
                      <CarouselNext /> */}
                    </Carousel>
                  </div>
                </div>
              </div>
              <div className="max-w-[856px] text-white text-lg font-normal leading-[30px]">
                Discover specific local industry based Geographic Information
                System solutions for your businesses. Unleash the power of
                geospatial intelligence for your industry.
              </div>
            </div>

            <Link
              href={"/services"}
              className="w-[min(100%, 470px)] px-[45px] py-[15px] bg-gray-900 rounded-[30px] justify-center items-center gap-2.5 inline-flex"
            >
              <div className="text-center text-white text-lg font-semibold leading-[30px]">
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
