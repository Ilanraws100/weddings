import CustomButton from "./customButton";
import CustomDatePicker from "./datePicker";

export default function QueryForm() {
    return (
      <div className="bg-white px-10 py-8 w-full flex flex-col space-y-5 rounded-md">
        <h3 className="font-bold text-3xl font-lily">Aroma Eventz</h3>
        <h5>Let us plan your dream event</h5>
        <div className="w-full max-w-xs">
          <label className="block text-sm font-medium text-gray-700">
            Event Type
          </label>
          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Reception">Reception</option>
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
        </div>

        <CustomDatePicker />
        <div className="w-full max-w-xs">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            placeholder="Enter your name"
          />
        </div>
        <div className="w-full max-w-xs">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone No.
          </label>
          <input
            type="number"
            id="phone"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            placeholder="Enter your phone no."
          />
        </div>
        <CustomButton label="Submit" />
      </div>
    );
}