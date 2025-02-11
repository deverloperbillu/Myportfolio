import React from 'react'
import Image from 'next/image'
import contactImage from '../assets/images/contact_img.png';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.png';
import whatsapp from '../assets/images/whatsapp.png';
import Socialmedialink from './Enviroment/Socialmedialink';


const cstheadings = {
    cstspan: 'text-[#f9004d] block tracking-[.25em] uppercase text-sm',
    csth2: 'text-[50px] font-bold leading-[3rem] text-[#c4cfde] mt-4 mb-0 leading-none'
}
const Contactus = () => {
  return (
    <>
        <div className='home_contactus px-[15px]'>
            <div className='max-w-7xl my-14 mx-auto'>
                <div className='custom_heading text-center' data-aos="fade-up">
                    <span className={cstheadings.cstspan}>Contact</span>
                    <h2 className={cstheadings.csth2}>Contact With Me</h2>
                </div>
                <div className='home_form mt-14'>
                    <div className='flex flex-wrap md:flex-nowrap gap-8'>
                        <div className='w-full md:w-1/3'>
                            <div className='contact-about-area p-5 rounded-lg relative'>
                                <div className='thumb'>
                                    <Image src={contactImage} alt='Contact Image' className='w-full h-full rounded-lg' />
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
                                    <li><a href={Socialmedialink[1].linkedinlink} target="_blank" rel="noopener noreferrer"><Image src={linkedin} alt='Icons'/></a></li>
                                        <li><a href={Socialmedialink[2].githublink} target="_blank" rel="noopener noreferrer"><Image src={github} alt='Icons'/></a></li>
                                        <li><a href={Socialmedialink[3].whatsapplink} target="_blank" rel="noopener noreferrer"><Image src={whatsapp} alt='Icons'/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full md:w-2/3'>
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
            </div>
        </div>
        <div className='line h-px w-full max-w-7xl my-14 mx-auto border-[#17191c] border-[1px] border-solid'></div>
    </>
  )
}

export default Contactus
