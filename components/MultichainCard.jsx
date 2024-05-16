"use client";

import { multiChainCards } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "./shared/anim";

const MultichainCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-9 xl:gap-12 2xl:gap-8 multichain-cards">
      {multiChainCards.map((card, idx) => (
        <motion.div
          variants={cardVariant}
          initial="initial"
          whileInView={"enter"}
          viewport={{
            once: true,
          }}
          key={card.heading}
          className={`md:w-[224px] md:h-[152px] lg:w-[302px] lg:h-[172px] xl:w-[368px] xl:h-[252px] 2xl:w-[436px] 2xl:h-[268px] flex justify-center items-center rounded-md cursor-pointer ${
            idx === 0 && "md:bg-gradient-to-r from-purple to-darkBlue"
          } ${idx === 2 && "md:bg-gradient-to-r from-darkBlue to-purple"}`}
        >
          <div className="bg-darkBlue px-5 lg:px-8 xl:px-8 2xl:px-10 justify-center flex flex-col gap-3 lg:gap-4 rounded-md md:w-[222px] md:h-[150px] lg:w-[300px] lg:h-[170px] xl:w-[366px] xl:h-[250px] 2xl:w-[434px] 2xl:h-[266px] p-7">
            {/* heading */}
            <div className="flex items-center gap-3 lg:gap-6 xl:gap-8">
              <Image
                src={card.img}
                alt={card.heading}
                width={60}
                height={60}
                className="w-8 lg:w-10 xl:w-12 2xl:w-[60px]"
              />
              <h3 className="uppercase md:text-xs lg:text-sm xl:text-lg 2xl:text-2xl font-bold">
                {card.heading}
              </h3>
            </div>
            {/* details */}
            <p className="text-[10px] sm:text-[8px] lg:text-[10px] lg:text-xs xl:text-lg text-gray-400 font-medium">
              {card.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MultichainCard;
