import Image from 'next/image';
import React from 'react';

function versatile() {
  return (
    <div className="font-[roobert]">
      <div className="bg-[#1D36E4]">
        <div
          className="container mx-auto px-4 text-white text-center  py-10 "
          id="industries"
        >
          <h2 className="font-semibold text-5xl py-2">
            Versatile And Adaptable For Your Industry
          </h2>
          <p>
            Explore How Truckala Can Transform Your Industry And Take Your
            Operations To The Next Level.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        <div className="bg-center h-72 w-full relative bg-cover bg-no-repeat bg-[url('/industries/1.png')] bg-blend-multiply bg-[#1D36E4]/80 shadow-sm">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <Image
              width={74}
              height={78}
              src="/Group4721.jpg"
              alt="Trucking & Logistics"
              className="rounded-full bg-white px-3 py-2 w-[75px] h-[75px]"
            />
            <p className="mt-2 font-semibold">Trucking & Logistics</p>
            <h4>(Fcl, Lcl, Bb, 3pl)</h4>
          </div>
        </div>
        <div className="bg-center h-72 w-full relative bg-cover bg-no-repeat bg-[url('/industries/2.png')] bg-blend-multiply bg-[#1D36E4]/80 shadow-sm">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <Image
              width={75}
              height={75}
              src="/distribution.svg"
              alt="Distribution"
              className="rounded-full bg-white px-3 py-2 w-[75px] h-[75px]"
            />
            <p className="mt-2 font-semibold">Distribution</p>
          </div>
        </div>
        <div className="bg-center h-72 w-full relative bg-cover bg-no-repeat bg-[url('/industries/3.png')] bg-blend-multiply bg-[#1D36E4]/80 shadow-sm">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <Image
              width={74}
              height={78}
              src="/construction.svg"
              alt="Construction"
              className="rounded-full bg-white px-3 py-2 w-[75px] h-[75px]"
            />
            <p className="mt-2 font-semibold">Construction</p>
          </div>
        </div>
        <div className="bg-center h-72 w-full relative bg-cover bg-no-repeat bg-[url('/industries/4.png')] bg-blend-multiply bg-[#1D36E4]/80 shadow-sm">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <Image
              width={74}
              height={78}
              src="/car.svg"
              alt="Car Carrier"
              className="rounded-full bg-white px-3 py-2 w-[75px] h-[75px]"
            />
            <p className="mt-2 font-semibold">Car Carrier</p>
          </div>
        </div>
        <div className="bg-center h-72 w-full relative bg-cover bg-no-repeat bg-[url('/industries/5.png')] bg-blend-multiply bg-[#1D36E4]/80 shadow-sm">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <Image
              width={74}
              height={78}
              src="/oil.svg"
              alt="Oil And Gas"
              className="rounded-full bg-white px-3 py-2 w-[75px] h-[75px]"
            />
            <p className="mt-2 font-semibold">Oil And Gas</p>
          </div>
        </div>
        <div className="bg-center h-72 w-full relative bg-cover bg-no-repeat bg-[url('/industries/6.png')] bg-blend-multiply bg-[#1D36E4]/80 shadow-sm">
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <Image
              width={74}
              height={78}
              src="/last.svg"
              alt="Last Mile"
              className="rounded-full bg-white px-3 py-2 w-[75px] h-[75px]"
            />
            <p className="mt-2 font-semibold">Last Mile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default versatile;
