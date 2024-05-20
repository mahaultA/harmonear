"use client";
import { Button } from "@/components/ui/button";
import TimerDialog from "@/src/TimerDialog";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import profilePic from "../assets/icon-ear.svg";

const Card = ({ title, description, imageUrl, link }) => (
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-1">
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
      <h1 className="text-2xl font-bold my-4">Music Training App</h1>
      <span className="text-2xl font-bold">🎵</span>
      <p className="my-4">
        The ear trainer for singers/chorists, and musicians
      </p>
      <Card
        title="Ear Practicer"
        description="Practice singing and hearing each tone of the major scale."
        imageUrl="https://cdn.pixabay.com/photo/2024/04/15/14/33/ai-generated-8697969_960_720.jpg"
        link="/practicer"
      />
      <div className="h-1" /> {/* Espacement de 1 pixel */}
      <Card
        title="Ear training challenge"
        description="See how fast you can sight sing the notes displayed ! You can set the speed to display random notes, also called degrees."
        imageUrl="https://cdn.pixabay.com/photo/2022/01/14/22/56/valentines-day-6938299_960_720.jpg"
        link="/practicer"
      />
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <TimerDialog />
    </main>
  );
}
