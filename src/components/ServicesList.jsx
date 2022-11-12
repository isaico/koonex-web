import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export const ServicesList = ({ services, t }) => {
    const {URL} = useParams()
    return (
        <div className="flex justify-center gap-80 mb-36">
            {services.map((item, index) => (
                <div
                    className="card w-96 bg-base-100 shadow-xl image-full"
                    key={index}
                >
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.text}</p>
                        <div className="card-actions justify-end">
                            <NavLink to={`${URL}/${item.id}`}>
                                <button className="btn btn-hero">
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
