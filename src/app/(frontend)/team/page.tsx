// import { AGENTS_QUERY } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";
// import { urlForImage } from '../lib/sanity'
import Link from 'next/link'
import Image from 'next/image'
// const options = { next: { revalidate: 60 } };

export default async function Team() {
  // TODO: Replace with Payload CMS data fetching
  // const agents = await client.fetch(AGENTS_QUERY, {}, options);
  const agents: any[] = []
  return (
    <>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {agents.map((agent) => (
          <li key={agent._id}>
            <Link className="block p-4 hover:text-blue-500" href={`/team/${agent?.slug?.current}`}>
              {agent?.name}
            </Link>
            <Image
              src={'https://dummyimage.com/100x200/dbdbdb/000000&text=avatar'}
              width={100}
              height={200}
              alt="Agent avatar"
            />
          </li>
        ))}
      </ul>
    </>
  )
}
