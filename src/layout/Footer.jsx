import React from 'react';
import { ImLocation } from 'react-icons/im';
import { FaBusinessTime } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
    return (
        <div className="w-screen flex p-6 justify-between items-center bg-primary text-neutral-content">
            <div className="flex items-center">
                <h2 className="pr-5">KOONEX</h2>
                <p className="text-xs sm:text-lg">
                    {' '}
                    Copyright © 2022 - All right reserved
                </p>
            </div>
            <div className="flex justify-self-end  gap-2 sm:gap-6 hover:cursor-pointer -z-10 sm:z-10">
                <div
                    className="tooltip tooltip-left  text-xs"
                    data-tip="Carr. Costera Sur Km 2.85, 77600 San Miguel De Cozumel, Q.R., México"
                >
                    <ImLocation className="text-xl sm:text-2xl text-white hover:text-grey-regular"></ImLocation>
                </div>
                <div
                    className="tooltip tooltip-left text-xs "
                    data-tip="Monday to Sunday from 7:30hs to 16hs"
                >
                    <FaBusinessTime className="text-xl sm:text-2xl text-white hover:text-grey-regular"></FaBusinessTime>
                </div>
                <div
                    className="tooltip tooltip-left text-xs"
                    data-tip="koonextyt@gmail.com"
                >
                    <MdEmail className="text-xl sm:text-2xl text-white hover:text-grey-regular"></MdEmail>
                </div>
            </div>
        </div>
    );
};
