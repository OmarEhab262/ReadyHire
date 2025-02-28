import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EFF5F1] mt-10 py-10">
      <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 px-6 md:px-16">
        <div>
          <h2 className="font-bold md:text-4xl text-xl  font-young">
            READY <span className="text-[var(--secondary-color)]">HIRE</span>
          </h2>
          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            We form dedicated squads of our top-notch engineers and tech experts
            to build your product up digitally.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl text_secondary">Quick Links</h3>
          <ul className="text-gray-700 flex flex-col gap-3 mt-5 text-lg">
            <li>
              <Link
                to="/hire-tech-team"
                className="hover:text-[var(--secondary-color)] transition"
              >
                Hire Tech Team
              </Link>
            </li>
            <li>
              <Link
                to="/apply-talent"
                className="hover:text-[var(--secondary-color)] transition"
              >
                Apply as a Talent
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl text_secondary">Follow Us</h3>
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
