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
                <p>Truckala's logistics software offers a seamless and efficient solution to streamline your entire logistics process. From route optimization to inventory management, our software is designed to enhance your operations and reduce costs.</p>
            </div>
        </div>
        <div className='w-full sm:w-96'>
        <Image width={74} height={78} src="/Group1.svg" alt="" className='bg-blue-700 py-4 px-3 rounded-full w-20' />
            <div>
                <h3 className='py-2 text-xl font-semibold'>Scalability and Adaptability </h3>
                <p>Our software is scalable and adaptable to the unique needs of your business. Whether you're a small startup or a large enterprise, Truckala grows with you, providing the tools you need for success in an ever-changing logistics landscape."</p>
            </div>
        </div>
        <div className='w-full sm:w-96'>
        <Image width={74} height={78} src="/Group1.svg" alt="" className='bg-blue-700 py-4 px-3 rounded-full w-20' />
            <div>
                <h3 className='py-2 text-xl font-semibold'>Advanced Technologyy</h3>
                <p>Truckala's  logistics software harnesses the power of cutting-edge technology. With real-time tracking, predictive analytics, and intuitive user interfaces, we empower your team to make informed decisions, ensuring you stay ahead in the logistics industry.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chose;
