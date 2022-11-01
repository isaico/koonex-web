import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coursesArray, toursArray } from '../../data/data';
import { Carrousel } from '../../components/Carrousel';
import { BsCheck2All } from 'react-icons/bs';
import { Footer } from '../Footer';
import { Loader } from '../../components/Loader';
export const CoursesDetail = () => {
    const { DETAILURL } = useParams();
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            if (DETAILURL) {
                const found =
                    coursesArray.find((i) => i.id === DETAILURL) ||
                    toursArray.find((i) => i.id === DETAILURL);
                if (found) {
                    setItem(found);
                    setLoader(false);
                } else {
                    console.log('no se encontro data');
                    setLoader(false);
                }
            } else {
                setLoader(false);
                console.log('bad URL');
            }
        }, 1000);
    }, [DETAILURL]);

    return (
        <>
            {loader ? (
                <Loader></Loader>
            ) : (
                <div className="hero min-h-screen bg-mesh flex flex-col justify-between">
                    <h2 className="text-8xl max-w-3/4 font-extrabold self-center mt-16 text-center p-10 text-transparent bg-clip-text bg-gradient-to-r from-white  to-indigo font-monserrat ">
                        {item.title?.toUpperCase()}
                    </h2>
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <div className="relative min-w-fit">
                            <Carrousel images={item.imageDetail} />
                        </div>
                        <div className="p-4 text-white first:none">
                            <h3 className="text-2xl text-center text-semibold italic ">
                                {item.subtitle}
                            </h3>
                            <p className=" text-lg py-6">{item.description}</p>
                            <h3 className="text-lg italic">
                                Con la adquisicion de este "{item.title}" tenes
                                incluido lo siguiente:
                            </h3>
                            <ul className="py-6 text-lg">
                                {item.included?.map((item, index) => (
                                    <li className="flex items-center">
                                        <BsCheck2All  className='text-accent'/>{' '}
                                        <span className="px-2">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p>Duracion: {item.duration}</p>
                            <button
                                className={`btn btn-card mt-4${
                                    loader ? 'animate-pulse' : ''
                                }`}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};
