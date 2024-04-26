import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import BackgroundWave from "../backgroundWave/BackgroundWave";

const Footer = () => {
  return (
    <div className="bg-gray-900 relative">
      <BackgroundWave />
      <div className="z-1 relative h-1/2 w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 flex-col justify-around items-start p-10">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              Right Hand <span className="text-blue-600">Venture</span>
            </p>
            <div className="flex gap-6 pb-5">
              <Link
                href="https://www.instagram.com/safmediagroup/"
                target="_blank"
              >
                <FaInstagram className="text-2xl text-white cursor-pointer hover:text-yellow-600  hover:p-0 hover:rounded-sm" />
              </Link>
              <Link href="https://twitter.com/SAFMediaGroup" target="_blank">
                <FaTwitter className="text-2xl cursor-pointer text-white hover:text-blue-600  hover:p-0 hover:rounded-sm" />
              </Link>
              <Link
                href="https://www.facebook.com/people/SAF-MEDIA-GROUP/61556903258323/"
                target="_blank"
              >
                <FaFacebook className="text-2xl cursor-pointer text-white hover:text-blue-600  hover:p-0 hover:rounded-sm" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/saf-media-group/"
                target="_blank"
              >
                <FaLinkedin className="text-2xl cursor-pointer text-white hover:text-blue-600  hover:p-0 hover:rounded-sm" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="p-5 ">
          <ul className="lg:pl-10">
            <p className="text-white font-bold text-2xl pb-4">Site Map</p>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <Link href="/whatwedo">What We Do</Link>
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">
              Privacy & Terms
            </p>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <Link href="/privacy" target="_blank">
                Privacy Policy
              </Link>
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <Link href="/terms" target="_black">
                {" "}
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Contacts</p>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <a href="mailto:Admin@righthandventure.com">
                support@righthandventure.com
              </a>
            </li>

            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <a href="tel:+918447769796">+91 88827 86072</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="z-10 flex flex-col justify-center items-center text-center p-5">
        <h1 className="text-white font-semibold">
          &copy; 2024 Right Hand Venture. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
