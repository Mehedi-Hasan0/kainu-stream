import Image from "next/image";
import CustomButton from "../CustomButton";

export default function ContactForm() {
  return (
    <div className="flex flex-col md:flex-row gap-5 sm:gap-6 md:gap-7 lg:gap-9 xl:gap-11 2xl:gap-12">
      {/* left side */}
      <div className="flex justify-center items-center border-2 border-darkBlue md:border-none md:bg-gradient-to-r from-purple to-[#110e21] rounded-xl flex-1">
        <div className="flex flex-col gap-2 contact-left-card bg-[#110e21] px-6 py-7 md:px-10 md:py-12 xl:px-14 xl:py-16 rounded-xl">
          <div className="flex items-center gap-2">
            <Image
              src={"/assets/icons/contact-us.png"}
              alt=""
              width={50}
              height={50}
              className="w-6 md:w-8 lg:w-10 xl:w-12"
            />
            <h2 className="font-berlin text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl uppercase">
              Contact <span className="text-purple">us</span>
            </h2>
          </div>
          <p className="text-[10px] md:text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400  lg:mt-2 2xl:mt-4">
            Platform with popular streams. Engage with charismatic
            personalities, witness epic gameplay, and connect with a vibrant
            community.
          </p>
          {/* address */}
          <div className="mt-4 border-b-2 border-gray-600 pb-3">
            <div className="flex items-center gap-10 text-[10px] md:text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400">
              <p className="text-gray-300 text-xs md:text-sm xl:text-base 2xl:text-[18px]">
                Address:
              </p>
              <p>Centerl Park West LA87, New York</p>
            </div>
          </div>
          <div className="mt-3 border-b-2 border-gray-600 pb-3">
            <div className="flex items-center gap-10 text-[10px] md:text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400">
              <p className="text-gray-300 text-xs md:text-sm xl:text-base 2xl:text-[18px]">
                Email:
              </p>
              <p>info@example.com</p>
            </div>
          </div>

          {/* number */}
          <h2 className="font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple to-lightBlue text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl mt-6">
            +9 333 888 985
          </h2>
        </div>
      </div>

      {/* right side */}
      <div className="flex justify-center items-center border-2 border-darkBlue md:border-none md:bg-gradient-to-r from-[#110e21] to-purple rounded-xl flex-1">
        <div className="flex flex-col gap-6 contact-left-card bg-[#110e21] px-6 py-7 md:px-10 md:py-12 xl:px-14 xl:py-16 rounded-xl">
          <div className="flex items-center gap-7 justify-between">
            <input
              type="text"
              placeholder="Name*"
              className="w-full min-h-16 border border-gray-400 placeholder:text-gray-400 text-gray-300 bg-[#110e21] px-4"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full min-h-16 border border-gray-400 placeholder:text-gray-400 text-gray-300 bg-[#110e21] px-4"
            />
          </div>

          {/* text area */}
          <div>
            <textarea
              name=""
              id=""
              cols="10"
              rows="6"
              placeholder="Drop a message"
              className="bg-[#110e21] w-full border border-gray-400 px-6 py-5"
            />
          </div>

          {/* custom button */}
          <div className="max-w-[140px]">
            <CustomButton
              textLabel={"Submit"}
              hoverColor3="bg-[#322a42]"
              innerEleStyle="py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
