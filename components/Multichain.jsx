import { multiChainCards } from "@/data";
import Image from "next/image";

export default function Multichain() {
  return (
    <section className="bg-[url('/assets/images/multichain-bg.webp')] overflow-hidden">
      <div className="main-container max-screen-width section-margin flex flex-col gap-7 md:gap-9 lg:gap-11 xl:gap-12 2xl:gap-16">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center gap-3 lg:gap-3 xl:gap-5 2xl:gap-8">
            <Image
              src={"/assets/images/stars.webp"}
              alt="stars"
              width={60}
              height={20}
              className="w-6 md:w-8 lg:w-10 xl:12 2xl:w-14"
            />
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-berlin uppercase">
              Building with <span className="text-purple">multichain</span>
            </h1>
            <Image
              src={"/assets/images/stars.webp"}
              alt="stars"
              width={60}
              height={20}
              className="w-6 md:w-8 lg:w-10 xl:w-12 2xl:w-14"
            />
          </div>
          <p className="text-[10px] md:text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400 w-[300px] sm:w-[400px] md:w-[510px] 2xl:w-[750px] text-center lg:mt-2 2xl:mt-4">
            We’ve set on the path to make a gamer’s dream come true by offering
            an advanced Social Gaming Platform catering to both web2 and web3
            users.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-9 xl:gap-12 2xl:gap-8 multichain-cards">
          {multiChainCards.map((card, idx) => (
            <div
              key={card.heading}
              className={`md:w-[224px] md:h-[152px] lg:w-[302px] lg:h-[172px] xl:w-[368px] xl:h-[252px] 2xl:w-[436px] 2xl:h-[268px] flex justify-center items-center rounded-md cursor-pointer ${
                idx === 0 && "md:bg-gradient-to-r from-purple to-darkBlue"
              } ${idx === 2 && "md:bg-gradient-to-r from-darkBlue to-purple"}`}
            >
              <div className="bg-darkBlue px-5 lg:px-8 xl:px-8 2xl:px-10 justify-center flex flex-col gap-3 lg:gap-4 rounded-md md:w-[222px] md:h-[150px] lg:w-[300px] lg:h-[170px] xl:w-[366px] xl:h-[250px] 2xl:w-[434px] 2xl:h-[266px] p-7">
                {/* heading */}
                <div className="flex items-center gap-3 lg:gap-6 xl:gap-8">
                  <Image
                    src={card.img}
                    alt={card.heading}
                    width={60}
                    height={60}
                    className="w-8 lg:w-10 xl:w-12 2xl:w-[60px]"
                  />
                  <h3 className="uppercase md:text-xs lg:text-sm xl:text-lg 2xl:text-2xl font-bold">
                    {card.heading}
                  </h3>
                </div>
                {/* details */}
                <p className="text-[10px] sm:text-[8px] lg:text-[10px] lg:text-xs xl:text-lg text-gray-400 font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
