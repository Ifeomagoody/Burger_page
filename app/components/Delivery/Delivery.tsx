
import Image from 'next/image'
import React from 'react'
import DeliverImg from "@/public/images/delivery.svg"
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
       <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        
        {/*for the image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={DeliverImg} alt="delivery"/>
        </div>
{/*the text content */}
          <div>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] uppercase font-bold leading-[3rem]">Your <span className="text-red-600">Favorite Burger </span> On the way </h1>
            <p className="mt-[2rem] text-black text-[17px] text-opacity-70">We are a call away for all your orders</p>
            <div className="flex items-center space-x-3 mt-[2rem]">
              <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600"/>
              <h1 className="text-[18px] text-black font-medium">Delivery in 30 minutes</h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem]">
              <IoFastFood className="w-[2rem] h-[2rem] text-red-600"/>
              <h1 className="text-[18px] text-black font-medium">Free Shipping from 75$</h1>
            </div>
            <div className="flex items-center space-x-3 mt-[1rem]">
              <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600"/>
              <h1 className="text-[18px] text-black font-medium">Delivery on your doorstep</h1>
            </div>
          </div>
       </div>
       
       </div>
  )
}

export default Delivery