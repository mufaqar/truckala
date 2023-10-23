import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {ImLinkedin2} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {RiUserLocationFill} from 'react-icons/ri'
import {SiMinutemailer} from 'react-icons/si'
function footer() {
  return (
    <main className='bg-[#1D36E4] full h-auto text-white rounded-tr-[90px] rounded-tl-[90px]'>
        <div className='container mx-auto px-4 mt-10 pt-20'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto '>
           <div>
             <h3 className='font-bold py-3'>Products</h3>
             <div className='text-[14px]'>
                <h5>Fleet Management</h5>
                <div className='border w-32 mt-2'></div>
                <h5 className='py-2'>Vehicle Tracking System </h5>
                <h5> Scheduling & Routing</h5>
                <h5 className='py-2'>Reporting & alerts </h5>
                <h5>Fleet Maintanence </h5>
                <h5 className='py-2'>Driver Behaviour Analytics &</h5>
                <h5>Safety</h5>
                <h5 className='py-2 '>Driver Management &</h5>
                <h5 >Electronic POD</h5>
                <h5 className='py-2 '>AIS-140 Certified devices</h5>
             </div>
           </div>
           <div>
              <h3 className='font-bold py-3'>Industries</h3>
              <div className='text-[14px]'>
                 <div>
                   <h5>By Industries</h5>
                   <div className='border w-32 mt-2'></div>
                    <h5 className='py-2'>Construction </h5>
                    <h5>Passenger Transit</h5>
                    <h5 className='py-2'>Transportation & Logistics</h5>
                    <h5>E-commerce Logistics </h5>
                    <h5 className='py-2'>Food & Beverages</h5>
                    <h5>Cold Chain Industries</h5>
                 </div>
              </div>
           </div>
           <div>
           <h3 className='font-bold py-3'>Company</h3>
              <div className='text-[14px]'> 
               <h5 className='py-2'>About Us</h5>
               <h5>Careers</h5>
               <h5 className='py-2'>Contact Us</h5>
               <h5>Refer & Earn</h5>
               <h5 className='py-2'>Blog</h5>
              </div>
           </div>
           <div>
            <img src="/logo.svg" alt="" />
            <div className='py-5 flex gap-2'>
            <div className='border px-3 py-2 rounded-md'>
                <FaFacebookF/>
            </div>
            <div className='border px-3 py-2 rounded-md'>
                <AiFillYoutube/>
            </div>
            <div className='border px-3 py-2 rounded-md'>
               <AiOutlineInstagram/>
            </div>
            <div className='border px-3 py-2 rounded-md'>
                <ImLinkedin2/>
            </div>
            <div className='border px-3 py-2 rounded-md'>
                <BsTwitter/>
            </div>
            </div>
           </div>
        </div>

        <div className='flex flex-wrap justify-between items-center'>
          <div>
            <h4 className='font-bold mt-10'>Enterprise Products</h4>
            <div className='border w-32 mt-2'></div>
            <h5 className='text-[14px] py-2'>Transport Management System</h5>
          </div>
          <div >
             <h4 className='font-bold'>By Solution</h4>
             <div className='border w-32 mt-2'></div>
             <h5 className='py-2 text-[14px]'>Sim Based Tracking </h5>
             <h5 className='text-[14px]'>Fuel Management System</h5>
             <h5 className='py-2 text-[14px]'>Electric Vehicle Management</h5>
          </div>
          <div className='flex flex-wrap'>
          <div className='bg-[#FFFFFF1A] h-16 px-4'>  
            <div className='flex items-center gap-3 mt-2 '>
            <BsFillTelephoneFill className='text-2xl' />
            <div className='text-[14px]'>
            <h5 className='font-bold'>Phone</h5> 
            <p>+8 (495) 989 20 11</p>
            </div>
            </div>
          </div>
          <div className='bg-[#FFFFFF33] h-16 px-4'>
             <div className='flex items-center gap-3 mt-2'>
               <RiUserLocationFill className='text-2xl'/>
               <div className='text-[14px]'>
                <h5 className='font-bold'>Location</h5>
                <p>4621 Hill Croft Farm Road</p>
               </div>
             </div>
          </div>
          <div className='bg-[#FFFFFF1A] h-16 px-4'>  
            <div className='flex items-center gap-3 mt-2 '>
            <SiMinutemailer className='text-2xl' />
            <div className='text-[14px]'>
            <h5 className='font-bold'>Email</h5> 
            <p>syedahmad12@gmail.com</p>
            </div>
            </div>
          </div>
          </div>
        </div>

        </div>
        <div className='border lg:mt-20 mt-10 border-gray-300'></div>
        <div className='container mx-auto px-4 items-center py-5'>
          <div className='flex flex-wrap justify-between items-center text-[12px]'>
          <p>© 2019 Group Travel Videos™ Made with in Charlotte, NC.</p>
          <div>
            <p>Sitemap - Terms & Conditions - Privacy Policy</p>
          </div>
          </div>
        </div>
    </main>
  )
}

export default footer