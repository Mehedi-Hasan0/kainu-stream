import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import CustomButton from "../CustomButton";
import Image from "next/image";

export default function CollectiveHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-7 sm:gap-10">
      {/* left side */}
      <div className="flex flex-col gap-3 lg:gap-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-berlin uppercase">
          At <span className="text-purple">Kainu</span>, ABout Collective
        </h2>
        <p className="sm:w-[400px] lg::w-[500px] xl:w-[650px] 2xl:w-[750px] text-gray-500 font-poppins font-medium text-xs lg:text-base xl:text-lg 2xl:text-xl">
          Platform with popular streams. Engage with charismatic personalities,
          witness and connect with a vibrant community.
        </p>
      </div>
      {/* right side */}
      <div className="flex flex-col md:items-end gap-4 lg:gap-6 2xl:gap-8">
        <Image
          src={"/assets/images/bitcoin-2.webp"}
          alt="Botcoin"
          width={200}
          height={150}
          className=" w-[200px] sm:w-[120px] lg:w-[150px] mx-auto sm:mx-0"
        />
      </div>
    </div>
  );
}
