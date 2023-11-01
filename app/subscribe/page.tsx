import { PaymentLeft } from "@/components/PaymentLeft";
import { PaymentRight } from "@/components/PaymentRight";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const plan = searchParams.plan;
  const user_id = searchParams.user_id;
  const source = searchParams.source;

  return (
    <main
      className={`${poppins.className} flex px-[5%] flex-col md:flex-row md:h-screen`}
    >
      <PaymentLeft plan={plan as unknown as "basic"} />
      <PaymentRight
        plan={plan as unknown as "basic"}
        userId={user_id as unknown as string}
        source={source as unknown as ""}
      />
    </main>
  );
};

export default Page;
