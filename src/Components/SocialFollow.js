import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faTwitter,
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
      {/* <a href="https://www.youtube.com/@gamedevutopia3007/"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <p>Youtube</p>
      </a> */}
      <h3 className="mt-3">Our Branches</h3>
      <a href="https://www.instagram.com/gamedevutopia/"
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