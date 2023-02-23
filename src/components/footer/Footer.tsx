import NavLink from "../navlink/NavLink";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-between py-10 md:px-24 px-5 space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="font-semibold text-2xl md:text-3xl w-full md:w-fit flex justify-between items-center ">
            <div>
              Stey<span className="text-alpha">kesyen</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-10 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide text-gamma font-semibold ">
              For Beginners
            </h3>
            <ul className="space-y-1 font-thin">
              <NavLink href="#" title="New Account" color="text-sigma" />
              <NavLink
                href="#"
                title="Start Booking a Room"
                color="text-sigma"
              />
              <NavLink href="#" title="Use Payments" color="text-sigma" />
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide text-gamma font-semibold ">
              Explore Us
            </h3>
            <ul className="space-y-1 font-thin">
              <NavLink href="#" title="Our Careers" color="text-sigma" />
              <NavLink href="#" title="Privacy" color="text-sigma" />
              <NavLink href="#" title="Terms & Condition" color="text-sigma" />
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide text-gamma font-semibold ">
              Connect Us
            </h3>
            <ul className="space-y-1 font-thin">
              <NavLink
                href="#"
                title="support@steykesyen.id"
                color="text-sigma"
              />
              <NavLink href="#" title="021 - 2208 - 1996" color="text-sigma" />
              <NavLink
                href="#"
                title="Steykesyen, Palmerah, Jakarta"
                color="text-sigma"
              />
            </ul>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-sigma">
        Copyright 2023 • All rights reserved • Steykesyen
      </div>
    </footer>
  );
};

export default Footer;
