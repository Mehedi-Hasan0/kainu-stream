"use client";

import { collectiveCard } from "@/data";
import { useRef, useState } from "react";
import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";

export default function CollectiveCards() {
  const videoRef = useRef(null);
  const [showPlayBtn, setShowPlayBtn] = useState(true);

  const handleVideoPlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setShowPlayBtn(false);
    } else {
      videoRef.current.pause();
      setShowPlayBtn(true);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-7 sm:gap-9 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
      <div className="flex-1 flex flex-row w-fit">
        <div className="h-full w-[6px] bg-gradient-to-b from-purple to-[#120d25]  rounded-lg hidden md:block" />
        <div className="flex flex-col items-center gap-5 lg:gap-7 2xl:gap-10">
          {collectiveCard.map((card) => (
            <div
              key={card.heading}
              className="flex items-center gap-5 lg:gap-10 xl:gap-20 font-poppins group"
            >
              {/* hover indicator */}
              <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-purple opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden md:block" />
              {/* hover indicator ☝️ */}
              {/* original card 👇 */}
              <div className="bg-gradient-to-r group-hover:from-purple group-hover:to-darkBlue 2xl:w-[600px] 2xl:h-[278px] flex justify-center items-center rounded-md cursor-pointer transition-all duration-500 ease-in-out">
                <div className="bg-darkBlue p-6 lg:p-8 xl:p-12 flex flex-col gap-3 lg:gap-4 rounded-md 2xl:w-[598px] 2xl:h-[276px]">
                  {/* heading */}
                  <h3 className="uppercase text-xl lg:text-2xl xl:text-3xl font-bold">
                    {card.heading}
                  </h3>
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
            </div>
          ))}
        </div>
      </div>
      {/* right side content */}
      <div className="flex-1 relative md:h-[400px] lg:min-h-[500px] xl:min-h-[620px] 2xl:min-h-[595px] md:object-cover flex justify-center items-center">
        <video
          ref={videoRef}
          onClick={handleVideoPlay}
          src="http://res.cloudinary.com/dlhexsnxq/video/upload/v1709961388/bannerbg_xgkahv.mp4"
          poster="/assets/images/videoPoste.png"
          loop
          muted
          className="h-[300px] md:h-[400px] lg:min-h-[500px] xl:min-h-[620px] 2xl:min-h-[595px] object-cover rounded-md md:rounded-lg"
        />

        <div
          onClick={handleVideoPlay}
          className={`absolute w-16 h-16 2xl:w-20 2xl:h-20 rounded-full bg-purple flex justify-center items-center ${
            showPlayBtn ? "block" : "hidden"
          }`}
        >
          <FaPlay size={18} className="ml-1" />
        </div>
      </div>
    </div>
  );
}
