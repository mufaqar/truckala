import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiUserLocationFill } from 'react-icons/ri';
import { SiMinutemailer } from 'react-icons/si';
import Link from 'next/link';
import Image from 'next/image';

function footer() {
  return (
    <main className="bg-[#1D36E4] full h-auto text-white rounded-tr-[90px] rounded-tl-[90px]">
      <div className="container mx-auto px-4 mt-10 pt-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto">
          <div>
            <h6 className="font-bold py-3">Products</h6>
            <ul className="text-sm grid gap-2">
              <li>
                <Link href="#">Transportation Management (TMS)</Link>
              </li>
              <li>
                <Link href="#">Fleet Maintenance</Link>
              </li>
              <li>
                <Link href="#">Freight Forwarding</Link>
              </li>
              <li>
                <Link href="#">Custom Clearance</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold py-3">Industries</h6>
            <ul className="text-sm grid gap-2">
              <li>
                <Link href="#">Trucking & Logistics</Link>
              </li>
              <li>
                <Link href="#">Distribution</Link>
              </li>
              <li>
                <Link href="#">Construction</Link>
              </li>
              <li>
                <Link href="#">Car Carrier</Link>
              </li>
              <li>
                <Link href="#">Oil And Gas</Link>
              </li>
              <li>
                <Link href="#">Last Mile</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold py-3">Company</h6>
            <ul className="text-sm grid gap-2">
              <li>
                <Link href="/company">About Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/">
              <Image src="logo.svg" alt="Logo" width={240} height={50} />
            </Link>
            <ul className="py-5 flex gap-2">
              <li className="border px-3 py-2 rounded-md">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li className="border px-3 py-2 rounded-md">
                <Link href="#">
                  <AiFillYoutube />
                </Link>
              </li>
              <li className="border px-3 py-2 rounded-md">
                <Link href="#">
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li className="border px-3 py-2 rounded-md">
                <Link href="#">
                  <ImLinkedin2 />
                </Link>
              </li>
              <li className="border px-3 py-2 rounded-md">
                <Link href="#">
                  <BsTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto justify-end">
          <div className="md:col-span-2 flex  mt-5">
            <Image
              src="/google.png"
              alt="Google Playstore"
              width={200}
              height={62}
            />
            <Image src="/apple.png" alt="APPLE" width={200} height={62} />
          </div>

          <div className="md:col-span-2">
            <ul className="grid md:grid-cols-3 grid-cols-1 ">
              <li className="bg-[#FFFFFF1A] p-4 max-w-[262px]">
                <span className="flex items-center gap-3 mt-2">
                  <BsFillTelephoneFill className="text-2xl" />
                  <Link
                    href="tel:966570786312"
                    className="text-[11px] grid gap-1 w-full"
                  >
                    <span>Phone</span>
                    <span className="font-bold">+966 570 786 312</span>
                  </Link>
                </span>
              </li>
              <li className="bg-[#FFFFFF33] p-4 max-w-[262px]">
                <span className="flex items-center gap-3 mt-2">
                  <RiUserLocationFill className="text-2xl" />
                  <Link href="#" className="text-[11px] grid gap-1 w-full">
                    <span>Location</span>
                    <span className="font-bold">
                      Abi Bakr As Siddiq Rd, exit6 , Riyadh
                    </span>
                  </Link>
                </span>
              </li>
              <li className="bg-[#FFFFFF1A] p-4 max-w-[262px]">
                <span className="flex items-center gap-3 mt-2">
                  <SiMinutemailer className="text-2xl" />
                  <Link
                    href="mailto:hi@truckala.com"
                    className="text-[11px] grid gap-1 w-full"
                  >
                    <span>Email</span>
                    <span className="font-bold">hi@truckala.com</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border lg:mt-20 mt-10 border-gray-300"></div>
      <div className="container mx-auto px-4 items-center py-5">
        <div className="flex flex-wrap justify-between items-center text-[12px]">
          <p>© 2023 Truckala All Rights Reserved</p>
          <div>
            <p>Sitemap - Terms & Conditions - Privacy Policy</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default footer;
