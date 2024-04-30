import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import CustomButton from "../CustomButton";

export default function DiveInHeader() {
  const communityMember = "1910816";
  return (
    <div className="flex flex-col md:flex-row justify-between gap-7 sm:gap-10">
      {/* left side */}
      <div className="flex flex-col gap-3 lg:gap-5">
        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-berlin uppercase">
          Ready to dive in?
        </h2>
        <p className="sm:w-[400px] lg::w-[500px] xl:w-[650px] 2xl:w-[750px] text-gray-400 font-poppins font-medium text-xs lg:text-base xl:text-lg 2xl:text-xl">
          Platform with popular streams. Engage with charismatic personalities,
          witness and connect with a vibrant community.
        </p>

        <div className="flex items-center gap-8 mt-4">
          <CustomButton
            textLabel={"Watch Videos"}
            innerEleStyle={"flex-row"}
            hoverColor3="bg-[#322a42]"
          >
            <div className="relative top-[1px]">
              <FaPlay size={24} className="w-2 2xl:w-3" />
            </div>
          </CustomButton>

          <button className="flex items-center gap-2">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-purple to-lightBlue font-bold text-xs lg:text-lg xl:text-xl uppercase font-poppins whitespace-nowrap">
              Explore all
            </p>
            <FaLongArrowAltRight size={18} color="#cf22f1" />
          </button>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col md:items-end gap-4 lg:gap-6 2xl:gap-8">
        <div className="flex items-center gap-2 2xl:gap-3">
          {communityMember.split("").map((num) => (
            <div
              key={num}
              className="bg-darkBlue p-3 lg:p-4 xl:p-5 rounded-sm lg:rounded-md"
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-br from-purple to-lightBlue font-poppins font-bold text-sm lg:text-base xl:text-xl 2xl:text-2xl">
                {num}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm lg:text-base xl:text-xl 2xl:text-2xl font-poppins">
          Total Community Members
        </p>
      </div>
    </div>
  );
}
