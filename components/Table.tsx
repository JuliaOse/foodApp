import React from "react";
import classNames from "classnames";

const data = [
  {
    orderId: "3456872",
    orderDetails: "XL Vegetables Pizza",
    date: "8/5/2024",
    time: "03:37",
    orderType: "Dine in",
    price: "50.65 EGP",
  },
  {
    orderId: "3456872",
    orderDetails: "XL Vegetables Pizza",
    date: "8/5/2024",
    time: "03:37",
    orderType: "Dine in",
    price: "50.65 EGP",
  },
  {
    orderId: "3456872",
    orderDetails: "XL Vegetables Pizza",
    date: "8/5/2024",
    time: "03:37",
    orderType: "Dine in",
    price: "50.65 EGP",
  },
  {
    orderId: "3456872",
    orderDetails: "XL Vegetables Pizza",
    date: "8/5/2024",
    time: "03:37",
    orderType: "Dine in",
    price: "50.65 EGP",
  },
  {
    orderId: "3456872",
    orderDetails: "XL Vegetables Pizza",
    date: "8/5/2024",
    time: "03:37",
    orderType: "Dine in",
    price: "50.65 EGP",
  },
];

const Table = () => {
  return (
    <div className="p-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-2">
            <th className="p-2">Order ID</th>
            <th className="p-2">Order Details</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Order Type</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.orderId}
              className={classNames("p-2", {
                "bg-white": index % 2 === 0,
                "bg-gray-100": index % 2 !== 0,
              })}
            >
              <td className="p-6 font-sans font-light">{item.orderId}</td>
              <td className="p-2">{item.orderDetails}</td>
              <td className="p-2 font-sans font-light">{item.date}</td>
              <td className="p-2 font-sans font-light">{item.time}</td>
              <td className="p-2">{item.orderType}</td>
              <td className="p-2 font-sans font-light">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
