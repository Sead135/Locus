import React, {useState} from 'react';
import NavBar from "./components/NavBar";
import './App.css'
import Main from "./components/Main";
import Work from "./components/Work";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const App = () => {

    const [showConfetti, setShowConfetti] = useState(false)

    const { width, height } = useWindowSize()

    const links = [
        { id: 1, title: 'Home', link: '/'},
        { id: 2, title: 'Contact', link: '/'},
        { id: 3, title: 'Location', link: '/'},
        { id: 4, title: 'About Us', link: '/'}
    ]

    const confetti = (show) => {
        setShowConfetti(show)
    }

    return (
        <>
            { showConfetti ?
                    <Confetti
                        style={{position: 'fixed', display: 'block', opacity: 1}}
                        width={width}
                        height={height}
                        run={showConfetti}
                    /> :
                    <Confetti
                        style={{position: 'fixed', opacity: 0, transition: '1s'}}
                        width={width}
                        height={height}
                        run={showConfetti}
                    />
            }
            <NavBar links={links}/>
            <Main/>
            <Work/>
            <Project/>
            <Testimonial/>
            <Contact/>
            <Footer show={confetti}/>
        </>
    );
};

export default App;