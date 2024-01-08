import { AromaEventzButton } from "@/components/customButton";
import { DashboardHeader } from "@/components/header";
import TextField from "@/components/textField";
import Image from "next/image";
import Link from "next/link";

export default function ChooseDate() {
  return (
    <>
     <DashboardHeader />
      <main className="tilted-background">
        <div className="px-5 pb-5 flex justify-center">
          <div className="w-96 h-[85vh] relative hidden md:block">
            <Image
              src="/chooseDate.jpg"
              alt="Beautiful arrangements"
              fill
              priority
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col bg-white rounded-xl ml-2 items-center justify-center text-center p-10">
            <h1 className="font-bold text-2xl mb-2">Choose a Date</h1>
            <p className="text-sm text-gray-400 mb-10">
              Checking the availability is Just a Click Away - Secure
              <br /> Your Event Date Today!
            </p>
            <form className="flex flex-col space-y-5">
              <TextField name="event" placeholder="Event Name" />
              <div className="flex flex-col md:flex-row space-y-5 md:space-x-5 md:space-y-0">
                <TextField
                  type="number"
                  name="guests"
                  placeholder="Number of Guests"
                />
                <TextField name="date" placeholder="Date" type="date" />
              </div>
              <AromaEventzButton label="Check Availability" href="/dashboard/chooseVenue" />
            </form>
            <p className="text-xs text-gray-400 max-w-md mt-4 mb-10">
              By submitting this form you agree to Aroma Eventz Platform
              <br />
              <Link href="/terms" className="text-linkColor font-bold">
                Terms of Services
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-linkColor font-bold">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-xs text-gray-800 mt-auto">
              You are logged in |{" "}
              <Link href="/Profile" className="text-linkColor font-bold">
                Skip
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
