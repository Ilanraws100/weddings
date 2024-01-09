import { DashboardHeader } from "@/components/header";
import Image from "next/image";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ChairIcon from "@mui/icons-material/Chair";
import DeckIcon from "@mui/icons-material/Deck";
import HotelIcon from "@mui/icons-material/Hotel";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HotTubIcon from "@mui/icons-material/HotTub";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Link from "next/link";
export default function Venue1() {
  return (
    <>
      <DashboardHeader />
      <main className="bg-secondary flex flex-col items-center">
        <section className="relative w-full h-screen">
          <Image src="/venue1.jpg" alt="venue1" fill priority />
          <h1 className="text-6xl bg-[#A70D00] text-white font-bold absolute bottom-10 text-center w-full">
            Suvechha Festive Hall
          </h1>
        </section>
        <section className="p-10 text-center">
          <h2 className="font-bold mb-4 text-4xl">Facility Features</h2>
          <div className="grid grid-cols-4 gap-10 p-5">
            {[
              {
                icon: (
                  <EventSeatIcon fontSize="large" className="text-primary" />
                ),
                label: "500+ Capacity",
              },
              {
                icon: (
                  <RestaurantMenuIcon
                    fontSize="large"
                    className="text-primary"
                  />
                ),
                label: "In House Catering",
              },
              {
                icon: <ChairIcon fontSize="large" className="text-primary" />,
                label: "Fully Furnished",
              },
              {
                icon: <DeckIcon fontSize="large" className="text-primary" />,
                label: "Courtyard",
              },
              {
                icon: <HotelIcon fontSize="large" className="text-primary" />,
                label: "Guest Rooms",
              },
              {
                icon: <AcUnitIcon fontSize="large" className="text-primary" />,
                label: "Air conditioner",
              },
              {
                icon: <HotTubIcon fontSize="large" className="text-primary" />,
                label: "Geyser",
              },
              {
                icon: (
                  <AutoAwesomeIcon fontSize="large" className="text-primary" />
                ),
                label: "Customized Decorations",
              },
            ].map((item) => (
              <div key={item} className="flex flex-col items-center">
                {item.icon}
                <p className="text-xs mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
        <Link href="/dashboard/choosePlate/starter" className="relative group hover:cursor-pointer w-4/6 h-[85vh] m-10">
          <Image
            src="/plate.jpg"
            alt="Customize your plate"
            fill
            priority
            className="rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent rounded-2xl"></div>
          <h2 className="text-5xl text-white font-bold absolute bottom-10 text-end w-full p-5">
            Make your own plate
            <span className="ml-2 inline-block align-middle group-hover:translate-x-1 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </span>
          </h2>
        </Link>
      </main>
    </>
  );
}
