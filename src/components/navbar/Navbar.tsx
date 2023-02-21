import { useRouter } from "next/router";
import React, { useState } from "react";
import Hamburger from 'hamburger-react'
import NavLink from "../navlink/NavLink";

const Navbar: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const router = useRouter();
  const pathname = router.pathname

  const pathNameChecker = (pathname: string, href: string) => {
    if (pathname === href) {
      return true;
    }
  };

  return (
    <nav className="flex justify-between items-center px-5 md:px-24 py-5 border-b">
      <div className="font-semibold text-2xl w-full md:w-fit flex justify-between items-center ">
        <div>
        Stey<span className="text-alpha">kesyen</span>
        </div>
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#3252DF" />
      </div>
      <ul className="gap-5 hidden md:flex">
        <NavLink
          isActive={pathNameChecker(pathname, "/")}
          title="Home"
          href="/"
        />
        <NavLink
          isActive={pathNameChecker(pathname, "browse-by")}
          title="Browse By"
          href="/browse-by"
        />
        <NavLink
          isActive={pathNameChecker(pathname, "stories")}
          title="Stories"
          href="/stories"
        />
        <NavLink
          isActive={pathNameChecker(pathname, "agents")}
          title="Agents"
          href="/agents"
        />
      </ul>
    </nav>
  );
};


export default Navbar;
