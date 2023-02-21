import React from 'react';
import bannerPic from '../assets/buceo-cozumel.jpg';

export const Banner = ({
    gradientTitle,
    t,
}) => {
    return (
        <div className="hero min-h-[50vh] backdrop-blur-lg  sm:py-12 relative bg-cyan">
            <div className="hero-content flex-col lg:flex-row pb-16">
                <img
                    src={bannerPic}
                    alt="a dive master and a turtle on the botom of the ocean"
                    className=" rounded-lg shadow-2xl sm:w-[500px] w-[300px]"
                />
                <div className="px-10 ">
                    <h2 className="sm:text-5xl text-3xl font-bold py-5 italic text-white ">
                        {t('coursesContainer.bannerTitle')}
                    </h2>
                    <p className="py-6 sm:text-xl text-base text-primaryDark">
                        {t('coursesContainer.bannerDesc')}
                    </p>
                    <a
                        href="mailto:koonextyt@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            className={`btn button font-bold text-white ${
                                gradientTitle !== 'CURSOS'
                                    ? 'gradientButtonTours'
                                    : 'gradientButtonCourses'
                            } animate-bg-positions`}
                        >
                            {t('coursesContainer.bannerBtn')}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
