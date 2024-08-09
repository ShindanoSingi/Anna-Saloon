import React from "react";
import { Link } from "react-router-dom";

function Logo() {
      return (
            <div className="h-12 w-12 rounded-full shadow-yellow glow-border border-primary border flex items-center ">
                  <Link to="/">
                        <img src="/images/logo_no_background.png" alt="logo" />
                  </Link>
            </div>
      );
}

export default Logo;
