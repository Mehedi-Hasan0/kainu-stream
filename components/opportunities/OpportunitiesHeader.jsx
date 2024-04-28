import Image from "next/image";

export default function OpportunitiesHeader() {
  return (
    <div className="main-container max-screen-width 2xl:px-20 flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 justify-between md:items-center lg:items-start">
      <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-berlin uppercase">
        Earning <br /> Opportunities <br />
        <span className=" text-purple">With Kainu...</span>
      </h2>

      {/* card */}
      <div className="flex flex-row gap-4 lg:gap-8 items-center">
        {/* line */}
        <div className="w-2 h-[160px] lg:h-[170px] xl:h-[180px] 2xl:h-[190px] bg-[#38154d] hidden md:block" />
        {/* content */}
        <div className="flex flex-col justify-center gap-3 md:gap-5 bg-darkBlue px-5 py-6 md:px-8 md:py-4 lg:py-8 rounded-md lg:rounded-lg">
          <div className="flex items-center gap-6">
            <div className="rounded-full bg-[#322a42] p-3">
              <Image
                src={"/assets/icons/add-revenue.svg"}
                alt="ad revenue"
                width={30}
                height={30}
                className="w-4 md:w-5 xl:w-6 2xl:w-7"
              />
            </div>
            <h4 className="font-berlin uppercase text-sm sm:text-base md:text-base lg:text-lg xl:text-2xl 2xl:text-3xl">
              add revenue genration
            </h4>
          </div>
          <p className="font-poppins md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] text-gray-400 text-xs md:text-sm xl:text-base 2xl:text-lg">
            We’ve advanced Social Gaming Platform true an advanced path to make
            a gamer’s drea Social.
          </p>
        </div>
      </div>
    </div>
  );
}
