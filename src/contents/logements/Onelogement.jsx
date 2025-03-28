import React from "react";

export default function Onelogement({ listing }) {
  return (
    <div class="flex-col  p-5 rounded-4xl shadow-xl w-65 min-w-65 hover:cursor-pointer  bg-gray-50 ">
      <img
        src={listing.image}
        alt={listing.title}
        class=" rounded-4xl h-40 w-full "
      />
      <h4 class="text-xl font-medium m-1">{listing.title}</h4>
      <p class="font-light m-1">{listing.location}</p>
      <p class="text-red-600 font-bold m-1 "> {`${listing.price} € / nuit`} </p>
    </div>
  );
}
