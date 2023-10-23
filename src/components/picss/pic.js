import React from 'react';

function Pic() {
  return (
    <div className='container mx-auto px-4 py-10 font-[roobert]'>
      <div
        className="bg-cover bg-center h-[546.6px]  w-full rounded-tl-[90px] rounded-br-[90px] relative"
        style={{ backgroundImage: `url('/bg.png')` }}
      >
        <div className='bg-white w-full md:w-96 md:ml-40 h-[400px] md:h-96 mt-20 md:mt-20 md:rounded-tl-[90px] md:rounded-br-[90px] absolute inset-0 flex flex-col justify-center items-center lg:mt-32 '>
          <div>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold px-10 mt-8 md:mt-0 md:w-72 lg:w-auto mx-4'>
            Ready to get started with Truckala
          </h2>
          <button className='mt-6 rounded-xl border border-black px-10 ml-10 py-2 font-semibold'>
            Book a demo
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pic;
