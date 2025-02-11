"use client";
import { useState } from "react";
import ProgressBarLeft from "./Enviroment/Progress/ProgressBarLeft";
import ProgressBarRight from "./Enviroment/Progress/ProgressBarRight";
import CTA from "./CTA";

const cstheadings = {
    cstspan: 'text-[#f9004d] block tracking-[.25em] uppercase text-sm',
    csth2: 'text-[50px] font-bold leading-[3rem] text-[#c4cfde] mt-4 mb-0 leading-none'
}
const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <>
    <div className="resume_pg px-[15px]">
        <div className="max-w-7xl my-14 mx-auto">
            <div className='custom_heading text-center' data-aos="fade-up">
                <span className={cstheadings.cstspan}>3+ YEARS OF EXPERIENCE</span>
                <h2 className={cstheadings.csth2}>My Resume</h2>
            </div>
            <div className="tabs-container" data-aos="fade-up">
                <div className="tabs-buttons flex justify-center mt-14">
                    <button
                    className={activeTab === "Tab1" ? "active" : ""}
                    onClick={() => setActiveTab("Tab1")}
                    >
                    Education
                    </button>
                    <button
                    className={activeTab === "Tab2" ? "active" : ""}
                    onClick={() => setActiveTab("Tab2")}
                    >
                    Professional Skills
                    </button>
                    <button
                    className={activeTab === "Tab3" ? "active" : ""}
                    onClick={() => setActiveTab("Tab3")}
                    >
                    Experience
                    </button>
                </div>

        
                <div className="tabs-content">
                    {activeTab === "Tab1" && 
                        <div className="timeline relative">
                            <div className='inner_heading mb-10 mt-14' data-aos="fade-left">
                                <span className="text-[#f9004d] block tracking-[.25em] uppercase text-sm">2012 - 2017</span>
                                <h2 className="text-[36px] text-[#c4cfde] font-semibold">Education Quality</h2>
                            </div>
                            <div className="t_container left_container relative py-3 px-10">  
                                <div className="timeline_content py-5 px-7 rounded-xl relative">
                                    <h2 className="text-[#c4cfde] text-2xl font-semibold mb-2">Alighar Institute of Technology</h2>
                                    <h3 className="text-xl text-[#c4cfde] mb-2">2013</h3>
                                    <p className="text-xl text-[#ff014f] mb-2 font-medium">Diploma</p>
                                    <ul>
                                        <li>CIT</li>
                                        <li>Attended from Sept. 2013 to June 2017</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="t_container right_container relative py-3 px-10">  
                                <div className="timeline_content py-5 px-7 rounded-xl relative">
                                    <h2 className="text-[#c4cfde] text-2xl font-semibold mb-2">Green Land Public School</h2>
                                    <h3 className="text-xl text-[#c4cfde] mb-2">2012</h3>
                                    <p className="text-xl text-[#ff014f] mb-2 font-medium">Computer Science</p>
                                    <ul>
                                        <li>Attended from Sept. 2006 to June 2012</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                    {activeTab === "Tab2" && 
                    <div>
                        <div className='inner_heading mb-10 mt-14' data-aos="fade-left">
                                <span className="text-[#f9004d] block tracking-[.25em] uppercase text-sm">Features</span>
                                <h2 className="text-[36px] text-[#c4cfde] font-semibold">Development Skills</h2>
                            </div>
                        <div className="progress_bars grid grid-cols-2 gap-9">
                            <div className="cst_progress">
                            {ProgressBarLeft.map((values, index) => {
                                return (
                                <div
                                    className="progress_chart relative mb-9"
                                    key={index}
                                >
                                    <h6 className="title text-uppercase">{values.progressTitle}</h6>
                                    <div
                                    className="progress bg-[#212428] h-[17px] rounded-2xl p-1 flex"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Tooltip on top"
                                    >
                                    <div
                                        className="progress-bar flex rounded-2xl flex-col justify-center"
                                        role="progressbar"
                                        style={{ width: `${values.progress}%` }}
                                        aria-valuenow={values.progress}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span className="absolute top-0 right-0 block text-[#c4cfde] text-base">{`${values.progress}%`}</span>
                                    </div>
                                    </div>
                                </div>
                                );
                            })}
                            </div>
                            <div className="cst_progress">
                            {ProgressBarRight.map((values, index) => {
                                return (
                                <div
                                    className="progress_chart relative mb-9"
                                    key={index}
                                >
                                    <h6 className="title text-uppercase">{values.progressTitle}</h6>
                                    <div
                                    className="progress bg-[#212428] h-[17px] rounded-2xl p-1 flex"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Tooltip on top"
                                    >
                                    <div
                                        className="progress-bar flex rounded-2xl flex-col justify-center"
                                        role="progressbar"
                                        style={{ width: `${values.progress}%` }}
                                        aria-valuenow={values.progress}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <span className="absolute top-0 right-0 block text-[#c4cfde] text-base">{`${values.progress}%`}</span>
                                    </div>
                                    </div>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                    </div>}
                    {activeTab === "Tab3" && 
                    <div>
                        <div className="timeline relative">
                            <div className='inner_heading mb-10 mt-14' data-aos="fade-left">
                                <span className="text-[#f9004d] block tracking-[.25em] uppercase text-sm">2019 - Present</span>
                                <h2 className="text-[36px] text-[#c4cfde] font-semibold">Job Experience</h2>
                            </div>
                            <div className="t_container left_container relative py-3 px-10">  
                                <div className="timeline_content py-5 px-7 rounded-xl relative">
                                    <h2 className="text-[#c4cfde] text-2xl font-semibold mb-2">Wamz Tech</h2>
                                    <h3 className="text-xl text-[#c4cfde] mb-2">Mar. 2021 to Present </h3>
                                    <p className="text-xl text-[#ff014f] mb-2 font-medium">Web Developer</p>
                                    <ul>
                                    <li>Create WP sites from scratch according to Mockup design.</li>
                                    <li>Custom designing.</li>
                                    <li>Optimizing and improve performance.</li>
                                    <li>PSD to WordPress using Page Builders.</li>
                                    <li>Created Woocommerce website</li>
                                    <li>Create dynamic site Using theme builders.</li>
                                    <li>
                                        Use different type of page builders (Elementor, WP Bakery, Gutenberg)
                                    </li>
                                    <li>Theme customizing.</li>
                                    <li>Create mobile friendly responsive websites</li>
                                </ul>
                                </div>
                            </div>
                            <div className="t_container right_container relative py-3 px-10">  
                                <div className="timeline_content py-5 px-7 rounded-xl relative">
                                    <h2 className="text-[#c4cfde] text-2xl font-semibold mb-2">Core2Plus</h2>
                                    <h3 className="text-xl text-[#c4cfde] mb-2">Nov. 2019 to Mar. 2021</h3>
                                    <p className="text-xl text-[#ff014f] mb-2 font-medium">WordPress Developer</p>
                                    <ul>
                                        <li>C-Panel Manages</li>
                                        <li>WordPress &amp; Plugin Installation</li>
                                        <li>Create website using Page builders (Elementor, WP Bakery)</li>
                                        <li>Theme Customizations</li>
                                        <li>Plugin Customizations (Static)</li>
                                        <li>Remove Malware in WP Sites</li>
                                        <li>Mobile &amp; Tab responsive issue resolving</li>
                                    </ul>
                                </div>
                            </div>
                        </div>    
                    </div>}
                </div>
            </div>
            <div className='project_btns text-center mt-10 mb-3'>
                <CTA link="/about" name="Resume About Me"/>
            </div>
        </div>
    </div>
    <div className='line h-px w-full max-w-7xl my-14 mx-auto border-[#17191c] border-[1px] border-solid'></div>
    </>
  );
};

export default Resume;
