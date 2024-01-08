import { DashboardHeader } from "@/components/header";
import Link from "next/link";

export default function ChooseVenue() {
    return (
      <>
        <DashboardHeader />
        <main className="p-5 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">Your Search Results</h1>
          <h2 className="text-gray-500">
            Congratulations! You have following Event Halls Available for
            Booking on your Selected Date and Outdoor Catering in Kolkata.
          </h2>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="bg-gray-100 w-60 h-60 rounded-md"></div>{" "}
            <div className="bg-gray-100 w-60 h-60 rounded-md"></div>{" "}
            <div className="bg-gray-100 w-60 h-60 rounded-md"></div>
          </div>
        </main>
        <footer className="bg-[rgba(234,126,126,0.3)] flex flex-col p-5">
          <div className="flex justify-between">
            <button className="px-6 py-1 m-5 border border-gray-800 rounded-md">Back</button>
            <button className="px-6 py-1 m-5 rounded-md bg-primary text-white font-bold">
              Continue
            </button>
          </div>
          <p className="text-xs mx-4 self-end">
            You are logged in|
            <Link href="/Profile" className="text-linkColor font-bold">
              Go to Profile
            </Link>
          </p>
        </footer>
      </>
    );
}