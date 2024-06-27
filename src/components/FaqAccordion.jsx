import React from "react";
import Accordion from "react-bootstrap/Accordion";
const FaqAccordion = ({ accordionDetails }) => {
  return (
    <Accordion defaultActiveKey={accordionDetails.eventKey}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{accordionDetails.title}</Accordion.Header>
        <Accordion.Body>{accordionDetails.content}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqAccordion;
