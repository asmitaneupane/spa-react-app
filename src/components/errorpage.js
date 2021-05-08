import React from 'react'
import siteLogo from '../assets/img/site-logo.png'
import errorBg from '../assets/img/error-bg.jpg'


function errorpage() {
    return (
        <>

            <div id="page" class="hfeed site">
                <header id="masthead" class="site-header" >
                    {/* <!-- header starting from here --> */}

                    <div class="hgroup-wrap">
                        <div class="container">
                            <section class="site-branding">
                                {/* <!-- site branding starting from here --> */}
                                <h1 class="site-title">
                                    <a href="/" title="site-logo" target="_self">
                                        <img src={siteLogo} alt="logo" />
                                    </a>
                                </h1>
                                {/* <!-- <span class="site-description">satisfied home</span> --> */}
                            </section>
                            {/* <!-- site branding ends here --> */}


                            <div class="hgroup-right">
                                <div id="navbar" class="navbar">
                                    {/* <!-- navbar starting from here --> */}
                                    <nav id="site-navigation" class="navigation main-navigation">
                                        <div class="menu-content-wrapper">
                                            <div class="menu-top-menu-container">
                                                <ul>
                                                    <li><a href="/" target="_self">home</a></li>
                                                    <li><a href="/aboutpage" target="_self">about us</a></li>
                                                    <li><a href="/service" target="_self">service</a></li>
                                                    <li className="current-menu-item"><a href="/errorpage" target="_self">error</a></li>
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
                                <div id="left-search" class="header-search-section">
                                    <div class="search-toggle">
                                        <i class="fa"></i>
                                    </div>
                                </div>
                                <div class="site-cart-views">
                                    <div class="site-cart-info">
                                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <span class="cart-quantity">2</span>
                                    </div>
                                    <div class="widget widget_shopping_cart">
                                        <div class="mini_cart_inner">
                                            <div class="widget woocommerce widget_shopping_cart">
                                                <div class="widget_shopping_cart_content">
                                                    <p class="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="search-section">
                                    {/* <!-- search section starting from here --> */}
                                    <div class="search-container">
                                        <div class="close-icon">
                                            <i class="fa fa-times"></i>
                                        </div>
                                        <form role="search" method="get" class="search-form" action="">
                                            <label>
                                                <span class="screen-reader-text">Search for:</span>
                                                <input class="search-field" placeholder="Search …" value="" name="s"
                                                    type="search" />
                                                <span class="search-input-line"></span>
                                            </label>
                                            <input class="search-submit" value="Search" type="submit" />
                                        </form>
                                        <h5>Type to search</h5>
                                    </div>
                                </div>
                                {/* <!-- search section ends here --> */}
                            </div>
                        </div>
                    </div>

                </header>

                <div id="content" className="site-content">
                    <div id="primary" className="content-area">
                        {/* <!-- primary-home starting from here --> */}
                        <main id="main" className="site-main">
                            <div className="error-404 not-found" style={{
                                background: `url(${errorBg})`,
                            }} >
                                <div className="container">
                                    <div className="entry-content">
                                        <h2 className="page-title">404</h2>
                                        <p>page not found</p>
                                        <a href="/" className="box-button">back to homepage</a>
                                    </div>
                                </div>
                                {/* <!-- .page-header --> */}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default errorpage
