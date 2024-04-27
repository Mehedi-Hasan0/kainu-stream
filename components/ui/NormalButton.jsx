import { FaPlay } from "react-icons/fa";
import CustomButton from "../CustomButton";

const NormalButton = ({ flexDirection = "flex-row", isPrimary = true }) => {
  return (
    <button
      className={`${flexDirection} flex items-center gap-2 px-7 py-4 rounded-full ${
        isPrimary ? "bg-gradient-to-r from-purple to-lightBlue" : "bg-[#322a42]"
      }`}
    >
      Watch videos
      <FaPlay size={24} className="w-3" />
    </button>
    // <CustomButton textLabel={"Watch videos"} innerEleStyle={"flex-row-reverse"}>
    //   <div className="relative top-[1px]">
    //   </div>
    // </CustomButton>
  );
};

export default NormalButton;
