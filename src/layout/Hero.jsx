import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation} from 'react-i18next';

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
                    <h1 className="text-5xl text-white mb-5 sm:text-8xl font-bold  animate-bg-positions text-transparent bg-clip-text bg-gradient-to-r from-white  to-primary ">
                        KOONEX{' '}
                    </h1>
                    <h2 className="text-3xl sm:text-5xl">{t('header.sub')}</h2>
                    <p className="my-12 text-lg ">{t('header.desc')}</p>
                    <NavLink to="/tours">
                        <button className="btn text-white btn-hero animate-bg-positions ">
                            {t('header.btn')}
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
