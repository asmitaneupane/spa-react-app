import React, { useState, useEffect } from 'react'
import siteLogo from '../assets/img/site-logo.png'
import { Link } from 'react-router-dom'
import '../App.css'
import footerBg from '../assets/img/footer-bg.png'

function Footer() {

    const [isVisible, setIsVisible] = useState(false);
     // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      // Set the top cordinate to 0
  // make scrolling smooth
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
     };

     useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);
     

    return (
        <footer id="colophon" className="site-footer">
            {/* <!-- footer starting from here --> */}
            <div className="widget-area" style={{
                background: `url(${footerBg})`,
            }} >
                {/* <!-- widget area starting from here --> */}
                <div className="container">
                    <aside className="widget">
                        <div className="textwidget">
                            <a className="footer-branding">
                                <img src={siteLogo} />
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
                                    <input name="EMAIL" placeholder="exmaple@gmail.com" type="email" required />
                                </p>
                                <p>
                                    <input value="SUBSCRIBE" type="submit" />
                                </p>
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



                    <div className="inline-social-icons social-links ">
                        <ul>
                            <li>
                                <Link to="https://facebook.com" title="facebook" target="blank">
                                    facebook
                                </Link>
                            </li>
                            <li>
                                <Link to="https://twitter.com" title="twitter" target="blank">
                                    twitter
                                </Link>
                            </li>
                            <li>
                                <Link to="https://youtube.com" title="youtube" target="blank">
                                    youtube
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <span className="copy-right">© 2018 &nbsp;
                        <a >Theme Company</a> All Rights Reserved &nbsp;
                        <a >Privacy Policy
                        </a>
                    </span>
                </div>

                <div className="back-to-top">
                    {isVisible && 
                    <div onClick={scrollToTop}>
                    <button href="#masthead" title="Go to Top" className="fa-angle-up"></button>
                </div>
                }
                </div>

            </div>
        </footer>
        // {/* <!-- footer ends here --> */}
    )
}

export default Footer
