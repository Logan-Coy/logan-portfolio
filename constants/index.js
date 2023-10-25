import {
  html,
  css,
  javaScript,
  typeScript,
  tailwind,
  react,
  next,
  node,
  s3,
  git,
  photoShop,
  illustrator,
  moments01,
} from "@utils/images";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

export const skillsData = [
  {
    imgSrc: html,
    imgAlt: "html icon",
    skill: "HTML",
  },
  {
    imgSrc: css,
    imgAlt: "css icon",
    skill: "CSS",
  },
  {
    imgSrc: javaScript,
    imgAlt: "javaScript icon",
    skill: "JAVASCRIPT",
  },
  {
    imgSrc: typeScript,
    imgAlt: "typeScript icon",
    skill: "TYPESCRIPT",
  },
  {
    imgSrc: tailwind,
    imgAlt: "tailwind icon",
    skill: "TAILWIND",
  },
  {
    imgSrc: react,
    imgAlt: "react icon",
    skill: "REACT",
  },
  {
    imgSrc: next,
    imgAlt: "next icon",
    skill: "NEXT.js",
  },
  {
    imgSrc: node,
    imgAlt: "node icon",
    skill: "NODE.js",
  },
  {
    imgSrc: s3,
    imgAlt: "s3 icon",
    skill: "AWS-S3",
  },
  {
    imgSrc: git,
    imgAlt: "git icon",
    skill: "GIT",
  },
  {
    imgSrc: photoShop,
    imgAlt: "photoShop icon",
    skill: "PHOTOSHOP",
  },
  {
    imgSrc: illustrator,
    imgAlt: "illustrator icon",
    skill: "ILLUSTRATOR",
  },
];

export const projectData = [
  {
    title: "Moments by Kerri Coy",
    imgSrc: moments01,
    imgHeight: 3393,
    imgWidth: 1407,
    scrollPercent: -78,
    imgAlt: "screenshot of website",
    skills: [
      { icon: react, name: "react icon" },
      { icon: tailwind, name: "tailwind icon" },
      { icon: typeScript, name: "typeScript icon" },
      { icon: s3, name: "s3 icon" },
      { icon: next, name: "next icon" },
      { icon: node, name: "node icon" },
      { icon: git, name: "git icon" },
      { icon: photoShop, name: "photoShop icon" },
    ],
    description: `Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.\n Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Porttitor at sem.\n Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.`,
  },
];
