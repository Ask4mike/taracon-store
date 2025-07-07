import { useState } from "react";
import Link from "next/link";
import { routes } from "../config/constants";
import Image from "next/image";
import TLogo from "../../public/TLogo.png";
import { IconMenuDeep, IconSearch } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { assets } from "@/public/assets";
import { useAppContext } from "@/app/context/AppContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, router } = useAppContext();


  const logout = async () => {
    setUser(null);
    router.push(routes.homepage);
  };

  return (
    <nav className="border-b border-gray-300 bg-white relative transition-all shadow-md">
      <div className="container flex items-center justify-between">
        <Link href={routes.homepage}>
          <Image
            className=""
            src={TLogo}
            width={90}
            height={90}
            alt="This is the logo of Taracon Store"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 ml-auto">
          <Link href={routes.products}>All Products</Link>
          <Link href={routes.homepage} className="block">
            Contact
          </Link>
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
            <input
              className="py-3 w-[350px] bg-transparent outline-none placeholder-gray-500"
              type="text"
              placeholder="Search products"
            />
            <IconSearch className="text-black" size={18} />
          </div>
          <div className="relative cursor-pointer">
            <IconShoppingCart size={23} className="text-[#137184]" />
            <button className="absolute -top-2 -right-2 text-xs text-white bg-accent w-[18px] h-[18px] rounded-full">
              0
            </button>
          </div>
          {!user ? (
            <button
              onClick={() => setShowUserLogin(true)}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-[#07A0C3] transition text-white rounded-full"
            >
              Login
            </button>
          ) : (
            <div className="relative group">
              <Image
                src={assets.profile_icon}
                className="w-10"
                alt="this is the profile picture of the user"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-[#137184] py-2.5 w-32 rounded-md text-sm z-40">
                <li
                  onClick={() => router.push(routes.myOrders)}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Animated Hamburger Menu Button for Mobile*/}
        <div className="flex flex-row-reverse items-center">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
          >
            <div
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              {open ? <IconX /> : <IconMenuDeep size={25} />}
            </div>
          </button>
          {/* Cart in Mobile Menu */}
          <div className="relative cursor-pointer mr-5 sm:hidden">
            <IconShoppingCart size={25} className="text-[#137184]" />
            <span className="absolute -top-2 -right-2 text-xs text-white bg-accent w-[20px] h-[20px] rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
        {/* Backdrop Overlay */}
        <div
          className={`${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          } fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ease-in-out z-40 md:hidden`}
          onClick={() => setOpen(false)}
        />

        {/* Mobile Menu - Full screen overlay */}
        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } fixed top-0 left-0 w-full h-full bg-white flex flex-col md:hidden transition-all duration-500 ease-in-out z-50`}
        >
          {/* Menu Header with Close Button */}
          <div className="relative p-5 border-b border-gray-200">
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <IconX
                className="absolute left-[28.9rem] bottom-3 border rounded-sm tex-center"
                size={25}
              />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex flex-col justify-center items-center px-8 space-y-8 my-6">
            <Link
              href={routes.homepage}
              className="font-medium text-gray-800 hover:text-primary transition-colors transform hover:scale-105 duration-200"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href={routes.products}
              className="font-medium text-gray-800 hover:text-primary transition-colors transform hover:scale-105 duration-200"
              onClick={() => setOpen(false)}
            >
              All Products
            </Link>
            {user && (
              <Link
                href={routes.homepage}
                className="font-medium text-gray-800 hover:text-primary transition-colors transform hover:scale-105 duration-200"
                onClick={() => setOpen(false)}
              >
                My Orders
              </Link>
            )}
            <Link
              href={routes.homepage}
              className="font-medium text-gray-800 hover:text-primary transition-colors transform hover:scale-105 duration-200"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            {/* Login/Logout Button */}
            {!user ? (
              <button
                onClick={() => {
                  setOpen(false);
                  setShowUserLogin(true);
                }}
                className="cursor-pointer px-8 py-3 bg-primary hover:bg-[#07A0C3] transition text-white rounded-full  font-medium transform hover:scale-105 duration-200"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="cursor-pointer px-8 py-3 bg-primary hover:bg-[#07A0C3] transition text-white rounded-full  font-medium transform hover:scale-105 duration-200"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
