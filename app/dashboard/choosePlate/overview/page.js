'use client';
import { DashboardFooter } from "@/components/footer";
import { DashboardHeader } from "@/components/header";
import { foodMenu } from "@/data/foodMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const data=[foodMenu.starter.packages[0]]
    return (
      <>
        <DashboardHeader />
        <main className="p-10 flex flex-col items-center space-y-5">
          <h1 className="text-3xl font-bold">
            You have added starter Delight to your plate
          </h1>
          <div className="grid grid-cols-3 gap-5 my-5">
            {data?.map((packageData, index) =>
              PackageCard(packageData, router, index)
            )}
          </div>
        </main>
        <DashboardFooter />
      </>
    );
}
function PackageCard(packageData, router, index) {
  const handleClick = () => {
    router.push(`/dashboard/choosePlate/overview`);
    //   const sections=Object.keys(foodMenu)
    //   const index=sections.indexOf(section)
    //   if(index<sections.length-1)
    //   router.push(`/dashboard/choosePlate/${sections[index+1]}`)
    // else
    //   router.push(`/dashboard/choosePlate/${sections[0]}`)
    console.log(packageData, index);
  };
  return (
    <div
      key={index}
      onClick={handleClick}
      className="flex flex-col rounded-md border  shadow-2xl p-4 cursor-pointer hover:scale-105 transition-all"
    >
      <Image
        src={packageData.image}
        alt="image"
        width={600}
        height={500}
        className="rounded-md"
        priority
      />
      <span className="w-24 text-sm text-center bg-primary text-white font-bold mt-4 mb-2 rounded-lg">
        {packageData.label}
      </span>
      <h1 className="text-xl font-bold mb-2">{packageData.title}</h1>
      <ul className="space-y-0.5 list-disc list-inside">
        {packageData.items?.map((item) => (
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