import Link from 'next/link'
// import { client } from "@/sanity/lib/client";
// import { PROPERTIES_QUERY } from "@/sanity/lib/queries";
import Image from 'next/image'
// import { urlFor } from "@/sanity/lib/image";

// const options = { next: { revalidate: 60 } };

function formatCurrency(amount: number) {
  const thousandsSeparator = ','
  const decimalSeparator = '.'
  const groupedAmount = (amount / 1).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
  return `$${groupedAmount}`
}

export default async function Page() {
  // TODO: Replace with Payload CMS data fetching
  // const properties = await client.fetch(PROPERTIES_QUERY, {}, options);
  // const propertyCount = properties.filter(
  //   (item) => typeof item === "object" && !Array.isArray(item),
  // ).length;
  const properties: any[] = []
  const propertyCount = 0

  return (
    <main className="mx-auto grid grid-cols-1 gap-6 p-12 font-sans w-full">
      <div className="grid grid-cols-9 w-full">
        <div className="col-span-9 h-[400px] flex-col align-center my-auto">
          <div className="mt-[90px]">
            <h3 className="m-auto w-[500px] text-xl text-center">
              AVAILABLE PROPERTIES IN WESTERN AUSTRALIA
            </h3>
            <div className="m-8 h-10">
              <form className="m-auto w-[800px] *:text-xl *:px-3 *:py-2 *:border-b *:bg-zinc-100 *:outline-none">
                <input className="w-[700px]" type="text" placeholder="Search..."></input>
                <input className="" type="submit"></input>
              </form>
              <div className="m-auto mt-8 w-full *:p-3 *:m-1 *:bg-zinc-200 *:text-xl *:rounded text-center">
                <Link href="sorrento">Sorrento</Link>
                <Link href="sorrento">Cottesloe</Link>
                <Link href="sorrento">South-West</Link>
                <Link href="sorrento">Buy</Link>
                <Link href="sorrento">Rent</Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" col-span-1 *:text-lg *:font-regular mx-[10px]">
          <div className="w-full h-[60px] flex">
            <p className="text-zinc-400 border-b border-black mt-auto w-full pb-2">
              {propertyCount} Properties
            </p>
          </div>

          <div className="my-[20px]">
            <p className="text-zinc-400">Filter</p>
            <p>Location</p>
            <p>Bedrooms</p>
            <p>Bathrooms</p>
            <p>Garage</p>
            <p>Land Size</p>
          </div>
          <div className="mt-4 hover:border-zinc-500 text-xs border p-2 rounded text-center transition-all">
            <Link href="google.com" className="">
              List Your Property
            </Link>
          </div>
        </div>
        <div className="col-span-8">
          {/* <h1 className="text-4xl font-bold">Post index</h1> */}
          <ul className="grid grid-cols-1 *:border-t *:border-black">
            {/* TODO: Map over Payload properties here */}
            {properties.map((property) => (
              <li key={property._id} className="">
                <Link
                  className="p-4 hover:text-blue-500 grid grid-cols-8 text-xl font-light"
                  href={`/property/${property?.slug?.current}`}
                >
                  <div className="col-span-3">
                    <p className="font-medium text-2xl">{property?.title}</p>
                    <p className="font-light text-2xl">{property?.suburb}</p>
                    <p className="font-light text-2xl">{property?.nearestCity}</p>
                    <p className="font-light text-xl py-8">{property?.summary}</p>
                    <table>
                      <tbody>
                        <tr>
                          <td className="w-1/2">Location:</td>
                          <td>
                            {property?.suburb}, {property?.state}
                          </td>
                        </tr>
                        <tr>
                          <td>Beds:</td>
                          <td>{property?.bedrooms}</td>
                        </tr>
                        <tr>
                          <td>Baths:</td>
                          <td>{property?.bathrooms}</td>
                        </tr>
                        <tr>
                          <td>Cars:</td>
                          <td>{property?.garage}</td>
                        </tr>
                        <tr>
                          <td>Price:</td>
                          <td>{formatCurrency(property?.price)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-span-5">
                    <Image
                      src={'https://dummyimage.com/2000x1300/dbdbdb/000000&text=placeholder.png'}
                      width={1020}
                      height={680}
                      alt="Property image placeholder"
                    ></Image>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
