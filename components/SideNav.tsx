"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function SideNav() {
  const pathname = usePathname();
  const router = useRouter();
  console.log("pathname", pathname);

  const isCurrentPath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex flex-1 flex-col bg-white border-r-black h-screen justify-between">
      <ul role="list" className="flex flex-col gap-y-6 items-center p-4">
        <li>
          <div
            className={clsx(
              "p-3 rounded-sm",
              pathname === "/" ? "bg-[#3081FF]" : "bg-[#01010125]"
            )}
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={
                pathname === "/"
                  ? "/assets/icons8-home-48.png"
                  : "/assets/home.png"
              }
              alt="home"
              width={20}
              height={20}
            />
          </div>
        </li>
        <li>
          <div className="p-4 bg-[#01010125] rounded-sm">
            <Image
              src="/assets/grid.png"
              alt="grid"
              width={20}
              height={20}
              style={{ fill: "#fff" }}
            />
          </div>
        </li>
        <li>
          <div className="p-3 bg-[#01010125] rounded-sm">
            <Image
              src="/assets/person.png"
              alt="person"
              width={20}
              height={20}
              style={{ fill: "#fff" }}
            />
          </div>
        </li>
        <li>
          <div className="p-3 bg-[#01010125] rounded-sm">
            <Image
              src="/assets/icons8-grid-50.png"
              alt="grid"
              width={20}
              height={20}
              style={{ fill: "#fff" }}
            />
          </div>
        </li>
      </ul>
      <ul role="list" className="flex flex-col gap-y-6 items-center p-4">
        <li>
          <div
            onClick={() => router.push("/settings")}
            style={{ cursor: "pointer" }}
          >
            <Image
              className="outline-white"
              src="/assets/icons8-settings-50.png"
              alt="settings"
              width={20}
              height={20}
              style={{ fill: "#fff" }}
            />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
