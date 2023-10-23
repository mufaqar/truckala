import React from 'react'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
function blog() {
  return (
    <main className='container mx-auto px-4 py-10 font-[roobert]'>
     <div className='bg-[#E9E9E9] lg:rounded-full py-3'>
    <div className='flex flex-wrap justify-center lg:justify-between items-center'>
        <div className='m-2 lg:m-0'>
            <a href="#" className='text-white bg-[#1D36E4] py-3 lg:rounded-full px-6 lg:px-8 lg:py-5'>Transportation Management (TMS)</a>
        </div>
        <div className='m-2'>
            <a href="#" className='text-[#4E4E4E]'>Fleet Maintenance</a>
        </div>
        <div className='m-2'>
            <a href="#" className='text-[#4E4E4E]'>Freight Forwarding</a>
        </div>
        <div className='m-2'>
            <a href="#" className='text-[#4E4E4E] px-4 lg:px-8'>Custom Clearance</a>
        </div>
    </div>
</div>


         
         <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between py-10 items-center'>
            <div className='leading-snug'>
                <div>
                   <h2 className='lg:text-[70px] text-[#262626] font-[600] text-2xl  mb-2 leading-snug'>Transportation Management (TMS)</h2>
                </div>
                <div>
                   <h2 className='text-[48px] text-[#1D36E4] font-bold'>(FCL, LCL, BB, 3PL)</h2>
                </div>
                <div>
                    <p className='text-[#4E4E4E] lg:w-[550px] w-full py-2'>Our Transportation Management System is the driving force behind streamlined logistics. It optimizes routes, provides real-time tracking, and minimizes costs.</p>
                </div>
                <div className='grid grid-cols-3 mt-5 gap-4  lg:w-[110vh] w-full'>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <IoIosArrowDropdownCircle className='text-blue-700 text-xl'/>
                    <h4>Order Creation</h4>
                  </div>
                </div>
            </div>
            <div>
                <img src="bg@2x.jpg" alt="" className='w-[899.59px] h-screen md:mt-5' />
            </div>
         </div>
    </main>
  )
}

export default blog