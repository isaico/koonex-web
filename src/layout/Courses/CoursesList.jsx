import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/Card';
export const CoursesList = (props) => {
    const { t } = useTranslation();
    const currentLanguage = props.language;

    return (
        <div className="flex flex-col items-center pt-16 ">
            <h2 className=" text-center sm:text-5xl text-2xl sm:my-16 font-bold  py-5 text-white italic">
                {t('coursesContainer.categoryTitleFirstExp')}
            </h2>
            <div className="flex flex-wrap justify-center gap-16 ">
                {props.fistExp.map((exp, index) => (
                    <Card
                        index={index}
                        item={exp}
                        currentLanguage={currentLanguage}
                        t={t}
                        bgColor={'bg-primary'}
                    />
                ))}
            </div>
            <div className="bg-blob">
                <h2 className=" text-center sm:text-5xl text-2xl sm:my-16 font-bold  py-5 text-white italic">
                    {props.gradientTitle === 'CURSOS'
                        ? t('coursesContainer.categoryTitleCourse')
                        : t('coursesContainer.categoryTitleTour')}
                </h2>
                <div className="flex flex-wrap justify-center  gap-8 sm:px-24 ">
                    {props.data.map((course, index) => (
                        <Card
                            index={index}
                            item={course}
                            currentLanguage={currentLanguage}
                            t={t}
                            bgColor={'bg-primaryDark'}
                        />
                    ))}
                </div>
            </div>
            <h2 className=" text-center sm:text-5xl text-2xl sm:my-16 font-bold  py-5 text-white italic">
                {t('coursesContainer.categoryTitleServices')}
            </h2>
        </div>
    );
};
