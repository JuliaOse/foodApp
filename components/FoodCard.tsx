import React from "react";
import Image from "next/image";

type Props = { name: string; price: string; img: string };

function FoodCard({ name, price, img }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={img} alt="pizza" width={200} height={200} />
      <span className="font-bold">{name}</span>
      <span>{price}</span>
    </div>
  );
}

export default FoodCard;
