import React from 'react';
import {NavLink} from 'react-router-dom'

export const Hero = () => {

    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url("https://cdn.pixabay.com/photo/2013/02/09/04/33/scuba-diving-79606_960_720.jpg")`,
            }}
        >
            
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-8xl font-bold">KOONEX </h1>
                   <h2 className='text-5xl '>Travels and Tours</h2>
                    <p className="my-12 text-lg ">
                       Stay present and leave stress behind, we invito you to connect with the sea and its silence.
                    </p>
                    <NavLink to='/cursos'><button className="btn btn- btn-hero ">Get Started</button></NavLink>
                </div>
            </div>
        </div>
    );
};
