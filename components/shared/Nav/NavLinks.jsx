"use client";

import { navLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <div className="hidden xl:flex items-center">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.path}
          className={`px-4 2xl:px-5 xl:text-xl 2xl:text-xl font-medium hover:text-purple transition-colors duration-300 ease-in capitalize ${
            pathName === link.path ? "text-purple" : "text-offWhite"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
