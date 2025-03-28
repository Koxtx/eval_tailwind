import React from "react";
import OneAvi from "./OneAvi";

export default function Avis() {
  const reviews = [
    {
      id: 1,
      name: "Sophie L.",
      review: "Super séjour ! Maison très propre et bien située.",
    },
    {
      id: 2,
      name: "Thomas B.",
      review: "Hôte très sympathique, je recommande à 100% !",
    },
    { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
  ];
  return (
    <section class=" p-5 shadow-xl bg-gray-50 mb-8 ">
      <h3 class="text-2xl font-medium mb-4">Avis Clients</h3>
      <article class="flex  flex-auto content-start items-center gap-4 max-md:flex-col justify-center ">
        {reviews.map((review) => (
          <OneAvi review={review} key={review.id} />
        ))}
      </article>
    </section>
  );
}
