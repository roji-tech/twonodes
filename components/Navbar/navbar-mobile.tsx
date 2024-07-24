"use client";

import { SidebarItems } from "@/types";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, X, Newspaper } from "lucide-react";
import Link from "next/link";
import { SidebarButtonSheet as SidebarButton } from "./sidebar-button";
import { usePathname } from "next/navigation";

interface SidebarMobileProps {
  sidebarItems: SidebarItems;
}

export function SidebarMobile(props: SidebarMobileProps) {
  const pathname = usePathname();

  const featurednewspage = {
    label: "Featured News",
    href: "/featurednews",
    icon: Newspaper,
  };

  return (
    <Sheet>
      <div className="w-full flex h-[54px] justify-between items-center gap-[80px]">
        <Link href={"/"} className="justify-start items-center flex">
          <img alt="" className="w-[202px] h-11" src="/logo.svg" />
        </Link>

        <SheetTrigger asChild>
          <Button size="icon" variant="ghost" className="">
            <Menu color="red" size={20} />
          </Button>
        </SheetTrigger>
      </div>
      <SheetContent side="left" className="bg-transparent px-3 py-4" hideClose>
        <SheetHeader className="bg-white flex flex-row justify-between items-center space-y-0 pb-6 pt-5 pr-3">
          <Link href={"/"} className="justify-start items-center flex">
            <img alt="" className="w-[200px] h-11" src="/logo.svg" />
          </Link>

          <SheetClose asChild>
            <Button className="h-7 w-7 p-0" variant="ghost">
              <X size={15} color="red" className="border border-red-300" />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="h-full mt-5 flex flex-col w-full gap-1">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <div className="flex flex-col justify-start items-center gap-[20px]">
                {props.sidebarItems.links.map((item) => {
                  return (
                    <Link
                      href={item.href}
                      className="group rounded-xl w-full p-0 items-center flex cursor-pointer hover:bg-gray-600"
                    >
                      <SidebarButton
                        variant="link"
                        // variant={pathname === item.href ? "secondary" : "ghost"}
                        icon={item.icon}
                        className={`group-hover:translate-x-1 py-9 duration-200 w-full flex items-center font-['Bricolage Grotesque'] leading-7 ${
                          pathname === item.href
                            ? "font-extrabold"
                            : "font-normal"
                        }`}
                      >
                        <span className="text-white text-xl">{item.label}</span>
                      </SidebarButton>
                    </Link>
                  );
                })}
                <Link
                  href={featurednewspage.href}
                  className="group rounded-xl w-full p-0 items-center flex cursor-pointer hover:bg-gray-600"
                >
                  <SidebarButton
                    variant="link"
                    // variant={pathname === item.href ? "secondary" : "ghost"}
                    icon={featurednewspage.icon}
                    className={`group-hover:translate-x-1 py-9 duration-200 w-full flex items-center font-['Bricolage Grotesque'] leading-7 ${
                      pathname === featurednewspage.href
                        ? "font-extrabold"
                        : "font-normal"
                    }`}
                  >
                    <span className="text-white text-xl">
                      {featurednewspage.label}
                    </span>
                  </SidebarButton>
                </Link>
                <Link
                  href={"/login"}
                  className="cursor-pointer w-[143px] h-11 px-5 py-2 bg-sky-950 rounded-[30px] justify-center items-center gap-2.5 inline-flex"
                >
                  <div className="text-center text-white text-base font-semibold font-['Bricolage Grotesque'] leading-7">
                    Login
                  </div>
                </Link>
              </div>
            </div>

            {/* {props.sidebarItems.extras} */}
          </div>

          {/* <div className="absolute w-full bottom-4 px-1 left-0">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="https://github.com/max-programming.png" />
                        <AvatarFallback>Max Programming</AvatarFallback>
                      </Avatar>
                      <span>Max Programming</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="mb-2 p-2">
                <div className="flex flex-col space-y-2 mt-2">
                  <Link href="/">
                    <SidebarButton size="sm" icon={Settings} className="w-full">
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton size="sm" icon={LogOut} className="w-full">
                    Log Out
                  </SidebarButton>
                </div>
              </DrawerContent>
            </Drawer>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
