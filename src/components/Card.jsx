import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Card = ({ index, item, currentLanguage, t, bgColor }) => {
    const { URL } = useParams();
    return (
        <div
            className={`flex card overflow-visible w-[300px] sm:w-[400px]  sm:my-16 my-10  drop-shadow-lg ${bgColor} hover:scale-105 transition ease`}
            key={index}
        >
            {item.featured && (
                <span
                    className={` absolute top-0 z-10 w-full  bg-secondary border-none text-bold text-white border  indicator-item text-center`}
                >
                    {t('featured')}
                </span>
            )}
            <figure className="relative">
                <img src={item.image} alt="some water" className="" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-monserrat text-white sm:text-2xl py-4 sm:py-4  ">
                    {currentLanguage === 'es' ? item.title : item.titleEN}
                </h2>
                <p className="text-white/80 font-medium text-sm sm:text-base italic sm:py-2 ">
                    {currentLanguage === 'es' ? item.text : item.textEN}
                </p>
                <div className="card-actions justify-end mt-4 sm:mt-0">
                    <NavLink to={`${URL}/${item.id}`}>
                        <button
                            className={`btn text-white border-none px-8 hover:opacity-90 hover:bg-hero  btn-hover ${URL==='cursos' ? 'gradientButtonCourses' : 'gradientButtonTours'}
                            ${item.featured? 'bg-black': 'bg-white'}
                            `
                        }
                        >
                            {t('cardBtn')}
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
