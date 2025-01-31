import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Servicecontet from '../components/Enviroment/ServicesCr/Servicecontent';


const innerheadings = {
    innerTitle: 'text-5xl text-[#c4cfde] font-semibold uppercase mb-2 tracking-wide',
    innerText: 'list-insidelist-none p-0 inline-flex space-x-4 text-base text-[#c4cfde]',
  };


const page: React.FC = () => {
  return (
    <>
    <div className="inner_banner relative bg-cover text-center">
        <div className="mx-auto max-w-7xl">
          <h3 className={innerheadings.innerTitle}>Services</h3>
          <ul className={innerheadings.innerText}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Services</li>
          </ul>
        </div>
      </div>
        <div className='service-area px-[15px]'>
            <div className='max-w-7xl my-14 mx-auto'>
                <div className='grid grid-cols-3 gap-4 mt-12'>
                    {Servicecontet.map((cards, index) => {
                        return(
                            <div className='service_box p-5 rounded-lg min-h-[300px] flex flex-col justify-center' key={index}>
                                <Image src={cards.cardIcon} alt='Icons' />
                                <h3 className='mt-5 mb-2 text-2xl font-semibold text-[#c4cfde]'>{cards.cardTitle}</h3>
                                <p className='text-base mt-3 mb-2 text-[#c4cfde]'>{cards.cardDetail}</p>
                            </div>
                        );
                    })}
                    </div>
            </div>
        </div>
    </>
  )
}

export default page