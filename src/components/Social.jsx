import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaViber,
  FaRegEnvelope,
} from "react-icons/fa";

function Social() {
  return (
    <>
      <div className="socialIcon">
        <FaInstagram />
      </div>
      <div className="socialIcon">
        <FaFacebookSquare />
      </div>
      <div className="socialIcon">
        <FaViber />
      </div>
      <div className="socialIcon">
        <FaRegEnvelope />
      </div>
    </>
  );
}

export default Social;
