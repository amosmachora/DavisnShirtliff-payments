"use client";

import { Images } from "@/constants";
import {
  basicFeatures,
  basicPrice,
  premiumFeatures,
  premiumPrice,
} from "@/utils/utils";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { Customizer } from "./Customizer";

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


export const PaymentLeft = ({
  plan,
  source,
}: {
  plan: "basic" | "premium" | "custom";
  source: string
}) => {
  const [features, setFeatures] = useState<null | string[]>(
    plan === "basic"
      ? basicFeatures
      : plan === "premium"
        ? premiumFeatures
        : null
  );

  const [customPrice, setCustomPrice] = useState(0);

  return (
    <div className="py-[5%] md:w-1/2 relative flex flex-col justify-between">
      <div>
        <div className="flex justify-start">
          <Image
            src={Images.logo}
            alt="Davis and ShirtLiff logo"
            width={170}

          />
        </div>
        <div className="mt-5">
          <p className="text-gray-600 font-semibold capitalize">{plan}</p>
          <p className="text-4xl font-semibold">
            {!features
              ? `$${customPrice}`
              : `${plan === "basic"
                ? basicPrice
                : plan === "premium"
                  ? premiumPrice
                  : ""
              }
              .00`}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <p>Subscribe to the Davis and ShirtLiff Premium Subscription!</p>
        <p>The premium subscription comes with the following features</p>
      </div>
      <div className={`${plan === "custom" ? "w-full" : "w-3/4"} ml-auto mt-5`}>
        <p className="font-semibold">
          {plan === "custom" ? "Select Features" : "Features"}
        </p>
        {plan === "custom" ? (
          <Customizer setCustomPrice={setCustomPrice} />
        ) : (
          features2.filter(item => item.service === source)[0].premium.map((feature, i) => (
            <div className="flex items-center mt-3" key={i}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-10 text-green-400"
              />
              <p className="text-sm">{feature}</p>
            </div>
          ))
        )}
      </div>
      <p className="text-gray-500 mt-auto hidden md:block">
        Powered by <span className="font-semibold">D&S payments</span> | Terms
        Privacy
      </p>
    </div>
  );
};
