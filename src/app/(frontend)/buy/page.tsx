// import { PROPERTIES_QUERY } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client";
import Link from 'next/link'
import Image from 'next/image'
// const options = { next: { revalidate: 60 } };

export default function BuyPage() {
  // TODO: Replace with Payload CMS data fetching and property list
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Buy a Property</h1>
      <p>Show properties for sale here. (Payload integration coming soon.)</p>
    </main>
  )
}
