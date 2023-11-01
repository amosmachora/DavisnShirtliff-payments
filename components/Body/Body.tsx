"use client";
import { Images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import "./Body.scss";

const features2 = [
  {
    service: "solar-calc",
    basic: ["Access to SUNFLO systems", "3 trials for other sizing tools"],
    premium: [
      "AC Borehole Pumps",
      "Eazy AC Sizing",
      "SUNFLO Systems",
      "Solarization (Electric to Solar)",
      "Solar Pumps",
      "Projects",
      "Customers"
    ],
    custom: ["Solar Calc Premium", "Pump Calc Premium"],
  },
  {
    service: "pump-calc",
    basic: ["Access to Pumps Catalogue", "3 trials for other tools"],
    premium: [
      "Pump Sizing",
      "DRO configuratior",
    ],
    custom: ["Solar Calc Premium", "Pump Calc Premium"],
  }
]

const Body = ({ source, userId }: { source: string; userId: string }) => {
  return (
    <div className="">
      <h2 className="text-[3rem] font-semibold text-center mt-10">
        Discover a plan tailored to your specific requirements
      </h2>
      <div className="flex gap-4 justify-center w-full mt-14">
        <div className="hover:shadow-sm cursor-pointer ease-in-out duration-300 rounded-md border-2 capitalize border-gray-300 shadow w-1/3 p-[5%] flex flex-col justify-between">
          <div className="flex flex-col place-items-start gap-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {source.replace("-", " ")} Basic
            </h5>
            <p className="text-3xl font-extrabold my-2">$0</p>
            <p className="text-md font-medium">Your current plan</p>
            <ul className="list-none flex flex-col gap-2 mt-10">
              {features2.filter(item => item.service === source)[0].basic.map((item, index) => (
                <li key={index} className="flex place-items-center gap-x-3">
                  <Image src={Images.check} height={18} alt="check-icon" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            className="mt-5 text-white font-extrabold bg-blueCustom flex rounded py-3 px-4 justify-between hover:bg-opacity-70 transition-all text-sm duration-300 items-center"
            href={"https://back.com"}
          >
            <p>Get Started</p>
            <Image src={Images.next} alt="next-icon" width={25} />
          </a>
        </div>
        <div className="relative hover:shadow-sm cursor-pointer ease-in-out duration-300 rounded-md border-2 border-gray-300 shadow w-1/3 p-[5%] flex flex-col justify-between">
          <div className="rounded-full w-1/2 bg-black text-white font-bold absolute top-0 -translate-y-1/2 py-3 left-1/2 text-center -translate-x-1/2">
            Most Popular
          </div>
          <div className="flex flex-col place-items-start gap-2">
            <h5 className="text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
              {source.replace("-", " ")} Premium
            </h5>
            <p className="text-3xl font-extrabold my-2">
              $ 10
              <span className="text-sm font-light"> per user / per month</span>
            </p>
            <p className="text-md font-medium">Everything premium</p>
            <ul className="list-none flex flex-col gap-2 mt-10">
              {features2.filter(item => item.service === source)[0].premium.map((item, index) => (
                <li key={index} className="flex place-items-center gap-3">
                  <Image src={Images.check} height={18} alt="check-icon" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="mt-5 text-white font-extrabold bg-blueCustom flex rounded py-3 px-4 justify-between hover:bg-opacity-70 transition-all text-sm duration-300 items-center"
            href={`/subscribe?plan=premium&user_id=${userId}&source=${source}`}
          >
            <p>Get Started</p>
            <Image src={Images.next} alt="next-icon" width={25} />
          </Link>
        </div>
        <div className="hover:shadow-sm cursor-pointer ease-in-out duration-300 rounded-md border-2 border-gray-300 shadow w-1/3 p-[5%] flex flex-col justify-between">
          <div className="flex flex-col place-items-start gap-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Custom
            </h5>
            <p className="text-3xl font-extrabold my-2">
              $ 10 - 20
              <span className="text-sm font-light"> per user / per month</span>
            </p>
            <p className="text-md font-medium">
              Need more than {source.replace("-", " ")}?
            </p>
            <ul className="list-none flex flex-col gap-2 mt-10">
              {features2.filter(item => item.service === source)[0].custom.map((item, index) => (
                <li key={index} className="flex place-items-center gap-3">
                  <Image src={Images.check} height={18} alt="check-icon" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="mt-5 text-white font-extrabold bg-blueCustom flex rounded py-3 px-4 justify-between hover:bg-opacity-70 transition-all text-sm duration-300 items-center"
            href={`/subscribe?plan=custom&user_id=${userId}&source=${source}`}
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
