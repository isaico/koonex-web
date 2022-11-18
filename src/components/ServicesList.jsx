import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export const ServicesList = ({ services, t }) => {
    const { URL } = useParams();
    return (
        <div className="flex justify-center gap-80 mb-36">
            {services.map((item, index) => (
                <div
                    className="card w-96 bg-base-100 shadow-xl image-full"
                    key={index}
                >
                    <figure className='w-[400px] h-[225]'>
                        <img
                            src={item.image}
                            alt="Shoes"
                            className='w-72 object-cover'
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">{item.title}</h2>
                        <p>{item.text}</p>
                        <div className="card-actions justify-end">
                            <NavLink to={`${URL}/${item.id}`}>
                                <button className="btn btn-hero btn-hover text-white">
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
