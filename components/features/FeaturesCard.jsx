import { featuresCard } from "@/data";
import Image from "next/image";
import CustomButton from "../CustomButton";

export default function FeaturesCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 justify-around w-full mt-12 xl:mt-20">
      {featuresCard.map((card, idx) => (
        <div
          key={card.heading}
          className="flex flex-col gap-2 lg:gap-3 bg-darkBlue p-4 rounded-lg max-w-[600px]"
        >
          <Image
            src={card.imgUrl}
            alt={card.heading}
            width={650}
            height={900}
          />

          <div className="flex flex-col gap-3 mt-3 lg:mt-5 md:pl-3 lg:pl-5">
            <h2
              className={`text-2xl md:text-3xl xl:text-4xl font-extrabold font-urbanist flex w-fit gap-3 ${
                idx === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {card.heading}{" "}
              <span className="text-purple">{card.coloredHeading}</span>
            </h2>

            <p className="text-xs md:text-sm xl:text-base text-gray-400">
              {card.desc}
            </p>
          </div>

          {/* btn */}
          <div className="w-[180px] xl:w-[200px] mt-3 xl:mt-6 pb-5 md:pb-6 md:ml-3 lg:ml-5">
            <CustomButton
              textLabel={"Explore Now"}
              innerEleStyle={"flex-row"}
              btnBgColor="bg-[#322a42]"
            >
              <Image
                src={"/assets/icons/arrow-up.svg"}
                alt=""
                width={18}
                height={18}
                className="w-3 xl:w-4"
              />
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
}
