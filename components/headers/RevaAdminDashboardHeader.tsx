import Link from "next/link";
import React from "react";
import { SheetMenu } from "../admin-panel/sheet-menu";
import Image from "next/image";
import { MenuItem, MenuProps } from "../admin-panel/menu";
// import { ModeToggle } from "../mode-toggle";

interface DashboardNavbarProps extends MenuProps {}

export const RevaAdminDashboardNavbar = ({
  items,
  userImageUrl = "",
}: DashboardNavbarProps) => {
  return (
    <div className="w-full max-w-full h-[75px] max-md:h-[70px] px-[5%] bg-gradient-to-r  from-gray-800 to-blue-500 justify-between items-center inline-flex">
      <Link
        href={"/reva-restricted/dashboard"}
        className="flex items-center gap-2.5"
      >
        <Image
          src="/reva/revaLogo.png"
          alt="REVA Logo"
          width={50}
          height={50}
          className="bg-white/70 rounded-full w-12 max-md:w-11"
        />

        <h1 className="text-2xl font-bold text-white">REVA Admin</h1>
      </Link>

      <div className="justify-start items-center gap-2.5 flex">
        <SheetMenu items={items} userImageUrl={userImageUrl} />

        {/* <ModeToggle /> */}

        <Link
          href="/reva-restricted/superadmin"
          className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-900 transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-130"
        >
          <span className="text-sm text-[#f0f0f1] group-hover:text-white font-medium transition-colors duration-300">
            Add New Admin
          </span>
        </Link>
      </div>
    </div>
  );
};
