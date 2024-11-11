import { ABOUT, FAQ, HOME, HOWITWORKS } from "../../utils/const";
import { Algorithms, Progressbar, Settings } from "./Icon";

export const SEARCH_ITEMS = [
  { title: "All Sources" },
  { title: "Earnings" },
  { title: "Filings" },
  { title: "Web" },
  { title: "Deep Web" },
];

export const NAV_BAR = [
  {
    title: "Home",
    link: HOME,
  },
  {
    title: "About",
    link: ABOUT,
  },
  {
    title: "How it Works",
    link: HOWITWORKS,
  },
  {
    title: "FAQ’s",
    link: FAQ,
  },
];

export const FEATURE = [
  {
    svg: <Settings />,
    title: "Seamless Integration",
    description:
      "Our AI tools easily integrate with your existing systems, so you can start benefiting immediately without downtime.",
  },
  {
    svg: <Progressbar />,
    title: "Scalable Solutions",
    description:
      "From startups to enterprises, our AI scales with your business to meet your ever-evolving needs.",
  },
  {
    svg: <Algorithms />,
    title: "Cutting-Edge Algorithms",
    description:
      "We utilize state-of-the-art AI algorithms designed to offer unparalleled efficiency and insight into your business operations.",
  },
];
