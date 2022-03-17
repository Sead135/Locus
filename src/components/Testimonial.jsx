import React from 'react';
import gallery1 from './../img/gallery_1.png'
import gallery2 from './../img/gallery_2.png'
import gallery3 from './../img/gallery_3.png'
import gallery4 from './../img/gallery_4.png'
import testimonial from './../img/testimonial.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard, Lazy } from "swiper";

const Testimonial = () => {
    return (
        <section className='testimonial'>
            <div className="container">
                <div className="testimonial__block">
                    <h1 className="testimonial__title">Testimonial</h1>
                    <div className="testimonial__carousel">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={4}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            lazy={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Lazy, Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
                            breakpoints={{
                                240: {
                                    slidesPerView: 1,
                                    spaceBetween: 30
                                },
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 30
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                }
                            }}
                        >
                            <SwiperSlide><img className='slider__img' src={gallery1} alt=""/></SwiperSlide>
                            <SwiperSlide><img className='slider__img' src={gallery2} alt=""/></SwiperSlide>
                            <SwiperSlide><img className='slider__img' src={gallery3} alt=""/></SwiperSlide>
                            <SwiperSlide><img className='slider__img' src={gallery4} alt=""/></SwiperSlide>
                            <SwiperSlide><img className='slider__img' src={gallery1} alt=""/></SwiperSlide>
                            <SwiperSlide><img className='slider__img' src={gallery2} alt=""/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="testimonial__box">
                        <img src={testimonial} alt="" className="testimonial__img"/>
                        <div className="info">
                            <div className="info__block">
                                <div className="info__progress">
                                    <h6 className="info__progress-title"><span>105</span>
                                        project
                                        done</h6>
                                    <h6 className="info__progress-title"><span>12</span>
                                        years of
                                        experience</h6>
                                    <h6 className="info__progress-title"><span>10+</span>
                                        big company
                                        partnership</h6>
                                </div>
                                <p className="info__text">"Not able to tell you how happy I am with interior design.
                                    Interior design has completely surpassed our expectations.
                                    Interior design saved my business. Interior design is worth
                                    much more than I paid."
                                </p>
                                <span className="info__author">- Roscoe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;