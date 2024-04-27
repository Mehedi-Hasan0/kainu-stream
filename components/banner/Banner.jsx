import Image from "next/image";
import StreamingDetails from "./StreamingDetails";

export default function Banner() {
  return (
    <section className="bg-[url('/assets/images/bg-banner-1.webp')] bg-no-repeat bg-cover bg-center ">
      <div className="main-container max-screen-width pt-28 md:pt-36 lg:pt-40 xl:pt-52 2xl:pt-64 flex flex-col md:flex-row gap-8 md:gap-20 justify-between">
        {/* left side data */}
        <div className="flex-1">
          <StreamingDetails />
        </div>
        {/* right side */}
        <div className="flex-1 flex justify-end relative -mt-0 md:-mt-6 lg:-mt-36 xl:-mt-20 h-fit">
          <Image
            src={"/assets/images/banner-mobile.webp"}
            alt="Mobile screen website of kainu"
            width={600}
            height={600}
            className="w-[800px] h-[300px] lg:h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
