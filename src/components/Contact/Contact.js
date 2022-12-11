import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
            <section className='pt-12 pb-8'>
                <h2 className='text-center text-3xl font-bold text-[#00E7FF] underline'>Contact</h2>
                <div className='grid max-w-5xl justify-items-center'>
                    <form action="https://formspree.io/f/mbjbnwyw" method="POST" className='w-80 pt-8'>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered input-success w-full max-w-xs mb-4" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered input-success w-full max-w-xs mb-4" />
                        <textarea name='message' className="textarea textarea-success w-full" placeholder="Message"></textarea>
                        <button type="submit" className='btn btn-primary w-full'>submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;