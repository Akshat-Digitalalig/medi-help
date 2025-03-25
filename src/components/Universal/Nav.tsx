import { useState } from "react";
import { navlink } from "@/lib/constant/NavbarItems";
import Link from "next/link";

export const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const handleMouseEnter = (title: string) => {
    setOpenDropdown(title);
  };
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  return (
    <div className="hidden md:block w-full ">
      <ul className="flex space-x-2 justify-center items-center mx-auto">
        {navlink.map((navItem, index) => (
          <li
            key={index}
            className="relative  p-2"
            onMouseEnter={() => handleMouseEnter(navItem.title)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={navItem.link || "#"}
              className="cursor-pointer my-text hover:bg-myblue hover:text-white md:text-[13px] lg:text-[14px] p-[5px] lg:px-4 lg:py-1 rounded font-semibold"
            >
              {navItem.title}
            </Link>
            {navItem.sublink && openDropdown === navItem.title && (
              <div className="absolute left-0 top-full  bg-white rounded-md shadow-md z-10 w-48">
                <ul className="flex flex-col gap-1 p-2">
                  {navItem.sublink.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={`${sub.link}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 rounded"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
