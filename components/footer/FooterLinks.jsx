import { footerLink, footerPost } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap md:flex-row lg:flex-nowrap justify-between gap-6">
      {/* Logos */}
      <div className="flex flex-col gap-3 md:gap-4">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="Kainu logo"
            width={150}
            height={50}
            className="w-[110px] xl:w[150px]"
          />
        </Link>
        <p className="text-base xl:text-lg text-gray-300 font-poppins font-medium">
          Kainu is a Project from{" "}
          <span className="uppercase text-purple">Innovation Inc.</span>
        </p>
        <p className="text-xs xl:text-base text-gray-400 font-medium max-w-[320px] xl:max-w-[450px]">
          Platform with popular streams. Engage with charismatic personalities,
          witness epic gameplay, and connect with a vibrant community.
        </p>
      </div>
      {/* quick link */}
      <div className="flex flex-col gap-4">
        <h3 className="font-urbanist font-extrabold text-xl xl:text-2xl">
          Quick Link
        </h3>
        <div className="mt-2 flex flex-col gap-4">
          {footerLink.quickLink.map((link) => (
            <Link
              href={"/"}
              key={link}
              className="text-gray-400 hover:text-purple transition duration-300 ease-in-out font-poppins font-medium text-base xl:text-lg"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
      {/* Need help */}
      <div className="flex flex-col gap-4">
        <h3 className="font-urbanist font-extrabold text-xl xl:text-2xl">
          Need Help?
        </h3>
        <div className="mt-2 flex flex-col gap-4">
          {footerLink.needHelp.map((link) => (
            <Link
              href={"/"}
              key={link}
              className="text-gray-400 hover:text-purple transition duration-300 ease-in-out font-poppins font-medium text-base xl:text-lg"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      {/* posts */}
      <div className="flex flex-col gap-4">
        <h3 className="font-urbanist font-extrabold text-xl xl:text-2xl">
          Latest Post
        </h3>
        <div className="mt-2 flex flex-col gap-4">
          {footerPost.map((post) => (
            <div key={post.title} className="flex items-center gap-2">
              <Image
                src={post.img}
                alt={post.title}
                width={110}
                height={100}
                className="w-[80px] xl:w-[110px]"
              />
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-xs xl:text-sm font-poppins">
                  {post.date}
                </p>
                <p className="text-gray-200 text-sm xl:text-base font-medium font-poppins">
                  {post.title} <br /> {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
