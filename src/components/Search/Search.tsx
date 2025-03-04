import Image from "next/image";

import searchIcon from "@/assets/icons/search-icon.svg";

const Search = () => {
  return (
    <div className="flex gap-4 bg-gray-50 px-6 py-12">
      <input
        type="text"
        placeholder="Pesquise por Flows..."
        className="w-full rounded-lg bg-white px-6 py-4 pr-12 text-lg shadow-sm"
      />

      <button className="flex items-center justify-center rounded-lg bg-black p-4">
        <Image src={searchIcon} alt="Search" width={26} height={26} />
      </button>
    </div>
  );
};

export default Search;
