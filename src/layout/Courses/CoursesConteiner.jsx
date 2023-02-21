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
import { Header } from '../../components/Header';

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
                        gradientTitle === 'CURSOS'
                            ? 'sm:bgCourses '
                            : 'sm:bgTours'
                    } 
                `}
                >
                    <Header gradientTitle={gradientTitle} URL={URL} t={t} />
                    <CoursesList
                        data={data}
                        gradientTitle={gradientTitle}
                        language={i18n.language}
                        URL={URL}
                    />

                    <ServicesList services={services} t={t} />

                    <Banner gradientTitle={gradientTitle} t={t} />
                    <Footer />
                </div>
            )}
        </>
    );
};
