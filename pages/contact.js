import Header from '@/components/Header';
import React from 'react';

import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = formData => {
    window.location.href = `mailto:nathanparebusiness@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  }

  return (
    <div>
      <Header />
      <p className='text-[rgb(251,247,245)] text-2xl font-semibold text-center
       decoration-[#F7AB0A] underline'>Send us an Email!</p>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-96 mx-auto p-12 sm:w-96'>

        <input
        {...register("name")}
        className='contactInput'
        type="text"
        placeholder='Name'
        />

        <input
        {...register("email")}
        className='contactInput'
        type="email"
        placeholder='Email Address'
        />

        <input
        {...register("subject")}
        className='contactInput'
        type="text"
        placeholder='Subject'
        />

        <textarea
        {...register("message")}
        className='contactInput'
        placeholder='Message'
        />

        <button type='submit' className='bg-[#F7AB0A] py-3 px-10 rounded-md
           text-black font-bold text-lg'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
