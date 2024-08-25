import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">Front-end <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">Back-end <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">App <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>
            </div>

            {/* Modal 1 */}
            {toggleState === 1 && (
                <div className="services__modal active-modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Front-end Developer</h3>
                        <p className="services__modal-description">
                            Services with more 2 years of experience. Providing quality work to clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interaction.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interaction.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Modal 2 */}
            {toggleState === 2 && (
                <div className="services__modal active-modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Back-end Developer</h3>
                        <p className="services__modal-description">
                            Services with more 2 years of experience. Providing quality work to clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the server-side logic.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I integrate databases.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I ensure server security.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Modal 3 */}
            {toggleState === 3 && (
                <div className="services__modal active-modal">
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">App Developer</h3>
                        <p className="services__modal-description">
                            Services with more 2 years of experience. Providing quality work to clients and companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop mobile applications.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I integrate APIs.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I ensure cross-platform compatibility.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Services;
