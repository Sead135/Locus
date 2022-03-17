import React, {useState} from 'react';
import workIMG from './../img/work-img.png'
import playIMG from './../img/main-video.svg'
import stopIMG from './../img/main-stop.svg'
import missionIMG from './../img/mission-img.png'

const Work = () => {

    const [ play, setPlay ] = useState(false)

    return (
        <section className="work">
            <div className="container">
                <div className="work__block">
                    <h3 className="work__title">How it works</h3>
                    <p className="work__post-title">Spice up your space even simpler
                        than you think</p>
                    <div className="work__inner">
                        <img src={workIMG} alt="Work-img" className="work__img"/>
                        <div className="work__img-description">
                            <div className="work__img-box">
                                <p className="work__img-text">We provide design and build
                                    for commercial building,
                                    interior and furniture to improve
                                    the better life. </p>
                                <div className="work__img-play" onClick={() => setPlay(!play)}>
                                    <img src={play ? stopIMG : playIMG} alt={play ? 'stop' : 'play'} />
                                    <span>SEE VIDEO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mission">
                    <img src={missionIMG} alt='Mission-IMG' className="mission__img"/>
                    <div className="mission__block">
                        <div className="mission__box">
                            <h3 className="mission__title">Our mission is to
                                deliver aesthetic visual
                                for your home</h3>
                            <p className="mission__text">By applying bacis psychology principles,
                                we are going to explain how perception
                                works and how we can use this understanding
                                to maximise the space that we occupy in
                                our homes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;