import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";
import img from "../../assets/icons/Logo/Logo.svg";
import apple from "../../assets/images/apple.png";
import google from "../../assets/images/google.png";
const Footer = () => {
  return (
    <footer className="bg-[#EFF5F1] p-10">
      <div className="">
        <div className="top flex justify-start items-center  ">
          <img src={img} alt="" className="-ml-4" />
          <h2 className="font-bold md:text-2xl text-xl  font-young">
            READY <span className="text_secondary">HIRE</span>
          </h2>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-5 ">
          <div className="md:w-1/2 w-full">
            <p className="text-md text-gray-500 mt-5">
              We assemble dedicated teams of highly skilled engineers and tech
              experts to bring your vision to life. From innovative software
              solutions to seamless user experiences, we ensure your product is
              built with precision, efficiency, and cutting-edge technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-3 sm:gap-x-5 mt-5 max-w-xs sm:max-w-md ">
            {/* App Store Button */}
            <button className="bg-black p-3 flex items-center gap-2 h-[55px] sm:gap-3 md:w-[190px] w-[140px] rounded-lg text-white transition-all shadow-md hover:opacity-85">
              <img
                src={apple}
                alt="Apple Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <div className="text-left leading-tight">
                <p className="text-[10px] sm:text-[11px] font-medium tracking-wide">
                  Download on the
                </p>
                <p className="text-base sm:text-lg font-semibold">App Store</p>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="bg-black p-3 flex items-center gap-2 h-[55px] sm:gap-3 md:w-[190px] w-[140px] rounded-lg text-white transition-all shadow-md hover:opacity-85">
              <img
                src={google}
                alt="Google Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <div className="text-left leading-tight">
                <p className="text-[10px] sm:text-[11px] font-medium tracking-wide">
                  Download on the
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  Google Play
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-5 mt-5">
          <Link
            to={"/about"}
            className="text-lg text-gray-700 mt-5 transition-colors hover:text-[#1971c2] hover:underline "
          >
            About Us
          </Link>
          <Link
            to={"/contact"}
            className="text-lg text-gray-700 mt-5 transition-colors hover:text-[#1971c2] hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="h-[1px] bg-gray-500 w-[99%] rounded-lg my-3"></div>
      <div className="flex justify-between items-center flex-wrap gap-5 mt-5">
        <p className="text-gray-500 text-md text-center">
          Copyright © 2025. All rights reserved.
        </p>
        <div>
          <div className="flex gap-4 mt-5">
            <Link
              to="http://www.x.com"
              target="_blank"
              className="bg_secondary rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
            >
              <X color="white" />
            </Link>
            <Link
              to="http://www.instagram.com"
              target="_blank"
              className="bg_secondary rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
            >
              <Instagram color="white" />
            </Link>
            <Link
              to="http://www.linkedin.com"
              target="_blank"
              className="bg_secondary rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
            >
              <Linkedin color="transparent" fill="white" />
            </Link>
            <Link
              to="http://www.facebook.com"
              target="_blank"
              className="bg_secondary rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition"
            >
              <Facebook color="transparent" fill="white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
