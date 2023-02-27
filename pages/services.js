import Header from '@/components/Header';
import React from 'react';

import { motion } from "framer-motion";
import Image from 'next/image';

const Services = () => {
  return (
    <div className='text-white h-screen snap-y snap-mandatory overflow-scroll'>
      <Header />

      <section id='service-1' className='snap-start h-screen flex flex-col 
       items-center'>
        <div id='top' className='text-4xl flex flex-row items-center py-24'>
      <motion.div
      className='p-2 mx-auto mr-24'
      id='1-left'
      initial={{
        x: -500,
        opacity: 0,
        scale: 1
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay: 1
      }}
      >
        <h4>Website Design and Development</h4>
      </motion.div>
      <motion.div
      className='p-2 px-5 mx-auto'
      id='1-right'
      initial={{
        x: 500,
        opacity: 0,
        scale: 1
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay: 1
      }}
      >
        <Image src="/pngaaa.com-4835519.png" height={150} width={150} />
      </motion.div>
      </div>

      <p id='bottom' className='text-2xl text-center'>We offer expert level
       Website Development services to make your business stand out
       amongst the competition</p>
      </section>

      <section id='service-2' className='snap-center h-screen flex flex-col 
       items-center'>
        <div id='top-2' className='text-4xl flex flex-row items-center py-24'>
      <motion.div
      className='p-2 mx-auto mr-24'
      id='1-left-2'
      initial={{
        x: -500,
        opacity: 0,
        scale: 1
      }}
      animate={{
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
      id='1-right-2'
      initial={{
        x: 500,
        opacity: 0,
        scale: 1
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay: 1
      }}
      >
        <Image src="/pngaaa.com-2617116.png" height={150} width={150} />
      </motion.div>
      </div>

      <p id='bottom-2' className='text-2xl text-center'>We offer state of the art SEO services to help your business rise to the top of the search results</p>
      </section>

      <section id='service-3' className='snap-center h-screen flex flex-col 
       items-center'>
        <div id='top-3' className='text-4xl flex flex-row items-center py-24'>
      <motion.div
      className='p-2 mx-auto mr-24'
      id='1-left-3'
      initial={{
        x: -500,
        opacity: 0,
        scale: 1
      }}
      animate={{
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
      id='1-right-3'
      initial={{
        x: 500,
        opacity: 0,
        scale: 1
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1,
        delay: 1
      }}
      >
        <Image src="/pngaaa.com-2512508.png" height={150} width={150} />
      </motion.div>
      </div>

      <p id='bottom-3' className='text-2xl text-center'>We offer Google Ads Services so you get seen FIRST!</p>
      </section>

      
    </div>
  )
}

export default Services;
