"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaStar,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaUserPlus,
} from "react-icons/fa";
import { useUser } from "@/context/userContext";
import { logoutUser } from "@/services/AuthServices";

interface NavItem {
  name: string;
  href: string;
  submenu?: {
    name: string;
    href: string;
  }[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { user, setIsLoading } = useUser();
  console.log(user);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setIsLoading(true);
  };

  const navItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Activities",
      href: "#about",
      submenu: [
        { name: "School Programme", href: "#mission" },
        { name: "Online Webiner", href: "#history" },
      ],
    },
    {
      name: "Megazine",
      href: "#events",
    },
    // Admin-only item
    ...(user?.role === "admin"
      ? [
          {
            name: "Dashboard",
            href: "/dashboard",
          },
        ]
      : []),
    {
      name: "Library",
      href: "#gallery",
    },
    {
      name: "Shop",
      href: "#gallery",
    },
    {
      name: "Executives",
      href: "#team",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

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
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left side */}
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

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        className={`${
                          isActive(item.href)
                            ? "text-amber-400"
                            : "text-slate-300 hover:text-white"
                        } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <span className="relative">
                          {item.name}
                          <span
                            className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                              isActive(item.href)
                                ? "bg-amber-400 w-full"
                                : "bg-white"
                            } transition-all duration-300 group-hover:w-full`}
                          ></span>
                        </span>
                        <FaChevronDown className="ml-1 text-xs inline" />
                      </button>

                      {openDropdown === item.name && (
                        <div
                          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 ring-1 ring-slate-700 z-50"
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="py-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`px-4 py-2 text-sm ${
                                  isActive(subItem.href)
                                    ? "text-amber-400"
                                    : "text-slate-300 hover:text-white"
                                } hover:bg-slate-700 transition-colors duration-200 flex items-center`}
                              >
                                <FaChevronRight className="mr-2 text-xs" />
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${
                        isActive(item.href)
                          ? "text-amber-400"
                          : "text-slate-300 hover:text-white"
                      } px-3 py-2 rounded-md text-sm font-medium relative group`}
                    >
                      <span className="relative">
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                            isActive(item.href)
                              ? "bg-amber-400 w-full"
                              : "bg-white"
                          } transition-all duration-300 group-hover:w-full`}
                        ></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Right side */}
          <div className="hidden md:block">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/20 flex items-center"
              >
                <FaUserPlus className="mr-2" />
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-amber-500/20 flex items-center"
              >
                <FaUserPlus className="mr-2" />
                Login
              </Link>
            )}
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
                    className={`w-full text-left ${
                      isActive(item.href)
                        ? "text-amber-400"
                        : "text-slate-300 hover:text-white"
                    } px-3 py-2 rounded-md text-base font-medium flex items-center justify-between`}
                  >
                    <span>{item.name}</span>
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
                          className={`px-3 py-2 rounded-md text-sm ${
                            isActive(subItem.href)
                              ? "text-amber-400"
                              : "text-slate-300 hover:text-white"
                          } hover:bg-slate-700/30 transition-colors duration-200 flex items-center`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <FaChevronRight className="mr-2 text-xs" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? "text-amber-400"
                      : "text-slate-300 hover:text-white"
                  } hover:bg-slate-700/50 transition-colors duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/login"
            className="mt-4 ml-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-amber-600 hover:to-amber-700 transition-all w-fit flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaUserPlus className="mr-2" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
