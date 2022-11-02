import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coursesArray, toursArray } from '../../data/data';
import { Carrousel } from '../../components/Carrousel';
import { BsCheck2All } from 'react-icons/bs';
import { Footer } from '../Footer';
import { Loader } from '../../components/Loader';
import { useTranslation } from 'react-i18next';

export const CoursesDetail = () => {
    const { DETAILURL } = useParams();
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

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
                        {currentLanguage === 'es'
                            ? item.title?.toUpperCase()
                            : item.titleEN?.toUpperCase()}
                    </h2>
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <div className="relative min-w-fit">
                            <Carrousel images={item.imageDetail} />
                        </div>
                        <div className="p-4 text-white first:none">
                            <h3 className="text-2xl text-center text-semibold italic ">
                                {currentLanguage === 'es'
                                    ? item.subtitle
                                    : item.subtitleEN}
                            </h3>
                            <p className=" text-lg py-6">
                                {currentLanguage === 'es'
                                    ? item.description
                                    : item.descriptionEN}
                            </p>
                            <h3 className="text-lg italic">
                                Con la adquisicion de este "{' '}
                                {currentLanguage === 'es'
                                    ? item.title
                                    : item.titleEN}
                                " tenes incluido lo siguiente:
                            </h3>
                            <ul className="py-6 text-lg">
                                {currentLanguage === 'es'
                                    ? item.included?.map((item, index) => (
                                          <li className="flex items-center">
                                              <BsCheck2All className="text-accent" />{' '}
                                              <span className="px-2">
                                                  {item}
                                              </span>
                                          </li>
                                      ))
                                    : item.includedEN?.map((item, index) => (
                                          <li className="flex items-center">
                                              <BsCheck2All className="text-accent" />{' '}
                                              <span className="px-2">
                                                  {item}
                                              </span>
                                          </li>
                                      ))}
                            </ul>

                            <p>{t('courseDetail.duration')}:  {currentLanguage === 'es'
                                    ? item.duration
                                    : item.durationEN}</p>
                            <button
                                className={`btn btn-card mt-4${
                                    loader ? 'animate-pulse' : ''
                                }`}
                            >
                                {t('courseDetail.infoBtn')}
                            </button>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};
