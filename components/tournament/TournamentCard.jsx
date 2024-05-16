"use client";

import { tournamentsCard } from "@/data";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { bannerTextVariant } from "../shared/anim";

const TournamentCard = () => {
  return (
    <div className="flex-1 xl:flex-initial flex flex-row w-fit">
      <div className="h-full w-[6px] bg-gradient-to-b from-purple to-[#120d25]  rounded-lg hidden md:block" />
      <div className="flex flex-col items-center gap-7 lg:gap-10 xl:gap-16">
        {tournamentsCard.map((card) => (
          <motion.div
            key={card.heading}
            variants={bannerTextVariant}
            initial="initial"
            whileInView={"enter"}
            viewport={{
              once: true,
            }}
            className="flex items-center gap-5 lg:gap-10 xl:gap-20 font-poppins group"
          >
            {/* hover indicator */}
            <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-purple opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden md:block" />
            {/* hover indicator ☝️ */}
            {/* original card 👇 */}
            <div className="bg-gradient-to-r group-hover:from-purple group-hover:to-darkBlue 2xl:w-[600px] 2xl:h-[328px] flex justify-center items-center rounded-md cursor-pointer transition-all duration-500 ease-in-out">
              <div className="bg-darkBlue p-6 lg:p-8 xl:p-12 flex flex-col gap-3 lg:gap-4 rounded-md 2xl:w-[598px] 2xl:h-[326px]">
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

export default TournamentCard;
