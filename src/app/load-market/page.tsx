import Main from '@/components/main/main'
import Footer from '@/components/footer/footer'
import React from 'react'

function LoadMarket() {
    return (
        <main>
            <Main />

            <div className='container mx-auto px-4 font-[roobert]' id="company">
                <div>
                    <h1 className='text-3xl font-semibold text-center md:text-6xl lg:text-7xl mt-20 py-8'>
                        Load Market
                    </h1>


                    <p>   At Load Market, we're all about connecting, optimizing, and expanding your transportation business. With us, you can increase your revenue, achieve operational efficiency, and minimize empty backloads. We're excited to have you on board as we revolutionize the world of transportation services together. Welcome to a new era of possibilities!"
                    </p>

                    <h2> Our platform is designed to help you thrive;</h2>

                    <p>    Connect and Grow: Linking Transportation Providers to Shippers.   </p>
                    <p>   Efficiency at Its Best: Get Roadside Assistance.   </p>
                    <p>    Reduce Empty Backloads: Optimize Routes and Maximize Your Business Potential.   </p>
                    <p>    Join and revolutionize the transportation ecosystem today!   </p>

                </div>
            </div>
            <Footer />
        </main>)
}

export default LoadMarket