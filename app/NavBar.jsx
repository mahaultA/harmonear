"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Navbar = ({ children }) => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6 shadow">
        <Link
          className={`link ${
            activeLink === "/" ? "active font-bold" : ""
          } hover:opacity-80 flex items-center`}
          href="/"
        >
          <span className="ml-2">Accueil</span>
        </Link>
        <button onClick={toggleMenu} className="sm:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {menuOpen && (
          <div className="fixed left-0 shadow-4xl right-0 top-[3rem] p-5 pt-0 bg-slate-50 border-b border-b-white/20">
            <Link
              className={`link ${
                activeLink === "/pratique" ? "active font-bold" : ""
              } hover:opacity-80 flex items-center`}
              href="/pratique"
              onClick={() => setMenuOpen(false)}
            >
              <span>Pratique</span>
            </Link>
            <Link
              className={`link ${
                activeLink === "/challenge" ? "active font-bold" : ""
              } hover:opacity-80 flex items-center`}
              href="/challenge"
              onClick={() => setMenuOpen(false)}
            >
              <span>Challenge</span>
            </Link>
            <Link
              className={`link ${
                activeLink === "/apropos" ? "active font-bold" : ""
              } hover:opacity-80 flex items-center`}
              href="/apropos"
              onClick={() => setMenuOpen(false)}
            >
              <span>À propos</span>
            </Link>
          </div>
        )}
        <div className="hidden sm:flex space-x-4">
          <Link
            className={`link ${
              activeLink === "/pratique" ? "active font-bold" : ""
            } hover:opacity-80 flex items-center`}
            href="/pratique"
          >
            <span className="ml-2">Pratique</span>
          </Link>
          <Link
            className={`link ${
              activeLink === "/challenge" ? "active font-bold" : ""
            } hover:opacity-80 flex items-center`}
            href="/challenge"
          >
            <span className="ml-2">Challenge</span>
          </Link>
          <Link
            className={`link ${
              activeLink === "/apropos" ? "active font-bold" : ""
            } hover:opacity-80 flex items-center`}
            href="/apropos"
          >
            <span className="ml-2">À propos</span>
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
