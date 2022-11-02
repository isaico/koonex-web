import React from 'react';
// import bg from '../../assets/wave-haikei.svg'
import { NavLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const CoursesList = (props) => {
    const { URL } = useParams();
    const { t } = useTranslation();
    const currentLanguage = props.language;

    return (
        <div className="flex flex-wrap ">
            {props.data.map((course, index) => (
                <div
                    className="card overflow-visible w-96 glass m-16 shadow-xl "
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
                        <img src={course.image} alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white ">
                            {currentLanguage === 'es'
                                ? course.title
                                : course.titleEN}
                        </h2>
                        <p className="text-white/80 font-medium ">
                            {currentLanguage === 'es'
                                ? course.text
                                : course.textEN}
                        </p>
                        <div className="card-actions justify-end">
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
