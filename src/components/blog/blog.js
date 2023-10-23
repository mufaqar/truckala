import Image from 'next/image'
import React from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
function blog() {
  
  return (
    <main className='container mx-auto px-4 py-10 font-[roobert]'>
      <div className='bg-[#E9E9E9] lg:rounded-full py-3'>
        <ul className='flex flex-wrap justify-center lg:justify-between items-center'>
          <li className='text-white bg-[#1D36E4] py-3 lg:rounded-full px-6 lg:px-8 lg:py-5'>
            Transportation Management (TMS)
          </li>
          <li className='text-[#4E4E4E]'>
            Fleet Maintenance
          </li>
          <li className='text-[#4E4E4E]'>
            Freight Forwarding
          </li>
          <li className='text-[#4E4E4E] px-4 lg:px-8'>
            Custom Clearance
          </li>
        </ul>
      </div>

      <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 justify-between py-10 items-center'>
        <div className='sm:w-[65%] w-full'>
          <h2 className='lg:text-[70px] text-[#262626] font-semibold text-3xl mb-10 lg:leading-[72px]'>
            Transportation Management (TMS)
          </h2>
          <h3 className='sm:text-[48px] text-2xl text-[#1D36E4] font-bold'>
            (FCL, LCL, BB, 3PL)
          </h3>
          <p className='text-[#4E4E4E] md:w-[500px] w-full my-8'>
            Our Transportation Management System is the driving force behind streamlined logistics. It optimizes routes, provides real-time tracking, and minimizes costs.
          </p>
          <ul className='grid sm:grid-cols-3 grid-cols-2 mt-5 gap-4 w-full'>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
            <li className='flex gap-2 items-center'>
              <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
              <span>Order Creation</span>
            </li>
          </ul>
        </div>
        <div className='sm:w-[45%] w-full'>
          <Image src="/bg@2x.jpg" alt="bg@2x.jpg" width={1402} height={1368} />
        </div>
      </div>
    </main>
  )
}

export default blog