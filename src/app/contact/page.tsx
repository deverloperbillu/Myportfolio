import React from 'react'
import Link from 'next/link';


const innerheadings = {
    innerTitle: 'text-5xl text-[#c4cfde] font-semibold uppercase mb-2 tracking-wide',
    innerText: 'list-insidelist-none p-0 inline-flex space-x-4 text-base text-[#c4cfde]',
  };

const page: React.FC = () => {
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
        <div className='max-w-5xl my-14 mx-auto' data-aos="fade-left">
            <div className='innerhome_form'>
                <div className='main_form p-5 rounded-lg relative'>
                    <form>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='form_control'>
                                <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-name'>Your Name</label>
                                <input type='text' id='your-name' name='form_name' className='w-full' required />
                            </div>
                            <div className='form_control'>
                                <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-phone'>Your Phone</label>
                                <input type='tel' id='your-phone' name='form_phone' className='w-full' required />
                            </div>
                        </div>
                        <div className='form_control'>
                            <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-email'>Your Email</label>
                            <input type='tel' id='your-email' name='form_email' className='w-full' required />
                        </div>
                        <div className='form_control'>
                            <label className='capitalize font-medium text-[#a0a8b3] mb-2 block text-sm' htmlFor='your-textarea'>Message</label>
                            <textarea id="message" name="message" className='w-full'></textarea>
                        </div>
                        <div className='form_btn'>
                        <button type="submit" className='text-[#ff014f] text-sm font-normal inline-block py-5 px-10 rounded-md uppercase mt-4'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default page