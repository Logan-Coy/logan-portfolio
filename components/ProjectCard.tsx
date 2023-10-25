import { github, link } from "@utils/images";
import Image from "next/image";
import { Fragment } from "react";

import { projectData } from "@constants";

interface ProjectCardProps {
  imgSrc: any;
  imgAlt: string;
  title: string;
  skills: any;
  description: string;
  imgHeight: number;
  imgWidth: number;
  scrollPercent: number;
}

function ProjectCard({
  title,
  imgSrc,
  imgAlt,
  skills,
  description,
  imgHeight,
  imgWidth,
  scrollPercent,
}: ProjectCardProps) {
  // parsing description data to style on the card
  const paragraphs =
    description &&
    description.split("\n").map((paragraph, index) => (
      <p className="mt-4" key={index}>
        {paragraph}
      </p>
    ));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-[90%] md:w-[80%] xl:w-[70%] p-2 xs:p-8 bg-white shadow-md rounded-xl place-items-center my-6 mb-16">
      {/* left col */}
      <div className="col-span-1 w-[95%]">
        {/* project name */}
        <div className="pb-8 flex">
          <h3 className="font-montserrat text-2xl ss:text-3xl font-semibold text-slate-800 mt-6 sm:mt-0">
            {title}
            <div className="border-b-4 border w-[80%] border-emerald-300 mt-2 rounded-md"></div>
          </h3>
        </div>

        {/* project screenshots */}
        <div className="h-[20rem] sm:h-[27rem] lg:h-[22rem] overflow-hidden drop-shadow-md rounded-lg">
          <a target="_blank" href="https://www.momentsbykerricoy.com/">
            <Image
              src={imgSrc}
              alt={imgAlt}
              height={imgHeight}
              width={imgWidth}
              className={`rounded-md transition-transform duration-[5s] ease-in-out hover:translate-y-[${scrollPercent}%]`}
            />
          </a>
        </div>

        {/* tools used */}
        <div className="my-6">
          <div className="font-montserrat my-4 grid grid-cols-4 text-[17px] place-items-center gap-y-4">
            {
              //@ts-expect-error
              skills.map((skill) => (
                <Fragment key={skill.name}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    height={50}
                    width={50}
                  />
                </Fragment>
              ))
            }
          </div>
        </div>
      </div>

      {/* right col */}
      <div className="p-2 m-2">
        {/* description */}
        <div className="font-montserrat text-xl font-light">{paragraphs}</div>

        {/* bottom link button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center mt-8">
          <div className="w-[70%] lg:w-full xl:w-[70%]">
            <a
              target="_blank"
              href="https://github.com/Logan-Coy/moments-photography"
              className="flex justify-center"
            >
              <button className="w-full flex justify-center font-montserrat font-semibold text-emerald-300 cursor-pointer text-xl hover:scale-105 bg-slate-800 m-4 p-3 rounded-lg">
                <Image
                  src={github}
                  alt="github icon"
                  height={32}
                  width={32}
                  className="pr-2"
                />
                Code
              </button>
            </a>
          </div>
          <div className="w-[70%] lg:w-full xl:w-[70%]">
            <a
              target="_blank"
              href="https://www.momentsbykerricoy.com/"
              className="flex justify-center"
            >
              <button className="w-full flex justify-center font-montserrat font-semibold text-emerald-300 cursor-pointer text-xl hover:scale-105 bg-slate-800 m-4 p-3 rounded-lg">
                <Image
                  src={link}
                  alt="github icon"
                  height={32}
                  width={32}
                  className="pr-2"
                />
                Live Site
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
