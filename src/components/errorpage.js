import React, { useState } from 'react'
import Modal from 'react-modal'
import FormComponent from '../components/searchForm'
import siteLogo from '../assets/img/site-logo.png'
import errorBg from '../assets/img/error-bg.jpg'
import { fixed, auto } from 'react-slick'

function Errorpage() {

    const nav = {
        position: fixed,
        paddingTop: 0,
        height: auto,
        background: '#fff',
        boxShadow: '0 2px 6px 2px rgba(0, 0, 0, 0.09)',
        zIndex: 99,
        left: 0,
        right: 0,
      };

    //searchForm Modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const searchForm = () => {
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    return (
        <>

            <div id="page" className="hfeed site">
                <header id="masthead" className="site-header" >
                    {/* <!-- header starting from here --> */}

                    <div className="hgroup-wrap" style={{ nav }}>
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
                                <div id="left-search" className="header-search-section">
                                    <div className="search-toggle">
                                        <i className="fa" onClick={searchForm}></i>
                                    </div>
                                    <Modal isOpen={modalIsOpen}>
                                        <button onClick={setModalIsOpenToFalse}>x</button>
                                        <FormComponent />
                                    </Modal>
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

export default Errorpage
