import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = { headerName: string };

function Header({ headerName }: Props) {
  return (
    <div className="m-2 font-raleway flex flex-row justify-between items-center">
      <div>
        <span className="p-2 font-bold text-3xl">{headerName}</span>
      </div>
      <div className="flex gap-2.5 items-center justify-start">
        {headerName === "Home" ? (
          <div className="flex gap-2 border-[#DFDFE0] rounded-[32px] border-[1px] px-6 py-3 items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-[#CCCCCC]" />
            <input
              className="flex-1 text-[12px] outline-none"
              placeholder="Search menu here..."
              type="text"
            ></input>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-between gap-2">
            <button className="text-[#3081FF] px-8 py-2 bg-[#01010113] rounded text-sm">
              Print report
            </button>
            <button className="bg-[#3081FF] text-white px-8 py-2 rounded text-sm">
              Edit shift
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
