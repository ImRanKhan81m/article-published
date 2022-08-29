import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { articleDataContext } from '../../../App';
import cover from '../../../assets/Profile/coverpic.jpg'
import AboutSection from './AboutSection';
import ProfileArticle from './ProfileArticle';
import './UserProfile.css'


const UserProfile = () => {
    const valueObj = useContext(articleDataContext);
    const { signedInUser, articles, users } = valueObj;

    const userImg = signedInUser?.userInfo?.photoURL;
    const navigate = useNavigate();
    const navigateEditProfile = () => {
        navigate('/UpdateUserProfile')
    }

    const handleNavigate = () => {
        navigate('/updateUser');
    };

    // signedInUser published articles
    const publishedArticles = articles?.filter(article => article?.signedInUser?.email === signedInUser?.email);
    console.log(publishedArticles);



    return (
        <div className='bg-[#F8F8F8]'>
            <div className='profile-container'>
                <div className="cover relative  w-full">
                    <div>
                        <img className='w-full' src={cover} alt="" />
                    </div>
                    <div className='absolute sm:bottom-[-115px] bottom-[-100px] sm:pl-10 pl-5 flex items-center gap-7  w-full'>
                        <div className="profile w-36 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                            <img className='w-full rounded-full' src={userImg} alt="" />
                        </div>
                        <div className='mt-10  w-full'>
                            <h6 className='sm:text-3xl text-xl font-extrabold'>{signedInUser?.userInfo?.name}</h6>
                            <p className='text-sm'>Web Developer</p>
                            <div className='mt-4 flex justify-between'>
                                <div className='sm:block hidden'>
                                    <button className='btn md:btn-sm btn-xs mr-2'>Articles</button>
                                    <button className='btn md:btn-sm btn-xs mr-2'>About</button>
                                    <button className='btn md:btn-sm btn-xs mr-2'>Photos</button>
                                    <button className='btn md:btn-sm btn-xs'>Followers</button>
                                </div>
                                <div className='pr-5'>
                                    <button onClick={() => handleNavigate()} className='btn md:btn-sm btn-xs'>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-container h-32 bg-base-100 shadow-md rounded-b-xl' />
            </div>
            <div className='profile-container sm:flex gap-3'>
                <div className='lg:w-[40%] w-[35%] sm:block hidden'>
                    <AboutSection
                        signedInUser={signedInUser}
                        users={users}
                    />
                </div>
                <div className='mt-5 lg:w-[60%] w-full'>
                    {articles.slice(3, 5).map((article) => (
                        <ProfileArticle
                            key={article._id}
                            article={article}

                        ></ProfileArticle>
                    ))}

                </div>
                {/* <div className=' w-[28%] lg:block hidden'>
                    <AboutSection />
                </div> */}
            </div>
        </div>
    );
};

export default UserProfile;