"use client";

import { fetchCountries } from "@/fetchers/fetchFunctions";
import { Country } from "@/types/globaltypes";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mpesa from "../public/mpesa.png";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import axios from "axios";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { hardCodedFeatures } from "@/utils/utils";

function formatNumber(arg0: string) {
  if (arg0?.toString().startsWith("+254")) {
    return arg0.toString().replace("+254", "0");
  }

  return arg0?.toString();
}

export const PaymentRight = ({
  plan,
  userId,
  source,
}: {
  plan: "basic" | "premium" | "custom";
  userId: string;
  source: string;
}) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mpesa">("card");
  const [email, setEmail] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
    tx_ref: Date.now().toString(),
    amount: 100,
    currency: "KES",
    payment_options: paymentMethod === "card" ? "card" : "card,mobilemoney",
    payment_plan: "3341",
    customer: {
      email: email!,
      phone_number: formatNumber(phoneNumber!),
      name: "john doe",
    },
    meta: { consumer_id: "7898", consumer_mac: "kjs9s8ss7dd" },
    customizations: {
      title: `${plan} ${source}`,
      description: `Payment for ${source} ${plan}`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  useEffect(() => {
    fetchCountries()
      .then((res) => setCountries(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <form
      className="py-[5%] px-[5%] md:w-1/2 shadow"
      onSubmit={(e) => {
        e.preventDefault();
        // handleFlutterPayment({
        //   callback: (response) => {
        //     console.log(response);
        //     closePaymentModal(); // this will close the modal programmatically
        //   },
        //   onClose: () => {},
        // });

        const formData = new FormData(e.target as HTMLFormElement);

        const initialRequestData = {
          user_id: userId,
          email: formData.get("email"),
          country: formData.get("country"),
          phone: formatNumber(formData.get("phone") as unknown as string),
          sub_type: plan.charAt(0) + plan.substring(1),
          price:
            plan !== "custom"
              ? hardCodedFeatures.find(
                  (feature) => feature.service === source.toLocaleLowerCase()
                )
              : 50,
          sub_prod:
            plan === "custom"
              ? ["SolarCalc", "PumpCalc"]
              : [
                  source
                    .split("-")
                    .map(
                      (str) => str.charAt(0).toUpperCase() + str.substring(1)
                    )
                    .join(""),
                ],
          from: source,
          // payment_method: paymentMethod, "card" | "mpesa"
        };

        setIsLoading(true);

        fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(initialRequestData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            window.open(data.payment_link, "_blank");
          })
          .catch((error) => console.error("Error:", error))
          .finally(() => setIsLoading(false));
      }}
    >
      <p className="font-semibold">Please input your information</p>
      <div className="w-full">
        <p className="text-gray-500 text-sm mt-5">Email</p>
        <input
          type="email"
          className="w-full py-2 px-3 rounded-md border shadow mt-1"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremail@somedomain.com"
          required
        />
      </div>
      <div className="w-full">
        <p className="text-gray-500 text-sm mt-5">Country</p>
        <select
          className="w-full py-2 px-3 rounded-md border shadow mt-1"
          name="country"
          defaultValue={"Kenya"}
        >
          {countries
            ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((country) => (
              <option value={country.name.common} key={country.name.common}>
                {country.name.common}
              </option>
            ))}
        </select>
      </div>
      <div>
        <p className="text-gray-500 text-sm mt-5">Input your phone number</p>
        <input
          type="tel"
          className="w-full py-2 px-3 rounded-md border shadow mt-1"
          placeholder="e.g 0737592044"
          required
          name="phone"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <p className="font-semibold my-5">Payment method</p>
        <div className="flex gap-x-4">
          <div
            className={`p-5 rounded w-1/3 cursor-pointer hover:bg-gray-100 transition-all ${
              paymentMethod === "card"
                ? "outline-blue-500 outline"
                : "border border-black"
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <FontAwesomeIcon icon={faCreditCard} />
            <p className="font-semibold">Card</p>
          </div>
          <div
            className={`p-5 rounded w-1/3 cursor-pointer hover:bg-gray-100 transition-all ${
              paymentMethod === "mpesa"
                ? "outline-blue-500 outline"
                : "border border-black"
            }`}
            onClick={() => setPaymentMethod("mpesa")}
          >
            <Image src={mpesa} className="h-5 w-5" alt={"M-pesa"} />
            <p className="font-semibold">M-pesa</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center mt-5">
          <input type="checkbox" defaultChecked className="h-5 w-5" />
          <p className="text-sm">You agree to the terms of service</p>
        </div>
        <button
          type="submit"
          className="mt-5 text-center text-white bg-blue-500 text-sm w-full rounded py-3 hover:bg-opacity-70 transition-all"
        >
          {isLoading ? (
            <FontAwesomeIcon icon={faCircleNotch} spin />
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
      <p className="text-gray-500 mt-10 md:hidden">
        Powered by <span className="font-semibold">D&S payments</span> | Terms
        Privacy
      </p>
    </form>
  );
};

// 4187427415564246;
// cvv 828;
// date 09 / 32;
