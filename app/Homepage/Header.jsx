import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/TLogo.png";
import { ROUTES } from "@/app/config/constants";

export default function Header() {
  return (
    <header>
      <Link href={ROUTES.homepage}>
        <Image
          src={Logo}
          alt="This is the logo of Taracon Store"
          width={100}
          height={100}
        />
      </Link>
      <nav className="">
        <Link href={ROUTES.products} className="underline text-blue-300">
          Products
        </Link>
      </nav>
    </header>
  );
}
