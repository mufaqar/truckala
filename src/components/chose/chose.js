import Image from 'next/image';
import React from 'react';

function Chose() {
  return (
    <div className='container mx-auto px-4 font-[roobert]'>
      <div>
        <h1 className='text-3xl font-semibold text-center md:text-6xl lg:text-7xl mt-20 py-8'>
          Why Choose Us
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 mx-auto justify-center items-center'>
        <div className='w-full sm:w-96'>
        <Image width={74} height={78} src="/Group1.svg" alt="" className='bg-blue-700 py-4 px-3 rounded-full w-20' />
            <div>
                <h3 className='py-2 text-xl font-semibold'>Seamless Efficiency</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt dicta eligendi, quaerat odio fugit exercitationem repellat possimus dolorum consequatur similique, ab corporis ad soluta a itaque voluptatibus optio sint.</p>
            </div>
        </div>
        <div className='w-full sm:w-96'>
        <Image width={74} height={78} src="/Group1.svg" alt="" className='bg-blue-700 py-4 px-3 rounded-full w-20' />
            <div>
                <h3 className='py-2 text-xl font-semibold'>Seamless Efficiency</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt dicta eligendi, quaerat odio fugit exercitationem repellat possimus dolorum consequatur similique, ab corporis ad soluta a itaque voluptatibus optio sint.</p>
            </div>
        </div>
        <div className='w-full sm:w-96'>
        <Image width={74} height={78} src="/Group1.svg" alt="" className='bg-blue-700 py-4 px-3 rounded-full w-20' />
            <div>
                <h3 className='py-2 text-xl font-semibold'>Seamless Efficiency</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt dicta eligendi, quaerat odio fugit exercitationem repellat possimus dolorum consequatur similique, ab corporis ad soluta a itaque voluptatibus optio sint.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chose;
