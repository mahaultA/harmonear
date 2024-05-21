"use client";
import { MicVocal } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { Home } from "lucide-react";
import { Info } from "lucide-react";
import { Brain } from "lucide-react";
// NavBar.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-row flex-wrap justify-around max-w-5xl mx-auto px-4 py-3 sm:px-6 shadow">
        <Link
          className={`link ${
            pathname === "/" ? "active font-bold" : ""
          } hover:opacity-80 flex gap-2 items-center`}
          href="/"
        >
          <span>Home</span>
          <Home size={18}></Home>
        </Link>
        <Link
          className={`link ${
            pathname === "/practicer" ? "active font-bold" : ""
          } hover:opacity-80 flex gap-2 items-center`}
          href="/practicer"
        >
          <span>Practicer</span>
          <Brain size={18}></Brain>
        </Link>
        <Link
          className={`link ${
            pathname === "/challenge" ? "active font-bold" : ""
          } hover:opacity-80 flex gap-2 items-center`}
          href="/challenge"
        >
          <span>Challenge</span>
          <MicVocal size={18}></MicVocal>
        </Link>
        <Link
          className={`link ${
            pathname === "/about" ? "active font-bold" : ""
          } hover:opacity-80 flex gap-2 items-center`}
          href="/about"
        >
          <span>About</span>
          <Info size={18}></Info>
        </Link>
      </nav>

      {children}
    </>
  );
};

export default Navbar;
