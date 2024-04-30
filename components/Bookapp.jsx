import { bookCards } from "@/data";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Bookapp() {
  return (
    <section className="bg-[#110d25] overflow-hidden">
      <div className="main-container max-screen-width section-margin flex flex-col gap-7 sm:gap-10 md:gap-12 lg:gap-14 2xl:gap-16">
        <div className="flex items-center gap-8 justify-between">
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-berlin uppercase">
            Explore <span className=" text-purple">App</span> &{" "}
            <span className=" text-purple">Services</span>
          </h2>
          {/* btn */}
          <button className="flex items-center gap-2">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-lightBlue font-bold text-xs lg:text-lg xl:text-xl uppercase font-poppins whitespace-nowrap">
              app & services
            </p>
            <FaLongArrowAltRight size={18} color="#cf22f1" />
          </button>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {bookCards.map((card, i) => (
            <div
              key={card.heading}
              className="px-3 pt-6 pb-3 xl:px-4 xl:pt-10 xl:pb-4 rounded-lg lg:rounded-xl bg-darkBlue flex flex-col gap-2 2xl:gap-4 justify-center items-center"
            >
              <h3 className="text-2xl md:text-2xl xl:text-3xl font-urbanist font-extrabold">
                {card.heading}
              </h3>
              <p className="text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400 text-center px-6">
                {card.desc}
              </p>

              <Image
                src={card.img}
                alt={card.heading}
                width={500}
                height={500}
                className="mt-1 md:mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
