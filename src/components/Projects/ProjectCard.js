import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {

    return (
        <div
            className="rounded-md shadow-xl image-full">
            <figure className='flex justify-center items-center '><img className='w-full h-48' src={project.img} alt="" /></figure>
            <div className="card-actions text-lg font-semibold justify-around mt-2 text-white w-full ">
                <p className=' text-white border p-2 rounded-md'>{project.name}</p>
                <Link className='btn btn-outline text-white hover:bg-pink-400' to={`/project/${project.id}`}>Details</Link>
                <a className='btn btn-outline text-white hover:bg-pink-400' href={project.live_Site} target="_blank" rel="noreferrer">Live Site Link</a>
            </div>
        </div>
    );
};

export default ProjectCard;