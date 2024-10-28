
"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import React from 'react'
import BurgerCard from "./BurgerCard"



const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1324},
      items: 4,
      slidesToSlide: 1, 
    },
     tablet: {
      breakpoint: {max: 1324, min: 764},
      items: 2,
      slidesToSlide: 1,
     }, 
     mobile: {
      breakpoint: {max: 764, min: 0},
      items: 1,
      slidesToSlide: 1,
     },
  }



const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
    <h1 className="text-[30px] md:text-[35px] lg:text-[45px] uppercase font-bold text-gray-900 xl:text-[50px] md:leading-[4rem] text-center">
       <span className="text-red-600">Burger</span>
    </h1>

    <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel additionalTransform={0} 
         arrows={true} 
         autoPlay={true}
         autoPlaySpeed={4000} 
         centerMode={false}
         infinite 
         responsive={responsive} 
         itemClass="item" 
         showDots={false} >
         
         
         {/*for the Burger Cards component */}
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b1.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b2.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b3.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b4.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b5.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b6.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b7.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b8.png" 
         reviews="6" 
         price="10.885" 
         />
         <BurgerCard 
         title="Beefy Bite" 
         image="/images/b9.png" 
         reviews="6" 
         price="10.885" 
         />
        </Carousel>
    </div>
    </div>
  )
}

export default PopularBurger