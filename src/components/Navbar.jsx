import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import flagMX from '../assets/mx.png';
import flagUS from '../assets/us.png';
export const Navbar = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="navbar backdrop-blur-xs fixed top-0 z-10">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    KOONEX
                </Link>
                <div className="tooltip tooltip-right " data-tip="Language">
                    <label className="swap btn btn-ghost">
                        <input type="checkbox" />

                        <div
                            className="swap-off w-7"
                            onClick={() => {
                                i18n.changeLanguage('es');
                            }}
                        >
                            <img src={flagMX} alt="" />
                        </div>
                        <div
                            className="swap-on w-7"
                            onClick={() => {
                                i18n.changeLanguage('en');
                            }}
                        >
                            <img src={flagUS} alt="" />
                        </div>
                    </label>
                </div>
            </div>
            {/* <label className="swap">
                <input type="checkbox" />
                <div className="swap-on">
                    <button
                        onClick={() => {
                            i18n.changeLanguage('es');
                        }}
                    >
                        ES
                    </button>
                </div>
                <div className="swap-off">
                    <button
                        onClick={() => {
                            i18n.changeLanguage('en');
                        }}
                    >
                        En
                    </button>
                </div>
            </label> */}
            {/* <label className="swap ">
                <input type="checkbox" />

                <div
                    className="swap-on w-8"
                    onClick={() => {
                        i18n.changeLanguage('en');
                    }}
                >
                    <img src={flagES} alt="" />
                </div>
                <div
                    className="swap-off w-8"
                    onClick={() => {
                        i18n.changeLanguage('es');
                    }}
                >
                    <img src={flagUS} alt="" />
                </div>
            </label> */}
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink to="/" end className="btn btn-ghost">
                           {t("navbar.linkHome")}
                        </NavLink>
                    </li>
                    <li tabIndex={0} >
                        <NavLink to="/cursos" className="btn btn-ghost">
                        {t("navbar.linkProd")}
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </NavLink>
                        <ul className="p-2 bg-base-100">
                            <li>
                                <p>
                                    <NavLink to="/cursos"> {t("navbar.linkProdChild1")}</NavLink>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <NavLink to="/tours">{t("navbar.linkProdChild2")}</NavLink>
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://walink.co/70f16a" target="_blank" className='btn btn-ghost'>
                        {t("navbar.linkContact")}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
