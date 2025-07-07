import Image from "next/image";
import { assets } from "@/public/assets";

export default function MainBanner () {
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
        </div>
    )
}