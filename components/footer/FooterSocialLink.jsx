import { FaFacebook, FaYoutube } from "react-icons/fa";
import CustomButton from "../CustomButton";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import Link from "next/link";

export default function FooterSocialLink() {
  return (
    <section className="bg-[#0c0a1a] overflow-hidden">
      <div className="main-container max-screen-width section-margin">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5">
          <div className="flex flex-col gap-4">
            <p className="font-poppins font-semibold text-base lg:text-xl xl:text-2xl text-gray-400">
              Don&apos;t miss our latest news
            </p>
            <label
              htmlFor="email"
              className="bg-darkBlue p-2 sm:p-1 lg:p-2 rounded-full flex justify-between md:justify-start items-center gap-3"
            >
              <input
                id="email"
                type="email"
                placeholder="Email address..."
                className="bg-transparent outline-none py-3 px-4 placeholder:text-gray-500 placeholder:text-base 2xl:placeholder:text-lg font-poppins font-medium w-[160px] sm:w-[200px] lg:w-[250px] xl:w-[300px]"
              />

              {/* btn */}
              <div className="max-w-[180px]">
                <CustomButton
                  textLabel={"subscribe"}
                  hoverColor3="bg-[#322a42]"
                  innerEleStyle=" md:py-1 xl:py-2 uppercase"
                />
              </div>
            </label>
          </div>
          {/* social links */}
          <div className="flex items-center mx-auto md:mx-0 gap-4">
            <Link
              href="https://www.facebook.com/profile.php?id=100069383490342"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                size={44}
                className="w-5 md:w-6 xl:w-8"
                color="#888594"
              />
            </Link>
            <Link
              href="https://twitter.com/katanainu"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter
                size={44}
                className="w-5 md:w-6 xl:w-8"
                color="#888594"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@KatanaInu"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube
                size={44}
                className="w-5 md:w-6 xl:w-8"
                color="#888594"
              />
            </Link>
            <Link
              href="https://www.instagram.com/katanainu"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram
                size={44}
                className="w-5 md:w-6 xl:w-8"
                color="#888594"
              />
            </Link>
            <Link
              href="https://discord.com/invite/katanainu"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoDiscord
                size={44}
                className="w-5 md:w-6 xl:w-8"
                color="#888594"
              />
            </Link>
          </div>
        </div>

        {/* privacy links */}
        <div className="mt-4 md:mt-6 xl:mt-12 flex flex-col sm:flex-row justify-between gap-5">
          {/* linsk */}
          <div className="flex items-center gap-8">
            <Link
              href={"/"}
              className="text-gray-500 font-poppins text-xs md:text-sm lg:text-base xl:text-xl font-semibold tracking-wide"
            >
              Privacy
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 font-poppins text-xs md:text-sm lg:text-base xl:text-xl font-semibold tracking-wide"
            >
              Terms of Service
            </Link>
            <Link
              href={"/"}
              className="text-gray-500 font-poppins text-xs md:text-sm lg:text-base xl:text-xl font-semibold tracking-wide"
            >
              Cookies Policy
            </Link>
          </div>
          {/* copy rights */}
          <p className="text-gray-500 font-poppins text-xs md:text-sm lg:text-base xl:text-xl font-semibold">
            © 2024 Kainu, All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
