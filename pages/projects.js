import Head from 'next/head';
import Header from '@/components/Header';
import React from 'react';

import { motion } from "framer-motion";
import Image from 'next/image';

const Projects = () => {

  return (
    <div className='text-white h-screen snap-y snap-mandatory overflow-scroll'>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id='project-1' className='snap-start h-screen flex flex-col
       items-center pt-28'>
        <div id='top' className='text-2xl sm:text-3xl md:text-4xl flex flex-row
         items-center mx-auto py-24'>
          <motion.div
            className='px-5 mx-auto'
            id='left-1'
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
              delay: 1
            }}
          >
            <h4>Youtube</h4>
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
            <Image src="/pngaaa.com-112249.png" alt='' height={120} width={120} />
          </motion.div>
        </div>

        <p id='bottom' className='text-xl sm:text-2xl text-center px-5'>This is
          where you could put the first of your own custom projects or services.</p>
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'http://youtube.com';
        }} className='bg-[#9A0000] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>View Project</button>
      </section>

      <section id='project-2' className='snap-start h-screen flex flex-col
       items-center pt-28'>
        <div id='top' className='text-2xl sm:text-3xl md:text-4xl
         flex flex-row items-center mx-auto py-24'>
          <motion.div
            className='px-5 mx-auto'
            id='left-2'
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
              delay: 1
            }}
          >
            <h4>Google</h4>
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
            <Image src="/pngaaa.com-1689978.png" alt='' height={120} width={120} />
          </motion.div>
        </div>

        <p id='bottom-2' className='text-xl sm:text-2xl text-center px-5'>This is
          where you could put the second of your own custom projects or services.</p>
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'http://google.com';
        }} className='bg-[#9A0000]
       mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md text-black
       font-bold text-lg'>View Project</button>
      </section>

      <section id='project-3' className='snap-center h-screen flex flex-col 
       items-center pt-28'>
        <div id='top-2' className='text-2xl sm:text-3xl md:text-4xl
         flex flex-row items-center py-24'>
          <motion.div
            className='p-2 mx-auto'
            id='left-3'
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
              delay: 1
            }}
          >
            <h4>Netflix</h4>
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
            <Image src="/pngaaa.com-4212740.png" alt='' height={120} width={120} />
          </motion.div>
        </div>

        <p id='bottom-3' className='text-xl sm:text-2xl text-center px-5'>This is
          where you could put the second of your own custom projects or services.</p>
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href = 'http://netflix.com';
        }} className='bg-[#9A0000]
      mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md text-black font-bold
      text-lg'>View Project</button>
      </section>
    </div>
  );
}

export default Projects;
