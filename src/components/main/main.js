import React from "react";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import Link from "next/link";
function Main() {
  return (
    <main className="font-[roobert]">
      <div
        className="bg-cover bg-center h-auto  py-5 w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('/banner.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 py-5">
          <div>
            <Navbar />
          </div>

          <div className="flex flex-col sm:flex-row gap-10 justify-between py-10 items-center ">
            <div className="text-white md:w-2/5 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-2">
              Get all-in-one Platform for 
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px] font-bold leading-snug mb-4">
                Transportation & Logistics.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl py-3">
              Streamline, Optimize, Excel with Truckala. 
              </p>
              <div className="mt-5">
                {/* <Link href="#/contact-us" className="text-white border border-white rounded-2xl px-10 py-3 text-[21px] leading-[42px]">
                  Book a demo
                </Link> */}
              </div>
            </div>
            <div className="md:w-3/5 w-full">
              <Image src="/device.png" alt="Device Mockup" className="w-full" width={622} height={401} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
