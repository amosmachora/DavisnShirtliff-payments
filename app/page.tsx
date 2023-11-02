import Body from "@/components/Body/Body";
import Navbar from "@/components/Navbar/Navbar";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const userId = searchParams.user_id as string;
  const username = searchParams.username as string;
  const source = searchParams.source as string;

  return (
    <main className="flex min-h-screen flex-col items-center px-[5%] py-[4%]">
      <Navbar username={username} />
      <Body source={source} userId={userId} />
    </main>
  );
}
