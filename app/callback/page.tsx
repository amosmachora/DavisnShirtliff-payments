import Loading from "@/components/Loading/Loading";

const page = ({
    searchParams
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const userId = searchParams.user_id as string;
  const from = searchParams.from as string;

  return (
    <div>
        <Loading from={from}/>
    </div>
  )
}

export default page