// "use client"
import Image from 'next/image'
// import PageHeader from "../components/PageHeader";
import { usePathname } from 'next/navigation'
// import Carousel from '../../components/Carousel';
// import { client } from "@/sanity/lib/client";
// import { PROPERTY_QUERY } from "@/sanity/lib/queries";
// import { urlFor } from "@/sanity/lib/image";

export default function LeasePage() {
  // TODO: Replace with Payload CMS data fetching and property list
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Lease a Property</h1>
      <p>Show properties for lease here. (Payload integration coming soon.)</p>
    </main>
  )
}
