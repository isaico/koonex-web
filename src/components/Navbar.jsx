import React from 'react';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <div className="navbar bg-transparent absolute top-0 z-10">
            <div className="flex-1">
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">
                    KOONEX
                </NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <p>
                            <NavLink to="/">Home</NavLink>
                        </p>
                    </li>
                    <li tabIndex={0}>
                        <a href="cursos" className="">
                            Products
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li>
                                <p>
                                    <NavLink to="/cursos">Cursos</NavLink>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <NavLink to="/tours">Tours</NavLink>
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href=""> Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
