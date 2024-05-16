import { bookCards } from "@/data";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import BookappCards from "./BookappCards";

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
        <BookappCards />
      </div>
    </section>
  );
}
