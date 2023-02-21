import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const ServicesList = ({ services, t }) => {
    const { URL } = useParams();
    const currentLanguage = t
    return (
        <>
            <h2 className=" text-center sm:text-5xl text-3xl sm:my-16 font-bold  py-5 text-white italic">
                {t('coursesContainer.categoryTitleServices')}
            </h2>
            <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-80 gap-20 mb-36 ">
                {services.map((item, index) => (
                    <div
                        className="card sm:w-96 w-[300px] bg-base-100 shadow-xl  hover:bg-opacity-10 transition ease"
                        key={index}
                    >
                        <figure className="sm:w-[400px] w-[200]">
                            <img
                                src={item.image}
                                alt="Shoes"
                                className="object-cover"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-monserrat text-white sm:text-2xl py-4 sm:py-4 ">
                                {currentLanguage === 'es' ? item.title : item.titleEN}
                            </h2>
                            <p className='text-sm sm:text-base mb-2'>{currentLanguage === 'es' ? item.text : item.textEN}</p>
                            <div className="card-actions justify-end">
                                <NavLink to={`${URL}/${item.id}`}>
                                    <button className="btn text-white border-none px-8 hover:opacity-90 hover:bg-hero  btn-hover gradientButtonCourses">
                                        {t('cardBtn')}
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
