import { delay, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { headingVariant, navOptionVariant, slide } from "./anim";
import Link from "next/link";
import { navLinks } from "@/constant";
import { usePathname } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
// import { slide } from "../anim";
// import "../../preloader/style.module.css";

//   options tag
const options = ["work", "about", "contact"];

const NavOptons = () => {
  // state for line animation
  const [isHovered, setIsHovered] = useState(Array(options.length).fill(false));
  const [textWordHeight, setTextWordHeight] = useState(0);
  const textWordRef = useRef(null);
  const pathName = usePathname();

  useEffect(() => {
    if (textWordRef.current) {
      setTextWordHeight(textWordRef.current?.clientHeight);
    }

    function handleResize() {
      if (textWordRef.current) {
        setTextWordHeight(textWordRef.current?.clientHeight);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="absolute top-0 right-0 w-screen h-screen bg-white text-[#1d1d1f] z-10 navParent "
      >
        <div className="flex flex-col-reverse relative top-[20%] gap-2">
          {/* market place button */}
          {/* <div className="w-[200px] mx-8 sm:mx-10">
            <CustomButton textLabel="Marketplace">
              <div className=" px-[14px] py-1 w-[50px] h-[36px] bg-black rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/boat.svg"
                  alt="boat"
                  width={48}
                  height={48}
                  className="md:w-5 md:h-5 xl:w-12 xl:h-12"
                />
              </div>
            </CustomButton>
          </div> */}
          {/* nav options */}
          <div className="flex flex-col gap-2 mb-5">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                variants={navOptionVariant}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* <Link
                href={link.path}
                className={`px-8 sm:px-10 text-4xl font-bold hover:text-purple transition-colors duration-300 ease-in capitalize ${
                  pathName === link.path && "text-purple"
                }`}
              >
                {link.label}
              </Link> */}
                <Link
                  key={i + 1}
                  href={link.path}
                  className={`flex items-center px-8 sm:px-10 text-3xl sm:text-5xl font-bold hover:text-purple transition-colors duration-500 ease-in-out w-fit ${
                    pathName === link.path && "text-purple"
                  }`}
                >
                  {link.label.split("").map((string, j) => (
                    <>
                      <motion.h1
                        key={j}
                        custom={j}
                        variants={headingVariant}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                        className={`${i === 1 && j === 4 && "mr-2"} ${
                          i === 4 && j === 7 && "mr-2"
                        }`}
                      >
                        {string}
                      </motion.h1>
                    </>
                  ))}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavOptons;
