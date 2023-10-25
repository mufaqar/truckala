import Main from '@/components/main/main'
import Footer from '@/components/footer/footer'
import React from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import Link from 'next/link'

function LoadMarket() {
    return (
        <main>
            <Main />

            <div className='container mx-auto px-4 font-[roobert]' id="company">
                <div>
                    <h1 className='text-3xl font-semibold text-center md:text-6xl lg:text-7xl mt-20 py-8'>
                        Load Market
                    </h1>
                    <p>
                        At Load Market, we're all about connecting, optimizing, and expanding your transportation business. With us, you can increase your revenue, achieve operational efficiency, and minimize empty backloads. We're excited to have you on board as we revolutionize the world of transportation services together. Welcome to a new era of possibilities!"
                    </p>

                    <h2 className='text-3xl font-semibold py-6 '> Our platform is designed to help you thrive</h2>
                    <ul className="mt-5 gap-4 w-full">
                        <li className="flex gap-2 items-center">  <IoIosArrowDropdownCircle className="text-blue-700 text-xl" />   Connect and Grow: Linking Transportation Providers to Shippers.   </li>
                        <li className="flex gap-2 items-center">  <IoIosArrowDropdownCircle className="text-blue-700 text-xl" />   Efficiency at Its Best: Get Roadside Assistance.   </li>
                        <li className="flex gap-2 items-center">  <IoIosArrowDropdownCircle className="text-blue-700 text-xl" />    Reduce Empty Backloads: Optimize Routes and Maximize Your Business Potential.   </li>
                        <li className="flex gap-2 items-center">   <IoIosArrowDropdownCircle className="text-blue-700 text-xl" />   Join and revolutionize the transportation ecosystem today!   </li>
                    </ul>
                    <div className="my-10">
                        <Link href="#" className=" border border-blue-700 rounded-2xl px-10 py-3 text-[21px] leading-[36px]">
                            Coming Soon
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </main>)
}

export default LoadMarket