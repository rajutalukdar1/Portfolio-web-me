import React from 'react';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiJsonwebtokens, SiMongodb, SiTailwindcss } from "react-icons/si";
import Skills from '../../assets/work3.jpg'

const Skill = () => {
    return (
        <div className='pt-12 pb-8 ' id='skills'>
            <h2 className='text-center text-3xl font-bold text-[#00E7FF] underline'>Skills</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row mt-20">

                    <div className='text-center'>
                        <h1 className="text-3xl lg:text-5xl font-bold ">Profesional Skills</h1>
                        <p className="py-6 text-sm text-white">HTML5,CSS3,JAVASCRIPT,BOOTSTRAP, <br />TAILWIND,REACT.JS, NODE.JS,
                            EXPRESS.JS,MONGODB,<br />JSON WEB TOKEN, TAILWIND COMPONENTS DAISYUI<br />
                            ,and other Fremwork using .
                        </p>
                    </div>
                    <img src={Skills} className="sm:w-80 h-72 lg:max-w-sm  rounded-lg" alt='' />
                </div>
            </div>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-auto gap-10'>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[95%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <FaHtml5></FaHtml5>
                                    <div className='flex justify-between items-center'>
                                        <span>HTML5</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                95%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[55%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <FaCss3Alt></FaCss3Alt>
                                    <div className='flex justify-between items-center'>
                                        <span>CSS3</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                85%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[75%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <FaJava></FaJava>
                                    <div className='flex justify-between items-center'>
                                        <span>JAVASCRIPT</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                75%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[85%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <FaBootstrap></FaBootstrap>
                                    <div className='flex justify-between items-center'>
                                        <span>BOOTSTRAP</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                85%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[87%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <SiTailwindcss></SiTailwindcss>
                                    <div className='flex justify-between items-center'>
                                        <span>TAILWIND CSS</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                87%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[82%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <FaReact></FaReact>
                                    <div className='flex justify-between items-center'>
                                        <span>REACT.JS</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                82%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[55%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <FaNodeJs></FaNodeJs>
                                    <div className='flex justify-between items-center'>
                                        <span>NODE.JS</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                55%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[52%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <SiExpress></SiExpress>
                                    <div className='flex justify-between items-center'>
                                        <span>EXPRESS.JS</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                52%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20 ">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[85%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <SiMongodb></SiMongodb>
                                    <div className='flex justify-between items-center'>
                                        <span>MongoDB</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                85%
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="bg-light relative h-[10px] w-full rounded-2xl">
                        <div className="bg-primary absolute top-0 left-0 h-full w-[58%] rounded-2xl">
                            <span
                                className="bg-primary absolute   bottom-full mb-2 rounded-sm py-1 px-2 text-xs font-semibold text-white"
                            >
                                <div className="flex items-center">
                                    <SiJsonwebtokens></SiJsonwebtokens>
                                    <div className='flex justify-between items-center'>
                                        <span>JWT VERIFY</span>
                                    </div>
                                </div>
                                <span
                                    className="bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm"
                                ></span>
                                58%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;