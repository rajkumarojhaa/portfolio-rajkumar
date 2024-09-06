import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Job Scan",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Vite",
      "MongoDB",
      "Render",
      "React-router-dom",
      "Redux",
    ],
    image: {
      LIGHT: "/images/projects/jobScan.png",
      DARK: "/images/projects/jobScan2.png",
    },
  },
  {
    index: 1,
    title: "LMS ",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/lms1.png",
      DARK: "/images/projects/lms2.png",
    },
  },
  {
    index: 2,
    title: "Tools Hub",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel"],
    image: {
      LIGHT: "/images/projects/toolsHub.png",
      DARK: "/images/projects/toolsHub1.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Job Scan",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/projects/jobScan.png", "/images/projects/jobScan2.png"],
    description:
      "Job Scan is a MERN stack-based web application designed for students and recruiters. Students can register or log in to search for jobs and apply, while recruiters can create accounts to post job listings and manage their postings efficiently. The platform streamlines the job search and hiring process, offering a user-friendly interface for both students and recruiters.",
    sourceCodeHref: "https://github.com/rajkumarojhaa/Job-Scan",
    liveWebsiteHref: "https://job-scan-frontend.onrender.com/",
  },
  {
    name: "LMS",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/lms1.png",
      "/images/projects/lms2.png",
      "/images/projects/lms3.png",
    ],
    description:
      "LMS (Learning Management System) is a React-based application that enables students to register or log in, take a psychometric test, view their results, and access a wide range of teaching videos and study documents. The platform also features an admin panel, allowing administrators to manage all aspects of the system, including adding students and trainers, ensuring a comprehensive learning experience.",
    sourceCodeHref: "https://github.com/rajkumarojhaa/lmsfrontend",
    liveWebsiteHref: "https://lmsfrontend-rouge.vercel.app/",
  },
  {
    name: "Tools Hub",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/toolsHub.png",
      "/images/projects/toolsHub1.png",
      "/images/projects/toolsHub2.png",
    ],
    description:
      "Tools Hub is a Next.js application that offers a collection of practical tools, including a calculator, color converter, image converter, password generator, QR code generator, and keyboard tester. Designed for convenience, the app provides users with a versatile set of utilities all in one place.",
    sourceCodeHref: "https://github.com/rajkumarojhaa/ToolsHub",
    liveWebsiteHref: "https://tools-hub-seven.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.png",
      "/images/projects/portfolioLight.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/rajkumarojhaa/portfolio-raj",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Weather App",
    favicon: "/images/projects/logos/weather.ico",
    imageUrl: [
      "/images/projects/weather1.png",
      "/images/projects/weather2.png",
    ],
    description:
      "Stay updated with the latest weather conditions with our sleek and intuitive Weather App. Featuring a dynamic background that changes based on current weather conditions, the app provides real-time weather forecasts for any city and state. It includes a search function with suggestions.",
    sourceCodeHref: "https://github.com/rajkumarojhaa/Weather-React",
    liveWebsiteHref: "https://weather-react-azure.vercel.app/",
  },
];
