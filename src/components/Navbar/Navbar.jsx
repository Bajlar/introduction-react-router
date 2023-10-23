import React, { useEffect, useState } from "react";
import NavItem from "../NavItem/NavItem";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("navItems.json")
      .then((res) => res.json())
      .then((data) => setNavItems(data));
  }, []);

  return (
    <div className="md:flex items-center">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="pt-2 text-2xl md:hidden hover:cursor-pointer"
      >
        <span>{isOpen ? <FaBars /> : <FaX /> }</span>
      </div>
      <div
        className={`md:flex gap-6 text-lg font-semibold ${
          isOpen
            ? "hidden"
            : "block bg-gray-100 md:bg-white w-1/2 md:mt-0 mt-2 md:p-0 p-2 rounded-xl"
        }`}
      >
        {navItems.map((item) => (
          <NavItem key={item.id} item={item}></NavItem>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
