import React from 'react';
import about from '../../assets/about.jpg'

const About = () => {
    return (
        <div className='pt-12 pb-8' id='about'>
            <h2 className='text-center text-3xl font-bold text-[#00E7FF] underline'>About</h2>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row mt-20">
                    <img src={about} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold text-red-400">Who Am I !!</h1>
                        <p className="py-6 text-white">My name is Raju. I'm a web developer based <br />
                            in Faridpur, Dhaka, Bangladesh..</p>
                        <span className='text-white'>
                            As a passionate and dedicated MERN stack developer with a strong foundation<br />
                            in web development technologies, I am eager to leverage my skills and knowledge to deliver<br />
                            high-quality and efficient software solutions. With my strong understanding<br />
                            of JavaScript, React.Js, Node.js, and MongoDB, as well as my experience in<br />
                            developing and deploying web applications, I am confident in my ability to contribute to the <br />
                            success of  any organization. I am also a quick learner with excellent communication and<br />
                            problem-solving skills, and I am always looking for opportunities to grow and improve as a developer.<br />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;