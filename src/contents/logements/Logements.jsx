import React from "react";
import Onelogement from "./Onelogement";

export default function Logements() {
  const listings = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Villa de Luxe",
      location: "Nice, France",
      price: "250",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Chalet Montagne",
      location: "Chamonix, France",
      price: "180",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Bohème",
      location: "Bordeaux, France",
      price: "120",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Loft Design",
      location: "Paris, France",
      price: "300",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cabane en forêt",
      location: "Lille, France",
      price: "90",
    },
  ];
  return (
    <section class="p-5 ">
      <h2 class="text-2xl font-medium mb-4">Logements disponibles</h2>
      <article class="flex  flex-auto content-start items-center gap-4  max-2xl:overflow-auto max-2xl:p-5 ">
        {/* afficher tous les logements */}
        {listings.map((listing) => (
          <Onelogement listing={listing} key={listing.id} />
        ))}
      </article>
    </section>
  );
}
