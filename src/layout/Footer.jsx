import React from 'react';
import { ImLocation } from 'react-icons/im';
import { FaBusinessTime } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const Footer = () => {
    return (
        <div className="w-screen flex p-6 justify-between bg-primary text-neutral-content">
            <div className="flex items-center">
                <h2 className="pr-5">KOONEX</h2>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="flex justify-self-end gap-6 hover:cursor-pointer ">
                <div
                    className="tooltip  tooltip-left "
                    data-tip="Carr. Costera Sur Km 2.85, 77600 San Miguel De Cozumel, Q.R., México"
                >
                    <ImLocation className="text-2xl text-white hover:text-grey-regular"></ImLocation>
                </div>
                <div
                    className="tooltip tooltip-left"
                    data-tip="Monday to Sunday from 7:30hs to 16hs"
                >
                    <FaBusinessTime className="text-2xl text-white hover:text-grey-regular"></FaBusinessTime>
                </div>
                <div
                    className="tooltip tooltip-left"
                    data-tip="koonextyt@gmail.com"
                >
                    <MdEmail className="text-2xl text-white hover:text-grey-regular"></MdEmail>
                </div>
                {/* <a className="hover:cursor-pointer ">
                    <ImLocation className="text-2xl text-accent"></ImLocation>
                </a>

                <a className="hover:cursor-pointer ">
                    <FaBusinessTime className="text-2xl text-accent"></FaBusinessTime>
                </a>

                <a className="hover:cursor-pointer ">
                    <MdEmail className="text-2xl text-accent"></MdEmail>
                </a> */}
            </div>
        </div>
    );
};
