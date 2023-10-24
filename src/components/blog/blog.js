"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

function Blog() {
  const [openTab, setOpenTab] = useState(1);
  const handleFaq = (id) => {
    if (openTab === id) {
      return setOpenTab(id)
    }
    setOpenTab(id)
  }
  return (
    <main className='container mx-auto px-4 py-10 font-[roobert]' id="products">
      <div className='bg-[#E9E9E9] rounded-full'>
        <ul className='flex flex-wrap justify-center lg:justify-between items-center'>
          {Tabs_Data.map((item, idx) => {
            return <li key={idx} className={"p-2 rounded-full px-6 lg:px-8 lg:py-5 md:text-xl text-xs " +
              (openTab === item.id
                ? "text-white bg-[#1D36E4]"
                : "text-[#4E4E4E] bg-transparent hover:bg-[#1D36E4] hover:text-white")}
              onClick={() => handleFaq(item.id)}
              data-toggle="tab"
              role="tablist">
              {item.title1}
            </li>
          })}
        </ul>
      </div>
      {Tabs_Data.map((item, idx) => {
        return <div key={idx} className={`flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 justify-between py-10 items-center ${openTab === item.id ? "block" : "hidden"}`}>
          <div className='sm:w-[65%] w-full'>
            <h2 className='lg:text-[70px] text-[#262626] font-semibold text-3xl md:mb-10 mb-5 lg:leading-[72px]'>
              {item.title1}
            </h2>
            <h3 className='sm:text-[48px] text-2xl text-[#1D36E4] font-bold'>
              {item.title2}
            </h3>
            <p className='text-[#4E4E4E] md:w-[500px] w-full my-8'>
              {item?.content}
            </p>
            <ul className='grid sm:grid-cols-3 grid-cols-2 mt-5 gap-4 w-full'>
              {item?.features?.map((_item, _idx) => {
                return <li key={_idx} className='flex gap-2 items-center'>
                  <IoIosArrowDropdownCircle className='text-blue-700 text-xl' />
                  <span>
                    {_item?.list}
                  </span>
                </li>
              })}
            </ul>
          </div>
          <div className='sm:w-[45%] w-full'>
            <Image src={item?.img} alt={item?.img} width={1402} height={1368} />
          </div>
        </div>
      })}
    </main >
  )
}

export default Blog

export const Tabs_Data = [
  {
    id: 1,
    title1: "Transportation Management (TMS)",
    title2: "(FCL, LCL, BB, 3PL)",
    img: "/bg@2x.jpg",
    content: "Our Transportation Management System is the driving force behind streamlined logistics. It optimizes routes, provides real-time tracking, and minimizes costs.",
    features: [
      {
        list: "Customer Contracts",
      },
      {
        list: "Terminal Management",
      },
      {
        list: "Trip Updates",
      },
      {
        list: "Drivers Commission",
      },
      {
        list: "Order Creation",
      },
      {
        list: "Waybill And Pod",
      },
      {
        list: "Backload Management",
      },
      {
        list: "Fuel Management",
      },
      {
        list: "Load Planning",
      },
      {
        list: "Drivers Management",
      },
      {
        list: "Fleet Type",
      },
      {
        list: "Drivers App & Customers",
      },
    ]
  },
  {
    id: 2,
    title1: "Fleet Maintenance",
    title2: "(FCL, LCL, BB, 3PL)",
    img: "/bg@2x.jpg",
    content: "Maximize Fleet Reliability with Our Maintenance Module. From preventive scheduling to repair tracking, we ensure optimal vehicle condition. Keep your fleet efficient and your business moving seamlessly in transportation and logistics.",
    features: [
      {
        list: "Fleet Inventory Tracking"
      },
      {
        list: "Maintenance Orders"
      },
      {
        list: "Scheduling Repair Tracking"
      },
      {
        list: "Inspection Checklist"
      },
      {
        list: "Inventory Management"
      },
      {
        list: "Fuel & Meter Imports"
      },
      {
        list: "Documents Management"
      },
      {
        list: "Customizable Reports & Dashboards"
      }
    ]
  },
  {
    id: 3,
    title1: "Freight Forwarding",
    title2: "(FCL, LCL, BB, 3PL)",
    img: "/bg@2x.jpg",
    content: "Streamline your global logistics with our comprehensive freight forwarding services. Our software helps you to manage every aspect, from documentation to customs clearance, to ensure smooth cargo movement for Air or sea freight. ",
    features: [
      {
        list: "Order Management"
      },
      {
        list: "Correspondence Management"
      },
      {
        list: "Document Management"
      },
      {
        list: "Port & Gov Charges Management"
      },
      {
        list: "Vendors Management"
      },
      {
        list: "Customer Contracts"
      },
      {
        list: "Container wise or BL wise Management"
      },
      {
        list: "Shipping Line Correspondence"
      }
    ]
  },
  {
    id: 4,
    title1: "Custom Clearanc",
    title2: "(FCL, LCL, BB, 3PL)",
    img: "/bg@2x.jpg",
    content: "Our software automates customs documentation and compliance management for a smooth international or local trade process. With real-time updates, cost-effective solutions, and user-friendly features, our Customs Clearance software empowers businesses to streamline customs procedures and ensure seamless international shipments.",
    features: [
      {
        list: "Order Management"
      },
      {
        list: "Correspondence Management"
      },
      {
        list: "Document Management"
      },
      {
        list: "Port & Gov Charges Management"
      },
      {
        list: "Vendors Management"
      },
      {
        list: "Customer Contracts"
      },
      {
        list: "Container wise or BL wise Management"
      },
      {
        list: "Shipping Line Correspondence"
      },
      {
        list: "Brokers Management"
      },
      {
        list: "EDI Integration"
      }
    ]
  },
]