"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShareSvg,
  StarSvg,
  CalendarSvg,
  ClockSvg,
  PlusSvg,
  BuyTicketSvg,
  StandardTicketSvg,
  LocationSvg,
} from "@/app/(main)/gbc/svgs";
import { DesktopScreen } from "@/utils/responsiveness";

export const Gbc = () => {
  const TAGS = ["#GIS", "#Surveyor", "#Surveying", "#Geospatial", "#Course"];
  const isDesktop = DesktopScreen();
  const [url, setUrl] = useState("gbc-frame");

  useEffect(() => {
    if (isDesktop) {
      setUrl("gbc-frame");
    } else {
      setUrl("https://arcg.is/0ODWL81");
    }
  }, [isDesktop]);

  return (
    <div className="mywrapper pb-[55px] pt-2 bg-white justify-start items-center gap-2.5 inline-flex text-sky-950 text-base font-normal leading-[30px]">
      <div className="w-full flex flex-col justify-start items-start gap-10">
        <div className="self-stretch min-h-[380px] flex-col justify-start items-start lg:gap-[60px] gap-[40px] flex">
          <div className="flex justify-between items-center flex-wrap lg:gap-[20px] gap-2 w-full">
            <h2 className="text-sky-950 text-[35px] md:text-[50px] font-extrabold leading-[45px] md:leading-[64px]">
              Geospatial Builders Course 1.0
            </h2>
            <div className="justify-end items-center gap-[15px] flex sm:w-max w-full">
              {StarSvg}
              {ShareSvg}
            </div>
          </div>
          <div className="self-stretch justify-between items-start flex flex-wrap">
            <div className="w-max flex-col justify-start items-start gap-5 inline-flex">
              <h4 className="text-[#001f3f] lg:text-[32px] text-[22px] font-bold font-['Bricolage Grotesque']text-sky-950 text-[30px] md:text-[40px] font-extrabold leading-[25px] md:leading-[40px]">
                Date and Time
              </h4>
              <div className="self-stretch min-h-[177px] flex-col justify-start items-start gap-[15px] flex">
                <div className="ml-[10px] p-2.5 justify-center items-center gap-5 flex">
                  {CalendarSvg}
                  <span className="text-[#ff1c4d] lg:text-2xl font-semibold font-['Bricolage Grotesque']">
                    Saturday, November 23rd, 2024
                  </span>
                </div>
                <div className="ml-[10px] p-2.5 justify-center items-center gap-5 flex">
                  {ClockSvg}
                  <span className="text-[#ff1c4d] lg:text-2xl font-semibold font-['Bricolage Grotesque']">
                    9 AM Prompt
                  </span>
                </div>
                <div className="ml-[10px] p-2.5 justify-center items-center gap-5 flex">
                  {PlusSvg}
                  <span className="text-[#00bfff] lg:text-2xl font-medium font-['Bricolage Grotesque']">
                    Add to Calendar
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-end gap-[50px] inline-flex">
              <div className="w-[324px] mAX-h-[84px] p-2.5 bg-[#00bfff] rounded-[5px] flex-col justify-center items-center gap-2.5 flex">
                <Link
                  href={url}
                  className="cursor-pointer justify-center items-center gap-[15px] inline-flex"
                >
                  {BuyTicketSvg}
                  <span className="text-white lg:text-[32px] text-[22px] font-semibold font-['Bricolage Grotesque']">
                    Buy Tickets
                  </span>
                </Link>
              </div>
              <div className="flex-col justify-start items-start gap-[26px] flex">
                <h4 className="text-[#001f3f] lg:text-[32px] text-[22px] font-bold font-['Bricolage Grotesque'] text-sky-950 text-[30px] md:text-[40px] font-extrabold leading-[25px] md:leading-[40px]">
                  Ticket Information
                </h4>
                <div className="justify-start items-center gap-2.5 inline-flex">
                  {StandardTicketSvg}
                  <div className="text-[#001f3f] lg:text-2xl font-semibold font-['Bricolage Grotesque']">
                    Standard Ticket: 70k each
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-[20px]">
          <div className="flex-col justify-start items-start gap-5 flex">
            <h3 className="text-[#001f3f] lg:text-[32px] text-[22px] font-bold font-['Bricolage Grotesque'] text-sky-950 text-[30px] md:text-[40px] font-extrabold leading-[25px] md:leading-[40px]">
              Location
            </h3>
            <div className="flex-col justify-start items-start gap-[15px] flex">
              <div className="p-2.5 justify-center items-center gap-5 inline-flex">
                {LocationSvg}
                <p className="max-w-[537px] text-[#ff1c4d] lg:text-2xl font-semibold font-['Bricolage Grotesque']">
                  Lagos Marriott Hotel Ikeja - 122 Joel Ogunnaike St, Ikeja GRA,
                  Lagos 100271, Lagos.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[621px] max-h-[424px] rounded-[5px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.500011118921!2d3.346840411305369!3d6.584595222421341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b921776d4cd3f%3A0x82bfa6a8a3177ddf!2sLagos%20Marriott%20Hotel%20Ikeja!5e0!3m2!1sen!2sng!4v1725794142963!5m2!1sen!2sng"
              width="500"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full max-w-[621px] max-h-[430px] rounded-[5px]"
            ></iframe>
          </div>
          {/* <img src="/gbcLocation.png" /> */}
        </div>

        <div className="flex-col justify-start items-start gap-5 flex">
          <h3 className="text-[#001f3f] lg:text-[32px] text-[22px] font-bold font-['Bricolage Grotesque'] text-sky-950 text-[30px] md:text-[40px] font-extrabold leading-[25px] md:leading-[40px]">
            HOW TO PAY FOR GBC 1.0
          </h3>

          <div className="flex flex-col text-[#001f3f] font-medium font-['Bricolage Grotesque'] leading-[30px]">
            <span className="flex items-center gap-2">
              <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />
              Scan the QR Code
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />
              Fill the reservation form
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />
              Our event team will reach out to you on the phone number or email
              provided
            </span>
          </div>
          <h4 className="text-[#001f3f] text-xl font-semibold font-['Bricolage Grotesque'] leading-[30px]">
            NB:
          </h4>
          <div>
            <h5 className="text-[#001f3f] font-medium font-['Bricolage Grotesque'] leading-[30px]">
              Our event team will reach out to you via the following details
              only;
            </h5>

            <div className="flex flex-col text-[#ff1c4d] font-bold font-['Bricolage Grotesque'] leading-[30px]">
              <span className="flex items-center gap-2">
                <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />
                Phone Number: 09160002740
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />
                Email : -
                <span className="">events@twonodetechnologies.com</span>
              </span>
            </div>
          </div>
          <div>
            <h5 className="text-[#001f3f] font-medium font-['Bricolage Grotesque'] leading-[38px]">
              Payment should only be made within 24hours of receiving
              authorization,{" "}
              <b className="text-[#ff1c4d]">
                as there are only 15 tickets available.
              </b>
              <br />
              All payments should be made to;
            </h5>

            <div className="flex flex-col text-[#ff1c4d] font-bold font-['Bricolage Grotesque'] leading-[30px]">
              <span className="flex items-center gap-2">
                <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />{" "}
                Account Number : - ___________
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />{" "}
                Account Name : - Event-TwoNodeTechnologies Limited
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-1 rounded-3xl bg-[#001f3f] ml-2" />
                Bank : - GT Bank
              </span>
            </div>

            <p className="text-[#ff1c4d] font-semibold font-['Bricolage Grotesque'] leading-[38px]">
              PAYMENT Confirms your RESERVATION
            </p>
          </div>
        </div>

        <div className="w-full min-h-[78px] px-[34px] py-5 bg-[#f8fafb] rounded-[10px] flex-col justify-center items-center gap-2.5 flex">
          <div className="min-h-[38px] flex-col justify-start items-start gap-5 flex w-full">
            <div className="justify-between items-center gap-[20px] flex w-full">
              <Accordion
                className="w-full flex-col justify-start items-start gap-[18px] flex"
                type="single"
                collapsible
              >
                <AccordionItem className="w-full" value="item-1">
                  <AccordionTrigger className="w-full">
                    <div className="cursor-pointer w-full flex-col justify-start items-start flex">
                      <div className="w-full bg-gray-50 justify-between items-center inline-flex">
                        <h2 className="text-[#001f3f] lg:text-[32px] text-[22px] font-bold font-['Bricolage Grotesque'] text-sky-950 text-[30px] md:text-[40px] font-extrabold leading-[25px] md:leading-[40px]">
                          Event Description
                        </h2>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="text-sky-950 text-base font-normal leading-[30px]">
                      <h3 className="text-[#001f3f] font-bold text-2xl">
                        A wake-up call!!!
                      </h3>
                      <span className="text-[#001f3f] text-xl">
                        Nowadays we are potentially two persons or a person away
                        from reaching Bill Gates, the President or any other
                        high network individual. That's because all our
                        interactions, transactions and activities have become
                        virtual, even products and services. For example, in
                        government, certificates are issued in soft copies,
                        electronic surveys, electronic CofO and even e-receipts.
                        This has made us take a closer look into our
                        professional environment and we discover that the
                        reality is no different. The need for remote access
                        services to effectively convey our services and products
                        from the physical platform to various digital platforms
                        has become essential in today's digital age.
                      </span>
                      <br />
                      <br />
                      <span className="text-[#001f3f] text-xl">
                        The Current trends, development and policies around us
                        call for a need to be seen as a versatile geospatial
                        specialist rather than being confined to the public's
                        view of land surveyors, it is imperative to break free
                        from this narrow viewpoint. Embracing a holistic
                        approach to geospatial knowledge and skills is essential
                        for professionals to thrive in today's rapidly changing
                        and dynamic environment.
                      </span>
                      <br />
                      <br />
                      <h3 className="text-[#001f3f] font-bold text-2xl">
                        GIS as our ally!
                      </h3>

                      <span className="text-[#001f3f] text-xl">
                        Throughout history, there has been a lack of proper
                        synergy between Surveying and GIS. Rather, we usually
                        hear things like application of GIS in transportation,
                        application of GIS in land administration and so on. So
                        we are asking, can GIS truly serve as a valuable ally to
                        surveyors? Can GIS be what we call a "survey assistant?"
                        that is enhance all our activities from field to office
                        planning, field work execution, plan production, plan
                        management or even extend our services as stated earlier
                        to remote access? The answer is YES. Find out on
                        November 23rd, 2024, as our first edition of Geospatial
                        Builders Course begins with the theme Demystifying GIS
                        for Surveyors.
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="flex-col justify-start items-start gap-5 flex w-full">
          <h3 className="text-[#001f3f] lg:text-[32px] text-[22px] font-bold font-['Bricolage Grotesque'] text-sky-950 text-[30px] md:text-[40px] font-extrabold leading-[25px] md:leading-[40px]">
            Tags
          </h3>

          <div className="justify-start items-start gap-5 flex flex-wrap">
            {TAGS.map((tag) => (
              <div
                key={tag}
                className="px-[27px] py-[3px] bg-[#f8fafb] rounded-[50px] justify-center items-center gap-2.5 flex"
              >
                <span className="text-[#001f3f] text-lg font-normal font-['Bricolage Grotesque'] leading-[30px]">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
