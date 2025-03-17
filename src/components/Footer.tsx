import Image from "next/image";
import { assets } from "../../public/Assets/assets";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Link href="/" id="logo" className="text-white text-3xl font-extrabold">
        {" "}
        GrindFirst !
      </Link>
      <p className="text-sm text-white ">
        {" "}
        All right reserved. Copyright @GrindFirst
      </p>
      <div className="flex">
        <Image src={assets.facebook_icon} alt="" width={40} />
        <Image src={assets.twitter_icon} alt="" width={40} />
        <Image src={assets.googleplus_icon} alt="" width={40} />
      </div>
    </div>
  );
}
