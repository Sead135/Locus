import React from 'react';
import mainImg from './../img/main-img.png'

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="main__block">
                    <div className="main__inner">
                        <h1 className="main__title">Get the inspiration
                            of interior design
                            here</h1>
                        <p className="main__text">Architecture not only about engineering, it even
                            lands to art and aesthetics. With us, you will get
                            a residentical design with an extraordinary touch
                            of art.</p>
                        <button className="main__button">Let’s go</button>
                    </div>
                    <div className="main__img">
                        <svg viewBox="0 0 834 782" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.5043 116.435C62.2459 77.2326 93.717 47.77 133.431 39.1108C206.739 23.1267 330.219 0 431 0C529.384 0 651.849 22.0396 727.471 37.9584C771.054 47.1327 804.44 81.0992 811.62 125.054C819.577 173.769 828.848 244.881 833 330C837.955 431.572 823.347 580.709 811.507 679.531C804.438 738.54 754.017 782 694.587 782H147.319C100.236 782 57.6029 754.385 43.7153 709.398C26.5994 653.952 6.46972 570.456 0.999959 472C-5.82689 349.117 28.8255 199.202 51.5043 116.435Z" fill="#CCF0E6"/>
                        </svg>
                        <img src={mainImg} alt="Main IMG"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;