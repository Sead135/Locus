import React from 'react';
import exampleOne from './../img/example_1.png'
import exampleTwo from './../img/example_2.png'
import exampleThree from './../img/example_3.png'

const Project = () => {
    return (
        <section className='project'>
            <div className="container">
                <div className="project__block">
                    <h3 className="project__title">Our project </h3>
                    <p className="project__sub-title">Introducing our first official project</p>
                    <div className="project__examples">
                        <div className="project__example">
                            <div className="project__example-box">
                                <h6 className="example-box__title">Project Livingroom</h6>
                                <p className="example-box__text">A simple guide to create the perfect livingro-
                                    om for . Night Watc works beautifully in a wi-
                                    de gamut of arrangements.</p>
                            </div>
                            <img src={exampleOne} alt="Example 1" className="example-box__img"/>
                        </div>
                        <div className="project__example">
                            <img src={exampleTwo} alt="Example 2" className="example-box__img"/>
                            <div className="project__example-box">
                                <h6 className="example-box__title">Project workspace</h6>
                                <p className="example-box__text">A simple guide to create the perfect livingro-
                                    om for . Night Watc works beautifully in a wi-
                                    de gamut of arrangements.</p>
                            </div>
                        </div>
                        <div className="project__example">
                            <div className="project__example-box">
                                <h6 className="example-box__title">Library</h6>
                                <p className="example-box__text">A simple guide to create the perfect livingro-
                                    om for . Night Watc works beautifully in a wi-
                                    de gamut of arrangements.</p>
                            </div>
                            <img src={exampleThree} alt="Example 3" className="example-box__img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;