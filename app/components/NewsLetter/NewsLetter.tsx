
import React from 'react'

const NewsLetter = () => {
  return (
    <div className="pt=[5rem] pb-[5rem]">
    <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase ">Join us for hot offers</h1>
        <p className="text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto">To stay up to date with all that is happening to and with us,please subscribe to our NewsLetter to get exciting and up to date gists</p>
        <div className="flex items-center space-x-2 mt-[3rem] justify-center">
         
          {/* for the input part */}
         <input type="email" placeholder="email address" className='px-5 py-4 bg-gray-400 w-[40%] outline-none rounded-lg placeholder:text-black'/>

         {/* for the subscribe button */}
         <button className="px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-200 rounded-md text-white font-bold">Subscribe</button>
        </div>
    </div>
    
    </div>
  )
}

export default NewsLetter