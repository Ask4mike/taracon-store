import Link from "next/link";
import {ROUTES} from "@/app/config/constants";

export default function Header() {
  return (
    <header>
      <h1 className="">This is the header of the application</h1>
      <nav className="flex gap-4">
        <Link href={ROUTES.homepage} className="underline text-blue-300">
          Home
        </Link>
        <Link href={ROUTES.products} className="underline text-blue-300">
          Products
        </Link>
      </nav>
    </header>
  );
}
