"use client";
import { Button } from "@/components/ui/button";
import TimerDialog from "@/src/TimerDialog";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Card = ({ title, description, imageUrl, link }) => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl mb-1">
    <div className="md:flex">
      <div className="md:shrink-0">
        <img
          className="h-48 w-full object-cover md:w-48"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        <a
          href={link}
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          {title}
        </a>
        <p className="mt-2 text-slate-500">{description}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold my-4">HarmonEar</h1>
      <span className="text-2xl font-bold">🎵</span>
      <p className="my-4">
        L&apos;ear trainer des choristes, chanteur·se·s et instrumentistes
      </p>
      <Card
        title="Pratique"
        description="Imprègne toi de chaque note de la tonalité"
        imageUrl="https://cdn.pixabay.com/photo/2022/08/30/08/04/brain-7420599_1280.png"
        link="/pratique"
      />
      <div className="h-1" /> {/* Espacement de 1 pixel */}
      <Card
        title="Lecture à vue - Challenge"
        description="Chante chaque note aussi vite qu'elle s'affiche"
        imageUrl="https://cdn.pixabay.com/photo/2016/03/31/20/28/bird-1295782_960_720.png"
        link="/challenge"
      />
      <p className="mt-10 items-center text-center my-4">
        Utilise le timer intégré pour tracker ton temps de pratique <br />
        Tu peux y accéder via le bouton :
      </p>
      <TimerDialog />
    </main>
  );
}
