import React from 'react';
import { useRouter } from 'next/router';
import Dropdown from './Dropdown';

const Header = () => {
  const router = useRouter();

  return (
    <div className='sticky top-0 h-24 flex justify-between
     items-center px-5'>
      <p onClick={() => router.push("/")}
        className='text-2xl md:text-xl lg:text-2xl cursor-pointer
       text-[rgb(251,247,245)]'>BlackBoard</p>
      <div className='flex justify-between'>
        <p onClick={() => router.push("/services")}
          className='text-md md:text-md lg:text-lg hover:underline
         cursor-pointer text-[rgb(251,247,245)]'>Services</p>
        <p onClick={() => router.push("/portfolio")}
          className='text-md md:text-md lg:text-lg cursor-pointer
         hover:underline pl-4 text-[rgb(251,247,245)]'>Portfolio</p>
        <p onClick={() => router.push("/about")}
          className='text-md md:text-md lg:text-lg cursor-pointer
         hover:underline pl-4 text-[rgb(251,247,245)]'>About Us</p>
      </div>
      <Dropdown />
    </div>
  );
}

export default Header;
