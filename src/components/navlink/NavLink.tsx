import Link from 'next/link';
import React from 'react'

type TNavLinkProps = {
    title: string;
    isActive: boolean | undefined;
    href: string;
  };

const NavLink = ({ title, isActive, href }: TNavLinkProps) => {
    return (
      <li className={`${isActive ? "text-alpha" : "text-gamma"} hover:text-alpha`}>
        <Link href={href}>{title}</Link>
      </li>
    );
  };
export default NavLink