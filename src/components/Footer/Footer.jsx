import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-[100px] ">
      <div className="max-w-[1444px] mx-auto grid md:grid-cols-3 gap-8 mb-[60px]">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo2.png" height={40} width={40} alt="logo" />
            <span className="font-bold text-[32px] leading-12 text-white">Velvet Glow</span>
          </div>
          <p className="mt-6 text-sm leading-6 max-w-[400px]">
            At Northbound we specialize in aligning people strategies with
            business goals. Whether you’re growing, restructuring, or adapting
            to new challenges, we help ensure your organization has the right
            talent, in the right place, at the right time.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold mb-8">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Our model</li>
            <li>Talent and Workforce Strategy</li>
            <li>Optimize your Talent processes</li>
            <li>Interim Consultants</li>
            <li>Advisory Services</li>
            <li>Recruitment and Executive Search</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-8">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Consulting Services</li>
            <li>About us</li>
            <li>Knowledge bank</li>
          </ul>
          <div className="mt-4">
            <a
              href="#"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#007AB9] text-white"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1444px] mx-auto mt-10 border-t border-white pt-4 text-sm">
        2025 Copyright Benderim | All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
