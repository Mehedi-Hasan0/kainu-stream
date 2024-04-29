import { tournamentsCard } from "@/data";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Tournament() {
  return (
    <section className="bg-[url('/assets/images/cpre-tournament-bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="main-container max-screen-width section-margin flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-20 justify-center">
        {/* left side text */}
        <div className="flex flex-col gap-6 md:gap-6 2xl:gap-8">
          <div className="flex flex-col gap-3 lg:gap-5 xl:gap-7">
            <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-berlin uppercase">
              Cpre <br /> Features of <br />
              <span className=" text-purple">Tournament...</span>
            </h2>
            <p className="text-xs xl:text-sm 2xl:text-xl font-poppins text-gray-400 sm:w-[320px] lg:w-[400px] xl:w-[510px] 2xl:w-[600px]">
              We’ve set on the path to make a gamer’s dream come true by
              offering an advanced Social Gaming Platform catering to both web2
              and web3 users.
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
        </div>
        {/* right side card */}
        <div className="flex-1 xl:flex-auto flex flex-row w-fit">
          <div className="h-full w-[6px] bg-gradient-to-b from-purple to-[#120d25]  rounded-lg hidden md:block" />
          <div className="flex flex-col items-center gap-7 lg:gap-10 xl:gap-16">
            {tournamentsCard.map((card) => (
              <div
                key={card.heading}
                className="flex items-center gap-5 lg:gap-10 xl:gap-20 font-poppins group"
              >
                {/* hover indicator */}
                <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-purple opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hidden md:block" />
                {/* hover indicator ☝️ */}
                {/* original card 👇 */}
                <div className="bg-gradient-to-r group-hover:from-purple group-hover:to-darkBlue 2xl:w-[600px] 2xl:h-[328px] flex justify-center items-center rounded-md cursor-pointer transition-all duration-500 ease-in-out">
                  <div className="bg-darkBlue p-6 lg:p-8 xl:p-12 flex flex-col gap-3 lg:gap-4 rounded-md 2xl:w-[598px] 2xl:h-[326px]">
                    {/* heading */}
                    <h3 className="uppercase text-xl lg:text-2xl xl:text-3xl font-bold">
                      {card.heading}
                    </h3>
                    {/* join text */}
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 xl:w-4 xl:h-4 rounded-full bg-purple" />
                      <p className="text-xs lg:text-sm xl:text-base text-gray-400 font-medium">
                        {card.desc1}
                      </p>
                    </div>
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
      </div>
    </section>
  );
}

//   <div className="flex flex-col items-center gap-20">
//     <div className="flex items-center gap-20">
//       <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-purple" />
//       <h1>Mahedi</h1>
//     </div>
//     <div className="flex items-center gap-20">
//       <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-purple" />
//       <h1>Mahedi</h1>
//     </div>
//     <div className="flex items-center gap-20">
//       <div className="w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-l-[16px] border-l-purple" />
//       <h1>Mahedi</h1>
//     </div>
//   </div>
