import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="border-b-2 border-solid border-gray-300 rounded-b-3xl shadow-md">
        <div className="flex justify-between w-5/6 mx-auto py-4">
          <h1 className="text-3xl italic">HIIT Rush🔥</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image
              src="/public/hamburger.svg"
              alt="Menu"
              width={40}
              height={40}
            />
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <nav className="absolute top-0 w-full min-h-full bg-white/90 text-3xl">
          <div className="flex flex-col gap-8 items-center py-32">
            <Link
              href="/"
              className="border-b-2 border-gray-400 w-5/6 text-center py-2"
            >
              <button onClick={() => setIsMenuOpen(false)}>Timer</button>
            </Link>
            <Link
              href="/settings"
              className="border-b-2 border-gray-400 w-5/6 text-center py-2"
            >
              <button onClick={() => setIsMenuOpen(false)}>Settings</button>
            </Link>
            <Button
              onClick={() => setIsMenuOpen(false)}
              label="close"
              className="ffont"
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
