"use client";

import { Images } from "@/constants";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Customizer } from "./Customizer";
import { hardCodedFeatures } from "@/utils/utils";

export const PaymentLeft = ({
  plan,
  source,
}: {
  plan: "basic" | "premium" | "custom";
  source: "solar-calc" | "pump-calc";
}) => {
  const [featureData, setFeatureData] = useState<{
    service: string;
    basic: string[];
    premium: string[];
    custom: string[];
    price: number;
  } | null>();

  useEffect(() => {
    setFeatureData(
      hardCodedFeatures.find((feature) => feature.service === source)
    );
  }, []);

  const [customPrice, setCustomPrice] = useState(0);

  return (
    <div className="py-[5%] md:w-1/2 relative flex flex-col justify-between">
      <div>
        <div className="flex justify-start">
          <Image src={Images.logo} alt="Davis and ShirtLiff logo" width={170} />
        </div>
        <div className="mt-5">
          <p className="text-gray-600 font-semibold capitalize">
            {source.replace("-", " ")} {plan}
          </p>
          <p className="text-4xl font-semibold">
            {plan === "custom" ? `$${customPrice}` : featureData?.price} USD
          </p>
        </div>
      </div>
      {/* <div className="mt-6">
        <p>Subscribe to the Davis and ShirtLiff {plan} Subscription!</p>
        <p>The {plan} subscription comes with the following features</p>
      </div> */}
      <div className={`${plan === "custom" ? "w-full" : "w-3/4"} ml-auto mt-5`}>
        <p className="font-semibold">
          {plan === "custom" ? "Select Features" : "Features"}
        </p>
        {plan === "custom" ? (
          <Customizer setCustomPrice={setCustomPrice} />
        ) : (
          featureData?.[plan].map((feature, i) => (
            <div className="flex items-center mt-3" key={i}>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="w-5 h-5 mr-5 text-green-400"
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
