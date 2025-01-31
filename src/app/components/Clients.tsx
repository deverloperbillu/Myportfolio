"use client";
import { useState } from "react";
import Image from "next/image";
import HTMLToolsArr from "./Enviroment/ClientsArr/HTMLToolsArr";
import WordPressToolsArr from "./Enviroment/ClientsArr/WordPressToolsArr";
import ReactToolsArr from "./Enviroment/ClientsArr/ReactToolsArr";
const cstheadings = {
    cstspan: 'text-[#f9004d] block tracking-[.25em] uppercase text-sm',
    csth2: 'text-[50px] font-bold leading-[3rem] text-[#c4cfde] mt-4 mb-0 leading-none'
}
const Clients: React.FC = () => {
const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <>
        <div className='clients_pg px-[15px]'>
            <div className='max-w-7xl my-14 mx-auto'>
                <div className='custom_heading'>
                    <span className={cstheadings.cstspan}>Awesome Tools I Work On</span>
                    <h2 className={cstheadings.csth2}>Popular Tools</h2>
                </div>
                <div className='clients_tabs mt-14'>
                    <div className='flex flex-wrap md:flex-nowrap gap-6'>
                        <div className='client_tabbutton w-full md:w-1/3 h-full'>
                            <button className={activeTab === "Tab1" ? "active" : ""} onClick={() => setActiveTab("Tab1")}>Custom Front-End</button>
                            <button className={activeTab === "Tab2" ? "active" : ""} onClick={() => setActiveTab("Tab2")}>Wordpress Websites</button>
                            <button className={activeTab === "Tab3" ? "active" : ""} onClick={() => setActiveTab("Tab3")}>React Web App</button>
                        </div>
                        <div className="client_tabcontent w-full md:w-2/3">
                            {activeTab === "Tab1" && 
                            <>
                                <div className="grid grid-cols-3 gap-4">
                                    {HTMLToolsArr.map((value, index) => {
                                        return(
                                            <div className="client_card flex flex-col h-full items-center justify-center py-10 rounded-lg text-center" key={index}>
                                                <Image src={value.ClientImage} className="w-full max-w-[60px] mx-auto" alt="Clients"/>
                                                <h4 className="text-3xl text-[#c4cfde] mb-0 mt-2">{value.ClientName}</h4>
                                                <div className="card_line h-px w-full my-4 border-[#17191c] border-[1px] border-solid"></div>
                                                <h5 className="text-lg text-[#7c838e] font-light">{value.ClientName}</h5>
                                            </div>     
                                        );
                                    })}
                                </div>
                            </>}
                            {activeTab === "Tab2" && 
                            <>
                                <div className="grid grid-cols-3 gap-4">
                                    {WordPressToolsArr.map((value, index) => {
                                        return(
                                            <div className="client_card flex flex-col h-full items-center justify-center py-10 rounded-lg text-center" key={index}>
                                                <h4 className="text-3xl text-[#c4cfde] mb-0 mt-2">{value.ClientName}</h4>
                                                <div className="card_line h-px w-full my-4 border-[#17191c] border-[1px] border-solid"></div>
                                                <h5 className="text-lg text-[#7c838e] font-light">{value.ClientName}</h5>
                                            </div>     
                                        );
                                    })}
                                </div>
                            </>}
                            {activeTab === "Tab3" &&
                                <>
                                    <div className="grid grid-cols-3 gap-4">
                                    {ReactToolsArr.map((value, index) => {
                                        return(
                                            <div className="client_card flex flex-col h-full items-center justify-center py-10 rounded-lg text-center" key={index}>
                                                <h4 className="text-3xl text-[#c4cfde] mb-0 mt-2">{value.ClientName}</h4>
                                                <div className="card_line h-px w-full my-4 border-[#17191c] border-[1px] border-solid"></div>
                                                <h5 className="text-lg text-[#7c838e] font-light">{value.ClientName}</h5>
                                            </div>     
                                        );
                                    })}
                                </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='line h-px w-full max-w-7xl my-14 mx-auto border-[#17191c] border-[1px] border-solid'></div>
    </>
  )
}

export default Clients
