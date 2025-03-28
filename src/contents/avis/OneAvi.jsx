import React from "react";

export default function OneAvi({ review }) {
  return (
    <div class="flex-col flex-auto  p-5 rounded-4xl shadow-lg scale-100 hover:cursor-pointer hover:scale-105  max-md:w-full">
      <h4 class="text-1/2xl font-medium">{review.name}</h4>
      <p class="font-light mt-2">{review.review} </p>
    </div>
  );
}
