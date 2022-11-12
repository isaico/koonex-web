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

const gradientTitleTours = 'bg-gradient-to-r from-secondary to-accent';
const gradientTitleCourses = 'bg-gradient-to-r from-secondary to-indigo';
const gradientButtonTours = 'bg-gradient-to-r from-secondary to-green';
const gradientButtonCourses = 'bg-gradient-to-r from-secondary to-indigo';

export const CoursesConteiner = () => {
    const { t, i18n } = useTranslation(['translation']);
    const [data, setData] = useState([]);
    const [fistExp, setFistExp] = useState([]);
    const [services, setServices] = useState([]);
    const { URL } = useParams();
    const [gradientTitle, setGradientTitle] = useState('');
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(function () {
            if (URL) {
                setFistExp(dataArray.filter((i) => i.category === 'fistExp'));
                setServices(dataArray.filter((i) => i.category === 'services'));
                if (URL === 'cursos') {
                    setData(dataArray.filter((i) => i.category === 'courses'));
                    setGradientTitle('CURSOS');
                } else {
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
                <div className="flex flex-col bg-primary">
                    <div className="screen-container w-3/4  sm:w-3/5 self-center my-16">
                        <h2
                            className={` self-center text-center my-10  text-transparent text-5xl bg-clip-text font-monserrat font-extrabold ${
                                gradientTitle !== 'CURSOS'
                                    ? gradientTitleTours
                                    : gradientTitleCourses
                            } sm:text-8xl
                            
                            `}
                        >
                            {URL === 'cursos'
                                ? t('coursesContainer.titleCourse')
                                : t('coursesContainer.titleTour')}
                        </h2>
                        <p className="sm:text-xl text-base text-center leading-8 self-center w-full">
                            {t('coursesContainer.sub')}
                        </p>
                    </div>

                    <div className="flex flex-col bg-waves">
                        <Banner
                            gradientTitle={gradientTitle}
                            gradientButtonTours={gradientButtonTours}
                            gradientButtonCourses={gradientButtonCourses}
                            t={t}
                        />

                        <CoursesList
                            data={data}
                            fistExp={fistExp}
                            gradientTitle={gradientTitle}
                            buttonStyles={[
                                gradientButtonTours,
                                gradientButtonCourses,
                            ]}
                            language={i18n.language}
                        />
                        <ServicesList 
                        services={services}
                        t={t}
                        />
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};
