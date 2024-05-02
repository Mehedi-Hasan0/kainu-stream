import Image from "next/image";
import CustomButton from "../CustomButton";
import { FaPlay } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

export default function Download() {
  return (
    <section className="bg-[url('/assets/images/download-app-bg.webp')] bg-cover bg-center bg-no-repeat rounded-lg">
      <div className="section-margin main-container max-screen-width flex flex-col-reverse md:flex-row gap-5 md:gap-6 md:justify-between">
        <div className="flex-1">
          <div className="sm:px-6 sm:pt-7 md:px-9 md:pt-12 xl:px-14 xl:pt-16">
            <h2 className="font-berlin text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl uppercase">
              Download our <span className="text-purple">app</span>
            </h2>
            <p className="text-[10px] md:text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400  lg:mt-4 2xl:mt-6">
              Platform with popular streams. Engage with charismatic
              personalities, witness epic gameplay, and connect with a vibrant
              community.
            </p>
          </div>

          {/* download btn */}
          <div className="flex flex-row gap-6 sm:px-6 pb-7 md:px-9 md:pb-12 xl:px-14 xl:pb-16">
            <div className="flex flex-row items-center gap-5 mt-5 lg:mt-7 2xl:mt-9 mx-1">
              <div className="font-poppins flex gap-3 items-center text-white bg-gradient-to-r from-purple to-lightBlue rounded-xl px-4 sm:px-4 py-1 lg:px-3 md:py-3 xl:px-5 xl:py-4 cursor-pointer">
                <FaApple
                  size={48}
                  color="#ffffff"
                  className="w-4 sm:w-7 lg:w-9 xl:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight whitespace-nowrap">
                    Download on the
                  </p>
                  <p className="text-xs sm:text-sm lg:text-lg font-medium whitespace-nowrap">
                    App Store
                  </p>
                </div>
              </div>
              <div className="font-poppins flex gap-3 items-center text-white bg-[#342842] rounded-xl px-4 sm:px-4 py-1 lg:px-3 md:py-3 xl:px-5 xl:py-4 cursor-pointer">
                <FaGooglePlay
                  size={48}
                  color="#ffffff"
                  className="w-4 sm:w-7 lg:w-8 xl:w-10"
                />
                <div className="flex flex-col">
                  <p className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight whitespace-nowrap">
                    Get it on
                  </p>
                  <p className="text-xs sm:text-sm lg:text-lg font-medium whitespace-nowrap">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1">
          <Image
            src={"/assets/images/download-app-banner.webp"}
            alt=""
            width={700}
            height={500}
            className="flex items-end h-[190px] sm:h-[250px] lg:h-[350px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
