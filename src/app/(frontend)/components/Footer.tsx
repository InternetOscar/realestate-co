'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface FooterLink {
  id: number
  url: string
  newTab: boolean
  text: string
  social?: string
}

interface CategoryLink {
  id: string
  attributes: {
    name: string
    slug: string
  }
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname()
  return (
    <li className="flex">
      <Link href={url}>{text}</Link>
    </li>
  )
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link href={`/${attributes.slug}`} className="">
        {attributes.name}
      </Link>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="py-6 bg-white grid grid-cols-5 pt-32 gap-[40px] px-[40px] font-sans">
      <div className="border-t border-black">
        <p className="uppercase font-light my-5">social</p>
        <ul className="*:text-2xl *:font-light ">
          <li>
            <Link href={'https://instagram.com/oscar.dobsonbrown'} className="hover:underline">
              Instagram
            </Link>
          </li>
          <li>
            <Link href={'https://pinterest.com'} className="hover:underline">
              Pinterest
            </Link>
          </li>

          <li>
            <Link href={'https://tiktok.com'} className="hover:underline">
              TikTok
            </Link>
          </li>
          <li>
            <Link href={'https://linkedin.com/id/oscardobsonbrown'} className="hover:underline">
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href={'https://facebook.com'} className="hover:underline">
              Facebook
            </Link>
          </li>
          <li>
            <Link href={'https://threads.com/oscar.dobsonbrown'} className="hover:underline">
              Threads
            </Link>
          </li>
          <li>
            <Link href={'https://x.com/'} className="hover:underline">
              X (formerly twitter)
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-black">
        <p className="uppercase font-light my-5">about us</p>
        <ul className="*:text-2xl *:font-light">
          <li>
            <Link href={'/team'} className="hover:underline">
              Our Team
            </Link>
          </li>
          <li>
            <Link href={'/giving-back'} className="hover:underline">
              Giving Back
            </Link>
          </li>
          <li>
            <Link href={'/history'} className="hover:underline">
              History
            </Link>
          </li>
          <li>
            <Link href={'/investments'} className="hover:underline">
              Investments
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-black">
        <p className="uppercase font-light my-5">properties</p>
        <ul className="*:text-2xl *:font-light">
          <li>
            <Link href={'/sell'} className="hover:underline">
              Sell a property
            </Link>
          </li>
          <li>
            <Link href={'/rent'} className="hover:underline">
              Rent a property
            </Link>
          </li>
          <li>
            <Link href={'/buy'} className="hover:underline">
              Buy a property
            </Link>
          </li>
          <li>
            <Link href={'/lease'} className="hover:underline">
              Lease a property
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-black">
        <p className="uppercase font-light my-5">support</p>
        <ul className="*:text-2xl *:font-light">
          <li>
            <Link href={'/customer-care'} className="hover:underline">
              Customer care
            </Link>
          </li>
          <li>
            <Link href={'/our-process'} className="hover:underline">
              Our process
            </Link>
          </li>
          <li>
            <Link href={'/general-enquiries'} className="hover:underline">
              General enquiries
            </Link>
          </li>
          <li>
            <Link href={'/press'} className="hover:underline">
              Press
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-black">
        <p className="uppercase font-light my-5">newsletter</p>
        <form className="flex">
          <input
            className="w-full border-t border-l border-b border-zinc-500 px-3 py-1 text-sm font-light rounded-l focus:outline-0 focus:ring-transparent ring-0"
            placeholder="EMAIL ADDRESS"
            type="email"
          ></input>
          <input
            type="submit"
            value="enter"
            className="border-t border-r border-b border-zinc-500 rounded-r pr-3 text-zinc-500 font-light text-sm uppercase focus:outline-0 focus:ring-transparent ring-0"
            required
          ></input>
        </form>
      </div>
    </footer>
  )
}
