import React from "react";

const GoogleMap = () => {
  return (
    <div className="relative h-[400px] w-full bg-white">
      <div className="overflow-hidden h-full w-full">
        <iframe
          src="https://maps.google.com/maps?q=aroma%20festive%20hall&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-full w-full relative z-10  border-none overflow-hidden"
          title="Google Map"
        ></iframe>
        <a
          href="https://blooketjoin.org/blooket-play/"
          className="text-white absolute top-0 z-0"
        >
          blooket play
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
