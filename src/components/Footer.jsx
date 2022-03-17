import React, {useState} from 'react';

const Footer = ({show}) => {

    const [logo, setLogo] = useState('Sead135')

    const clickLogo = () => {
        setLogo('Thanks!')
        show(true)
        setTimeout(() => {
            setLogo('Sead135')
            show(false)
        }, [5000])
    }

    return (
        <footer>
            <div className="container">
                <div className="footer__block">
                    <h6 className="footer__title" style={{cursor: "pointer"}} onClick={() => clickLogo()}>{logo}</h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;