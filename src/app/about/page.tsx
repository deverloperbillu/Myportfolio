"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MySelf from '../assets/images/freelancer-intro.jpg';

const innerheadings = {
  innerTitle: 'text-5xl text-[#c4cfde] font-semibold uppercase mb-2 tracking-wide',
  innerText: 'list-insidelist-none p-0 inline-flex space-x-4 text-base text-[#c4cfde]',
};

const handleDownload = async () => {
  const CV = await (await fetch("/Profile.pdf")).blob();
  const url = URL.createObjectURL(CV);
  Object.assign(document.createElement("a"), {
    href: url,
    download: "Resume.pdf",
  }).click();
};


const Page = () => {
  return (
    <>
      <div className="inner_banner relative bg-cover text-center">
        <div className="mx-auto max-w-7xl">
          <h3 className={innerheadings.innerTitle}>About Us</h3>
          <ul className={innerheadings.innerText}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="inner_about pt-[160px] pb-12 px-[15px]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 items-center">
            <div className="left-block relative z-10">
                <div className='my_intro flex items-center justify-around'>
                    <div className='info'>
                      <h3 className='text-[#ff014f] text-3xl'>3</h3>
                      <p className='text-[#c6c8c9] text-sm font-normal'>Years of<br/> Experience</p>
                    </div>
                    <div className='fit-img'>
                      <Image src={MySelf} alt='About Image' className='w-full h-full object-cover object-center block rounded-3xl max-w-[400px] mx-auto	' />
                    </div>
                </div>
                <div className='sm_shape absolute top-[-100px] left-[0px] w-full h-full z-[-1]'>
                  <svg height="100%" viewBox="0 0 610 547" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z" fill="#1a1a1a"></path></svg>
                </div>
            </div>
            <div className='about_content'>
              <h6 className='text-sm uppercase text-[#f9004d]'>About Me</h6>
              <h2 className='text-5xl font-medium text-white my-3'>I’m Syed Bilal Shahid, a Web Developer</h2>
              <p className='text-[#c4cfde] text-sm'>We shifted our talents to frontier science because we wanted our work to have tangible, human-positive impact.</p>
              <div className='myself_info mt-10 pt-7 border-[#ffffff24] border-t-[1px] border-solid'>
                <ul className='grid grid-cols-2 items-center gap-2 text-[#c4cfde] text-sm mt-6 mb-8'>
                  <li><strong>Name:</strong> Syed Bilal Shahid</li>
                  <li><strong>Address:</strong> Karachi Pakistan</li>
                  <li><strong>Phone:</strong> <a href="tel:03452121308">03452121308</a></li>
                  <li><strong>Email:</strong> <a href="mailto:syedbilalshahid120@gmail.com">syedbilalshahid120@gmail.com</a></li>
                </ul>
                <div className='about_resume'>
                  <button onClick={handleDownload}>Download Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
