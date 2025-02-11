"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioCr from '../components/Enviroment/Ourportfolio/PortfolioCr';
import PortfolioInnerCr from '../components/Enviroment/Ourportfolio/PortfolioInnerCr';


const innerheadings = {
    innerTitle: 'text-5xl text-[#c4cfde] font-semibold uppercase mb-2 tracking-wide',
    innerText: 'list-insidelist-none p-0 inline-flex space-x-4 text-base text-[#c4cfde]',
  };


const Page: React.FC = () => {
const [selectedProject, setSelectedProject] = useState<typeof PortfolioInnerCr[0] | null>(null);

const handleProjectClick = (projectId: string) => {
    const project = PortfolioInnerCr.find(proj => proj.id === projectId );
    if(project){
        setSelectedProject(project);
    }else{
        setSelectedProject(null);
    }
    
};
const closepopup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSelectedProject(null);
};
  return (
    <>
    <div className="inner_banner relative text-center">
        <div className="mx-auto max-w-7xl">
          <h3 className={innerheadings.innerTitle}>Portfolios</h3>
          <ul className={innerheadings.innerText}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Portfolios</li>
          </ul>
        </div>
      </div>
      <div className='portfolio_area px-[15px]'>
        <div className='max-w-7xl my-14 mx-auto'>
            <div className='grid grid-cols-3 gap-4 mt-12'>
                {PortfolioCr.map((project, index) => {
                    return(
                        <div className='project_card p-5 rounded-lg' key={index} onClick={() => handleProjectClick(project.id)}>
                            <span id="get_id" className='hidden'>{project.id}</span>
                            <div className='project_img rounded-lg overflow-hidden'>
                                <figure>
                                    <Image src={project.portfolioSrc} className='min-h-[220px] object-cover h-[220px] object-top rounded-lg ease-linear duration-300' alt='Project Images' />
                                </figure>
                            </div>
                            <div className='project_details'>
                                <h5 className='text-[#ff014f] text-base capitalize mt-5 mb-2'>{project.portfoliotitle}</h5>
                                <p className='text-base text-[#c4cfde]'>{project.portfoliocontent}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {selectedProject && (
            <div className='our_workportfolio'>
                <div className='project-popup fixed top-0 left-0 w-full h-full bg-[#17161a] z-[99]'>
                  <div className='project-body flex justify-center items-center w-full h-full'>
                    <div className='project-show w-full h-[500px] max-w-[1200px] px-10 flex items-center rounded-lg relative'>
                    <a href="#" className="cls-project absolute top-5 right-5 inline-block w-[50px] h-[40px] bg-black" onClick={closepopup}></a>
                      <div className='grid grid-cols-2 gap-4'>
                          <div className='project-gallery'>
                            <figure><Image className='h-[400px] object-top object-cover w-full rounded-lg' src={selectedProject.ourworkprojectsSrc} alt={selectedProject.ourworkprojectsTitle} /></figure>
                          </div>
                          <div className='project-info'>
                            <h5 className='text-[#878e99] text-lg font-medium'>Our Projects</h5>
                            <h3 className='text-3xl text-[#c4cfde] mb-3 mt-0 capitalize font-semibold'>{selectedProject.ourworkprojectsTitle}</h3>
                            <p className='text-sm mb-3'>{selectedProject.ourworkprojectsDesp}</p>
                            <ul className='inline-flex items-baseline gap-6'>
                              <li>
                                <h6 className='text-lg font-medium text-[#ff014f] mb-2'>Design</h6>
                                <p className='text-sm'>{selectedProject.projectsDesigndetail}</p>
                              </li>
                              <li>
                                <h6 className='text-l font-medium text-[#ff014f] mb-2'>Frontend</h6>
                                <p className='text-sm'>{selectedProject.projectsFrontenddetail}</p>
                              </li>
                              <li>
                                <h6 className='text-lg font-medium text-[#ff014f] mb-2'>Backend</h6>
                                <p className='text-sm'>{selectedProject.projectsBackenddetail}</p>
                              </li>
                            </ul>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
    </div>
    </>
  )
}

export default Page