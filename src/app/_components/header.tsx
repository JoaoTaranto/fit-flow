import { ArrowLeftIcon, UserIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-[100px] items-center justify-around bg-white pr-[1.875rem] pl-[1.875rem]">
      <button>
        <ArrowLeftIcon className="font-bold" />
      </button>
      <h1 className="font-bold">Fit Flow</h1>
      <button>
        <UserIcon className="font-bold" fill="black" />
      </button>
    </header>
  );
};

export default Header;
