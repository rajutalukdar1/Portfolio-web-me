import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const projectDetails = useLoaderData();
    const { img1, img2, img3, img4, details, client_site_link, server_site_link } = projectDetails[0]
    // console.log(projectDetails);

    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-8 mt-16'>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img1} alt="Shoes" /></figure>
                </div>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img2} alt="Shoes" /></figure>
                </div>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img3} alt="Shoes" /></figure>
                </div>
                <div className="w-full shadow-xl image-full">
                    <figure><img src={img4} alt="Shoes" /></figure>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
                <a className='btn btn-outline btn-info mr-10' href={client_site_link}>Client Code Link</a>
                <a className='btn btn-outline btn-info' href={server_site_link}>Server Code Link</a>
            </div>

            <div>

                {
                    details.map(detail => <li>

                    </li>)
                }

                {/* <div className="chat chat-start my-8">
                    <div className="chat-bubble bg-[#FF0080] text-white">{details[0]}</div>
                    <div className="chat-bubble bg-white text-black mt-4">{details[1]}</div>
                    <div className="chat-bubble bg-[#FF0080] text-white mt-4">{details[2]}</div>
                    <div className="chat-bubble bg-white text-black mt-4">{details[3]}</div>
                </div> */}
            </div>


        </div>
    );
};

export default ProjectDetails;