import { multiChainCards } from "@/data";
import Image from "next/image";
import MultichainCard from "./MultichainCard";

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
        <MultichainCard />
      </div>
    </section>
  );
}
