"use client";
import React from 'react'
import Image from 'next/image';
import Servicecontet from './Enviroment/ServicesCr/Servicecontent';
import CTA from './CTA';

const cstheadings = {
    cstspan: 'text-[#f9004d] block tracking-[.25em] uppercase text-sm',
    csth2: 'text-[50px] font-bold leading-[3rem] text-[#c4cfde] mt-4 mb-0 leading-none'
}

const Services: React.FC = () => {
const limit = 3;    
  return (
    <>
        <div className='service-area px-[15px]'>
            <div className='max-w-7xl my-14 mx-auto'>
                <div className='custom_heading'>
                    <span className={cstheadings.cstspan}>Features</span>
                    <h2 className={cstheadings.csth2}>What I Do</h2>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-12 w-full'>
                    {Servicecontet.slice(0, limit).map((cards, index) => {
                        return(
                            <div className='service_box p-5 rounded-lg min-h-[300px] flex flex-col justify-center w-full' key={index}>
                                <Image src={cards.cardIcon} alt='Icons' />
                                <h3 className='mt-5 mb-2 text-2xl font-semibold text-[#c4cfde]'>{cards.cardTitle}</h3>
                                <p className='text-base mt-3 mb-2 text-[#c4cfde]'>{cards.cardDetail}</p>
                            </div>
                        );
                    })}
                 </div>
            </div>
            <div className='project_btns text-center mt-10 mb-3'>
                <CTA link="/services" name="View Services"/>
            </div>
        </div>
        <div className='line h-px w-full max-w-7xl my-14 mx-auto border-[#17191c] border-[1px] border-solid'></div>
    </>
  )
}

export default Services