import Header from '@/components/Header';
import { React, useState } from 'react';

import { useForm } from "react-hook-form";
import { init, sendForm } from 'emailjs-com';
init('iYYOjJnGDY_PcNFl0');

const Contact = () => {
  const { register, handleSubmit } = useForm();
  
  const [contactNumber, setContactNumber] = useState("000000");
  
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
  const onSubmit = formData => {
    generateContactNumber();
  sendForm('contact_form', 'template_1g6tpbt', '#contact-form')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
  }

  return (
    <div>
      <Header />
      <p className='text-[rgb(251,247,245)] text-2xl font-semibold text-center
       decoration-[#F7AB0A] underline'>Send us an Email!</p>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-96 mx-auto p-12 sm:w-96'>
      <input type='hidden' name='contact_number' value={contactNumber} />
        <input
        {...register("name")}
        className='contactInput'
        type="text"
        placeholder='Name'
        minLength="1"
        />

        <input
        {...register("email")}
        className='contactInput'
        type="email"
        placeholder='Email Address'
        minLength="1"
        />

        <input
        {...register("subject")}
        className='contactInput'
        type="text"
        placeholder='Subject'
        minLength="1"
        />

        <textarea
        {...register("message")}
        className='contactInput'
        placeholder='Message'
        minLength="1"
        maxLength="1500"
        />

        <button type='submit' className='bg-[#F7AB0A] py-3 px-10 rounded-md
           text-black font-bold text-lg'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
