import React from 'react';
// import MyProjects from './MyProjects';
import img1 from '../../assets/web-img/vroom-car.png'
import img2 from '../../assets/web-img/EduSphere.png'
import img3 from '../../assets/web-img/CareerIt.png'

const MyProject = [
    {
        "img": img1,
        "name": "Vroom Car",
        "live_Site": "https://assignment-no-12-57281.web.app/"
    },
    {
        "img": img2,
        "name": "EduSphere",
        "live_Site": "https://assignment-no-11-f2bd1.web.app/"
    },
    {
        "img": img3,
        "name": "CareerIt",
        "live_Site": "https://assignment-no-10-b385a.web.app/"
    },
]

const Projects = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-[#00E7FF] underline '>Projects</h2>
            <div id='projects' className='max-w-screen-xl mx-auto my-16'>
                <p className='text-lg font-bold text-center text-[#FF0080] poppies_fonts'>Showcasing some of my best work</p>
                <h1 className='jost_fonts mb-16 text-[#D0D1D1] text-center text-6xl'>Recent Work.</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                    {
                        MyProject?.map((project, i) => <div
                            key={i}
                            className="rounded-md shadow-xl image-full">
                            <figure className='flex justify-center items-center '><img className='w-full h-48' src={project.img} alt="" /></figure>
                            <div className="card-actions text-lg font-semibold justify-around mt-2 text-white w-full bg-[#12cad0]">
                                <div className='flex'>
                                    <p>{project.name}</p>
                                    <p className='ml-5'>Details</p>
                                </div>
                                <div>
                                    <a href={project.live_Site} target="_blank" rel="noreferrer">Live Site Link</a>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;