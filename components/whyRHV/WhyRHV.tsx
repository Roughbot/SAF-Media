import React from "react";
import "./styles.scss";

const WhyRHV = () => {
  return (
    <div className="bg-white">
      <div>
        <div className="text-center text-black text-4xl sm:text-6xl py-10 sm:py-20">
          Why Choose Right Hand Venture?
        </div>
        <div>
          <div className="buttons p-10 text-black">
            <div className="buttons ">
              <button className="neumorphic">
                <i className="fa-solid fa-file-signature"></i>
              </button>
              <p className="text-base md:text-lg text-center">
                Strict Non Disclosure Agreement. We take your privacy and
                security very seriously.
              </p>
            </div>
            <div className="buttons">
              <button className="neumorphic">
                <i className="fa-regular fa-handshake"></i>
              </button>
              <p className="text-base md:text-lg text-center">
                Dedicated Account Manager for single point of contact.
              </p>
            </div>
            <div className="buttons">
              <button className="neumorphic">
                <i className="fa-solid fa-trophy"></i>
              </button>
              <p className="text-base md:text-lg text-center">
                Industry Leading Quality Assurance Process.
              </p>
            </div>
            <div className="buttons">
              <button className="neumorphic">
                <i className="fa-solid fa-file-contract"></i>
              </button>
              <p className="text-base md:text-lg text-center">
                Flexible contracts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRHV;
