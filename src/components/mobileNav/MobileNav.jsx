import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const MobileNav = ({ isOpen, setIsOpen }) => {
  const handleClick = (e) => {
    e = e.target.classList;

    e.contains("close-icon") || e.contains("mobileNav")
      ? setIsOpen(false)
      : null;
  };

  return (
    <div
      className={`mobileNav flex justify-end items-centeer transition-all duration-200 bg-[#00000055] opacity-0 min-h-lvh ${
        isOpen ? "animate-fadeIn" : "animate-fadeOut"
      } fixed z-50`}
      onClick={(e) => handleClick(e)}
    >
      <div className="mobileNav__content px-20 flex justify-center items-center flex-col gap-2 bg-[#e2e8f099] dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
        <NavLink to={"*"}>404</NavLink>
        <NavLink to={"/contact"}>contact</NavLink>
        <span className="absolute inset-[4%_4%_auto_auto] cursor-pointer close-icon">
          X
        </span>
      </div>
    </div>
  );
};

export default memo(MobileNav);
