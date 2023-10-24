import Link from 'next/link';
import React from 'react';

function Pic() {
  return (
    <div className="container mx-auto px-4 py-10 font-[roobert] bg-cover bg-center bg-[url('/bg.png')] h-[546.6px] w-full rounded-tl-[90px] rounded-br-[90px] relative my-16">
      <div className='bg-white w-full md:w-[310px] md:ml-40 my-20 py-16 rounded-tl-[90px] rounded-br-[90px]'>
        <div className='px-10 mt-8 max-w-[352px] mx-auto'>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold mb-10'>
            Ready to get started with Truckala
          </h2>
          <Link href="#" className="text-black border border-black rounded-2xl px-8 py-2.5 text-xl">
            Book a demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pic;
