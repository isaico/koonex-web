import React from 'react';
import { ImLocation } from 'react-icons/im';
import { FaBusinessTime } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/logo.png';
export const Footer = () => {
    return (
        <div className="w-screen flex flex-col sm:flex-row p-6 justify-between items-center bg-primary text-neutral-content">
            <div className="flex items-center">
                <img src={logo} alt="logo" className=" w-8 sm:w-12" />
                <h2 className="sm:text-xl px-2">KOONEX</h2>
            </div>
            <p className="text-xs sm:text-lg py-1 ">
                {' '}
                Copyright © 2022 - All right reserved
            </p>
            <div className="flex justify-self-end gap-2 items-center hover:cursor-pointer  sm:z-10">
                <MdEmail className="text-xl sm:text-2xl text-white hover:text-grey-regular"></MdEmail>
                <p className="text-xs sm:text-lg">koonextyt@gmail.com</p>
            </div>
        </div>
    );
};
