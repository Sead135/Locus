import React, {useState} from 'react';
const NavBar = ({links}) => {

    const [ active, setActive ] = useState(1)
    const [ show, setShow ] = useState(false)

    return (
        <nav className={`nav ${ show ? 'show' : ''}`}>
            <div className="container">
                <div className="nav__inner">
                    <div className="nav__logo">
                        <svg width="45" height="53" viewBox="0 0 45 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 28V49H25" stroke="#58A9A5" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M41 28V49H20" stroke="#58A9A5" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M41 28L28.8588 15.4666L17 4" stroke="#58A9A5" strokeWidth="8" strokeLinecap="round"/>
                            <path d="M4 28L16.1412 15.4666L28 4" stroke="#58A9A5" strokeWidth="8" strokeLinecap="round"/>
                        </svg>
                        <span>Locus</span>
                    </div>
                    <ul className={`nav__items ${ show ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                        { links.map(link =>
                            <li className="nav__item" key={link.id}>
                                <a
                                   className={`nav__item-link${link.id === active ? ' active' : ''}`}
                                   onClick={() => setActive(link.id)}
                                >{link.title}</a>
                            </li>
                        ) }
                    </ul>
                    <div className={ `burger ${ show ? 'show' : '' }` } onClick={() => setShow(!show)}>
                        <div className="burger__line"></div>
                        <div className="burger__line"></div>
                        <div className="burger__line"></div>
                    </div>
                    <button className="nav__button">Sing Up</button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;