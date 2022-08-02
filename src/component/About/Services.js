import React from 'react';
import marketing from '../../assets/about/Services/digital-marketing.png'

const Services = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-xl font-semibold'>OUR SERVICES</h2>
                <h2 className='text-3xl font-semibold'>You Take Growth For Business</h2>
            </div>

            <div className='grid grid-cols-3 gap-7 mt-10'>
                <div className='text-center p-10 rounded-3xl shadow-xl'>
                    <img className='w-28 mx-auto' src={marketing} alt="" />
                    <h2 className='text-xl font-semibold my-2'>Content Marketing</h2>
                    <p className='text-sm'>You can provide the answers that your potential customers are trying to find, so you can become the industry.</p>
                </div>
                <div className='text-center  p-10 rounded-3xl shadow-xl'>
                    <img className='w-28 mx-auto' src={marketing} alt="" />
                    <h2 className='text-xl font-semibold my-2'>Social Marketing</h2>
                    <p className='text-sm'>Create and manage top-performing social campaigns and start developing a dedicated customer fan base.</p>
                </div>
                <div className='text-center  p-10 rounded-3xl shadow-xl'>
                    <img className='w-28 mx-auto' src={marketing} alt="" />
                    <h2 className='text-xl font-semibold my-2'>App Development</h2>
                    <p className='text-sm'>Create, publish, and promote engaging content to generate more traffic and build a dedicated community.</p>
                </div>
                <div className='text-center  p-10 rounded-3xl shadow-xl'>
                    <img className='w-28 mx-auto' src={marketing} alt="" />
                    <h2 className='text-xl font-semibold my-2'>SEO Optimization</h2>
                    <p className='text-sm'>Get more website traffic, more customers, and more online visibility with powerful SEO services.</p>
                </div>
                <div className='text-center  p-10 rounded-3xl shadow-xl'>
                    <img className='w-28 mx-auto' src={marketing} alt="" />
                    <h2 className='text-xl font-semibold my-2'>Web Development</h2>
                    <p className='text-sm'>Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated.</p>
                </div>
                <div className='text-center  p-10 rounded-3xl shadow-xl'>
                    <img className='w-28 mx-auto' src={marketing} alt="" />
                    <h2 className='text-xl font-semibold my-2'>PPC Advertising</h2>
                    <p className='text-sm'>You can provide the answers that your potential customers are trying to find, so you can become the industry.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;