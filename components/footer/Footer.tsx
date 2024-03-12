import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Contacts</p>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              SampleMail@gmail.com
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <a href="tel:+919971790511">+91 99717 90511</a>
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <a href="tel:+917503630301">+91 75036 30301</a>
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              <a href="tel:+918447769796">+91 84477 69796</a>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
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
              Privacy Policy
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              User Agreement
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              Cookie Policy
            </li>
            <li className="text-white text-md pb-2 font-semibold cursor-pointer hover:text-blue-600">
              Copyright Policy
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-3xl pb-6">
              SAF <span className="text-blue-600">Media</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl text-white cursor-pointer hover:text-yellow-600  hover:p-0 hover:rounded-sm" />
              <FaTwitter className="text-2xl cursor-pointer text-white hover:text-blue-600  hover:p-0 hover:rounded-sm" />
              <FaFacebook className="text-2xl cursor-pointer text-white hover:text-blue-600  hover:p-0 hover:rounded-sm" />
              <FaLinkedin className="text-2xl cursor-pointer text-white hover:text-blue-600  hover:p-0 hover:rounded-sm" />
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5">
        <h1 className="text-white font-semibold">
          &copy; 2024 SAF Media. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
