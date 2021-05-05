import React from 'react'
import ScriptTag from 'react-script-tag';


function contact() {
    return (
        <>
            <div id="content" class="site-content">
                <div id="primary" class="content-area">
                    {/* <!-- primary-home starting from here --> */}
                    <main id="main" class="site-main">
                        <div class="contact-section" style={{background: "url(assets/img/about-bg2.png)"}}>
                            <div class="container">
                                <header class="entry-header heading">
                                    <h2 class="entry-title">
                                        <span>Contact us </span> Get In Touch</h2>
                                    <p>Risus magna aenean, sagittis sit neque corporis, integer praesent tristique eu
                                    amet mauris, a quisque, facilisis molestie a lacus quam elit. Nulla lacus conva
                                    lis. Vivamus nulla at in eros mi, magna malesuada ut sed facilisis, metus proin.
                                </p>
                                </header>
                                <div class="contact-section-wrap">
                                    <div class="contact-form-wrap">
                                        <div class="entry-content">
                                            <div class="wpcf7">
                                                <div class="screen-reader-response"></div>
                                                <form class="wpcf7-form">
                                                    <div>
                                                        <input name="_wpcf7" value="74" type="hidden" />
                                                        <input name="_wpcf7_version" value="4.7" type="hidden" />
                                                        <input name="_wpcf7_locale" value="en_US" type="hidden" />
                                                        <input name="_wpcf7_unit_tag" value="wpcf7-f74-p10-o1" type="hidden" />
                                                        <input name="_wpnonce" value="126daca5d8" type="hidden" />
                                                    </div>
                                                    <p>
                                                        <label>
                                                            <span class="your-name">
                                                                <input name="your-name" value="" size="40" class=""
                                                                    placeholder="Full Name" type="text" />
                                                            </span>
                                                        </label>
                                                    </p>
                                                    <p>
                                                        <label>
                                                            <span class="your-email">
                                                                <input name="your-email" value="" size="40" class=""
                                                                    placeholder="Email Address" type="email" />
                                                            </span>
                                                        </label>
                                                    </p>
                                                    <p>
                                                        <label>
                                                            <span class="your-message">
                                                                <textarea name="your-message" rows="8" class=""
                                                                    placeholder="Your Message"></textarea>
                                                            </span>
                                                        </label>
                                                    </p>
                                                    <p>
                                                        <input value="submit" class="wpcf7-submit" type="submit" />
                                                        <span class="ajax-loader"></span>
                                                    </p>
                                                    <div class="wpcf7-response-output wpcf7-display-none"></div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- .entry-content --> */}
                                    </div>
                                    <div class="contact-info-section">
                                        <div class="contact-detail-information">
                                            <div class="contact-detail-item">
                                                <div class="contact-detail-icon">
                                                    <i class="fa fa-home"></i>
                                                </div>
                                                <div class="contact-detail-content">
                                                    4319 Church St. Brooklyn
                                                <span>Get in Touch</span>
                                                </div>
                                            </div>
                                            <div class="contact-detail-item">
                                                <div class="contact-detail-icon">
                                                    <i class="fa fa-envelope"></i>
                                                </div>
                                                <div class="contact-detail-content">
                                                    <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                                                    <span>24hrs service</span>
                                                </div>
                                            </div>
                                            <div class="contact-detail-item">
                                                <div class="contact-detail-icon">
                                                    <i class="fa fa fa-phone"></i>
                                                </div>
                                                <div class="contact-detail-content">
                                                    <a href="tel:1234567890">1234567890</a>
                                                    <span>Free Call</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="inline-social-icons social-links">
                                            <h5>Follow us</h5>
                                            <ul>
                                                <li>
                                                    <a href="https://facebook.com" title="facebook"
                                                        target="blank">facebook</a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com" title="twitter" target="blank">twitter</a>
                                                </li>
                                                <li>
                                                    <a href="https://youtube.com" title="youtube" target="blank">youtube</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="map-section">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.31864484344!2d85.36141294126249!3d27.68516379924847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a419f80aa67%3A0x288ab8841508315f!2sMadhyapur+Thimi!5e0!3m2!1sen!2snp!4v1562728872161!5m2!1sen!2snp"
                                height="380"></iframe>
                        </div>
                    </main>
                </div>
            </div>
               {/* <!-- jQuery library  --> */}
    <ScriptTag src="assets/js/jquery.js" />

{/* <!-- slick  jquery plguin --> */}
<ScriptTag src="assets/js/slick.js" />

{/* <!-- jquery.meanmenu for responsive menu --> */}
<ScriptTag src="assets/js/jquery.meanmenu.js" />

{/* <!--ResizeSensor for to support sticky sidebar--> */}
<ScriptTag src="assets/js/ResizeSensor.js" />

{/* <!--theia-sticky-sidebar for sticky sidebar--> */}
<ScriptTag src="assets/js/theia-sticky-sidebar.js" />
<ScriptTag src="assets/js/jquery.countdown.js" />

{/* <!-- Custom script --> */}
<ScriptTag src="assets/js/custom.js" />
        </>
    )
}

export default contact
