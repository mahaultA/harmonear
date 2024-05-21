"use client";
import { MicVocal } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { Home } from "lucide-react";
import { Info } from "lucide-react";
import { Brain } from "lucide-react";
// NavBar.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // Importez useState pour gérer l'état actif/inactif des liens

const Navbar = ({ children }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(""); // Utilisez useState pour stocker le lien actif

  return (
    <>
      <nav className="flex flex-row flex-wrap justify-around max-w-5xl mx-auto px-4 py-3 sm:px-6 shadow">
        <Link
          className={`link ${
            pathname === "/" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/"
          onClick={() => setActiveLink("/")}
        >
          <span>Home</span>
          <Home size={18} strokeWidth={activeLink === "/" ? 2 : 1}></Home>
        </Link>
        <Link
          className={`link ${
            pathname === "/practicer" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/practicer"
          onClick={() => setActiveLink("/practicer")}
        >
          <span>Practicer</span>
          <Brain
            size={18}
            strokeWidth={activeLink === "/practicer" ? 2 : 1}
          ></Brain>
        </Link>
        <Link
          className={`link ${
            pathname === "/challenge" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/challenge"
          onClick={() => setActiveLink("/challenge")}
        >
          <span>Challenge</span>
          <MicVocal
            size={18}
            strokeWidth={activeLink === "/challenge" ? 2 : 1}
          ></MicVocal>
        </Link>
        <Link
          className={`link ${
            pathname === "/about" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/about"
          onClick={() => setActiveLink("/about")}
        >
          <span>About</span>
          <Info size={18} strokeWidth={activeLink === "/about" ? 2 : 1}></Info>
        </Link>
      </nav>

      {children}
    </>
  );
};

export default Navbar;
