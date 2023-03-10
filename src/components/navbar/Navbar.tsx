import { pathNameChecker } from "@/utility/pathnameChecker";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import NavLink from "../navlink/NavLink";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="border-b">
      <div className="max-w-screen-xl flex justify-between mx-auto items-center px-5 md:px-24 py-5 ">
        <div className="font-semibold text-2xl md:w-fit flex w-full justify-between items-center ">
          <div>
            Stey<span className="text-alpha">kesyen</span>
          </div>
          <div className="md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              color={isOpen ? "#fff" : "#3252DF"}
            />
          </div>
        </div>
        <ul className="gap-5 hidden md:flex">
          <NavLink
            activeColor="text-alpha"
            isActive={pathNameChecker(pathname, "/")}
            title="Home"
            href="/"
          />
          <NavLink
            activeColor="text-alpha"
            isActive={pathNameChecker(pathname, "browse-by")}
            title="Browse By"
            href="/browse-by"
          />
          <NavLink
            activeColor="text-alpha"
            isActive={pathNameChecker(pathname, "stories")}
            title="Stories"
            href="/stories"
          />
          <NavLink
            activeColor="text-alpha"
            isActive={pathNameChecker(pathname, "agents")}
            title="Agents"
            href="/agents"
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
