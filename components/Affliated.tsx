
import React from 'react'
import ss from "../public/images/23.png";
import { Button } from './ui/button';
import Image from 'next/image';


function Affliated() {
  return (
    <div>
             <section className="bg-gray-200 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:mx-10 items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className=" md:text-3xl mb-4 text-2xl font-bold">
                Affiliate Program
              </h2>
              <p className="text-xl mb-6">
                Earn money by referring new players to our platform!
              </p>
              <Button>Join Affiliate Program</Button>
            </div>
            <div className="md:w-1/2 md:h-1/2">
              <Image
                src={ss}
                alt="Affiliate Program"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Affliated