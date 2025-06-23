// "use client"
import Image from 'next/image'
// import PageHeader from "../components/PageHeader";
import { usePathname } from 'next/navigation'
// import Carousel from "../../components/Carousel";
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
        <h1 className="text-9xl font-serif italic">Our Process</h1>
        {/* <h2 className='text-9xl font-serif'>Dalkeith</h2> */}
      </div>
      <div className="grid grid-cols-4 col-span-4">
        <div className="col-span-2 col-start-2 text-2xl *:py-2">
          <p>
            At Realestate Company, we believe that a seamless and transparent process is key to
            achieving your property goals. Our dedicated team of professionals is committed to
            guiding you through every step, ensuring that your experience is as smooth and rewarding
            as possible. Here&apos;s how we do it:
          </p>
          <h2 className="text-5xl italic mt-6">1. Initial Consultation</h2>
          <p>
            We start with a personalized consultation to understand your unique needs and
            objectives. Whether you&apos;re buying or selling, we take the time to listen and assess
            your requirements, helping us tailor our services to fit your vision.
          </p>
          <h2 className="text-5xl italic mt-6">2. Market Analysis</h2>
          <p>
            Our team conducts a comprehensive market analysis to provide you with up-to-date
            insights and trends in the Western Australian real estate market. This information
            empowers you to make informed decisions and strategically position your property.
          </p>
          <h2 className="text-5xl italic mt-6">3. Customized Strategy</h2>
          <p>
            Based on your goals and market insights, we develop a customized strategy designed to
            maximize your success. This includes targeted marketing plans, pricing strategies, and
            expert advice tailored to your specific situation.
          </p>
          <h2 className="text-5xl italic mt-6">4. Property Preparation</h2>
          <p>
            For sellers, we assist in preparing your property for the market. This may involve
            staging, professional photography, and making recommendations for improvements to
            enhance its appeal. For buyers, we curate a selection of properties that match your
            criteria, ensuring you find the perfect fit.
          </p>
          <h2 className="text-5xl italic mt-6">5. Marketing & Promotion</h2>
          <p>
            We implement a robust marketing campaign utilizing both traditional and digital
            platforms to reach potential buyers. Our extensive network and innovative strategies
            ensure that your property gains maximum exposure.
          </p>
          <h2 className="text-5xl italic mt-6">6. Open Houses & Private Viewings</h2>
          <p>
            We organize open houses and private viewings, showcasing your property to interested
            buyers. Our team is on hand to provide insights and answer questions, making the
            experience engaging and informative.
          </p>
          <h2 className="text-5xl italic mt-6">7. Negotiation</h2>
          <p>
            When offers come in, we leverage our expertise to negotiate on your behalf, ensuring
            that you receive the best possible outcome. Our goal is to achieve a deal that meets
            your expectations and aligns with your objectives.
          </p>
          <h2 className="text-5xl italic mt-6">8. Closing the Deal</h2>
          <p>
            Once an agreement is reached, we guide you through the closing process, coordinating
            with legal and financial professionals to ensure all necessary paperwork is completed
            accurately and efficiently. We&apos;re here to answer any questions and make the
            transition as smooth as possible.
          </p>
          <h2 className="text-5xl italic mt-6">9. Post-Sale Support</h2>
          <p>
            Our commitment to you doesn&apos;t end at the closing table. We provide ongoing support
            and resources, whether you need assistance with moving, property management, or future
            real estate investments.
          </p>
          <p>Your Journey Begins Here</p>
          <p>
            At Realestate Company, we&apos;re passionate about helping you navigate the real estate
            landscape with confidence. Contact us today to start your journey and discover how our
            expert team can make your real estate dreams a reality.
          </p>
        </div>
      </div>
    </div>
  )
}
