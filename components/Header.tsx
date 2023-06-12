"use client";
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
    const handleClickOutside = (event: any) => {
      if (open && !event.target.closest(".mobile-nav")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <header className="inset-0 sticky z-40">
      {/* Mobile Nav Menu */}
      <div className="lg:hidden h-14 bg-white inset-0 fixed z-50">
        <Wrapper>
          <div className="flex justify-between items-center sticky inset-0 h-16">
            <div className="flex justify-between items-center">
              <div className="relative h-10 w-10">
                <Image src={"/apple-logo.png"} fill={true} alt="Apple Logo" />
              </div>
            </div>

            <div className="flex gap-x-8 -ml-2">
              <CiSearch size={25} />
              <BsBag size={21} />
            </div>

            <div onClick={() => setOpen(!open)}>
              {open ? <TfiClose size={20} /> : <SlMenu size={20} />}
            </div>
          </div>
        </Wrapper>

        {open && (
          <ul className="absolute top-14 transition-opacity duration-300 w-full mobile-nav  flex flex-col items-center shadow-lg gap-y-5 rounded py-7 bg-black bg-opacity-80 backdrop-blur">
            <button>
              <li className="text-base text-white font-normal hover:font-bold">
                Store
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                Mac
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                iPad
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                iPhone
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                Watch
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                AirPods
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                TV & Home
              </li>
            </button>
            <button>
              <li className="text-base text-white font-normal hover:font-bold">
                Entertainment
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                Accessories
              </li>
            </button>
            <button>
              {" "}
              <li className="text-base text-white font-normal hover:font-bold">
                Support
              </li>
            </button>
          </ul>
        )}
      </div>

      {/* Mobile Nav Menu */}

      {/* ------------------------------------------------ */}

      {/* Desktop Nav Menu */}

      <div className="hidden bg-white lg:sticky lg:inset-0 lg:flex justify-center items-center gap-x-8 h-20">
        <div className="relative w-10 h-10">
          <Image src={"/apple-logo.png"} fill={true} alt="Apple Logo" />
        </div>

        <ul className="flex gap-x-8">
          <button>
            <li className="text-base font-normal ">Store</li>
          </button>
          <button>
            {" "}
            <li className="text-base font-normal">Mac</li>
          </button>
          <button>
            <li className="text-base font-normal">iPad</li>
          </button>
          <button>
            <li className="text-base font-normal">iPhone</li>
          </button>
          <button>
            <li className="text-base font-normal">Watch</li>
          </button>
          <button>
            <li className="text-base font-normal">AirPods</li>
          </button>
          <button>
            {" "}
            <li className="text-base font-normal">TV & Home</li>
          </button>
          <button>
            {" "}
            <li className="text-base font-normal">Entertainment</li>
          </button>
          <button>
            {" "}
            <li className="text-base font-normal">Accessories</li>
          </button>
          <button>
            {" "}
            <li className="text-base font-normal">Support</li>
          </button>
        </ul>

        <div className="flex gap-x-8">
          <CiSearch size={25} />
          <BsBag size={21} />
        </div>
      </div>
    </header>
  );
}
