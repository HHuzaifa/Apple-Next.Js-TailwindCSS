"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { BsBag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { SlMenu } from "react-icons/sl";
import Wrapper from "./Wrapper";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (open && !event.target.closest(".mobile-nav")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header>
      {/* Mobile Nav Menu */}
      <div className="lg:hidden z-40  sticky inset-0">
        <Wrapper>
          <div className="flex justify-between items-center sticky inset-0 h-16">
            <div className="flex justify-between items-center">
              <div className="relative h-10 w-10">
                <Image
                  src={"/apple-logo.png"}
                  fill={true}
                  alt="Apple Logo"
                />
              </div>
            </div>

            <div className="flex gap-x-8 -ml-2">
              <CiSearch size={25} />
              <BsBag size={21} />
            </div>

            <div onClick={() => setOpen(!open)}>
              {open ? (
                <TfiClose size={20} />
              ) : (
                <SlMenu size={20} />
              )}
            </div>
          </div>
        </Wrapper>

        {open && (
          <ul className="mobile-nav flex flex-col items-center shadow-lg gap-y-5 rounded py-7 bg-gray-300">
            <li className="text-base font-normal hover:font-bold">Store</li>
            <li className="text-base font-normal hover:font-bold">Mac</li>
            <li className="text-base font-normal hover:font-bold">iPad</li>
            <li className="text-base font-normal hover:font-bold">iPhone</li>
            <li className="text-base font-normal hover:font-bold">Watch</li>
            <li className="text-base font-normal hover:font-bold">AirPods</li>
            <li className="text-base font-normal hover:font-bold">
              TV & Home
            </li>
            <li className="text-base font-normal hover:font-bold">
              Entertainment
            </li>
            <li className="text-base font-normal hover:font-bold">
              Accessories
            </li>
            <li className="text-base font-normal hover:font-bold">Support</li>
          </ul>
        )}
      </div>

      {/* Mobile Nav Menu */}

      {/* ------------------------------------------------ */}

      {/* Desktop Nav Menu */}

      <div className="hidden lg:sticky lg:inset-0 lg:flex justify-center items-center gap-x-8 h-20">


        <div className="relative w-10 h-10">
          <Image src={"/apple-logo.png"} fill={true} alt="Apple Logo" />
        </div>


        <ul className="flex gap-x-8">
          <li className="text-base font-normal ">Store</li>
          <li className="text-base font-normal">Mac</li>
          <li className="text-base font-normal">iPad</li>
          <li className="text-base font-normal">iPhone</li>
          <li className="text-base font-normal">Watch</li>
          <li className="text-base font-normal">AirPods</li>
          <li className="text-base font-normal">TV & Home</li>
          <li className="text-base font-normal">Entertainment</li>
          <li className="text-base font-normal">Accessories</li>
          <li className="text-base font-normal">Support</li>
        </ul>


        <div className="flex gap-x-8">
          <CiSearch size={25} />
          <BsBag size={21} />
        </div>


      </div>



    </header>
  );
}