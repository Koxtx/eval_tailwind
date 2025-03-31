import React from "react";

export default function Footer() {
  return (
    <footer class="flex flex-auto gap-6 justify-center items-center p-2   h-20 bg-indigo-950 text-amber-50  max-md:flex-col max-md:items-start max-md:p-8 max-md:h-auto">
      <nav class=" flex flex-col justify-start items-start w-65  gap-2-y ">
        <h3 class="text-xl font-medium mb-4">À propos</h3>
        <p class="text-wrap">
          Nous aidons les voyageurs à trouver le logement idéal.
        </p>
      </nav>
      <nav class=" flex flex-col justify-start items-start mr-20   gap-2-y  ">
        <h3 class="text-xl font-medium mb-4">Support</h3>
        <a href="" class="hover:underline">
          Contact
        </a>
        <a href="" class="hover:underline">
          FAQ
        </a>
      </nav>
      <nav class="flex flex-col justify-start items-start mr-20  gap-2-y ">
        <h3 class="text-xl font-medium mb-4">Suivez-nous</h3>
        <a href="" class="hover:underline">
          Facebook
        </a>
        <a href="" class="hover:underline">
          Instagram
        </a>
      </nav>
      <nav class="flex flex-col justify-start items-start mr-20    gap-2-y  ">
        <h3 class="text-xl font-medium mb-4">Mentions légales</h3>
        <a href="" class="hover:underline">
          Conditions générales
        </a>
        <a href="" class="hover:underline">
          Politique de confidentialité
        </a>
      </nav>
    </footer>
  );
}
