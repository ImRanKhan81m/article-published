import React from 'react';
import project1 from '../../assets/about/Project/project1.png'
import project2 from '../../assets/about/Project/Project2.png'
import project3 from '../../assets/about/Project/project3.png'
import project4 from '../../assets/about/Project/Project4.png'
import project5 from '../../assets/about/Project/Project5.png'
import project6 from '../../assets/about/Project/projcet6.png'
const Project = () => {
    return (
        <div>
            <div className='text-center'>
                <h6 className='font-extrabold text-2xl'>OUR TEAM PROJECTS</h6>
                <h2 className='text-3xl font-semibold mt-2'>Appropriately foster efficient ideas.</h2>
            </div>

            <div className='grid grid-cols-3 gap-5 mt-12'>
                <div className='w-full overflow-hidden shadow-xl rounded-xl'>
                    <img className='w-full' src={project1} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl'>
                    <img className='w-full rounded-xl shadow-xl' src={project2} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl'>
                    <img className='w-full rounded-xl shadow-xl' src={project3} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl'>
                    <img className='w-full' src={project4} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl'>
                    <img className='w-full' src={project5} alt="" />
                </div>
                <div className='w-full overflow-hidden shadow-xl rounded-xl'>
                    <img className='w-full ' src={project6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;