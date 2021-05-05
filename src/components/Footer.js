import React from 'react'
import siteLogo from '../assets/img/site-logo.png'
import ScriptTag from 'react-script-tag';
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
    return (
        <footer id="colophon" className="site-footer">
            {/* <!-- footer starting from here --> */}
            <div className="widget-area" style={{ background: "url( assets/img/footer-bg.png)" }}>
                {/* <!-- widget area starting from here --> */}
                <div className="container">
                    <aside className="widget">
                        <div className="textwidget">
                            <a href="#" className="footer-branding">
                                <img src={siteLogo} alt="site-logo" />
                            </a>
                        </div>
                    </aside>
                    <aside className="widget">
                        <div className="contact-detail">
                            <div className="textwidget">
                                <ul>
                                    <li>
                                        <h4>address</h4>
                                        <span>525 E 71st street New York , NY, Clover Hill , Flanders, NJ, USA</span>
                                    </li>
                                    <li>
                                        <h4>call us</h4>
                                        <span>
                                            <a href="mailto:info@gmail.com">info@gmail.com</a>
                                        </span>
                                        <span>
                                            <a href="mailto:support_spa@gmail.com">support_spa@gmail.com</a>
                                        </span>
                                    </li>
                                    <li>
                                        <h4>email us</h4>
                                        <span>
                                            <a href="tel:+1 484 473 2449">+1 484 473 2449</a>
                                        </span>
                                        <span>
                                            <a href="tel:+1 484 473 2449">+1 484 473 2450</a>
                                        </span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </aside>
                    <aside className="widget">
                        <h2 className="widget-title"><span>Subscribe</span> Get Latest updates</h2>
                        <form className="mc4wp-form">
                            <div className="mc4wp-form-fields">
                                <p>
                                    <input name="EMAIL" placeholder="exmaple@gmail.com" required="" type="email" />
                                </p>
                                <p>
                                    <input defaultValue="SUBSCRIBE" type="submit" />
                                </p>
                                <label>Leave this field empty if you're
                                human:
                                    <input name="_mc4wp_honeypot" defaultValue="" tabIndex="-1" autoComplete="off" type="text" />
                                </label>
                                <input name="_mc4wp_timestamp" defaultValue="1507111963" type="hidden" />
                                <input name="_mc4wp_form_id" defaultValue="1732" type="hidden" />
                                <input name="_mc4wp_form_element_id" defaultValue="mc4wp-form-1" type="hidden" />
                            </div>
                            <div className="mc4wp-response"></div>
                        </form>
                    </aside>
                </div>
            </div>
            {/* <!-- widget area ends here --> */}
            <div className="site-generator">
                <div className="container">
                    <div className="inline-social-icons social-links">
                        <ul>
                            <li>
                            <AiOutlineFacebook/><a href="https://facebook.com" title="facebook" target="blank">facebook</a>
                            </li>
                            <li>
                                <AiOutlineTwitter/><a href="https://twitter.com" title="twitter" target="blank">twitter</a>
                            </li>
                            <li>
                                <TiSocialYoutubeCircular/><a href="https://youtube.com" title="youtube" target="blank">youtube</a>
                            </li>

                        </ul>
                    </div>
                    <span className="copy-right">© 2018
                        <a href="#">Theme Company</a> All Rights Reserved
                        <a href="#">Privacy Policy
                        </a>
                    </span>
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

            </div>
        </footer>
        // {/* <!-- footer ends here --> */}
    )
}

export default Footer
