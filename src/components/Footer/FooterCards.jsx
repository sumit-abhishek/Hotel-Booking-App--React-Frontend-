import React from "react";

const FooterCards = ({ name, data }) => {
  return (
    <ul className={name}>
      {data.map((item, index) => (
        <li key={index}>
          {item.type === "title" ? (
            <h4>{item.text}</h4>
          ) : (
            <a href="#">{item.text}</a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterCards;
