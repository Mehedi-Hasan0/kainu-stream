"use client";

import { FaPlay } from "react-icons/fa";
import CustomButton from "../CustomButton";
import NormalButton from "../ui/NormalButton";
import { bannerLogos } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { bannerTextVariant } from "../shared/anim";

export default function StreamingDetails() {
  return (
    <motion.div
      variants={bannerTextVariant}
      initial="initial"
      whileInView={"enter"}
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      <div className="bg-gradient-to-r from-[#3f1757] to-transparent w-fit px-3 py-1 xl:px-4 xl:py-2 rounded-md">
        <p className="uppercase text-purple font-bold text-xs md:text-sm xl:text-lg">
          Live Kainu
        </p>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl uppercase font-berlin">
        Streaming
      </h1>

      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple to-lightBlue font-urbanist">
        video games online
      </h2>

      <p className="lg:mt-2 text-gray-300 text-xs xl:text-base 2xl:text-lg w-[300px] sm:w-[400px] md:w-full">
        Set in a third-person perspective. Katana Inu immerses players in fast
        paced comba weilding katanas and unleashing powerfull.
      </p>

      <div className="flex items-center gap-5 mt-5 lg:mt-7 2xl:mt-9 mx-1">
        <div>
          <CustomButton
            textLabel={"Watch Videos"}
            innerEleStyle={"flex-row-reverse"}
            hoverColor3="bg-[#322a42]"
          >
            <div className="relative top-[1px]">
              <FaPlay size={24} className="w-2 2xl:w-3" />
            </div>
          </CustomButton>
        </div>

        <div>
          <CustomButton
            textLabel={"Learn More"}
            innerEleStyle={"flex-row"}
            btnBgColor="bg-[#322a42]"
          >
            <div className="relative top-[1px]">
              <FaPlay size={24} className="w-2 2xl:w-3" />
            </div>
          </CustomButton>
        </div>
      </div>

      {/* logos */}
      <div className="flex flex-row items-center mt-8 md:mt-12 lg:mt-20 xl:mt-32">
        {bannerLogos.map((logo) => (
          <Image
            key={logo.label}
            src={logo.path}
            alt={logo.label}
            width={100}
            height={20}
            // sizes="(max-width: 1280px) 100vw, 50vw"
            className="w-32 h-4 2xl:w-48 2xl:h-6 object-contain"
          />
        ))}
      </div>
    </motion.div>
  );
}
