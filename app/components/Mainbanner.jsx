import Image from "next/image";
import { assets } from "@/public/assets";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { routes } from "@/app/config/constants";

export default function MainBanner() {
  const router = useRouter();

  return (
    <div className="relative">
      <Image
        src={assets.main_banner_bg}
        alt="This is the main banner of the hero section"
        className="w-full hidden md:block rounded-2xl"
      />
      <Image
        src={assets.main_banner_bg_sm}
        alt="This is the main banner of the hero section for small screens"
        className="w-full md:hidden rounded-2xl"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-[25rem] md:max-w-[30rem]  leading-tight lg:leading-15">
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        <div className="flex items-center mt-6 font-medium">
          <Link
            href={routes.products}
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-[#07A0C3] transition rounded text-white cursor-pointer"
          >
            Shop now
            <Image
              src={assets.white_arrow_icon}
              alt="this is arrow icon"
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>
          <Link
            href={routes.products}
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer"
          >
            Explore Deals
            <Image
              src={assets.black_arrow_icon}
              alt="this is arrow icon"
              className="transition-all duration-500 ease-out group-hover:translate-x-3 group-hover:opacity-80"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
