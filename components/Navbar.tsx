"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { navLinks } from "@constants";
import { logoW, menu, close, download, contact } from "@utils/images";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      aria-label="primary menu"
      className="w-full flex py-6 justify-between items-center px-4 md:px-8 lg:px-16 shadow-xl bg-slate-800"
    >
      <div className="">
        <h1 className="text-white font-montserrat text-2xl sm:text-3xl">
          <a href="">&#123; logan_coy &#125;</a>
        </h1>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-montserrat font-normal text-white cursor-pointer text-[16px] hover:scale-110 mr-6 md:mr-8 lg:mr-10"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <div>
          <a href="#contact">
            <button className="flex font-montserrat font-semibold text-slate-800 cursor-pointer text-[16px] hover:scale-110 mr-5 bg-emerald-300 p-2 rounded-md">
              <Image
                src={contact}
                alt="contact me"
                height={35}
                width={35}
                className="pr-2"
              />
              Contact
            </button>
          </a>
        </div>
        <div>
          <a href="/assets/loganCoyResume.pdf" download="Coy_Resume_2023">
            <button className=" flex font-montserrat font-semibold text-emerald-300 cursor-pointer text-[16px] hover:scale-110 mr-0 bg-slate-800 border-2 border-emerald-300 p-2 rounded-md">
              <Image
                src={download}
                alt="download resume"
                height={32}
                width={32}
                className="pr-2"
              />
              Resume
            </button>
          </a>
        </div>
      </ul>

      {/* Mobile Menu= */}
      <div className="sm:hidden">
        <ul className="list-none flex justify-end items-center flex-1">
          <div>
            <a href="/assets/loganCoyResume.pdf" download="Coy_Resume_2023">
              <button className=" flex font-montserrat font-semibold text-emerald-300 cursor-pointer text-[16px] hover:scale-110 mr-4 bg-slate-800 border-2 border-emerald-300 p-2 rounded-md">
                <Image
                  src={download}
                  alt="download resume"
                  height={32}
                  width={32}
                  className="pr-2"
                />
                Resume
              </button>
            </a>
          </div>
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[50px] h-[50px] object-contain hover:scale-110"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
        </ul>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } py-4 bg-slate-700 absolute top-[98px] right-0 w-full rounded-b-lg z-10`}
        >
          <ul className="list-none flex flex-col items-center flex-1 py-2">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="w-full">
                <a href={`#${nav.id}`}>
                  <button
                    className="font-montserrat text-lg cursor-pointer text-white hover:bg-slate-600 hover:scale-[1.12] text-center py-2 w-full"
                    onClick={() => {
                      setToggle((prev) => !prev);
                    }}
                  >
                    {nav.title}
                  </button>
                </a>
              </li>
            ))}
            <li className="w-full">
              <a href="#contact">
                <button
                  className="font-montserrat font-semibold text-emerald-300 cursor-pointer text-lg hover:scale-110 mr-5 p-2 w-full hover:bg-emerald-300 hover:text-slate-800"
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                >
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
