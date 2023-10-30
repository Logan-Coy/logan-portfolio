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
      { icon: next, name: "next icon" },
      { icon: react, name: "react icon" },
      { icon: tailwind, name: "tailwind icon" },
      { icon: typeScript, name: "typeScript icon" },
      { icon: s3, name: "s3 icon" },
      { icon: node, name: "node icon" },
      { icon: git, name: "git icon" },
      { icon: photoShop, name: "photoShop icon" },
    ],
    description: `I created a dynamic single-page website to beautifully showcase my mother's photography business. Using AWS S3 bucket, the site hosts a collection of her high-resolution photographs, with an aim to attract and convert potential clients.\n The website features an interactive contact form enabling potential clients to seamlessly connect with her. Submissions are forwarded directly to her inbox, ensuring swift and efficient communication. The site is designed with responsiveness in mind, offering an optimal viewing experience across devices.\n Additionally, I implemented a secure admin page with NextAuth.js, allowing my mother to effortlessly manage her portfolio by uploading new photos and removing outdated ones from the S3 bucket. This project not only demonstrates my technical proficiency but also my background in Marketing by designing an engaging platform to attract clients.`,
  },
];
