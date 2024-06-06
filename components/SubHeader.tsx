import React from "react";
import Image from "next/image";

function SubHeader() {
  return (
    <div className="p-3 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between items-center gap-3">
        <div className="flex flex-row items-center gap-3">
          <Image
            src="/assets/profilepic.png"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-bold text-xl">Mohammed Aly</span>
          <span className="font-sans text-medium">Mon, 8 May</span>
        </div>
        <div>
          <span className="font-sans text-medium">08:56 AM - 06:00 PM</span>
        </div>
      </div>
      <div>
        <span className="font-sans text-[#3081FF] ">03:34:12</span>
      </div>
    </div>
  );
}

export default SubHeader;
