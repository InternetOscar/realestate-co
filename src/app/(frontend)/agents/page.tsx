// "use client"
import Image from 'next/image'
// import PageHeader from "../components/PageHeader";
import { usePathname } from 'next/navigation'
// import Carousel from '../../components/Carousel';
// import { client } from "@/sanity/lib/client";
// import { PROPERTY_QUERY } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function PropertyPage({ params: paramsPromise }: Args) {
  const { slug } = await paramsPromise
  // const property = await client.fetch(PROPERTY_QUERY, { slug });
  // console.log(property);
  return (
    <div className="mx-5 grid grid-cols-4 pb-24 font-serif  rounded-xl">
      <div className="mx-auto *:text-center col-span-4 py-32 flex-col">
        <h1 className="text-9xl font-serif italic">Page Name</h1>
        {/* <h2 className='text-9xl font-serif'>Dalkeith</h2> */}
      </div>
    </div>
  )
}
