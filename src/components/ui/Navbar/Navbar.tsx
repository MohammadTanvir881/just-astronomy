"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaStar,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaUserAstronaut,
  FaCalendarAlt,
  FaImage,
  FaUsers,
  FaEnvelope,
  FaUserPlus,
} from "react-icons/fa";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  submenu?: {
    name: string;
    href: string;
  }[];
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      name: "About",
      icon: <FaUserAstronaut className="mr-2" />,
      href: "#about",
      submenu: [
        { name: "Our Mission", href: "#mission" },
        { name: "History", href: "#history" },
        { name: "Facilities", href: "#facilities" },
      ],
    },
    {
      name: "Events",
      icon: <FaCalendarAlt className="mr-2" />,
      href: "#events",
      submenu: [
        { name: "Star Parties", href: "#star-parties" },
        { name: "Lectures", href: "#lectures" },
        { name: "Workshops", href: "#workshops" },
      ],
    },
    {
      name: "Gallery",
      icon: <FaImage className="mr-2" />,
      href: "#gallery",
    },
    {
      name: "Team",
      icon: <FaUsers className="mr-2" />,
      href: "#team",
    },
    {
      name: "Contact",
      icon: <FaEnvelope className="mr-2" />,
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <FaStar
              className={`text-amber-400 transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              } group-hover:text-white`}
            />
            <span
              className={`text-white font-bold ml-2 transition-all duration-300 ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            >
              JUST Astronomy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.icon}
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>

                    {openDropdown === item.name && (
                      <div
                        className="absolute left-0  w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-slate-700 z-50 animate-fade-in"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className=" px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-200 flex items-center relative group"
                            >
                              <FaChevronRight className="mr-2 text-xs" />
                              <span className="relative">
                                {subItem.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center relative group"
                  >
                    {item.icon}
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="#join"
              className="ml-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/20 flex items-center"
            >
              <FaUserPlus className="mr-2" />
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-4 sm:px-3 bg-slate-800/95 backdrop-blur-lg border-t border-slate-700">
          {navItems.map((item) => (
            <div key={item.name} className="mb-1">
              {item.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      )
                    }
                    className="w-full text-left text-slate-300 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-between relative group"
                  >
                    <span className="flex items-center relative">
                      {item.icon}
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <div className="ml-8 mt-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-700/30 transition-colors duration-200 flex items-center relative group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <FaChevronRight className="mr-2 text-xs" />
                          <span className="relative">
                            {subItem.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors duration-200 flex items-center relative group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              )}
            </div>
          ))}

          <Link
            href="#join"
            className="mt-4 ml-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-amber-600 hover:to-amber-700 transition-all w-fit flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaUserPlus className="mr-2" />
            Join Our Club
          </Link>
        </div>
      </div>
    </nav>
  );
}
