import React, { useEffect, useState } from "react";

// Components
import { Link } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";

// Images
import websiteLogo from "@/assets/logo.svg";
import uzb from "@/assets/supHeader/uzb.png";
import usa from "@/assets/supHeader/Usa.svg";
import france from "@/assets/supHeader/france.png";
import { CiGlobe } from "react-icons/ci";

// Icons
import { MdPhoneForwarded } from "react-icons/md";

const SupHeader = () => {
  return (
    <header
      className={`header-wrapper bg-[#0D2613] text-slate-200 mx-auto py-4 px-1 xs:px-2 duration-200 backdrop-blur-sm z-20`}
    >
      <div className="wrapper flex justify-between items-center text-sm">
        <div className="header__logo flex items-center justify-center gap-3 lg:gap-8">
          <Link to={"/"}>
            <img src={websiteLogo} alt="website logo" />
          </Link>
          <div className="header__logo--contact hidden sm:flex items-center justify-center gap-3">
            <MdPhoneForwarded className="text-xl" />
            <span>+4904-049-950</span>
          </div>
        </div>
        <div className="header__links md:flex hidden items-center justify-center gap-5">
          <p>Get 50% Off on the Selected items </p>
          <span className="w-[.1rem] self-stretch bg-green-400"></span>
          <p>
            <a href="#">Shop now</a>
          </p>
        </div>

        <div className="header__end flex items-center justify-center gap-4 text-2xl">
          <select className="languages bg-transparent text-sm border-none outline-none">
            <option value="english">English</option>
            <option value="english">France </option>
            <option value="english">Uzb </option>
          </select>
          <p className="flex items-center justify-center text-sm gap-2">
            <CiGlobe className="text-xl" /> Location
          </p>
        </div>
      </div>
    </header>
  );
};

export default SupHeader;
