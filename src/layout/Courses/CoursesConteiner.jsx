import React from 'react';
import { CoursesList } from './CoursesList';
import { Footer } from '../Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { coursesArray, toursArray } from '../../data/data';
import { Loader } from '../../components/Loader';
import { useTranslation } from 'react-i18next';

const gradientTitleTours = 'bg-gradient-to-r from-secondary to-accent';
const gradientTitleCourses = 'bg-gradient-to-r from-secondary to-indigo';
const gradientButtonTours = 'bg-gradient-to-r from-secondary to-green';
const gradientButtonCourses = 'bg-gradient-to-r from-secondary to-indigo';

export const CoursesConteiner = () => {
    const { t } = useTranslation(['translation']);
    const [data, setData] = useState([]);
    const { URL } = useParams();
    const [gradientTitle, setGradientTitle] = useState('');
    const [loader, setLoader] = useState(true);
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLocale = userLang.substring(0, 2);

    useEffect(() => {
        setTimeout(function () {
            if (URL && URL === 'cursos') {
                setData(coursesArray);
                setGradientTitle('CURSOS');
                setLoader(false);
            } else {
                setData(toursArray);
                setGradientTitle('TOURS');
                setLoader(false);
            }
        }, 500);
    }, [URL]);

    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <div className="flex flex-col bg-primary">
                    <div className="screen-container  w-3/5 self-center my-16">
                        <h2
                            className={`self-center text-center my-10  text-transparent text-8xl bg-clip-text font-monserrat font-extrabold ${
                                gradientTitle !== 'CURSOS'
                                    ? gradientTitleTours
                                    : gradientTitleCourses
                            }`}
                        >
                            {gradientTitle === 'CURSOS'
                                ? t('coursesContainer.titleCourse')
                                : t('coursesContainer.titleTour')}
                        </h2>
                        <p className="text-xl text-center leading-8 self-center w-2/3">
                            {t('coursesContainer.sub')}
                        </p>
                    </div>

                    <div className="flex flex-col bg-waves">
                        <div className="hero min-h-[50vh] backdrop-blur-2xl shadow-2xl">
                            <div className="hero-content flex-col lg:flex-row pb-16">
                                <img
                                    src="https://scubamau.com/wp-content/uploads/2022/03/divingcoursesandcert.jpg"
                                    alt="  a man and a woman sitting on a table"
                                    className=" rounded-lg shadow-2xl min-w-"
                                />
                                <div className="px-10 ">
                                    <h2 className="text-5xl font-bold py-5 italic text-white ">
                                        {t('coursesContainer.bannerTitle')}
                                    </h2>
                                    <p className="py-6">
                                        {t('coursesContainer.bannerDesc', {
                                            gradientTitle,
                                        })}
                                    </p>
                                    <a
                                        href="mailto:koonextyt@gmail.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button
                                            className={`btn button font-bold ${
                                                gradientTitle !== 'CURSOS'
                                                    ? gradientButtonTours
                                                    : gradientButtonCourses
                                            } `}
                                        >
                                            {t('coursesContainer.bannerBtn')}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h2 className=" text-center text-6xl font-bold mt-10 py-5 text-white italic">
                            {gradientTitle === 'CURSOS'
                                ? t('coursesContainer.categoryTitleCourse')
                                : t('coursesContainer.categoryTitleTour')}
                            {/* {t('coursesContainer.categoryTitle',{gradientTitle})} */}
                        </h2>
                        <CoursesList
                            data={data}
                            styleState={gradientTitle}
                            buttonStyles={[
                                gradientButtonTours,
                                gradientButtonCourses,
                            ]}
                        />
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};
