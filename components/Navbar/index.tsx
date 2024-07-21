"use client";

import Link from "next/link";
import React from "react";

import { SidebarMobile } from "./sidebar-mobile";
import { navbarItems } from "./navbarItems";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="h-[90px] w-full" />
      <div className="absolute top-0 right-0 left-0 z-50 inline-flex w-full h-[90px] px-[1%] pt-[19px] pb-5 bg-white justify-center items-center">
        <div className="w-full hidden lg:flex h-[54px] justify-between items-center gap-[80px]">
          <div className="w-full h-[84px] px-[3%] md:px-[4%] lg:px-[8%] py-5 bg-white flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-full justify-between items-center inline-flex">
              <Link href={"/"} className="justify-start items-center flex">
                <img alt="" className="" src="/logo.svg" />
              </Link>
              <div className="justify-start items-center gap-[35px] flex">
                {navbarItems.links.map((item) => (
                  <Link
                    href={item.href}
                    className={`text-center text-sky-950 text-base font-['Bricolage Grotesque'] leading-7 ${
                      pathname === item.href ? "font-bold" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href={"#services"}
                className="cursor-pointer w-[143px] h-11 px-5 py-2 bg-sky-950 rounded-[30px] justify-center items-center gap-2.5 inline-flex"
              >
                <div className="text-center text-white text-base font-semibold font-['Bricolage Grotesque'] leading-7">
                  Login
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* MOBILE NAVBAR RESPONSIVE */}
        <div className="w-full z-[90] h-full lg:hidden">
          <SidebarMobile sidebarItems={navbarItems} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
