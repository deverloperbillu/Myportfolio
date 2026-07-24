"use client";
import React from 'react'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface InnerContactFormValues {
    form_name: string;
    form_phone: string;
    form_email: string;
    message: string;
}

const innerheadings = {
    innerTitle: 'text-5xl text-[#c4cfde] font-semibold uppercase mb-2 tracking-wide',
    innerText: 'list-insidelist-none p-0 inline-flex space-x-4 text-base text-[#c4cfde]',
  };

const Contact = () => {
const {register, handleSubmit, formState: { errors, isSubmitting}, reset } = useForm<InnerContactFormValues>();
const onSubmit = async (data: InnerContactFormValues) => {
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
}

  return (
    <>
    <div className="inner_banner relative text-center">
        <div className="mx-auto max-w-7xl">
          <h3 className={innerheadings.innerTitle}>Contact Us</h3>
          <ul className={innerheadings.innerText}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className='InnerContact px-[15px]'>
        <div className='max-w-5xl my-14 mx-auto'>
            <div className='innerhome_form'>
                <div className='main_form p-5 rounded-lg relative'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='form_control'>
                                <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-name'>Your Name</label>
                                <input type='text' className='w-full' {...register('form_name', { required: "Name is required" })} />
                                {errors.form_name && ( <p className='text-red-500 text-sm mt-1'>{ errors.form_name.message }</p>)}
                            </div>
                            <div className='form_control'>
                                <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-phone'>Your Phone</label>
                                <input type='tel' className='w-full' {...register('form_phone', { required: "Phone is required" })} />
                                {errors.form_phone && ( <p className='text-red-500 text-sm mt-1'>{ errors.form_phone.message }</p>)}
                            </div>
                        </div>
                        <div className='form_control'>
                            <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-email'>Your Email</label>
                            <input type='email' className='w-full' {...register('form_email', { required: "Email is required", pattern: /^\S+@\S+$/i })} />
                            {errors.form_email && ( <p className='text-red-500 text-sm mt-1'>{ errors.form_email.message }</p>)}
                        </div>
                        <div className='form_control'>
                            <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-textarea'>Message</label>
                            <textarea className='w-full' {...register('message', { required: "Message is required" })}></textarea>
                            {errors.message && ( <p className='text-red-500 text-sm mt-1'>{ errors.message.message }</p>)}
                        </div>
                        <div className='form_btn relative inline-block'>
                        <button type="submit" disabled={isSubmitting} className='text-[#ff014f] text-sm font-normal inline-block py-5 px-10 rounded-md uppercase mt-4'>
                          {isSubmitting ? (
          <>
            <div
              className="
                w-5
                h-5
                border-2
                border-white
                border-t-transparent
                rounded-full
                animate-spin
                absolute
                right-4
              "
            />

            Sending...
          </>
        ) : (
          "Send Message"
        )}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact