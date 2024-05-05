import Image from "next/image";
import CustomButton from "./CustomButton";
import { FaPlay } from "react-icons/fa";

export default function SocialMediaGaming() {
  return (
    <section className="bg-[url('/assets/images/bg-banner-2.webp')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
      {/* bg gradient overlay */}
      <div className="absolute top-1/4 -right-10 xl:-right-32 2xl:-right-64 bg-gradient-to-b from-lightBlue to-darkBlue w-1/4 h-[30%] md:h-[50%] rounded-full opacity-5" />

      {/* main content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 xl:gap-12 2xl:gap-20 main-container max-screen-width section-margin 2xl:px-20">
        {/* left side content */}
        <div className="flex-1 flex flex-col gap-4 xl:gap-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-berlin uppercase">
            The Supercharged Social Media <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-lightBlue">
              Gaming...
            </span>
          </h2>
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold font-urbanist uppercase text-gray-200">
            Platform Catering to{" "}
            <span className="text-purple">Web2 and Web3</span> Users.
          </p>
          <p className="text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400">
            {/* We’ve set on the path to make a gamer’s dream come true by offering
            an advanced Social Media Gaming Platform catering to both web2 and
            web3 users. Kainu Platform is a dream destination. */}
            We’ve set on the path to make a gamer’s dream come true by offering
            an advanced Social Media Gaming Platform, Live Stream, Tournaments,
            eSports, NFT Marketplace, Web2 Marketplace, Gathering, Matches,
            finding a Team, Messanger, Game Launcher, Browser Games, Fanpage of
            Games, Groups, Supporting Games to attract gamers and much more.
          </p>

          {/* btn */}
          <div className="flex items-center gap-5 mt-5 lg:mt-7 2xl:mt-9 mx-1">
            <div>
              <CustomButton
                textLabel={"Play Now"}
                innerEleStyle={"flex-row-reverse"}
                hoverColor3="bg-[#322a42]"
              >
                <div className="relative top-[1px]">
                  <FaPlay size={24} className="w-2 2xl:w-3" />
                </div>
              </CustomButton>
            </div>

            <div>
              <CustomButton
                textLabel={"Learn More"}
                innerEleStyle={"flex-row"}
                btnBgColor="bg-[#322a42]"
              >
                <div className="relative top-[1px]">
                  <FaPlay size={24} className="w-2 2xl:w-3" />
                </div>
              </CustomButton>
            </div>
          </div>
        </div>
        {/* right side content */}
        <div className="flex-1">
          <Image
            src={"/assets/images/kainu-ch-1.webp"}
            alt="kainu with a sword"
            width={800}
            height={800}
            className="w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
