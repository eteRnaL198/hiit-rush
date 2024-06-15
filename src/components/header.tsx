import { useState } from "react";
import Image from "next/image";
import Hamburger from "/public/hamburger.svg";
import Navigation from "@/components/navigation";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <header className="border-b-2 border-solid border-gray-300 rounded-b-3xl shadow-md">
        <div className="flex justify-between w-5/6 mx-auto py-4">
          <h1 className="text-3xl italic">HIIT Rush🔥</h1>
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <Image src={Hamburger} alt="Menu" width={40} height={40} />
          </button>
        </div>
      </header>
      {isNavOpen && <Navigation setIsNavOpen={setIsNavOpen} />}
    </>
  );
};

export default Header;
