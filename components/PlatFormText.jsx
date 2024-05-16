"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { textLeftVariant } from "./shared/anim";

const PlatFormText = () => {
  return (
    <motion.div
      variants={textLeftVariant}
      initial="initial"
      whileInView={"enter"}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-6 md:gap-6 2xl:gap-16"
    >
      <div className="flex flex-col gap-3 lg:gap-5 xl:gap-7">
        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-berlin uppercase">
          Features of <br />
          <span className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-purple">
            platform...
          </span>
        </h2>
        <p className="text-xs xl:text-sm 2xl:text-xl font-poppins text-gray-400 sm:w-[320px] lg:w-[400px] xl:w-[510px] 2xl:w-[600px]">
          We’ve set on the path to make a gamer’s dream come true by offering an
          advanced Social Gaming Platform catering to both web2 and web3 users.
        </p>
      </div>

      {/* nft character with mobile */}
      <div className="flex justify-center">
        <Image
          src={"/assets/images/bit-coin.webp"}
          alt="Kainu character with mobile"
          width={600}
          height={200}
          className="w-[300px] h-[150px] md:w-[600px] md:h-[300px] object-cover"
        />
      </div>
    </motion.div>
  );
};

export default PlatFormText;
