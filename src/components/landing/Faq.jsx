import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import msg from "~/img/msgIcon.png";
import Image from "next/image";

const Faq = () => {
  const FaqData = [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
  ];

  return (
    <div className="bg-[rgba(0, 6, 69, 0.03)] py-20">
      <div className="container mx-auto text-center" role="region" aria-label="Frequently Asked Questions section">
        <Image src={msg} alt="Icon representing FAQs" width={50}  className="mx-auto" />
        <h2 className="font-semibold text-2xl md:text-3xl py-3 ">Frequently Asked Questions</h2>
        <h5 className="text-[#828282] text-sm md:text-lg pb-4 md:pb-10">Use customer data to build great and solid product experiences that convert.</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
          {FaqData.map((item, index) => (
            <Accordion key={index} type="single" collapsible role="listitem">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger aria-controls={`content-${index}`} aria-expanded="false">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent id={`content-${index}`} aria-labelledby={`item-${index}`} role="region">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
