import { useState } from "react";
import { FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow fixed w-full z-50">
      <div className="max-w-[1440px] px-[21px] mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
            <img src="/logo.png" height={40} width={40} alt="logo" />
            <span className="font-bold text-[32px] leading-12 text-primary">Velvet Glow</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-[50px] text-base-content">
            <a href="#" className="hover:text-primary font-medium text-base leading-6">Home</a>
            <a href="#" className="hover:text-primary font-medium text-base leading-6">Shop</a>
            <a href="#" className="hover:text-primary font-medium text-base leading-6">Product</a>
            
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-primary flex items-center cursor-pointer font-medium text-base leading-6"
              >
                Blog
                <FaChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-8 left-0 bg-base-100 shadow-md rounded-md py-2 w-40">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Latest Posts</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tech News</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tutorials</a>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-primary font-medium text-base leading-6">Contact Us</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-5 text-base-content">
            <div className="border-[2px] cursor-pointer hover:text-primary border-gray-100 rounded-full p-2 text-[#333333] flex justify-center items-center">
                <RiSearchLine  className="w-6 h-6" />
            </div>
            <div className="border-[2px] cursor-pointer hover:text-primary border-gray-100 rounded-full p-2 text-[#333333] flex justify-center items-center">
              <HiOutlineShoppingBag className="w-6 h-6 cursor-pointer hover:text-primary" />
            </div>
            <div className="border-[2px] cursor-pointer hover:text-primary border-gray-100 rounded-full p-2 text-[#333333] flex justify-center items-center">
              <FaRegUser className="w-6 h-6 cursor-pointer hover:text-primary" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 shadow-md px-4 pt-2 pb-4 space-y-2 text-base-content">
          <a href="#" className="block hover:text-primary font-medium text-base leading-6">Home</a>
          <a href="#" className="block hover:text-primary font-medium text-base leading-6">Shop</a>
          <a href="#" className="block hover:text-primary font-medium text-base leading-6">Product</a>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full text-left hover:text-primary flex items-center font-medium text-base leading-6"
          >
            Blog <FaChevronDown className="ml-1 w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className="ml-4 space-y-1">
              <a href="#" className="block hover:text-primary">Latest Posts</a>
              <a href="#" className="block hover:text-primary">Tech News</a>
              <a href="#" className="block hover:text-primary">Tutorials</a>
            </div>
          )}
          <a href="#" className="block hover:text-primary font-medium text-base leading-6">Contact Us</a>

          <div className="flex space-x-4 sm:space-x-5 pt-2">
            <div className="border-[2px] cursor-pointer hover:text-primary border-gray-100 rounded-full p-2 text-[#333333] flex justify-center items-center">
                <RiSearchLine  className="w-6 h-6" />
            </div>
            <div className="border-[2px] cursor-pointer hover:text-primary border-gray-100 rounded-full p-2 text-[#333333] flex justify-center items-center">
              <HiOutlineShoppingBag className="w-6 h-6 cursor-pointer hover:text-primary" />
            </div>
            <div className="border-[2px] cursor-pointer hover:text-primary border-gray-100 rounded-full p-2 text-[#333333] flex justify-center items-center">
              <FaRegUser className="w-6 h-6 cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
