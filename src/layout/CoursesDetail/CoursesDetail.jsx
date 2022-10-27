import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { coursesArray, toursArray } from '../../data/data';

export const CoursesDetail = () => {
    const { DETAILURL } = useParams();
    console.log(
        '🚀 ~ file: CoursesDetail.jsx ~ line 7 ~ CoursesDetail ~ DETAILURL',
        DETAILURL
    );
    const [item, setItem] = useState({});

    useEffect(() => {
        if (DETAILURL) {
            const found =
                coursesArray.find((i) => i.id === DETAILURL) ||
                toursArray.find((i) => i.id === DETAILURL);
            if (found) {
                setItem(found);
            } else {
                console.log('no se encontro data');
            }
        } else {
            console.log('bad URL');
        }
    }, [DETAILURL]);
    return <div> item {item.title}</div>;
};
