import React from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  return (
    <div className='h-24 flex justify-between
     items-center px-5'>
      <p onClick={() => router.push("/")}
        className='sm:text-lg md:text-xl lg:text-2xl cursor-pointer
       text-[rgb(251,247,245)]'>BlackBoard</p>
      <div className='flex justify-between'>
        <p onClick={() => router.push("/services")}
          className='sm:text-sm md:text-md lg:text-lg hover:underline
         cursor-pointer text-[rgb(251,247,245)]'>Our Services</p>
        <p onClick={() => router.push("/portfolio")}
          className='sm:text-sm md:text-md lg:text-lg cursor-pointer
         hover:underline pl-4 text-[rgb(251,247,245)]'>Our Work</p>
        <p onClick={() => router.push("/mission")}
          className='sm:text-sm md:text-md lg:text-lg cursor-pointer
         hover:underline pl-4 text-[rgb(251,247,245)]'>Our Mission</p>
      </div>
    </div>
  );
}

export default Header;
