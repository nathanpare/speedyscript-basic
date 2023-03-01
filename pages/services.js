import Header from '@/components/Header';
import React from 'react';

import { motion } from "framer-motion";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Services = () => {
  const router = useRouter();

  return (
    <div className='text-white h-screen snap-y snap-mandatory overflow-scroll'>
      <Header />

      <section id='service-1' className='snap-start h-screen flex flex-col
       items-center pt-5'>
        <div id='top' className='text-4xl flex flex-row items-center py-24'>
          <motion.div
            className='p-2 mx-auto mr-24'
            id='left-1'
            initial={{
              x: -400,
              opacity: 0,
              scale: 1
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>Website Design</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-1'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-4835519.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom' className='text-2xl text-center'>We offer expert level
          Website Development services to make your business stand out
          amongst the competition</p>

          <button onClick={() => router.push("/contact")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Contact Us</button>
      </section>

      <section id='service-2' className='snap-center h-screen flex flex-col 
       items-center pt-10'>
        <div id='top-2' className='text-4xl flex flex-row items-center py-24'>
          <motion.div
            className='p-2 mx-auto mr-24'
            id='left-2'
            initial={{
              x: -400,
              opacity: 0,
              scale: 1
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>SEO</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-2'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-2617116.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom-2' className='text-2xl text-center'>We offer state of the art
         SEO services to help your business rise to the top of the search results</p>

         <button onClick={() => router.push("/contact")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Contact Us</button>
      </section>

      <section id='service-3' className='snap-center h-screen flex flex-col 
       items-center pt-5'>
        <div id='top-3' className='text-4xl flex flex-row items-center py-24'>
          <motion.div
            className='p-2 mx-auto mr-24'
            id='left-3'
            initial={{
              x: -400,
              opacity: 0,
              scale: 1
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>Google Ads</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-3'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-2512508.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom-3' className='text-2xl text-center'>We offer Google Ads
         Services so you get seen FIRST!</p>
        
         <button onClick={() => router.push("/contact")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Contact Us</button>
      </section>

      <section id='service-4' className='snap-center h-screen flex flex-col 
       items-center pt-5'>
        <div id='top-4' className='text-4xl flex flex-row items-center py-24'>
          <motion.div
            className='p-2 mx-auto mr-24'
            id='left-4'
            initial={{
              x: -400,
              opacity: 0,
              scale: 1
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>Data Analysis</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-4'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-2512508.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom-4' className='text-2xl text-center'>We offer Data Analysis services so you can find out what's improving and what's diminishing</p>
        
         <button onClick={() => router.push("/contact")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Contact Us</button>
      </section>
    </div>
  );
}

export default Services;
