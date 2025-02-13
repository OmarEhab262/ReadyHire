import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#EFF5F1] mt-10">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-5 p-10 ">
        <div>
          <p className="font-bold text-3xl">
            READY <span className="text-[var(--secondary-color)]">HIRE</span>
          </p>
          <p className="text-gray-600 mt-5 text-[15px]">
            We form dedicated squads of our top-notch engineers and tech experts
            to build your product up digitally
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl text_secondary">Quick Links</h3>
          <div className="list-disc list-inside text-gray-700 flex flex-col gap-2 mt-5">
            <p>Hire Tech Team</p>
            <p>Apply as a talent</p>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl text_secondary">Social Media</h3>
          <div className="flex gap-5 mt-5">
            <Link
              to={"http://www.x.com"}
              target="_blank"
              className="bg_secondary rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <X color="white" />
            </Link>
            <Link
              to={"http://www.Instagram.com"}
              target="_blank"
              className="bg_secondary rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <Instagram color="white" />
            </Link>
            <Link
              to={"http://www.Linkedin.com"}
              target="_blank"
              className="bg_secondary rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <Linkedin color="transparent" fill="white" />
            </Link>
            <Link
              to={"http://www.Facebook.com"}
              target="_blank"
              className="bg_secondary rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <Facebook color="transparent" fill="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
