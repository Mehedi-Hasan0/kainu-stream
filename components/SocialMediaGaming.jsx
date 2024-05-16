import Image from "next/image";
import SocialMediaText from "./SocialMediaText";
import SocialMediaImg from "./SocialMediaImg";

export default function SocialMediaGaming() {
  return (
    <section className="bg-[url('/assets/images/bg-banner-2.webp')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
      {/* bg gradient overlay */}
      <div className="absolute top-1/4 -right-10 xl:-right-32 2xl:-right-64 bg-gradient-to-b from-lightBlue to-darkBlue w-1/4 h-[30%] md:h-[50%] rounded-full opacity-5" />

      {/* main content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 xl:gap-12 2xl:gap-20 main-container max-screen-width section-margin 2xl:px-20">
        {/* left side content */}
        <SocialMediaText />
        {/* right side content */}
        <SocialMediaImg />
      </div>
    </section>
  );
}
