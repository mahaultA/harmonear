"use client";
// NavBar.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TimerProvider } from "./TimerContext";

const Navbar = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex flex-row justify-between max-w-5xl mx-auto px-4 py-3 sm:px-6">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
        <Link
          className={`link ${pathname === "/practicer" ? "active" : ""}`}
          href="/practicer"
        >
          Practicer
        </Link>
        <Link
          className={`link ${pathname === "/challenge" ? "active" : ""}`}
          href="/challenge"
        >
          Challenge
        </Link>
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          About
        </Link>

        <Link
          className={`link ${pathname === "/stopwatch" ? "active" : ""}`}
          href="/stopwatch"
        >
          ⏱️
        </Link>
      </nav>
      {children}
    </>
  );
};

export default Navbar;