import React from 'react';
import blog from '../assets/work5.jpg';

const Blog = () => {
    return (
        <div id='blog'>
            <h2 className='text-center text-3xl font-bold text-[#00E7FF] underline '>Blog</h2>
            <div className="hero mt-10" style={{ backgroundImage: `url(${blog})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Blog Is Coming Soon...........</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;