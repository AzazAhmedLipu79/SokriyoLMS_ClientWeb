"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { useState } from "react";
import ButtonC from "@/Shared/ButtonC";
import Link from "next/link";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => setIsCollapsed(!isCollapsed);
  const btnColor = "#fc5d8d";

  return (
    <header className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link
              href="#"
              className="font-bold text-xl text-primary animate-pulse"
            >
              <Image src={logo} alt="Logo of Sokriyo.EDU" width={60} />
            </Link>
            <button
              onClick={handleToggle}
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            >
              🎯
            </button>
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <Link
              href="/"
              className="a_nav"
              // className="p-2 lg:px-4 md:mx-2 text-white rounded bg-primary"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="a_nav" // className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Courses
            </Link>

            <Link
              href="#"
              className="a_nav" // className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Guardian Portal
            </Link>

            <Link
              href="#"
              className="a_nav" // className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Scholarship
            </Link>

            {/* <button
              className="btn btn-outline"
              style={{ "--primary-color": "#fc5d8d" }}
            >
              Join Sokriyo
            </button> */}

            <ButtonC
              text={"Join Sokriyo"}
              type="btn-outline"
              theme="primary"
              href="/Auth/Login"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
