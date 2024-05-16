"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bannerImgVariant } from "../shared/anim";

export default function BannerImg() {
  return (
    <motion.div
      variants={bannerImgVariant}
      initial="initial"
      whileInView={"enter"}
      viewport={{ once: true }}
      className="flex-1 flex justify-end relative -mt-0 md:-mt-6 lg:-mt-36 xl:-mt-20 h-fit"
    >
      <Image
        src={"/assets/images/banner-mobile.webp"}
        alt="Mobile screen website of kainu"
        width={600}
        height={600}
        className="w-[800px] h-[300px] lg:h-[600px] object-contain"
      />
    </motion.div>
  );
}
