import React, { useEffect } from 'react';
import './Banner.css'
import { useSelector, useDispatch } from "react-redux";
import getAllArticles from '../../source/actions/articlesAction';


const Banner = () => {

    const articles = useSelector((state) => state.articles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllArticles())
    }, [dispatch]);

    // const articleCopy = [...articles];
    // console.log(articles)

    return (
        <section className='mid-container'>
            <div className='flex gap-6'>
                <div className='w-[30%] '>
                    <div className='mb-5'>
                        {articles.slice(0, 1).map(article => {
                            return (
                                <div>
                                    <img className='w-full' src={article?.blogs?.img} alt="" />
                                    <h1 className='text-xl font-bold text-center mt-3'>{article?.blogs?.Title}</h1>
                                    <p className='text-secondary text-center text-sm'>By- <span className='font-bold'>{article?.signedInUser?.userInfo?.name}</span></p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {articles.slice(1, 2).map(article => {
                            return (
                                <div>
                                    <img className='w-full' src={article?.blogs?.img} alt="" />
                                    <h1 className='text-xl font-bold text-center mt-3'>{article?.blogs?.Title}</h1>
                                    <p className='text-secondary text-center text-sm'>By- <span className='font-bold'>{article?.signedInUser?.userInfo?.name}</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='w-[60%] '>
                    <div className='mb-5'>
                        {articles.slice(3, 4).map(article => {
                            return (
                                <div>
                                    <img className='w-full' src={article?.blogs?.img} alt="" />
                                    <h1 className='text-xl font-bold text-center mt-3'>{article?.blogs?.Title}</h1>
                                    <p className='text-secondary text-center text-sm'>By- <span className='font-bold'>{article?.signedInUser?.userInfo?.name}</span></p>
                                    <p className='text-secondary text-center px-3 mt-4'>By-{article?.blogs?.desc.slice(0, 200)}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='w-[30%] '>
                    <div className='mb-5'>
                        {articles.slice(5, 6).map(article => {
                            return (
                                <div>
                                    <img src={article?.blogs?.img} alt="" />
                                    <h1 className='text-xl font-bold text-center mt-3'>{article?.blogs?.Title}</h1>
                                    <p className='text-secondary text-center text-sm'>By- <span className='font-bold'>{article?.signedInUser?.userInfo?.name}</span></p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {articles.slice(7, 8).map(article => {
                            return (
                                <div>
                                    <img className='w-full' src={article?.blogs?.img} alt="" />
                                    <h1 className='text-xl font-bold text-center mt-3'>{article?.blogs?.Title}</h1>
                                    <p className='text-secondary text-center text-sm'>By- <span className='font-bold'>{article?.signedInUser?.userInfo?.name}</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;