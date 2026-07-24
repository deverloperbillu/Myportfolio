"use client";
import React from 'react'
import Image from 'next/image'
import Socialmedialink from './Enviroment/Socialmedialink';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { IMAGES } from '@/lib/images';

interface ContactFormValues {
    form_name: string;
    form_phone: string;
    form_email: string;
    message: string;
}

const cstheadings = {
    cstspan: 'text-[#f9004d] block tracking-[.25em] uppercase text-sm',
    csth2: 'text-[50px] font-bold leading-[3rem] text-[#c4cfde] mt-4 mb-0 leading-none'
}
const Contactus = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>();
  const onSubmit = async (data: ContactFormValues) => {

      try {

     const response = await axios.post("/api/contactmail", {
       ...data
     });

      console.log(response.data);
     if (response.data.success) {
       reset();
     }
   } catch (error) {
   console.log(error);
}
  };
  return (
    <>
        <div className='home_contactus px-[15px]'>
            <div className='max-w-7xl my-14 mx-auto'>
                <div className='custom_heading text-center'>
                    <span className={cstheadings.cstspan}>Contact</span>
                    <h2 className={cstheadings.csth2}>Contact With Me</h2>
                </div>
                <div className='home_form mt-14'>
                    <div className='flex flex-wrap md:flex-nowrap gap-8'>
                        <div className='w-full md:w-1/3'>
                            <div className='contact-about-area p-5 rounded-lg relative'>
                                <div className='thumb'>
                                    <Image src={IMAGES.CONTACT} width={300} height={300} alt='Contact Image' className='w-full h-full rounded-lg' />
                                </div>
                                <div className='our_info mt-3'>
                                    <h2 className='text-3xl text-[#878e99] mb-3'>Syed Bilal Shahid</h2>
                                    <p className='text-base	text-[#878e99] mb-2'>Front-End Web Developer</p>
                                    <p className='text-base	text-[#878e99] mb-2'>Contact with me via:</p>
                                    <ul className='text-base text-[#878e99] inline-block'>
                                        <li>Email: <a href="mailto:syedbilalshahid120@gmail.com" className='text-white mb-3 inline-block'>syedbilalshahid120@gmail.com</a></li>
                                        <li>Phone: <a href="tel:03452121308" className='text-white mb-3 inline-block'>03452121308</a></li>
                                    </ul>
                                </div>
                                <div className='social_media'>
                                <p>FIND WITH ME</p>
                                    <ul className='hero_icons list-insidelist-none p-0 inline-flex space-x-4 mt-5'>
                                    <li><a href={Socialmedialink[1].linkedinlink} target="_blank" rel="noopener noreferrer"><Image src={IMAGES.LINKEDIN} width={100} height={100} alt='Icons'/></a></li>
                                        <li><a href={Socialmedialink[2].githublink} target="_blank" rel="noopener noreferrer"><Image src={IMAGES.GITHUB} width={100} height={100} alt='Icons'/></a></li>
                                        <li><a href={Socialmedialink[3].whatsapplink} target="_blank" rel="noopener noreferrer"><Image src={IMAGES.WHATSAPP} width={100} height={100} alt='Icons'/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full md:w-2/3'>
                            <div className='main_form p-5 rounded-lg relative'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                        <div className='form_control'>
                                            <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-name'>Your Name</label>
                                            <input type='text' className='w-full' {...register("form_name", { required: "Name Is Required" })} />
                                            {errors.form_name && ( <p className='text-red-500 text-sm mt-1'>{ errors.form_name.message }</p>)}
                                        </div>
                                        <div className='form_control'>
                                            <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-phone'>Your Phone</label>
                                            <input type='tel' className='w-full' {...register("form_phone", { required: "Phone Is Required" })} />
                                            {errors.form_phone && ( <p className='text-red-500 text-sm mt-1'>{ errors.form_phone.message }</p>)}
                                        </div>
                                    </div>
                                    <div className='form_control'>
                                        <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-email'>Your Email</label>
                                        <input type='email' className='w-full' {...register("form_email", { required: "Email Is Required" })} />
                                        {errors.form_email && ( <p className='text-red-500 text-sm mt-1'>{ errors.form_email.message } </p>)}
                                    </div>
                                    <div className='form_control'>
                                        <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-textarea'>Message</label>
                                        <textarea className='w-full' {...register("message", { required: "Message is required" })} />
                                         {errors.message && ( <p className='text-red-500 text-sm'> {errors.message.message} </p> )}
                                    </div>
                                    <div className='form_btn'>
                                    <button type="submit" className='text-[#ff014f] text-sm font-normal inline-block py-5 px-10 rounded-md uppercase mt-4'>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='line h-px w-full max-w-7xl my-14 mx-auto border-[#17191c] border-[1px] border-solid'></div>
    </>
  )
}

export default Contactus
