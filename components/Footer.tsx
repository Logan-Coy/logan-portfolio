import { navLinks } from "@constants";
import { githubWhite, linkedinWhite } from "@utils/images";
import Image from "next/image";

function Footer() {
  return (
    <div className="w-full grid grid-cols-1 gap-4 place-items-center py-6 justify-between items-center px-8 bg-slate-800">
      <div className="flex w-full justify-center">
        <h1 className="text-white font-montserrat text-2xl sm:text-3xl hover:scale-105">
          <a href="">&#123; logan_coy &#125;</a>
        </h1>
      </div>
      <ul className="list-none flex justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="font-montserrat font-normal cursor-pointer text-[12px] hover:scale-105 text-white mx-2"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className="font-montserrat font-normal cursor-pointer text-[12px] hover:scale-105 text-white mx-2">
          <a href="#contact">Contact</a>
        </li>
        <li className="font-montserrat font-normal cursor-pointer text-[12px] hover:scale-105 text-white mx-2">
          <a href="/assets/loganCoyResume.pdf" download="Coy_Resume_2023">
            Download Resume
          </a>
        </li>
      </ul>
      <div className="flex items-center flex-1">
        <a target="_blank" href="https://github.com/Logan-Coy">
          <Image
            src={githubWhite}
            alt="GitHub Icon"
            height={20}
            width={20}
            className="cursor-pointer mx-2 hover:scale-105"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/logan-coy/">
          <Image
            src={linkedinWhite}
            alt="LinkedIn Icon"
            height={20}
            width={20}
            className="cursor-pointer mx-2 hover:scale-105"
          />
        </a>
      </div>
      <div className="flex justify-center">
        <p className="flex text-white opacity-70 font-montserrat text-[10px] items-center text-center">
          © 2023 | Logan Coy | All Rights Reserved | www.logancoy.dev
        </p>
      </div>
    </div>
  );
}

export default Footer;
