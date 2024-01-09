import { DashboardFooter } from "@/components/footer";
import { DashboardHeader } from "@/components/header";

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
       <DashboardFooter />
      </>
    );
}