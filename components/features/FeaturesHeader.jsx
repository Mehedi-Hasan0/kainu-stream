import { featuresBtn } from "@/data";
import Image from "next/image";
import CustomButton from "../CustomButton";

export default function FeaturesHeader() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-berlin uppercase">
        Features of the <span className="text-purple">gaming</span> Platfrom
      </h1>
      <p className="text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400 w-[300px] sm:w-[400px] md:w-[510px] 2xl:w-[750px] text-center">
        We’ve set on the path to make a gamer’s dream come true by offering an
        advanced Social Gaming Platform catering to both web2 and web3 users.
      </p>

      {/* btn */}
      <div className="flex flex-col gap-2 mt-6 md:mt-8 lg:mt-10">
        {/* devider */}
        <div className="bg-gradient-to-r from-transparent via-lightBlue to-transparent min-w-[900px] h-[2px]" />
        {/* content btn */}
        <div className="flex items-center gap-3 py-2 ml-40 pl-[14%] pr-[25%] sm:pr-[30%] md:ml-0 md:pl-[15%] md:pr-[15%] lg:pl-0 lg:pr-0 lg:px-0 w-[150vw] md:w-screen lg:w-fit lg:mx-auto lg:ml-0 overflow-x-auto hide-scroll-container">
          {featuresBtn.map((btn) => (
            <div key={btn.label}>
              <CustomButton
                textLabel={btn.label}
                innerEleStyle={"flex-row"}
                btnBgColor="bg-[#1d1a33]"
                customBtnStyle={"border border-[#0f0c25]"}
              />
            </div>
          ))}
        </div>
        {/* devider */}
        <div className="bg-gradient-to-r from-transparent via-lightBlue to-transparent min-w-[900px] h-[2px]" />
      </div>
    </div>
  );
}
