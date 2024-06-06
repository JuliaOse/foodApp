import React from "react";
import { IconBurger } from "@tabler/icons-react";
import clsx from "clsx";

type Props = { title: string; icon?: any };

function Categories({ title, icon }: Props) {
  return (
    <div>
      <div
        className={clsx(
          "flex flex-row m-2 rounded-3xl px-4 py-2 items-center justify-center",
          title === "All" ? "bg-[#3081FF]" : "bg-[#DADADA]"
        )}
      >
        <div>{icon}</div>
        <div className="font-medium text-sm">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
