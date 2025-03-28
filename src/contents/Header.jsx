import React from "react";

export default function Header() {
  return (
    <header class="flex basis-14  p-4 shadow-lg bg-white">
      <h1 class="basis-auto text-red-500 text-xl font-bold">
        Airbed & Breakfast
      </h1>
      <nav class="flex flex-auto justify-end gap-x-4  font-extralight  max-md:hidden ">
        <a class="basis-auto hover:font-medium cursor-pointer"> Maisons</a>
        <a class="basis-auto hover:font-medium cursor-pointer  ">Appartement</a>
        <a class="basis-auto hover:font-medium cursor-pointer"> Villas</a>
      </nav>
      <nav class=" hidden max-md:flex flex-auto w-auto justify-end items-center">
        <i className="fa-solid fa-bars "></i>
      </nav>
    </header>
  );
}
