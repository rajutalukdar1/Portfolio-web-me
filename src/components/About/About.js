import React from 'react';
import about from '../../assets/about.jpg'

const About = () => {
    return (
        <div className='pt-12 pb-8' id='about'>
            <h2 className='text-center text-3xl font-bold text-[#00E7FF] underline'>About</h2>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row mt-20">
                    <img src={about} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Raju Talukdar</h1>
                        <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum <br />
                            expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta,<br /> aut earum nemo
                            recusandae cumque perferendis! Recusandae alias <br /> accusamus atque.</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste <br />
                            perspiciatis distinctio harum adipisci magni fuga voluptatibus consequuntur mollitia delectus alias.
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;