"use client";
import React from "react";
import "./Body.scss";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import { Images } from "@/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";

const features = {
  basic: ["Access to SUNFLO systems", "3 trials for other sizing tools"],
  premium: [
    "Unlimited access to sizing tools",
    "Product Inventory and Pricing",
    "Pump efficiency insights",
    "System curve analysis",
    "Wiring diagrams Included",
  ],
  custom: [
    "Access to sizing solutions",
    "Custom Logo Option",
    "Live chart support",
    "Personalized Selection",
    "Discounted pricing option",
  ],
};

const Body = () => {
  return (
    <div className="">
      <h2 className="text-[3rem] font-semibold text-center mt-10">
        Discover a plan tailored to your specific requirements
      </h2>
      <div className="flex gap-4 justify-center w-full mt-14">
        <div className="hover:shadow-sm cursor-pointer ease-in-out duration-300 rounded-md border-2 border-gray-300 shadow w-1/3 p-[5%]">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Basic
          </h5>
          <p className="text-3xl font-extrabold my-2">$0</p>
          <p className="text-md font-medium">Your current plan</p>
          <ul className="list-none flex flex-col gap-2 mt-10">
            {features.basic.map((item, index) => (
              <li key={index} className="flex place-items-center gap-x-3">
                <Image src={Images.check} height={18} alt="check-icon" /> {item}
              </li>
            ))}
          </ul>
          <a
            className="mt-5 text-white font-extrabold bg-blue flex rounded py-3 px-4 justify-between hover:bg-opacity-70 transition-all text-sm duration-300 items-center"
            href={"https://back.com"}
          >
            <p>Get Started</p>
            <Image src={Images.next} alt="next-icon" width={25} />
          </a>
        </div>
        <div className="relative hover:shadow-sm cursor-pointer ease-in-out duration-300 rounded-md border-2 border-gray-300 shadow w-1/3 p-[5%]">
          <div className="rounded-full w-1/2 bg-black text-white font-bold absolute top-0 -translate-y-1/2 py-3 left-1/2 text-center -translate-x-1/2">
            Most Popular
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Premium
          </h5>
          <p className="text-3xl font-extrabold my-2">
            $ 10
            <span className="text-sm font-light"> per user / per month</span>
          </p>
          <p className="text-md font-medium">Everything premium</p>
          <ul className="list-none flex flex-col gap-2 mt-10">
            {features.premium.map((item, index) => (
              <li key={index} className="flex place-items-center gap-3">
                <Image src={Images.check} height={18} alt="check-icon" /> {item}
              </li>
            ))}
          </ul>
          <Link
            className="mt-5 text-white font-extrabold bg-blue flex rounded py-3 px-4 justify-between hover:bg-opacity-70 transition-all text-sm duration-300 items-center"
            href={"/subscribe?plan=premium"}
          >
            <p>Get Started</p>
            <Image src={Images.next} alt="next-icon" width={25} />
          </Link>
        </div>
        <div className="hover:shadow-sm cursor-pointer ease-in-out duration-300 rounded-md border-2 border-gray-300 shadow w-1/3 p-[5%]">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Custom
          </h5>
          <p className="text-3xl font-extrabold my-2">
            $ ??
            <span className="text-sm font-light"> per user / per month</span>
          </p>
          <p className="text-md font-medium">tailored subscription</p>
          <ul className="list-none flex flex-col gap-2 mt-10">
            {features.custom.map((item, index) => (
              <li key={index} className="flex place-items-center gap-3">
                <Image src={Images.check} height={18} alt="check-icon" /> {item}
              </li>
            ))}
          </ul>
          <Link
            className="mt-5 text-white font-extrabold bg-blue flex rounded py-3 px-4 justify-between hover:bg-opacity-70 transition-all text-sm duration-300 items-center"
            href={"/subscribe?plan=custom"}
          >
            <p>Get Started</p>
            <Image src={Images.next} alt="next-icon" width={25} />
          </Link>
        </div>
      </div>
      <p className="text-gray-500 mt-12 hidden md:block">
        Powered by <span className="font-semibold">D&S payments</span> | Terms
        Privacy
      </p>
    </div>
  );
};

export default Body;
