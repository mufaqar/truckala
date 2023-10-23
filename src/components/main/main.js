import React from "react";
import Navbar from "../navbar/navbar";
function Main() {
  return (
    <main className="font-[roobert]">
      <div
        className="bg-cover bg-center h-auto  py-5 w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('/main.png')`,
        }}
      >
        <div className="container mx-auto px-4 py-5">
          <div>
            <Navbar />
          </div>

          <div className="flex flex-col sm:flex-row justify-between py-10 items-center ">
            <div className="text-white lg:w-[90vh] w-full border-none leading-7 mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-semibold mb-2">
                Get all-in-one Platform for
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[78px]  font-bold leading-snug mb-4">
                Transportation & Logistics.
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl py-3">
                Streamline, Optimize, Excel with Truckala.
              </p>
              <div>
                <button className="text-white border border-white rounded-lg px-8 py-2 mt-4 text-base ">
                  Book a demo
                </button>
              </div>
            </div>

            <div>
              <img src="/DeviceMockup.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
