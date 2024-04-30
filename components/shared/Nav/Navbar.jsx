"use client";

import Image from "next/image";
import logo from "../../../public/assets/images/logo.svg";
import NavLinks from "./NavLinks";
import CustomButton from "@/components/CustomButton";
import { Cross as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { AnimatePresence } from "framer-motion";
import NavOptons from "./NavOptons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const headerRef = useRef(null);

  const [menuIconSize, setmenuIconSize] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
      ? 18
      : typeof window !== "undefined" && window.innerWidth < 1536
      ? 18
      : 24
  );

  const { lockScroll, unlockScroll } = useScrollLock();

  // when mobile menu is open disabling scroll
  useEffect(() => {
    if (mobileNavOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [mobileNavOpen]);

  // storing scroll Y value to conditionally show nav button & animate element
  useEffect(() => {
    function handleScroll() {
      if (headerRef.current) {
        setNavHeight(window.scrollY);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBtn = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      transition: {
        duration: 0.3,
        opacity: {
          delay: 0.1,
          ease: [0.215, 0.61, 0.355, 1],
        },
      },
    },
    exit: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay: 0.1 },
    },
  };

  return (
    <header
      ref={headerRef}
      className={` top-0 left-0 w-full z-50 py-2 2xl:py-6 ${
        navHeight > 100
          ? "fixed bg-darkBlue animate-fade-in border-b border-gray-700"
          : "absolute"
      }`}
    >
      <nav className="main-container max-screen-width flex items-center justify-between gap-10">
        {/* logo / to show log in the mobile menu set "relative z-20" /*/}
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Kainu logo"
            width={150}
            height={100}
            priority={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-[72px] sm:w-[80px] md:w-[100px] lg:w-[120px] 2xl:w-[150px]"
          />
        </Link>

        {/* navlinks */}
        <NavLinks />

        <div className="flex flex-row-reverse items-center gap-2">
          {/* btn */}
          <div
            className={`${
              mobileNavOpen ? "bg-transparent" : "bg-purple"
            } flex justify-center items-center h-12 2xl:h-16 rounded-full 2xl:px-2 transition-colors duration-300 ease-in-out relative z-20 xl:hidden`}
          >
            <Hamburger
              toggled={mobileNavOpen}
              size={menuIconSize}
              color={mobileNavOpen ? "#000000" : "#ffffff"}
              toggle={setMobileNavOpen}
              duration={0.9}
            />
          </div>
          {/* custom button */}
          <motion.div
            className="hidden md:block relative z-20"
            variants={navBtn}
            initial="initial"
            animate={mobileNavOpen ? "enter" : "exit"}
          >
            <CustomButton textLabel="Marketplace">
              <div className=" md:px-2 md:py-1 xl:px-[14px] xl:py-1 xl:w-[50px] xl:h-[40px] 2xl:px-4 2xl:py-1 2xl:xl:w-[60px] 2xl:xl:h-[52px] bg-black rounded-full flex justify-center items-center">
                <Image
                  src="/assets/icons/boat.svg"
                  alt="boat"
                  width={48}
                  height={48}
                  className="md:w-5 md:h-5 xl:w-12 xl:h-12"
                />
              </div>
            </CustomButton>
          </motion.div>
        </div>

        {/* nav options for mobile */}
        <AnimatePresence>{mobileNavOpen && <NavOptons />}</AnimatePresence>
      </nav>
    </header>
  );
}
