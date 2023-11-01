import Body from "@/components/Body/Body";
import Navbar from "@/components/Navbar/Navbar";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const userId = searchParams.user_id;
  const source = searchParams.source;

  console.log({ userId, source });

  return (
    <main className="flex min-h-screen flex-col items-center px-[5%] pt-[4%]">
      <Navbar userId={userId as unknown as string} />
      <Body
        source={source as unknown as string}
        userId={userId as unknown as string}
      />
    </main>
  );
}
