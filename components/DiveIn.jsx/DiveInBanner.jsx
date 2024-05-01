import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function DiveInBanner() {
  return (
    <div className=" md:rounded-md overflow-hidden">
      <div className="flex flex-col md:flex-row items-center  gap-7 md:gap-10 justify-between relative">
        {/* left side */}
        <div className="flex flex-col gap-3 w-full md:gap-6  relative bg-darkBlue px-6 pt-6 md:px-8 md:pt-10 xl:px-12 xl:pt-12 rounded-md md:rounded-none">
          <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-urbanist font-extrabold text-gray-300">
            Collaborate with TON
          </h3>
          <p className="text-gray-400 text-sm xl:text-base 2xl:text-lg">
            Platform of popular stream. Engage charismatic personalities,
            withness and correct.
          </p>
          <button className="flex items-center gap-2">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-lightBlue font-bold text-xs lg:text-lg xl:text-xl font-poppins whitespace-nowrap">
              Collaborate with TON
            </p>
            <FaLongArrowAltRight size={18} color="#cf22f1" />
          </button>

          {/* character */}
          <div className=" flex justify-center md:justify-end">
            <Image
              src={"/assets/images/kainu-ch-3.webp"}
              alt=""
              width={200}
              height={200}
              className="w-[130px] lg:w-[170px] xl:w-[200px]"
            />
          </div>
        </div>
        {/* middle devider */}
        {/* <div> */}
        {/* <Image
          width={100}
          height={900}
          alt=""
          src={"/assets/icons/divider-3.png"}
          className="w-32 h-[145%] absolute left-[47%] -top-16"
        /> */}
        {/* </div> */}
        {/* right side */}
        <div className="flex flex-col gap-3 w-full md:gap-6  relative bg-darkBlue px-6 pt-6 md:px-8 md:pt-10 xl:px-12 xl:pt-12 rounded-md md:rounded-none">
          <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-urbanist font-extrabold text-gray-300">
            Collaborate with TON
          </h3>
          <p className="text-gray-400 text-sm xl:text-base 2xl:text-lg">
            Platform of popular stream. Engage charismatic personalities,
            withness and correct.
          </p>
          <button className="flex items-center gap-2">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-lightBlue font-bold text-xs lg:text-lg xl:text-xl font-poppins whitespace-nowrap">
              Collaborate
            </p>
            <FaLongArrowAltRight size={18} color="#cf22f1" />
          </button>

          {/* character */}
          <div className=" flex justify-center md:justify-end">
            <Image
              src={"/assets/images/kainu-ch-4.webp"}
              alt=""
              width={320}
              height={320}
              className="w-[208px] lg:w-[270px] xl:w-[320px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
