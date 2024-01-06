"use client";
import { sendEmail } from "@/actions/querySubmit";
import TextField from "./textField";
import { events } from "@/consts";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const image = {
  Editable: "/design1.jpg",
  Sent: "/querySubmitted.jpg",
};
export default function QueryForm() {
  const [status, setStatus] = useState("Editable");
  const [date, setDate] = useState(new Date());
  async function handleSubmit(event) {
    try {
      event.preventDefault();
      setStatus("Sending");
      await sendEmail({
        eventType: event.target.eventType.value,
        guests: event.target.guests.value,
        budget: event.target.budget.value,
        date: date,
        name: event.target.name.value,
        phone: event.target.phoneNo.value,
      });
      setStatus("Sent");
    } catch (error) {
      alert(error);
      setStatus("Editable");
    }
  }
  function handleDateChange(e) {
    const date = new Date(e.target.value);
    const formattedDate = date.toLocaleDateString("en-GB"); // Formats to dd/mm/yyyy
    setDate(formattedDate);
  }
  if (status === "Sending") {
    return spinner();
  } else
    return (
      <>
        <div className="relative w-full h-dvh md:h-auto">
          <Image
            src={image[status]}
            className="rounded-tr-3xl rounded-tl-3xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none"
            alt="Bengali wedding arrangements"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
        {status === "Sent" && querySubmitted()}
        {status === "Editable" && editableForm(handleSubmit, handleDateChange)}
      </>
    );
}
function spinner() {
  return (
    <div className="text-center w-full">
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

function editableForm(handleSubmit, handleDateChange) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-10 py-8 w-full flex flex-col space-y-5 rounded-br-3xl rounded-bl-3xl md:rounded-bl-none md:rounded-tr-3xl"
    >
      <h3 className="font-bold text-3xl font-lily">Aroma Eventz</h3>
      <h5>Let us plan your dream event</h5>
      <div className="w-full max-w-md">
        <label className="block text-sm font-medium text-gray-700">
          Event Type
        </label>
        <select
          name="eventType"
          className="mt-1 block w-full p-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md leading-loose"
        >
          {events.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full max-w-md">
        <label
          id="guest-number-label"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          How many guests are you planning for?
        </label>
        <div
          className="flex flex-row flex-wrap"
          aria-labelledby="guest-number-label"
        >
          {["0-20", "20-50", "50-100", "100-200", "200-500", "500+"].map(
            (label) => (
              <div key={label} className="flex items-center m-2">
                <input
                  id={`guests-${label}`}
                  type="radio"
                  name="guests"
                  value={label}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor={`guests-${label}`}
                  className="ml-2 block text-sm text-gray-700"
                >
                  {label}
                </label>
              </div>
            )
          )}
        </div>
      </div>
      <div className="w-full max-w-md">
        <label
          id="budget-per-person-label"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Budget Per Person
        </label>
        <div
          className="flex flex-row flex-wrap"
          aria-labelledby="budget-per-person-label"
        >
          {["100-500", "500-1000", "1000-2000", "2000-5000", "5000+"].map(
            (label) => (
              <div key={label} className="flex items-center m-2">
                <input
                  id={`budget-${label}`}
                  type="radio"
                  name="budget"
                  value={label}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor={`budget-${label}`}
                  className="ml-2 block text-sm text-gray-700"
                >
                  {label}
                </label>
              </div>
            )
          )}
        </div>
      </div>{" "}
      <div className="w-full">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Event Date
        </label>
        <input
          type="date"
          name="date"
          onChange={handleDateChange}
          className="bg-white text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <TextField name="name" label="Name" placeholder="Enter your name" />
      <TextField
        type="number"
        name="phoneNo"
        label="Phone No."
        placeholder="Enter your phone no."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function querySubmitted() {
  return (
    <div className="bg-white px-10 py-8 w-full flex flex-col space-y-5 rounded-md">
      <h3 className="font-bold text-3xl font-lily text-primary">
        Aroma’s Eventz
      </h3>
      <h3 className="font-bold text-3xl font-lily">Namoskar! </h3>
      <p className="text-xl">
        We have just noted your requirements. Thank you for choosing Aroma’s
        Events - a multipurpose event management facility ! We&apos;re thrilled
        to help bring your special event to life. Expect a call soon for
        personalized planning. Together, we&apos;ll create unforgettable moments
        and turn your dream into a spectacular reality. Your journey towards an
        amazing event begins now, You can Sign-up for more personalized Planning
        of your event!
      </p>
      <p className="text-xl">
        If you have any immediate questions or thoughts, don&apos;t hesitate to
        reach out. We&apos;re just a phone call, text or an email away!
        <br />
        <Link
          target="_blank"
          rel="noreferrer"
          className="text-primary underline my-5"
          href="https://wa.me/+918013572929"
        >
          {" "}
          (+91) 8013572929/9231684345
        </Link>{" "}
        <Link
          target="_blank"
          rel="noreferrer"
          className="text-primary underline"
          href="mailto:aromafestivehall1@gmail"
        >
          {" "}
          aromafestivehall1@gmail
        </Link>
      </p>
    </div>
  );
}
