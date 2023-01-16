import React from 'react';
import { CoursesList } from './CoursesList';
import { Footer } from '../Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { dataArray } from '../../data/data';
import { Loader } from '../../components/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { Banner } from '../../components/Banner';
import { ServicesList } from '../../components/ServicesList';

export const CoursesConteiner = () => {
    const { t, i18n } = useTranslation(['translation']);
    const [data, setData] = useState([]);
    const [services, setServices] = useState([]);
    const { URL } = useParams();
    const [gradientTitle, setGradientTitle] = useState('');
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            if (URL) {
                setServices(dataArray.filter((i) => i.category === 'services'));
                if (URL === 'cursos') {
                    setData(dataArray.filter((i) => i.category === 'courses'));
                    setGradientTitle('CURSOS');
                } else if (URL === 'tours') {
                    setData(dataArray.filter((i) => i.category === 'tours'));
                    setGradientTitle('TOURS');
                }
                setLoader(false);
            }
        }, 500);
    }, [URL]);

    return (
        <>
            {loader ? (
                <Loader />
            ) : (
                <div
                    className={`flex flex-col relative ${
                        gradientTitle === 'CURSOS' ? 'bgCourses' : 'bgTours'
                    } animate-bg
            
                `}
                >
                    <div className="screen-container w-3/4  sm:w-3/5 self-center ">
                        <h2
                            className={` self-center text-center my-10  text-transparent text-5xl bg-clip-text font-monserrat font-extrabold ${
                                gradientTitle !== 'CURSOS'
                                    ? 'gradientTitleTours'
                                    : 'gradientTitleCourses'
                            } sm:text-8xl animate-bg-positions
                            `}
                        >
                            {URL === 'cursos'
                                ? t('coursesContainer.titleCourse')
                                : t('coursesContainer.titleTour')}
                        </h2>
                        <p className="sm:text-xl sm:my-12 text-base text-center leading-8 self-center w-full">
                            {t('coursesContainer.sub')}
                        </p>
                    </div>

                    <CoursesList
                        data={data}
                        gradientTitle={gradientTitle}
                        language={i18n.language}
                    />
                    <div className="bg-primaryDark">
                        <ServicesList services={services} t={t} />
                    </div>
                    <Banner gradientTitle={gradientTitle} t={t} />
                    <Footer />
                </div>
            )}
        </>
    );
};
