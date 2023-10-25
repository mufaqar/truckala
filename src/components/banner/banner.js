import React from 'react';
import Navbar from '../navbar/navbar';
import Image from 'next/image';
import Link from 'next/link';
function Banner() {
  return (
    <main className="font-[roobert]">
      <div
        className="bg-cover bg-center h-auto  py-10 w-full "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('/banner.jpg')`,
        }}
      >
        <div className="container mx-auto px-4 py-5 ">
          <div>
            <Navbar />
          </div>

          <div className="pb-[250px] "></div>
        </div>
      </div>
    </main>
  );
}

export default Banner;
