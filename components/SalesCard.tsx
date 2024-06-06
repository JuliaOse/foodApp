import React from "react";

type Props = { title: string; value: string };

function SalesCard({ title, value }: Props) {
  return (
    <div className="border-[1px] bg-white rounded-md flex flex-col py-6 pl-6 justify-between gap-3 pr-36 m-2">
      <span className="font-medium">{title}</span>
      <span className="font-bold font-sans text-xl text-[#3081FF]">
        {value}
      </span>
    </div>
  );
}

export default SalesCard;
