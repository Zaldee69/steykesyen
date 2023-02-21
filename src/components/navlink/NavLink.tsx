import Link from "next/link";
import React from "react";

type TNavLinkProps = {
  title: string;
  isActive: boolean | undefined;
  href: string;
  activeColor: string;
};

const NavLink = ({ title, isActive, href, activeColor }: TNavLinkProps) => {
  return (
    <li className={`${isActive ? activeColor : "text-gamma"} hover:text-alpha`}>
      <Link href={href}>{title}</Link>
    </li>
  );
};
export default NavLink;
