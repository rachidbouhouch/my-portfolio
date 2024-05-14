import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import resumePdf from "../assets/RACHID_BOUHOUCH_FULLSTACK.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50 text-gray-100">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              to="hero"
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleClose}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">Your Company</span>
              <h1 className="cursor-pointer text-[17px] text-white font-bold">Rvchidsenpai<span className="text-yellow-200">.dev</span>
        </h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 cursor-pointer">
            <Link
              to="about"
              smooth={true}
              offset={100}
              duration={500}
              onClick={handleClose}
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
              Contact
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={resumePdf}
              target="_blank"
              className="text-sm font-semibold leading-6"
            >
              Resume
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-divBg px-6 py-6 sm:max-w-sm sm:ring-1 text-gray-100 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <div className="flex lg:flex-1">
                <a href="#hero" className="-m-1.5 p-1.5" onClick={handleClose}>
                  <span className="sr-only">Your Company</span>
                  <h1 className="cursor-pointer text-[17px] text-white font-bold">rvchidsenpai<span className="text-yellow-200">.dev</span>
                  </h1>
                </a>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-color"
                    onClick={handleClose}
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-color"
                    onClick={handleClose}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-color"
                    onClick={handleClose}
                  >
                    Contact
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href={resumePdf}
                    target="_blank"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-color"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
