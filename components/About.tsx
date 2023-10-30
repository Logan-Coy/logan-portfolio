"use client";
import { useState } from "react";

import { loganHeadshot, githubBlue, linkedinBlue } from "@utils/images";
import Image from "next/image";
import { skillsData } from "@constants";
import { Fragment } from "react";

function About() {
  const [toggle, setToggle] = useState(false);

  return (
    <section id="about" className="bg-stone-100 py-10 flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] md:w-[80%] xl:w-[70%] p-2 xs:p-8 bg-white shadow-md rounded-xl place-items-center ">
        <div className="col-span-1 w-[95%] mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* photo */}
            <div className="m-2 mx-auto my-auto">
              <Image
                src={loganHeadshot}
                alt="photo of Logan"
                height={250}
                width={250}
                className="rounded-full shadow-md border-4 border-slate-800"
              />
            </div>

            {/* contact info */}
            <div className="p-4 m-2 font-montserrat my-auto text-center sm:text-left">
              <p className="pb-4">
                <span className="font-semibold ">Name: </span>
                <span>Logan Coy</span>
              </p>
              <p className="pb-4">
                <span className="font-semibold">Title: </span>
                <span>Full Stack Developer</span>
              </p>
              <p className="pb-4">
                <span className="font-semibold">Email: </span>
                <span>logan@logancoy.dev</span>
              </p>
              <p className="pb-4">
                <span className="font-semibold">Location: </span>
                <span>Akron, OH | USA</span>
              </p>
              <div className="flex justify-center sm:justify-start">
                <div className="cursor-pointer mx-2">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/logan-coy/"
                  >
                    <Image
                      src={linkedinBlue}
                      alt="LinkedIn Icon"
                      height={40}
                      width={40}
                      className="hover:scale-105"
                    />
                  </a>
                </div>
                <div className="cursor-pointer mx-2">
                  <a target="_blank" href="https://github.com/Logan-Coy">
                    <Image
                      src={githubBlue}
                      alt="GitHub Icon"
                      height={40}
                      width={40}
                      className="hover:scale-105"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="m-2 col-span-1 sm:col-span-2 pt-4">
              <h3 className="font-montserrat text-2xl font-semibold text-slate-800">
                Skills
                <div className="border-b-2 border w-[50px] border-emerald-300 rounded-md"></div>
              </h3>
              <div className="font-montserrat my-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 text-[15px] xs:text-[17px]">
                {skillsData.map((data) => (
                  <Fragment key={data.skill}>
                    <div className="flex flex-auto mb-2">
                      <Image
                        src={data.imgSrc}
                        alt={data.imgAlt}
                        height={35}
                        width={35}
                        className="pr-1"
                      />
                      <p className="my-auto">{data.skill}</p>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* about */}
        <div className="p-4 m-2">
          <h2 className="font-montserrat text-slate-800 text-3xl font-semibold">
            About me
            <div className="border-b-4 border w-[110px] border-emerald-300 mt-2 rounded-md"></div>
          </h2>
          <div
            className={`${
              toggle ? "" : "max-h-[200px] overflow-hidden lg:max-h-full"
            } relative font-montserrat text-xl font-light leading-[30px]`}
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            <div
              className={`${
                toggle
                  ? "hidden"
                  : "absolute bottom-0 left-0 w-full h-[75px] bg-gradient-to-b from-transparent to-white lg:hidden"
              }`}
            ></div>
            <p className="mt-4">
              Hi, I&rsquo;m Logan Coy, a self-taught full-stack developer based
              in Akron, Ohio. I blend technical expertise in JavaScript,
              TypeScript, React, and more with a keen eye for design. My passion
              lies in crafting beautiful, functional websites and applications.
            </p>
            <p className="mt-4">
              With a background in marketing and a year of experience in
              front-end development, I bring a unique perspective to my
              projects. I&rsquo;m a quick learner, a creative problem-solver,
              and deeply curious about all things tech.
            </p>
            <p className="mt-4">
              Outside of coding, I&rsquo;m fascinated by the synergy of form and
              function, which extends to my love for cars. I have a knack for
              optimizing solutions and enjoy challenges that push my boundaries.
            </p>
            <p className="mt-4">
              Let&rsquo;s create something exceptional together!
            </p>
          </div>
          <div
            className="flex justify-center pt-4"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          >
            <h4 className="font-montserrat text-lg tracking-wider text-slate-800 lg:hidden">
              {toggle ? "Read Less" : "Read More"}
              <div className="border-b-2 border w-[80%] border-emerald-300 mx-auto rounded-md"></div>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
