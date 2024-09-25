import React, { useEffect, useState } from "react";

// Components
import { Link } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";

// Images
import websiteLogo from "@/assets/header/game.svg";

// Icons
import { FaOpencart } from "react-icons/fa";
import { RiMenu5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Header = () => {
  // Mobile header
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  // on scroll get fixed
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setIsFixed(true);
      } else if (window.scrollY < 40) {
        setIsFixed(false);
      }
    });
  }, []);
  return (
    <header
      className={`header-wrapper text-sm sticky top-0 mx-auto py-4 px-1 xs:px-2 duration-200 ${
        isFixed
          ? "animate-fade-in-top-1 bg-[#ffffff] text-slate-800 shadow-md"
          : "z-20 bg-white py-5 md:py-9"
      } backdrop-blur-sm z-20`}
    >
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="wrapper flex justify-between items-center gap-3">
        <div className="heaer__logo">
          <Link to={"/"}>
            <img
              src={websiteLogo}
              alt="website logo"
              className="fill-orange-400"
            />
          </Link>
        </div>
        <div className="header__links md:flex hidden items-center justify-center gap-5">
          <Link to={"/"}>Categories</Link>
          <Link to={"/"}>Brands</Link>
          <Link to={"/"}>What’s new</Link>
          <Link to={"/"}>Sales</Link>
          <Link to={"/"}>Help</Link>
          <Link to={"/products"}>Products</Link>
        </div>

        <div className="header__icons flex items-center justify-center gap-3 lg:gap-6 text-xl sm:text-2xl">
          <Link>
            <IoSearchOutline />
          </Link>
          <Link>
            <FiUser />
          </Link>
          <Link to={"/cart"} className="animate-fade-in-top-2 relative">
            <FaOpencart /> {/* {cart.length > 0 && ( */}
            <span className="absolute text-slate-200 inset-[-.3rem_-.3rem_auto_auto] h-4 min-w-4 text-[.8rem] rounded-full flex items-center justify-center bg-slate-500">
              {/* {cart?.length} */}2
            </span>
            {/* )} */}
          </Link>
          <RiMenu5Line
            className="md:hidden text-2xl sm:text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
