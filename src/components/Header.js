import React from 'react'
import siteLogo from '../assets/img/site-logo.png'
import sliderImg from '../assets/img/slider-img.jpg'
import ScriptTag from 'react-script-tag';


function Header() {
    return (

        <header id="masthead" className="site-header">
            {/* <!-- header starting from here --> */}

            <div className="hgroup-wrap">
                <div className="container">
                    <section className="site-branding">
                        {/* <!-- site branding starting from here --> */}
                        <h1 className="site-title">
                            <a href="index.html" title="site-logo" target="_self">
                                <img src={siteLogo} alt="site-logo" />
                            </a>
                        </h1>
                        {/* <!-- <span className="site-description">satisfied home</span> --> */}
                    </section>
                    {/* <!-- site branding ends here --> */}


                    <div className="hgroup-right">
                        <div id="navbar" className="navbar">
                            {/* <!-- navbar starting from here --> */}
                            <nav id="site-navigation" className="navigation main-navigation">
                                <div className="menu-content-wrapper">
                                    <div className="menu-top-menu-container">
                                        <ul>
                                            <li className="current-menu-item"><a href="index.html" target="_self">home</a>
                                            </li>
                                            <li><a href="about-page.html" target="_self">about us</a></li>
                                            <li><a href="service.html" target="_self">service</a></li>
                                            <li><a href="error-page.html" target="_self">error</a></li>
                                            <li className="menu-item-has-children"><a href="#" target="_self">pages</a>
                                                <ul>
                                                    <li><a href="#" target="_self">portfolio</a></li>
                                                    <li><a href="#" target="_self">portfolio
                                                            detail</a>
                                                    </li>
                                                    <li><a href="#" target="_self">service detail</a>
                                                    </li>
                                                    <li><a href="#" target="_self">error page</a></li>
                                                    <li>
                                                        <a href="#" target="_self">listing version</a>
                                                        <ul>
                                                            <li>
                                                                <a href="#" target="_self">listing 1</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" target="_self">listing 2</a>
                                                            </li>
                                                            <li>
                                                                <a href="#" target="_self">listing 3</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html" target="_self">contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                            {/* <!-- #site-navigation --> */}
                        </div>
                        {/* <!-- navbar ends here --> */}
                        <div id="left-search" className="header-search-section">
                            <div className="search-toggle">
                                <i className="fa"></i>
                            </div>
                        </div>
                        <div className="site-cart-views">
                            <div className="site-cart-info">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span className="cart-quantity">2</span>
                            </div>
                            <div className="widget widget_shopping_cart">
                                <div className="mini_cart_inner">
                                    <div className="widget woocommerce widget_shopping_cart">
                                        <div className="widget_shopping_cart_content">
                                            <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="search-section">
                            {/* <!-- search section starting from here --> */}
                            <div className="search-container">
                                <div className="close-icon">
                                    <i className="fa fa-times"></i>
                                </div>
                                <form role="search" method="get" className="search-form" action="">
                                    <label>
                                        <span className="screen-reader-text">Search for:</span>
                                        <input className="search-field" placeholder="Search …" defaultValue="" name="s"
                                            type="search" />
                                        <span className="search-input-line"></span>
                                    </label>
                                    <input className="search-submit" defaultValue="Search" type="submit" />
                                </form>
                                <h5>Type to search</h5>
                            </div>
                        </div>
                        {/* <!-- search section ends here --> */}
                    </div>
                </div>
                <div className="mouse-scroll">
                    <a href="#content">scroll</a>
                </div>
            </div>
            <section className="featured-slider ">
                <div className="banner-slider">
                    <div className="slider-item">
                        <figure className="slider-image">
                            <img src={sliderImg} alt="slider-img" />
                        </figure>
                    </div>
                </div>
            </section>


        </header>
        // {/* <!-- header ends here --> */}
    )
}

export default Header
