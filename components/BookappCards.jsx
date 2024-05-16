"use client";

import { bookCards } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "./shared/anim";

const BookappCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {bookCards.map((card, i) => (
        <motion.div
          variants={cardVariant}
          initial="initial"
          whileInView={"enter"}
          custom={i}
          viewport={{
            once: true,
          }}
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
        </motion.div>
      ))}
    </div>
  );
};

export default BookappCards;
