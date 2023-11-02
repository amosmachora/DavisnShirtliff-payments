import { customizableFeatures } from "@/utils/utils";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Customizer = ({
  setCustomPrice,
}: {
  setCustomPrice: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  return (
    <div className="mt-10 flex gap-x-10">
      <div className="w-1/2">
        <p className="text-gray-500 text-sm">All Services</p>
        {customizableFeatures.map((feature, i) => (
          <div className="flex items-center justify-between mt-3" key={i}>
            <p className="text-sm">{feature}</p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-3 h-3 ml-2 text-green-400 cursor-pointer"
              onClick={() => {
                if (!selectedFeatures.includes(feature)) {
                  setSelectedFeatures((prev) => {
                    return [...prev, feature];
                  });
                  setCustomPrice((prev) => prev + 10);
                }
              }}
            />
          </div>
        ))}
      </div>
      <div className="bg-gray-500 w-[1px]" />
      <div className="w-1/2">
        <p className="text-gray-500 text-sm">Selected Services</p>
        {selectedFeatures.map((feature, i) => (
          <div className="flex items-center justify-between mt-3" key={i}>
            <p className="text-sm">{feature}</p>
            <FontAwesomeIcon
              icon={faMinus}
              className="w-3 h-3 mr-5 text-orange-400 cursor-pointer"
              onClick={() => {
                setSelectedFeatures((prev) =>
                  prev.filter((item, index) => index !== i)
                );
                setCustomPrice((prev) => (prev !== 0 ? prev - 10 : 0));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
