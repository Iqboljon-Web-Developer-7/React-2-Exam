import React from "react";

// Images
import logo from "@/assets/footer/logo.svg";
import mainLogo from "@/assets/logo.svg";
import twitter from "@/assets/footer/twitter.svg";
import linkedin from "@/assets/footer/linkedin.svg";
import facebook from "@/assets/footer/facebook.svg";
import instagram from "@/assets/footer/instagram.svg";
import { MdOutlineQuestionMark } from "react-icons/md";

const Footer = () => {
  const linkStyle = "hover:underline cursor-pointer";
  return (
    <footer className="bg-[rgb(13,38,18)]">
      <div className="wrapper py-12 w-full flex justify-between flex-col text-center md:flex-row md:text-start gap-12">
        <div className="footer__imgs md:w-1/3 flex flex-col gap-5 items-center md:items-start">
          <img src={logo} alt="website name logo" className="max-w-24" />
          <h1 className="text-2xl text-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-400">
            Start your game <br /> with the best
          </h1>
        </div>
        <div className="w-full flex items-center md:items-start justify-end flex-col md:flex-row gap-12 md:gap-[10%] text-slate-100">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li className={linkStyle}>Gift Card</li>
              <li className={linkStyle}>Mobile App</li>
              <li className={linkStyle}>Shipping & Delivery</li>
              <li className={linkStyle}>Order Pickup</li>
              <li className={linkStyle}>Account Signup</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Help</h2>
            <ul className="space-y-2">
              <li className={linkStyle}>ShopCart Help</li>
              <li className={linkStyle}>Returns</li>
              <li className={linkStyle}>Track Orders</li>
              <li className={linkStyle}>Contact Us</li>
              <li className={linkStyle}>Feedback</li>
              <li className={linkStyle}>Security & Fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <ul className="space-y-2">
              <li className={linkStyle}>News & Blog</li>
              <li className={linkStyle}>Help</li>
              <li className={linkStyle}>Press Center</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="links wrapper flex items-center gap-4">
        <img src={twitter} className="w-7 h-7" alt="twitter icon" />
        <img src={linkedin} className="w-7 h-7" alt="linkedin icon" />
        <img src={facebook} className="w-7 h-7" alt="facebook icon" />
        <img src={instagram} className="w-7 h-7" alt="instagram icon" />
      </div>
      <hr className="border-white my-10 max-w-7xl mx-auto" />
      <div className="subFooter wrapper grid grid-cols-2 gap-y-4 lg:grid-cols-[2fr_3fr_4fr_4fr_5fr] place-items-center pb-10 text-slate-100">
        <img src={mainLogo} className="w-12" alt="website logo" />
        <div className="help flex items-center justify-center gap-2">
          <div className="p-2 bg-slate-800 border-2 border-white flex items-center justify-center rounded-full">
            <MdOutlineQuestionMark />
          </div>
          <p>Help center</p>
        </div>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p className="col-span-2 lg:col-span-1">
          All rights reserved by GameGeek | 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
