"use client";

import { platFormCards } from "@/data";
import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { bannerTextVariant } from "./shared/anim";

const PlatFormCard = () => {
  return (
    <div className="flex-1 xl:flex-initial flex flex-row w-fit">
      <div className="h-full w-[6px] bg-gradient-to-b from-purple to-[#120d25]  rounded-lg hidden md:block" />
      <div className="flex flex-col items-center gap-7 lg:gap-10 xl:gap-16">
        {platFormCards.map((card, i) => (
          <motion.div
            variants={bannerTextVariant}
            initial="initial"
            whileInView={"enter"}
            viewport={{
              once: true,
            }}
            key={card.heading}
            className="flex gap-5 lg:gap-10 xl:gap-20 font-poppins group md:-ml-8 2xl:-ml-10 relative z-20"
          >
            {/* hover indicator */}
            <div
              className={`w-44 h-16 xl:w-36 xl:h-16 2xl:w-20 2xl:h-20 rounded-full bg-[#0e0a22] border-2 border-purple justify-center items-center hidden md:flex ${
                i === 2
                  ? "border-opacity-40"
                  : i === 3
                  ? "border-opacity-30"
                  : "border-opacity-100"
              }`}
            >
              <Image
                src={card.labelImg}
                alt=""
                width={60}
                height={60}
                className="w-8 2xl:w-9"
              />
            </div>
            {/* hover indicator ☝️ */}
            {/* original card 👇 */}
            <div className="bg-gradient-to-r group-hover:from-purple group-hover:to-darkBlue 2xl:w-[600px] 2xl:h-[328px] flex justify-center items-center rounded-md cursor-pointer transition-all duration-500 ease-in-out">
              <div className="bg-[#0e0a22] p-6 lg:p-8 xl:p-12 flex flex-col gap-3 lg:gap-4 rounded-md 2xl:w-[598px] 2xl:h-[326px] border border-gray-800 group-hover:border-transparent">
                {/* heading */}
                <h3 className="uppercase text-xl lg:text-2xl xl:text-3xl font-bold">
                  {card.heading}
                </h3>
                {/* join text */}
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 xl:w-4 xl:h-4 rounded-full bg-purple" />
                  <p className="text-xs lg:text-sm xl:text-base text-gray-400 font-medium">
                    {card.desc1}
                  </p>
                </div>
                {/* details */}
                <p className="text-xs lg:text-sm xl:text-base text-gray-400 font-medium">
                  {card.desc2}
                </p>

                {/* btn */}
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-lightBlue font-bold text-base lg:text-lg xl:text-xl uppercase xl:mt-2 flex items-center gap-2">
                  {card.btnLabel}
                  <FaLongArrowAltRight size={18} color="#cf22f1" />
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlatFormCard;
