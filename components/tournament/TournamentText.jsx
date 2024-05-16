"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { textLeftVariant } from "../shared/anim";

const TournamentText = () => {
  return (
    <motion.div
      variants={textLeftVariant}
      initial="initial"
      whileInView={"enter"}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-6 md:gap-6 2xl:gap-8"
    >
      <div className="flex flex-col gap-3 lg:gap-5 xl:gap-7">
        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-berlin uppercase">
          Cpre <br /> Features of <br />
          <span className=" text-purple">Tournament...</span>
        </h2>
        <p className="text-xs xl:text-sm 2xl:text-xl font-poppins text-gray-400 sm:w-[320px] lg:w-[400px] xl:w-[510px] 2xl:w-[600px]">
          We’ve set on the path to make a gamer’s dream come true by offering an
          advanced Social Gaming Platform catering to both web2 and web3 users.
        </p>
      </div>

      {/* nft character with mobile */}
      <div className="md:justify-end flex">
        <Image
          src={"/assets/images/kainu-ch-2.webp"}
          alt="Kainu character with mobile"
          width={400}
          height={550}
          className="w-[240px] sm:w-[180px] md:w-[150px] lg:w-[190px] xl:w-[220px] 2xl:w-[300px] mx-auto md:mx-0"
        />
      </div>
    </motion.div>
  );
};

export default TournamentText;
