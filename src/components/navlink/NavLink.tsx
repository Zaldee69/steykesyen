import Link from "next/link";
import React from "react";

type TNavLinkProps = {
  title: string;
  isActive?: boolean | undefined;
  href: string;
  activeColor?: string;
  color?: string;
};

const NavLink = ({
  title,
  isActive,
  href,
  activeColor,
  color,
}: TNavLinkProps) => {
  return (
    <li
      className={`${
        isActive ? activeColor : color ? color : "text-gamma"
      } hover:text-alpha`}
    >
      <Link href={href}>{title}</Link>
    </li>
  );
};
export default NavLink;
