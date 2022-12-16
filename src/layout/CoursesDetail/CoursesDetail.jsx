import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataArray } from '../../data/data';
import { Carrousel } from '../../components/Carrousel';
import { BsCheck2All } from 'react-icons/bs';
import { Footer } from '../Footer';
import { Loader } from '../../components/Loader/Loader';
import { useTranslation } from 'react-i18next';
import { Modal } from '../../components/Modal';

export const CoursesDetail = () => {
    const { DETAILURL } = useParams();
    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true);
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    useEffect(() => {
        setTimeout(function () {
            if (DETAILURL) {
                const found = dataArray.find((i) => i.id === DETAILURL);
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
                <Loader/>
            ) : (
                <div className="hero min-h-screen bg-mesh flex flex-col justify-between">
                    <h2 className=" animate-bg-positions text-4xl sm:text-8xl max-w-3/4 font-extrabold self-center mt-16 text-center p-10 text-transparent bg-clip-text bg-gradient-to-r from-white  to-secondary font-monserrat ">
                        {currentLanguage === 'es'
                            ? item.title?.toUpperCase()
                            : item.titleEN?.toUpperCase()}
                    </h2>
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                        {/* <div className="relative w-[90vw]  sm:min-w-fit ">
                            <Carrousel images={item.imageDetail} />
                        </div> */}
                        <div className="p-4 text-white first:none">
                            <h3 className="text-xl sm:text-2xl text-center text-semibold italic ">
                                {currentLanguage === 'es'
                                    ? item.subtitle
                                    : item.subtitleEN}
                            </h3>
                           
                                {/* <img src={item.imageDetail[0].image} className='float-right m-8 w-[150px]'></img> */}
                                <p className=" text-[0.9rem]  sm:text-lg sm:leading-8 my-8 sm:my-6 font-monserrat clear-left">
                                    {currentLanguage === 'es'
                                        ? item.description
                                        : item.descriptionEN}
                                </p>
                          
                            <h3 className="text-2xl italic">
                                {t('courseDetail.adquisition')} "
                                {currentLanguage === 'es'
                                    ? item.title
                                    : item.titleEN}
                                " {t('courseDetail.included')} 
                            </h3>
                            <ul className="py-6 text-lg font-monserrat">
                                {currentLanguage === 'es'
                                    ? item.included?.map((item, index) => (
                                          <li
                                              className="flex items-center "
                                              key={index}
                                          >
                                              <BsCheck2All className="text-accent min-w-[20px] my-2" />{' '}
                                              <span className="sm:px-2 p-2 text-base sm:text-lg">
                                                  {item}
                                              </span>
                                          </li>
                                      ))
                                    : item.includedEN?.map((item, index) => (
                                          <li
                                              className="flex items-center"
                                              key={index}
                                          >
                                              <BsCheck2All className="text-accent min-w-[20px]" />{' '}
                                              <span className="sm:px-2 p-2 text-base sm:text-lg">
                                                  {item}
                                              </span>
                                          </li>
                                      ))}
                            </ul>
                            <p className="sm:text-lg ">
                                <b> {t('courseDetail.duration')}: </b>
                                {currentLanguage === 'es'
                                    ? item.duration
                                    : item.durationEN}
                            </p>
                            {item.schedule ? (
                                <p className="sm:text-lg ">
                                    <b>{t('courseDetail.schedule')}: </b>
                                    {currentLanguage === 'es'
                                        ? item.schedule
                                        : item.scheduleEN}
                                </p>
                            ) : null}

                            <div className="flex sm:flex-row flex-col mx-8 gap-5 sm:gap-2  flex-wrap items-center justify-between mt-8">
                                <a
                                    href="https://walink.co/70f16a"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button
                                        className={`btn btn-card animate-bg-positions btn-hover w-[13rem] sm:w- `}
                                    >
                                        <span className=" px-6">
                                            {t('courseDetail.infoBtn')}
                                        </span>
                                    </button>
                                </a>

                                {/* {item && (
                                    <Modal
                                        openText={t('modal.openOperation')}
                                        modalTitle={t('modal.titleOperation')}
                                        modalText={
                                            currentLanguage === 'es'
                                                ? item.operationsTextES
                                                : item.operationsTextEN
                                        }
                                        modalClose={t('modal.close')}
                                    />
                                )} */}
                                <Modal
                                    openText={t('modal.openPolicy')}
                                    modalTitle={t('modal.titlePolicy')}
                                    modalText={t('modal.textPolicy')}
                                    modalClose={t('modal.close')}
                                />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
        </>
    );
};
