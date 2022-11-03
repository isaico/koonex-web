import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import flagMX from '../assets/mx.png';
import flagUS from '../assets/us.png';
import { TbLanguageKatakana } from 'react-icons/tb';
import { RiMenu4Fill } from 'react-icons/ri';
export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const handleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" navbar backdrop-blur-[1px] text-white fixed top-0 z-10 h-[70px]">
            <div className=" flex-1 ">
                <Link to="/" className="btn btn-ghost normal-case text-base  sm:text-xl">
                    KOONEX
                </Link>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                        <TbLanguageKatakana className="text-base sm:text-xl" />
                        <p className="px-1 text-xs sm:text-base">language</p>
                        <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-transparent rounded-box  "
                    >
                        <div
                            className="w-7 hover:cursor-pointer py-4 pt-0"
                            onClick={() => {
                                i18n.changeLanguage('es');
                            }}
                        >
                            <img src={flagMX} alt="" />
                        </div>
                        <div
                            className="w-7 hover:cursor-pointer "
                            onClick={() => {
                                i18n.changeLanguage('en');
                            }}
                        >
                            <img src={flagUS} alt="" />
                        </div>
                    </ul>
                </div>
            </div>

            <div className="flex-none hidden  sm:block">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink to="/" end className="btn btn-ghost">
                            {t('navbar.linkHome')}
                        </NavLink>
                    </li>

                    <li >
                        <NavLink to="/cursos" className="btn btn-ghost">
                            {t('navbar.linkProdChild1')}
                        </NavLink>
                    </li>
                    <li >
                        <NavLink to="/tours" className="btn btn-ghost">
                            {t('navbar.linkProdChild2')}
                        </NavLink>
                    </li>

                    <li>
                        <a
                            href="https://walink.co/70f16a"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost"
                        >
                            {t('navbar.linkContact')}
                        </a>
                    </li>
                </ul>
            </div>

            {/* NAVBAR DROPDOWN MENU */}

            <div className="sm:hidden dropdown dropdown-left" id="burger-nav">
                <label tabIndex={0} className=" m-1 w-20 btn- btn-ghost">
                    <RiMenu4Fill className="text-2xl" />
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box "
                >
                    <li>
                        <NavLink to="/" end className="btn btn-ghost">
                            {t('navbar.linkHome')}
                        </NavLink>
                    </li>
                    <li className="menu bg-base-100 w-56 rounded-box">
                        <div className="btn btn-ghost">
                            <NavLink to="/cursos">
                                {t('navbar.linkProdChild1')}
                            </NavLink>
                        </div>
                        <div className="btn btn-ghost">
                            <NavLink to="/tours">
                                {t('navbar.linkProdChild2')}
                            </NavLink>
                        </div>
                    </li>

                    {/* <li className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost ">
                            {t('navbar.linkProd')}
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </label>
                        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li>
                                <p>
                                    <NavLink to="/cursos">
                                        {' '}
                                        {t('navbar.linkProdChild1')}
                                    </NavLink>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <NavLink to="/tours">
                                        {t('navbar.linkProdChild2')}
                                    </NavLink>
                                </p>
                            </li>
                        </ul>
                    </li> */}
                    <li>
                        <a
                            href="https://walink.co/70f16a"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-ghost"
                        >
                            {t('navbar.linkContact')}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
