import React from "react";
import { navLinks } from "../constants";

const Sidebar = () => {
  return (
    <div className="hidden sm:visible h-[calc(100vh-80px)] sm:flex flex-row bg-primary">
      <div className="flex flex-col w-56 bg-primary  overflow-hidden">
        <ul className="flex flex-col py-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-poppins font-medium cursor-pointer text-[16px] rounded-lg feature-card"
            >
              <a
                href={`#${nav.id}`}
                className="flex flex-row justify-center items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-dimWhite"
              >
                <span>{nav.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
