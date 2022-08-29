import React from 'react';

const AboutSection = ({ signedInUser, users }) => {
    // console.log(signedInUser);
    const { userName, img, education, occupation, linkedIn, number } = signedInUser;
    // console.log(user)

    return (
        <div>
            <div className='mt-5 bg-base-100 rounded-xl shadow-md p-6'>
                <h6 className='font-semibold'>About</h6>
                <p className='text-sm'>Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.</p>
                <h6 className='font-semibold mt-5'>Joined</h6>
                <p className='text-sm'>August 15, 2022</p>

                <h6 className='font-semibold mt-5'>Lives</h6>
                <p className='text-sm'>Chittagong, Bangladesh</p>

                <h6 className='font-semibold mt-5'>Email</h6>
                <p className='text-sm'>imranhossen81m@gmail.com</p>

                <h6 className='font-semibold mt-5'>Website</h6>
                <p className='text-xs'>https://imrankhan81m.github.io/Portfolio-me/</p>
                <h6 className='font-semibold mt-5'>Education</h6>
                <p className='text-xs'>{signedInUser?.education ? signedInUser?.education : `${"Update Education"}`}</p>
            </div>
        </div>
    );
};

export default AboutSection;