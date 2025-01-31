"use client";
import React from 'react'
import Image from 'next/image'
import workicon1 from '../assets/images/work-icon1.png'
import workicon2 from '../assets/images/work-icon2.png'
import workicon3 from '../assets/images/work-icon3.png'
import workicon4 from '../assets/images/work-icon4.png'
import workicon5 from '../assets/images/work-icon5.png'
import workicon6 from '../assets/images/work-icon6.png'

const Workflow: React.FC = () => {
const cstheadings = {
    cstspan: 'text-[#f9004d] block tracking-[.25em] uppercase text-sm',
    csth2: 'text-[50px] font-bold leading-[3rem] text-[#c4cfde] mt-4 mb-0 leading-none'
}

const workflowbox = {
    box: 'h-[220px] flex p-6 flex-col items-center justify-center text-center relative',
    boxTitle: 'text-base text-[#fff] my-3 uppercase font-semibold',
    boxDetail: 'text-sm text-[#c4cfde] m-0'
}

const ourWorkflow = [
    {
        workflowSrc: workicon1,
        workflowTitle: "Planning & Sketching",
        workflowdetail: "Create a project plan outlining tasks, milestones, and timelines, Define the architecture and technology stack for the project."
    },
    {
        workflowSrc: workicon2,
        workflowTitle: "Design & Development",
        workflowdetail: "Create wireframes or mockups to visualize the layout and user interface."
    },
    {
        workflowSrc: workicon3,
        workflowTitle: "Research",
        workflowdetail: "Understand the target audience, market trends, and competitors, Gather insights that will inform the design decisions."
    },
    {
        workflowSrc: workicon4,
        workflowTitle: "Wireframing",
        workflowdetail: "Create low-fidelity wireframes to outline the basic structure and layout, Focus on user flow and navigation."
    },
    {
        workflowSrc: workicon5,
        workflowTitle: "User Experience Testing",
        workflowdetail: "User experience (UX) testing is a critical phase in the development process to ensure that a product or website meets the needs and expectations of its users."
    },
    {
        workflowSrc: workicon6,
        workflowTitle: "security",
        workflowdetail: "Ensuring the security of your website is crucial to protect sensitive data, maintain user trust, and prevent unauthorized access or attacks."
    },
]
    
  return (
   <>
    <div className='work_flow px-[15px]'>
        <div className='max-w-7xl my-14 mx-auto'>
            <div className='custom_heading text-center'>
                <span className={cstheadings.cstspan}>Workflow</span>
                <h2 className={cstheadings.csth2}>Responsive Designs <br/>Developments</h2>
            </div>
            <div className='grid grid-cols-3 mt-12'>
                {ourWorkflow.map((work, index) => {
                    return(
                    <div className={`${workflowbox.box} flowBox`} key={index}>
                        <Image src={work.workflowSrc} alt='Icons' className='max-w-[60px] w-full h-auto' />
                        <h5 className={workflowbox.boxTitle}>{work.workflowTitle}</h5>
                        <p className={workflowbox.boxDetail}>{work.workflowdetail}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
    <div className='line h-px w-full max-w-7xl my-14 mx-auto border-[#17191c] border-[1px] border-solid'></div>
   </>
  )
}

export default Workflow