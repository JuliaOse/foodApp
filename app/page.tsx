import Header from "@/components/Header";
import Image from "next/image";
import Categories from "@/components/Categories";
import { IconBurger } from "@tabler/icons-react";
import { IconPizza } from "@tabler/icons-react";
import { IconCup } from "@tabler/icons-react";
import { IconIceCream2 } from "@tabler/icons-react";
import { IconAsset } from "@tabler/icons-react";
import FoodCard from "@/components/FoodCard";
import { IconPencilMinus } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";

const categories = [
  { title: "All" },
  { title: "Burger", icon: <IconBurger stroke={2} /> },
  { title: "Pizza", icon: <IconPizza stroke={2} /> },
  { title: "Drink", icon: <IconCup stroke={2} /> },
  { title: "Desert", icon: <IconIceCream2 stroke={2} /> },
  { title: "Appetizer", icon: <IconAsset stroke={2} /> },
];

export default function Home() {
  return (
    <main className="font-raleway bg-[#fff] flex min-h-screen flex-col  justify-between p-2 border-r-2">
      <div className="flex flex-row">
        <div className="flex flex-col w-4/6  h-full">
          <div>
            <Header headerName="Home" />
            <hr className="mt-1"></hr>
          </div>
          {/* Categories section */}
          <div className="p-3">
            <div>
              <span className="font-semibold text-lg my-2">Categories</span>
            </div>
            <div className="flex flex-row">
              {categories.map((category) => (
                <Categories
                  key={category.title}
                  title={category.title}
                  icon={category.icon}
                />
              ))}
            </div>
            <hr className="mt-4" />
          </div>
          {/* Most popular section */}
          <div className="p-3">
            <div className="mb-4">
              <span className="font-semibold text-2xl">Most Popular</span>
              <div className="flex flex-row">
                <FoodCard
                  name="Pepperoni Pizza"
                  img="/assets/pepperoni.png"
                  price="120EPG"
                />
                <FoodCard
                  name="Cheese Pizza"
                  img="/assets/pepperoni.png"
                  price="120EPG"
                />
                <FoodCard
                  name="BBQ Pizza"
                  img="/assets/pepperoni.png"
                  price="120EPG"
                />
                <FoodCard
                  name="Pepperoni Pizza"
                  img="/assets/pepperoni.png"
                  price="120EPG"
                />
              </div>
            </div>
            <span className="font-semibold text-2xl">Burger</span>
            <div className="flex flex-row flex-wrap">
              <FoodCard
                name="Cheese Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
              <FoodCard
                name="Cheese Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
              <FoodCard
                name="Cheese Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
              <FoodCard
                name="Cheese Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
              <FoodCard
                name="Cheese Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
              <FoodCard
                name="Cheese Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
              <FoodCard
                name="Dry Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
              <FoodCard
                name="Cheese Burger"
                img="/assets/burger.png"
                price="120EPG"
              />
            </div>
          </div>
        </div>
        {/* Order details section */}
        <div className="bg-[#dadada14] fixed h-full p-4 w-[30%] border-l-[1px] right-0 top-0">
          <div>
            <span className="p- font-bold text-3xl">Order Details</span>
            <hr className="mt-4" />
          </div>
          <div className="m-3 mb-10 flex flex-row items-center justify-center">
            <div className="bg-[#3081FF] px-10 py-2 z-10 -m-10 rounded-3xl text-white">
              Dine in
            </div>
            <div className="border-2 border-l-0 px-10 ml-1 py-2 rounded-3xl">
              Takeaway
            </div>
          </div>
          <div className="py-3">
            <span className="font-semibold text-xl">Order Details</span>
            <div className="p-3 flex flex-col border-[1px] rounded-xl divide-y divide-dashed">
              <div className="flex flex-row justify-between items-center py-2">
                <span>Order ID</span>
                <span>#345783</span>
              </div>
              <div className="flex flex-row justify-between items-center py-2">
                <span>Date</span>
                <span>April 28,2024</span>
              </div>
            </div>
          </div>
          <div className="py-3 ">
            <div className="items-center flex flex-row gap-2">
              <span className="font-semibold text-xl">Items</span>
              <span className="bg-[#faf8ea] px-2 rounded-full">1</span>
            </div>
            <div className="border-[1px] p-2 rounded-lg flex flex-col justify-between gap-8">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <div className="bg-[#DADADA] p-2 rounded-lg">
                    <Image
                      src="/assets/burger.png"
                      alt="burger"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold">Dry Burger</span>
                    <span className="font-light">Extra: Mustard</span>
                    <span className="font-light">Note: No cheese</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-around">
                  <div className="bg-[#dadada73] p-2 rounded-3xl">
                    <IconPencilMinus
                      stroke={1}
                      fill="#3081FF"
                      strokeOpacity={0.1}
                      size={12}
                    />
                  </div>
                  <div className="bg-[#dadada73] p-2 rounded-3xl">
                    <IconTrash
                      stroke={1}
                      fill="red"
                      strokeOpacity={0.1}
                      size={12}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row justify-between gap-2 items-center">
                  <span className="bg-[#dadada73] px-2 rounded-full">-</span>
                  <span>2</span>
                  <span className="bg-[#dadada73] px-2 rounded-full">+</span>
                </div>
                <div>
                  <span>250LE</span>
                </div>
              </div>
            </div>
          </div>
          {/* modal div */}
          <div className="p-8 fixed bottom-0 right-0 w-[30%] rounded-t-3xl bg-[#ffffff] shadow-xl border-l-[1px]">
            <div className=" p-6 border-[1px] divide-y divide-dashed rounded-lg">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <span>Subtotal</span>
                  <span>850LE</span>
                </div>
                <div className="flex flex-row justify-between items-center py-1">
                  <p>
                    Tax <span>5%</span>
                  </p>
                  <span>850LE</span>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center py-2">
                <span>Total Amount</span>
                <span>858.75LE</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#3081FF] text-white py-2 rounded-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
