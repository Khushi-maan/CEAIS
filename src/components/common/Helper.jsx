import { ABOUT, FAQ, HOME, HOWITWORKS } from "../../utils/const";
import {
  Algorithms,
  Facebook,
  Instagram,
  Progressbar,
  Settings,
  Tweeter,
} from "./Icon";
import group from "../../assets/images/png/group-meeting.png";
import tech from "../../assets/images/png/tech.png";

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

export const FOOTER_LINK = [
  { svg: <Instagram /> },
  { svg: <Facebook /> },
  { svg: <Tweeter /> },
];
export const FAQ_DATA = [
  {
    title: "How long does AI integration take?",
    description:
      "This can take anywhere from a few days to a couple of weeks. If pre-built solutions like OpenAI’s GPT or simple APIs are used, integration can be quicker, focusing primarily on embedding, testing, and adjusting for specific use cases.",
  },
  {
    title: "What kind of support do you provide?",
    description:
      "This can take anywhere from a few days to a couple of weeks. If pre-built solutions like OpenAI’s GPT or simple APIs are used, integration can be quicker, focusing primarily on embedding, testing, and adjusting for specific use cases.",
  },
  {
    title: "Can I customize the AI solutions?",
    description:
      "This can take anywhere from a few days to a couple of weeks. If pre-built solutions like OpenAI’s GPT or simple APIs are used, integration can be quicker, focusing primarily on embedding, testing, and adjusting for specific use cases.",
  },
  {
    title: "How can I contact customer service?",
    description:
      "This can take anywhere from a few days to a couple of weeks. If pre-built solutions like OpenAI’s GPT or simple APIs are used, integration can be quicker, focusing primarily on embedding, testing, and adjusting for specific use cases.",
  },
  {
    title: "What payment methods are accepted?",
    description:
      "This can take anywhere from a few days to a couple of weeks. If pre-built solutions like OpenAI’s GPT or simple APIs are used, integration can be quicker, focusing primarily on embedding, testing, and adjusting for specific use cases.",
  },
  {
    title: "How do I create an account?",
    description:
      "This can take anywhere from a few days to a couple of weeks. If pre-built solutions like OpenAI’s GPT or simple APIs are used, integration can be quicker, focusing primarily on embedding, testing, and adjusting for specific use cases.",
  },
];
export const PRICING_DATA = [
  {
    price: "$199/m",
    title: "For Startup Package",
    button: "Choose Startup Package",
    feature: [
      { name: "AI Integration" },
      { name: "Basic Analytics" },
      { name: "24/7 Support" },
    ],
  },
  {
    price: "$499/m",
    title: "For Growth Package",
    button: "Get Growth Package",
    feature: [
      { name: "Advanced Analytics" },
      { name: "AI-Powered Insights" },
      { name: "Customized Solutions" },
    ],
  },
  {
    price: "$999/m",
    title: "For Enterprise Package",
    button: "Contact Sales",
    feature: [
      { name: "Dedicated AI Specialist" },
      { name: "Full Customization" },
      { name: "Priority Support" },
    ],
  },
];

export const SLIDER_DATA = [
  {
    img: group,
    title: "Boosting Efficiency for InnovateCorp",
    description:
      "Discover how our AI solutions helped InnovateCorp reduce operational costs by 20% while increasing output.",
    link: "Read Full Case Study",
  },
  {
    img: tech,
    title: "Transforming Customer Service for Techify",
    description:
      "Techify adopted our AI-driven chatbot to reduce response time by 50%, dramatically improving customer satisfaction.",
    link: "Learn More",
  },
  {
    img: tech,
    title: "Transforming Customer Service for Techify",
    description:
      "Techify adopted our AI-driven chatbot to reduce response time by 50%, dramatically improving customer satisfaction.",
    link: "Learn More",
  },
];
