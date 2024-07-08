import React from "react";
import "../style/footer.css";
import FooterCards from "./FooterCards";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const exploreData = [
  { type: "title", text: "Explore" },
  { type: "link", text: "Lansdowne" },
  { type: "link", text: "Chakrata" },
  { type: "link", text: "Kanatal" },
  { type: "link", text: "Mussoriee" },
  { type: "link", text: "Harshil" },
  { type: "link", text: "Chopta" },
];
const bookingData = [
  { type: "title", text: "Booking" },
  { type: "link", text: "Book Now" },
  { type: "link", text: "Deals and Reward" },
  { type: "link", text: "Sign In/Register" },
  { type: "link", text: "My Account" },
];
const companyData = [
  { type: "title", text: "Company" },
  { type: "link", text: "Our Story" },
  { type: "link", text: "Our Partners" },
  { type: "link", text: "Press" },
];
const supportData = [
  { type: "title", text: "Support" },
  { type: "link", text: "Contact Us" },
  { type: "link", text: "Live Chat" },
  { type: "link", text: "FAQ" },
  { type: "link", text: "Report an issue" },
];
const socialData = [
  { type: "icon", text: <FontAwesomeIcon icon={faInstagram} size="xl" /> },
  {
    type: "icon",
    text: <FontAwesomeIcon icon={faFacebook} size="xl" />,
  },
  { type: "icon", text: <FontAwesomeIcon icon={faPinterest} size="xl" /> },
];
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-top">
          <FooterCards name={"explore"} data={exploreData} />
          <FooterCards name={"booking"} data={bookingData} />
          <FooterCards name={"company"} data={companyData} />
          <FooterCards name={"support"} data={supportData} />
          <FooterCards name={"footer-social-links"} data={socialData} />
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>
              <i className="fa-regular fa-copyright"></i>
            </span>
            <p>2024 Eureka. All Right reserved</p>
          </div>
          <div className="footer-bottom-right">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span>
            <span>
              <Link to="/admin">
                <a href="#">Admin</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
