import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
export const Carrousel = ({ images }) => {
    return (
        <div className="h-96 carousel carousel-vertical group w-auto rounded-box hover:cursor-grab">
            {images?.map((item) => (
                <div className="carousel-item min-h-full">
                    <img src={item.image} alt={item.alt} />
                </div>
            ))}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 ">
                {' '}
                <RiArrowDownSLine className=" text-5xl  group-hover:translate-y-3 transition-all ease" />
                
            </div>
        </div>
    );
};
