"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bannerImgVariant } from "./shared/anim";

const SocialMediaImg = () => {
  return (
    <motion.div
      variants={bannerImgVariant}
      initial="initial"
      whileInView={"enter"}
      viewport={{ once: true }}
      className="flex-1"
    >
      <Image
        src={"/assets/images/kainu-ch-1.webp"}
        alt="kainu with a sword"
        width={800}
        height={800}
        className="w-[500px]"
      />
    </motion.div>
  );
};

export default SocialMediaImg;
