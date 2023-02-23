import { pathNameChecker } from "@/utility/pathnameChecker";
import { useRouter } from "next/router";
import React from "react";
import NavLink from "../navlink/NavLink";

type Props = {
  isOpen: boolean;
};

const Sidebar: React.FC<Props> = ({ isOpen }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <aside
      className={`bg-alpha absolute md:hidden w-full h-screen z-0 transition-all ease-in-out duration-300 ${
        !isOpen && "translate-x-full"
      } `}
    >
      <ul className="flex flex-col mt-20 items-end gap-5 mr-7">
        <NavLink
          activeColor="text-white"
          isActive={pathNameChecker(pathname, "/")}
          title="Home"
          href="/"
        />
        <NavLink
          activeColor="text-white"
          isActive={pathNameChecker(pathname, "/browse-by")}
          title="Browse By"
          href="/browse-by"
        />
        <NavLink
          activeColor="text-white"
          isActive={pathNameChecker(pathname, "/stories")}
          title="Stories"
          href="/stories"
        />
        <NavLink
          activeColor="text-white"
          isActive={pathNameChecker(pathname, "/agents")}
          title="Agents"
          href="/agents"
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
