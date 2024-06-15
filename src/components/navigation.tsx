import Link from "next/link";
import Button from "@/components/button";

type Props = {
  setIsNavOpen: (value: boolean) => void;
};

const Navigation = ({ setIsNavOpen }: Props) => {
  return (
    <nav className="absolute top-0 w-full min-h-full bg-white/90 text-3xl">
      <div className="flex flex-col gap-8 items-center py-32">
        <button
          className="border-b-2 border-gray-400 w-5/6 text-center py-2"
          onClick={() => setIsNavOpen(false)}
        >
          <Link href="/">Timer</Link>
        </button>
        <button
          className="border-b-2 border-gray-400 w-5/6 text-center py-2"
          onClick={() => setIsNavOpen(false)}
        >
          <Link href="/settings">Settings</Link>
        </button>
        <Button
          onClick={() => setIsNavOpen(false)}
          label="close"
          className="ffont"
        />
      </div>
    </nav>
  );
};
export default Navigation;
