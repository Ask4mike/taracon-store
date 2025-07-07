import { useState } from "react";
import Link from "next/link";
import { routes } from "../config/constants";
import Image from "next/image";
import TLogo from "../../public/TLogo.png";
import { IconMenuDeep, IconSearch } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import { useAppContext } from "@/app/context/AppContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useAppContext();

  return (
    <nav className="flex items-center justify-between px-5 md:px-16 lg:px-24 xl:px-32 border-b border-gray-300 bg-white relative transition-all shadow-md">
      <Link href={routes.homepage}>
        <Image
          className=""
          src={TLogo}
          width={110}
          height={110}
          alt="This is the logo of Taracon Store"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
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
            3
          </button>
        </div>

        <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-[#07A0C3] transition text-white rounded-full">
          Login
        </button>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <IconMenuDeep size={29} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <Link
          href={routes.homepage}
          className="block"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          href={routes.products}
          className="block"
          onClick={() => setOpen(false)}
        >
          All Products
        </Link>
        {user && (
          <Link
            href={routes.homepage}
            className="block"
            onClick={() => setOpen(false)}
          >
            My Orders
          </Link>
        )}
        <Link
          href={routes.homepage}
          className="block"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>

        {!user ? (
          <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-[#07A0C3] transition text-white rounded-full text-sm">
            Login
          </button>
        ) : (
          <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-[#07A0C3] transition text-white rounded-full text-sm">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
