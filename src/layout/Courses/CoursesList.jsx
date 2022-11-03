import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CoursesList = (props) => {
    const { URL } = useParams();
    const { t } = useTranslation();
    const currentLanguage = props.language;

    return (
        <div className="flex flex-wrap justify-center ">
            {props.data.map((course, index) => (
                <div
                    className="flex card  overflow-visible max-w-[400px] glass m-16 shadow-xl "
                    key={index}
                >
                    {course.featured && (
                        <span
                            className={` absolute -top-3 z-10  bg-secondary border-none text-bold text-white border badge indicator-item `}
                        >
                            {t('featured')}
                        </span>
                    )}
                    <figure>
                        <img src={course.image} alt="some water" className="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-monserrat text-white sm:text-3xl py-4 sm:py-4  ">
                            {currentLanguage === 'es'
                                ? course.title
                                : course.titleEN}
                        </h2>
                        <p className="text-white/80 font-medium italic sm:py-2 ">
                            {currentLanguage === 'es'
                                ? course.text
                                : course.textEN}
                        </p>
                        <div className="card-actions justify-end mt-4 sm:mt-0">
                            <NavLink to={`${URL}/${course.id}`}>
                                <button
                                    className={`btn button 
                                ${
                                    props.styleState !== 'CURSOS'
                                        ? props.buttonStyles[0]
                                        : props.buttonStyles[1]
                                }`}
                                >
                                    {t('cardBtn')}
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
