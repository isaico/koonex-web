import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export const Hero = () => {
    const { t } = useTranslation(['translation']);

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
                    <h2 className="text-5xl ">{t('header.sub')}</h2>
                    <p className="my-12 text-lg ">{t('header.desc')}</p>
                    <NavLink to="/cursos">
                        <button className="btn btn- btn-hero ">
                            {t('header.btn')}
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
