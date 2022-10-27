import React from 'react';
// import bg from '../../assets/wave-haikei.svg'
import { NavLink, useParams } from 'react-router-dom';

export const CoursesList = ({ data }) => {
    const {URL} = useParams();
    console.log("🚀 ~ file: CoursesList.jsx ~ line 7 ~ CoursesList ~ URL", URL)
    
    return (
        <div className="flex flex-wrap  ">
            {data.map((course, index) => (
                <div className="card w-96 glass m-16" key={index}>
                    
                    <figure>
                        <img src={course.image} alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white ">
                            {course.title}
                        </h2>
                        <p>{course.text}</p>
                        <div className="card-actions justify-end">
                            <NavLink to={`${URL}/${course.id}`}>
                                <button className="btn btn-card">
                                    Learn now!
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
