import React from 'react';
import perfil from '../../assets/perfil.png'
import pdf from '../../assets/Md.Raju Talukdar.pdf';

const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse text-white">
                    <img src={perfil} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Hi,I'am <span className='text-blue-600'>Raju Talukdar</span><br /> Full Stack
                            Web <br /> Developer</h1>
                        <p className="py-6"></p>
                        <a className="btn btn-primary" href={pdf} download="Portfolio">download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;