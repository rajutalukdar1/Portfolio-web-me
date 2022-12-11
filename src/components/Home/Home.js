import React from 'react';
import perfil from '../../assets/perfil.png';
import pdf from '../../assets/Md.Raju Talukdar.pdf';
import { Typewriter } from 'react-simple-typewriter';
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import './Home.css'


const Home = () => {
    return (
        <div id='home'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse text-white custom-padding">
                    <img src={perfil} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Hi,I'am <span style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Raju Talukdar']}
                                loop={1}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span><br /> <span style={{ color: '#7FE9DE', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Web Developer', 'Full-Stack Developer', 'Front-End Developer', 'MERN Developer', 'React Developer']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h1>
                        <br />
                        <p className="py-6"></p>
                        <a className="btn btn-outline text-white hover:bg-fuchsia-500 mb-5 lg:mb-0" href={pdf} download="Portfolio">Download Resume</a>
                    </div>
                    {/* icons */}
                </div>

            </div>
            <div className='flex'>
                <a className='mr-5 text-3xl' href="https://www.linkedin.com/in/raju-talukdar/" target="_blank" ><FaLinkedin></FaLinkedin></a>
                <a className='mr-5 text-3xl' href="https://github.com/rajutalukdar1" target="_blank" ><FaGithub></FaGithub></a>
                <a className='mr-5 text-3xl' href="https://www.facebook.com/Rajuvai013" target="_blank" ><FaFacebook></FaFacebook></a>
                <a className='mr-5 text-3xl' href="https://www.instagram.com/raju_talukdar__/" target="_blank" ><FaInstagramSquare></FaInstagramSquare></a>
            </div>
        </div>
    );
};

export default Home;