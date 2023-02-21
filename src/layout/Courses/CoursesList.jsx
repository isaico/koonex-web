import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card';

export const CoursesList = (props) => {
    const { t } = useTranslation();
    const currentLanguage = props.language;

    return (
        <div className="flex flex-col items-center ">
            <div className="">
                <h2 className=" text-center sm:text-5xl text-3xl mt-6 sm:my-16 font-bold  py-5 text-white italic">
                    {props.gradientTitle === 'CURSOS'
                        ? t('coursesContainer.categoryTitleCourse')
                        : t('coursesContainer.categoryTitleTour')}
                </h2>

                <div className="flex flex-wrap justify-center  gap-0 sm:gap-8 sm:px-24 bg-cyan ">
                    {props.data.map((course, index) => (
                        <Card
                            index={index}
                            item={course}
                            currentLanguage={currentLanguage}
                            t={t}
                            bgColor={props.URL === 'cursos'? 'bg-sky' : 'bg-primary'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
