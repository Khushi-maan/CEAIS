import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const faqData = [
  {
    id: 1,
    question: "What is Material Tailwind?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    id: 2,
    question: "How to use Material Tailwind?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    id: 3,
    question: "What can I do with Material Tailwind?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const handleOpen = (id) => setOpenId(openId === id ? null : id);

  return (
    <>
      {faqData.map((item) => (
        <Accordion
          key={item.id}
          open={openId === item.id}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader onClick={() => handleOpen(item.id)}>
            {item.question}
          </AccordionHeader>
          <AccordionBody>{item.answer}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default Faq;
