import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const Card = ({index,item,currentLanguage,t}) => {
    const {URL} = useParams()
    return (
        <div
            className="flex card  overflow-visible max-w-[400px] glass m-16 shadow-xl "
            key={index}
        >
            {item.featured && (
                <span
                    className={` absolute -top-3 z-10  bg-secondary border-none text-bold text-white border badge indicator-item `}
                >
                    {t('featured')}
                </span>
            )}
            <figure>
                <img src={item.image} alt="some water" className="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-monserrat text-white sm:text-3xl py-4 sm:py-4  ">
                    {currentLanguage === 'es' ? item.title : item.titleEN}
                </h2>
                <p className="text-white/80 font-medium italic sm:py-2 ">
                    {currentLanguage === 'es' ? item.text : item.textEN}
                </p>
                <div className="card-actions justify-end mt-4 sm:mt-0">
                    <NavLink to={`${URL}/${item.id}`}>
                        <button
                            className={`btn button bg-secondary hover:opacity-90 hover:bg-primary
                                   
                                    `}
                        >
                            {t('cardBtn')}
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
