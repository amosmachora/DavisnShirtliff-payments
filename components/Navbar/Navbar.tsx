"use client";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.scss";
import Images from "@/constants/Images";

const Navbar = ({  username }: { username: string }) => {
  return (
    <nav className="flex justify-between w-full">
      <Link href="/">
        <Image
          src={Images.logo}
          alt="Davis and ShirtLiff logo"
          width={170}
          />
      </Link>
      <div className="flex">
        <h2 className="text-lg">
          Hello, <span className="text-blueCustom font-bold">{username}</span>
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
