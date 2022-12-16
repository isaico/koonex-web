import React from 'react';
import girlsUnderwater from '../assets/girls-underwater.jpg';

export const Banner = ({
    gradientTitle,
    gradientButtonCourses,
    gradientButtonTours,
    t,
}) => {
    return (
        <div className="hero min-h-[50vh] backdrop-blur-lg  sm:py-12 relative">
            <div className="hero-content flex-col lg:flex-row pb-16">
                <img
                    src={girlsUnderwater}
                    alt="two girls under the sea holding a mexico flag"
                    className=" rounded-lg shadow-2xl sm:w-full w-3/4"
                />
                <div className="px-10 ">
                    <h2 className="sm:text-5xl text-3xl font-bold py-5 italic text-white ">
                        {t('coursesContainer.bannerTitle')}
                    </h2>
                    <p className="py-6 sm:text-xl text-base">
                        {t('coursesContainer.bannerDesc', {
                            gradientTitle,
                        })}
                    </p>
                    <a
                        href="mailto:koonextyt@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            className={`btn button font-bold ${
                                gradientTitle !== 'CURSOS'
                                    ? gradientButtonTours
                                    : gradientButtonCourses
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
