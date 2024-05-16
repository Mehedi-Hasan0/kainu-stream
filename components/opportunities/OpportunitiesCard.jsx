"use client";

import { opportunityCard } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "../shared/anim";

export default function OpportunitiesCard() {
  return (
    <div className="main-container max-screen-width 2xl:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-8">
        {opportunityCard.map((card, idx) => (
          <motion.div
            key={card.heading}
            variants={cardVariant}
            custom={idx}
            initial="initial"
            whileInView={"enter"}
            viewport={{
              once: true,
            }}
            className="flex flex-col justify-evenly gap-3 lg:gap-4 px-5 py-6 xl:px-8 xl:py-12 bg-darkBlue rounded-md lg:rounded-lg"
          >
            <Image
              src={card.img}
              alt={card.heading}
              width={50}
              height={50}
              className="w-10 md:w-8 xl:w-16"
            />

            <h4 className="font-berlin uppercase text-base lg:text-base xl:text-xl 2xl:text-2xl">
              {card.heading}
            </h4>
            <p className="font-poppins max-w-[600px] text-gray-400 text-xs xl:text-sm  2xl:text-lg">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
