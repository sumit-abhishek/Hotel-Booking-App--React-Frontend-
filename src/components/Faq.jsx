import React from "react";
import "../style/faqAccordions.css";
import FaqAccordion from "./FaqAccordion";

const accordianDetails = [
  {
    eventKey: "0",
    title: "How can I modify or cancel my reservation?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    eventKey: "1",
    title: "What payment methods do you accept?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    eventKey: "2",
    title: "Is it safe to book online through your website?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    eventKey: "3",
    title: "Are there any additional fees or hidden charges?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    eventKey: "4",
    title: "How do I know if my booking is confirmed?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Faq = () => {
  return (
    <div className="faq-main">
      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <div className="accordion" id="accordionExample">
          {accordianDetails.map((item) => (
            <FaqAccordion accordionDetails={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
