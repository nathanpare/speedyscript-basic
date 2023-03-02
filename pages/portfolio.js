import Header from '@/components/Header';
import React from 'react';

import Image from 'next/image';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <div id="empty-portfolio" className='justify-center text-4xl flex flex-row
       items-center py-24 mx-auto'>
         <Image className='p-5' src="/pngaaa.com-7101583.png" alt=''
          height={150} width={150} />
          <div className='flex-col'>
      <h1 className='text-[rgb(251,247,245)] text-2xl font-semibold
       text-center p-5'>Be the first to upgrade your business!</h1>
      <h1 className='text-[rgb(251,247,245)] text-2xl font-semibold
       text-center'>Check out our state of the art services!</h1>
       </div>
       </div>
    </div>
  );
}

export default Portfolio;
