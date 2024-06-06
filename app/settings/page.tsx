import Header from "@/components/Header";
import SalesCard from "@/components/SalesCard";
import SubHeader from "@/components/SubHeader";
import Table from "@/components/Table";
import { title } from "process";
import React from "react";

const sales = [
  { title: "Working hours", value: "6h45m" },
  { title: "Cash sales", value: "5678 EGP" },
  { title: "Credit sales", value: "757 EGP" },
  { title: "Total orders", value: "89" },
];

function page() {
  return (
    <div className="font-raleway bg-white">
      <div className="p-3">
        <Header headerName={"Shift summery"} />
        <hr className="mt-8" />
      </div>
      <div className="p-3">
        <SubHeader />
      </div>
      <div className="flex flex-row p-6 m-2 gap-4">
        {sales.map((sale) => (
          <SalesCard key={sale.title} title={sale.title} value={sale.value} />
        ))}
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default page;
