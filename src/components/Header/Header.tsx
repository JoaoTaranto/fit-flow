import Image from "next/image";

import menuIcon from "@/assets/icons/menu-Icon.svg";
import userIcon from "@/assets/icons/user-icon.svg";
import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-6">
      <button>
        <Image src={menuIcon} alt="Menu" width={32} height={32} />
      </button>

      <div>
        <Image src={logo} alt="Logo" />
      </div>

      <button>
        <Image src={userIcon} alt="User profile" width={32} height={32} />
      </button>
    </header>
  );
};

export default Header;
