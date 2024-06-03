"use client";
import { MicVocal } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { Home } from "lucide-react";
import { Info } from "lucide-react";
import { Brain } from "lucide-react";
// NavBar.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // Importez useState pour gérer l'état actif/inactif des liens

const Navbar = ({ children }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Mettre à jour l'état de l'élément actif à chaque changement de chemin d'accès
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <>
      <nav className="flex flex-row flex-wrap justify-around max-w-5xl mx-auto px-4 py-3 sm:px-6 shadow">
        <Link
          className={`link ${
            activeLink === "/" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/"
        >
          <span>Accueil</span>
          <Home size={18} strokeWidth={activeLink === "/" ? 2 : 1}></Home>
        </Link>
        <Link
          className={`link ${
            activeLink === "/pratique" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/pratique"
        >
          <span>Pratique</span>
          <Brain
            size={18}
            strokeWidth={activeLink === "/pratique" ? 2 : 1}
          ></Brain>
        </Link>
        <Link
          className={`link ${
            activeLink === "/challenge" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/challenge"
        >
          <span>Challenge</span>
          <MicVocal
            size={18}
            strokeWidth={activeLink === "/challenge" ? 2 : 1}
          ></MicVocal>
        </Link>
        <Link
          className={`link ${
            activeLink === "/apropos" ? "active font-bold" : ""
          } hover:opacity-80 flex flex-col items-center`}
          href="/apropos"
        >
          <span>À propos</span>
          <Info
            size={18}
            strokeWidth={activeLink === "/apropos" ? 2 : 1}
          ></Info>
        </Link>
      </nav>

      {children}
    </>
  );
};

export default Navbar;
