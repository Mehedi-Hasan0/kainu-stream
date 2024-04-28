"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useEffect, useState } from "react";

import { opportunitySlider } from "@/data";
import CarouselSkeleton from "../shared/CarouselSkeleton";

const OppotunitiesSlider = () => {
  const [innerWidth, setInnerWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );
  const [slidesPerView, setSlidesPerView] = useState(
    innerWidth > 1024 ? 3 : innerWidth > 768 ? 2 : 1
  );
  //   const [playSvgSize, setPlaySvgSize] = useState(
  //     innerWidth > 1536 ? 32 : innerWidth < 768 ? 28 : 24
  //   );
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  //   const [ytVideoUrl, setYtVideoUrl] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      setInnerWidth(window.innerWidth);
      setSlidesPerView(innerWidth > 1024 ? 3 : innerWidth > 768 ? 2 : 1);
      //   setPlaySvgSize(innerWidth > 1536 ? 32 : innerWidth < 768 ? 28 : 24);
    };

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [innerWidth]);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });
  }, []);

  if (!swiperLoaded) {
    return <CarouselSkeleton />; // loading state
  }

  return (
    <>
      <div className="flex items-stretch px-4 md:px-0">
        <Swiper
          modules={[Navigation]}
          //   centeredSlides={true}
          loop="true"
          navigation
          slidesPerView={slidesPerView}
          spaceBetween={60}
        >
          {opportunitySlider.map((slider, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <div className="">
                  <Image
                    src={slider.img}
                    alt="katana inu gameplay trailers"
                    width={1000}
                    height={431}
                    className=" aspect-square object-cover object-top"
                  />
                </div>
                <div className="flex flex-row justify-between pt-2 sm:pt-5">
                  <h4 className="font-poppins text-xs sm:text-lg lg:text-xl 2xl:text-2xl uppercase font-semibold text-center">
                    {slider.footerlabel}
                  </h4>
                  <h4 className="font-poppins text-xs sm:text-sm lg:text-base 2xl:text-xl uppercase text-gray-400 font-semibold text-center">
                    {slider.labelDesc}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OppotunitiesSlider;
