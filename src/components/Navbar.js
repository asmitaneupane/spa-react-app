import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import siteLogo from '../assets/img/site-logo.png'

export default function Navbar() {
    return (
        <div className="hgroup-wrap ">
            <div className="container">

                <section className="site-branding">
                    {/* <!-- site branding starting from here --> */}
                    <h1 className="site-title">
                        <Link to="/" title="site-logo">
                            <img src={siteLogo} />
                        </Link>
                    </h1>
                    {/* <!-- <span className="site-description">satisfied home</span> --> */}
                </section>
                {/* <!-- site branding ends here --> */}
                <div className="hgroup-right">
                    <div id="navbar" className="navbar">
                        {/* <!-- navbar starting from here --> */}
                        <nav id="site-navigation" className="navigation main-navigation mean-navigation">
                            {/* <div className="menu-content-wrapper"  onClick={handleClick}> */}
                            <div className="menu-content-wrapper">
                                {/* <i className= {click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                                <div className="menu-top-menu-container">
                                    <ul>
                                        {/* <ul className={click ? 'nav-menu active': 'nav-menu'}> */}

                                        <li className={(window.location.href.includes('/aboutpage')) || (window.location.href.includes('/service')) || (window.location.href.includes('/contact')) || (window.location.href.includes('/errorpage')) ? "" : "current-menu-item"}><Link to="/">home</Link></li>
                                        <li className={(window.location.href.includes('/aboutpage')) ? "current-menu-item" : ""}><Link to="/aboutpage" >about us</Link></li>
                                        <li className={(window.location.href.includes('/service')) ? "current-menu-item" : ""}><Link to="/service" >service</Link></li>
                                        <li className={(window.location.href.includes('/errorpage')) ? "current-menu-item" : ""}><Link to="/errorpage" >error</Link></li>

                                            <li className="menu-item-has-children"><Link to="">pages</Link>                                                        
                                            <ul>
                                                <li><Link to="">portfolio</Link></li>
                                                <li><Link to="">portfolio detail</Link></li>
                                                <li><Link to="">service detail</Link></li>
                                                <li><Link to="">error page</Link></li>
                                                <li>
                                                    <Link to="">listing version</Link>
                                                    <ul>
                                                        <li>
                                                            <Link to="">listing 1</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="">listing 2</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="">listing 3</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            </li>
                                            <li className={(window.location.href.includes('/contact')) ? "current-menu-item" : ""}><Link to="/contact">contact us</Link></li>
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



                    </div>
                </div>

            </div>
    )
}
