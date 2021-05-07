import React from 'react'
import siteLogo from '../assets/img/site-logo.png'
import sliderImg from '../assets/img/slider-img.jpg'


function Header() {
    return (
        
        <div id="page" class="hfeed site">
        <header id="masthead" className="site-header" style="background: url(assets/img/slider-bg.jpg)">
            {/* <!-- header starting from here --> */}

            <div className="hgroup-wrap">
                <div className="container">
                    <section className="site-branding">
                        {/* <!-- site branding starting from here --> */}
                        <h1 className="site-title">
                            <a href="/" title="site-logo" target="_self">
                                <img src={siteLogo} alt="logo" />
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
                                            <li><a href="/" target="_self">home</a></li>
                                            <li><a href="/aboutpage" target="_self">about us</a></li>
                                            <li><a href="/service" target="_self">service</a></li>
                                            <li><a href="/errorpage" target="_self">error</a></li>
                                            <li className="menu-item-has-children"><a target="_self">pages</a>
                                                <ul>
                                                    <li><a target="_self">portfolio</a></li>
                                                    <li><a target="_self">portfolio
                                                            detail</a>
                                                    </li>
                                                    <li><a target="_self">service detail</a>
                                                    </li>
                                                    <li><a target="_self">error page</a></li>
                                                    <li>
                                                        <a target="_self">listing version</a>
                                                        <ul>
                                                            <li>
                                                                <a target="_self">listing 1</a>
                                                            </li>
                                                            <li>
                                                                <a target="_self">listing 2</a>
                                                            </li>
                                                            <li>
                                                                <a target="_self">listing 3</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/contact" target="_self">contact us</a></li>
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
                </div>
                <div class="page-title-wrap" style="background-image:url(assets/img/single-page.jpg);">
                <div class="container">
                    <h2 class="page-title">
                        
                    </h2>
                    <div class="breadcrumb-trail breadcrumbs">
                        <ul class="trail-items">
                            <li class="trail-item trail-begin">
                                <a href="#" rel="home">
                                    <span itemprop="name">Home</span>
                                </a>
                                <meta />
                            </li>
                            <li class="trail-item trail-end">
                                <span itemprop="name">about</span>
                                <meta />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </header>
        </div>
        // {/* <!-- header ends here --> */}
    )
}

export default Header
