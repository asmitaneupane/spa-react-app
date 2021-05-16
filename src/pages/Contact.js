import React from 'react'
import { Link } from 'react-router-dom'
import singlePage from '../assets/img/single-page.jpg'
import aboutBg2 from '../assets/img/about-bg2.png'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export default function Contact() {
    return (
        <div>
            <Header/>
            <div id="page" className="hfeed site">
                <div id="content" className="site-content">
                    <div id="primary" className="content-area">
                        {/* <!-- primary-home starting from here --> */}
                        <main id="main" className="site-main">
                            <div className="contact-section" style={{
                                background: `url(${aboutBg2})`,
                            }} >
                                <div className="container">
                                    <header className="entry-header heading">
                                        <h2 className="entry-title">
                                            <span>Contact us </span> Get In Touch</h2>
                                        <p>Risus magna aenean, sagittis sit neque corporis, integer praesent tristique eu
                                        amet mauris, a quisque, facilisis molestie a lacus quam elit. Nulla lacus conva
                                        lis. Vivamus nulla at in eros mi, magna malesuada ut sed facilisis, metus proin.
                                </p>
                                    </header>
                                    <div className="contact-section-wrap">
                                        <div className="contact-form-wrap">
                                            <div className="entry-content">
                                                <div className="wpcf7">
                                                    <div className="screen-reader-response"></div>
                                                    <form className="wpcf7-form">
                                                        <div>
                                                            <input name="_wpcf7" defaultValue="74" type="hidden" />
                                                            <input name="_wpcf7_version" defaultValue="4.7" type="hidden" />
                                                            <input name="_wpcf7_locale" defaultValue="en_US" type="hidden" />
                                                            <input name="_wpcf7_unit_tag" defaultValue="wpcf7-f74-p10-o1" type="hidden" />
                                                            <input name="_wpnonce" defaultValue="126daca5d8" type="hidden" />
                                                        </div>
                                                        <p>
                                                            <label>
                                                                <span className="your-name">
                                                                    <input name="your-name" defaultValue="" size="40" className=""
                                                                        placeholder="Full Name" type="text" />
                                                                </span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label>
                                                                <span className="your-email">
                                                                    <input name="your-email" defaultValue="" size="40" className=""
                                                                        placeholder="Email Address" type="email" />
                                                                </span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <label>
                                                                <span className="your-message">
                                                                    <textarea name="your-message" rows="8" className=""
                                                                        placeholder="Your Message"></textarea>
                                                                </span>
                                                            </label>
                                                        </p>
                                                        <p>
                                                            <input defaultValue="submit" className="wpcf7-submit" type="submit" />
                                                            <span className="ajax-loader"></span>
                                                        </p>
                                                        <div className="wpcf7-response-output wpcf7-display-none"></div>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <!-- .entry-content --> */}
                                        </div>
                                        <div className="contact-info-section">
                                            <div className="contact-detail-information">
                                                <div className="contact-detail-item">
                                                    <div className="contact-detail-icon">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="contact-detail-content">
                                                        4319 Church St. Brooklyn
                                                <span>Get in Touch</span>
                                                    </div>
                                                </div>
                                                <div className="contact-detail-item">
                                                    <div className="contact-detail-icon">
                                                        <i className="fa fa-envelope"></i>
                                                    </div>
                                                    <div className="contact-detail-content">
                                                        <Link to="mailto:admin@gmail.com"/>admin@gmail.com
                                                        <span>24hrs service</span>
                                                    </div>
                                                </div>
                                                <div className="contact-detail-item">
                                                    <div className="contact-detail-icon">
                                                        <i className="fa fa fa-phone"></i>
                                                    </div>
                                                    <div className="contact-detail-content">
                                                        <Link to="tel:1234567890"/>1234567890
                                                        <span>Free Call</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inline-social-icons social-links">
                                                <h5>Follow us</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="https://facebook.com" title="facebook"
                                                            target="blank"/>
                                                    </li>
                                                    <li>
                                                        <Link to="https://twitter.com" title="twitter" target="blank"/>
                                                    </li>
                                                    <li>
                                                        <Link to="https://youtube.com" title="youtube" target="blank"/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="map-section">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.31864484344!2d85.36141294126249!3d27.68516379924847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a419f80aa67%3A0x288ab8841508315f!2sMadhyapur+Thimi!5e0!3m2!1sen!2snp!4v1562728872161!5m2!1sen!2snp"
                                    height="380"></iframe>
                            </div>
                        </main>
                    </div>
                </div>

            </div>
            
        </div>
        
    )
}
