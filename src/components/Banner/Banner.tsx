import Image from "next/image";

import bannerImage from "@/assets/images/banner-img.png";

const Banner = () => {
  return (
    <div className="relative bg-gray-600 px-6 py-24 text-white">
      <div className="absolute inset-0">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="mb-6 text-5xl leading-tight font-bold">
          Ação é a chave fundamental para todo o sucesso.
        </h1>
        <p className="text-2xl">— Pablo Picasso</p>
      </div>
    </div>
  );
};

export default Banner;
