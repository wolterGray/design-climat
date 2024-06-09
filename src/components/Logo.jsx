import React from "react";
import {Link} from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="max-w-40">
      <img src="/img/DCLogo.webp" alt="Design Climat" />
    </Link>
  );
}

export default Logo;
