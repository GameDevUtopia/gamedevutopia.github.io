import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Follow Us On</h3>
      <a href="https://www.instagram.com/_gamedevutopia_/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <p>GDU</p>
      </a>
      <a href="https://www.linkedin.com/company/gamedevutopia/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
        <p>LinkedIn</p>
      </a>
      <h3 className="mt-3">Our Branches</h3>
      <a href="https://www.instagram.com/gamedevutopia_pict/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <p>GDU PICT</p>
      </a>
      {/* <a href="https://www.instagram.com/_gamedevutopia_/" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <p>GDU IITK</p>
      </a> */}
    </div>
  );
}