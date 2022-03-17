import React from 'react';

const Contact = () => {

    return (
        <section className="contact">
            <div className="container">
                <div className="contact__block">
                    <div className="contact__inner">
                        <h3 className="contact__title">Contact Us</h3>
                        <p className="contact__text">Have any questions? Want help
                            before getting started?</p>
                    </div>
                    <form className="contact__form">
                        <div className="form__block">
                            <input className="form__input" type="text" placeholder="Full name"/>
                            <input className="form__input" type="email" placeholder="Email address"/>
                            <label>Description</label>
                            <div className="form__btn">
                                <button onClick={(e) => e.preventDefault()}>Send now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;