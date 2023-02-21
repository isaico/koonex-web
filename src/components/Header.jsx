import React from 'react';

export const Header = ({ gradientTitle, URL, t }) => {
    return (
        <div className="py-16 flex justify-center items-center  bg-sky relative">
            <div className="flex flex-col w-[90%] break-words">
                <h2
                    className={`text-center my-10 text-transparent   items-center  text-5xl bg-clip-text font-monserrat font-extrabold  sm:text-8xl animate-bg-positions
                    ${
                        gradientTitle !== 'CURSOS'
                            ? 'gradientTitleTours'
                            : 'gradientTitleCourses'
                    }
                    `}
                >
                    {URL === 'cursos'
                        ? t('coursesContainer.titleCourse')
                        : t('coursesContainer.titleTour')}
                </h2>
                <p className="sm:text-xl sm:my-12 text-base text-center leading-8 self-center w-full ">
                    {t('coursesContainer.sub')}
                </p>
            <div className="w-full sm:h-1/2 h-1/2 bg-layered-waves absolute left-0 right-0 -bottom-[50%]  -z-10"></div>
            </div>
        </div>
    );
};
