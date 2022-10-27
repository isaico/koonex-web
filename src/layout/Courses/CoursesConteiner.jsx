import React from 'react';
import { CoursesList } from './CoursesList';
import { Footer } from '../Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {coursesArray,toursArray} from '../../data/data'
/* ----------------------------- mockup database ---------------------------- */
// const coursesArray = [
//     {
//         title: 'some titl of a coursee',
//         text: 'loreM asd asd as dasda klsalosk;d als asasdaaa aas dasda sdasda ',
//         image: 'https://placeimg.com/400/400/arch',
//         id:1,
//     },
//     {
//         title: 'some title',
//         text: 'loreM',
//         image: 'https://placeimg.com/400/400/arch',
//         id:2,
//     },
// ];
// const toursArray = [
//     {
//         title: 'this is a tour',
//         text: 'loreM asd asd as dasda klsalosk;d als asasdaaa aas dasda sdasda ',
//         image: 'https://placeimg.com/400/400/arch',
//         id:11,
//     },
//     {
//         title: 'another tour',
//         text: 'loreM',
//         image: 'https://placeimg.com/400/400/arch',
//         id:22,
//     },
// ];
/* ------------------------------------ ; ----------------------------------- */

export const CoursesConteiner = (
    headerTitle,
    headerSub,
    bannerTitle,
    bannerSub
) => {
    const [data, setData] = useState([]);
    const { URL } = useParams();
    
    useEffect(() => {
        if (URL && URL === 'cursos') {
            setData(coursesArray);
        } else {
            setData(toursArray);
        }
    }, [URL]);

    return (
        <div className="flex flex-col bg-primary">
            <div className="flex flex-col mt-16  w-3/5 self-center my-16">
                <h2 className="self-center text-center my-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-secondary to-indigo">
                    THIS COURSES ARE <br />
                    FOR YOU!!
                </h2>
                <p className="text-xl text-center leading-8 self-center w-2/3">
                    {' '}
                    We have different levels of diving certification courses
                    endorsed. If you are one of those who want to deepen your
                    knowledge about diving and the marine environment, or you
                    want to dedicate yourself professionally to diving to share
                    and guide others, we have courses for you.
                </p>
            </div>

            {/* <div className="bg-white/50 h-60 flex">
                <div className="flex flex-col justify-evenly">
                    <h2 className="text-2xl text-primary ">Connect with the oscean</h2>
                    <h3> Choose your favorite couse, buy and enjoy. We take car of the rest</h3>
                   
                </div>
            </div> */}
            <div className="flex flex-col bg-waves">
                <div className="hero min-h-[50vh] glass">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://scubamau.com/wp-content/uploads/2022/03/divingcoursesandcert.jpg"
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className="px-10">
                            <h1 className="text-5xl font-bold py-5">
                                Connect with the ocean!
                            </h1>
                            <p className="py-6">
                                Choose your favorite course, buy and enjoy. We
                                take care of the rest. Includes: Instruction,
                                Instructor and complete equipment.
                            </p>
                            <button className="btn btn-card">CONTACT US</button>
                        </div>
                    </div>
                </div>

                <CoursesList data={data} />
            </div>
            <Footer />
        </div>
    );
};
