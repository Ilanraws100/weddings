"use client";
import { DashboardHeader } from "@/components/header";
import { cateringMenu, foodMenu } from "@/consts";
import Image from "next/image";

export default function ChoosePlate({ params }) {
  const data = foodMenu[params.type];
  return (
    <>
      <DashboardHeader />
      <main className="p-10 flex flex-col items-center space-y-5">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <h2 className="text-gray-500 text-center">{data.subtitle}</h2>
        <div className="grid grid-cols-3 gap-5 my-5">
          {data.packages.map((packageData) => PackageCard(packageData))}
        </div>
      </main>
    </>
  );
}
function PackageCard(packageData) {
  const handleClick = () => {
    console.log(packageData);
  }
  return (
    <div
      key={packageData.title}
      onClick={handleClick}
      className="flex flex-col rounded-md border  shadow-2xl p-4 cursor-pointer hover:scale-105 transition-all"
    >
      <Image
        src={packageData.image}
        alt="image"
        width={600}
        height={500}
        className="rounded-md"
      />
      <span className="w-24 text-sm text-center bg-primary text-white font-bold mt-4 mb-2 rounded-lg">
        {packageData.label}
      </span>
      <h1 className="text-xl font-bold mb-2">{packageData.title}</h1>
      <ul className="space-y-0.5 list-disc list-inside">
        {packageData.items.map((item) => (
          <li key={item} className="text-gray-500">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4 items-center">
        <h1 className="text-2xl font-bold mt-4">₹{packageData.price}</h1>{" "}
        <button className="bg-primary text-white font-bold px-5 py-2 rounded">
          Add To Plate
        </button>
      </div>
    </div>
  );
}