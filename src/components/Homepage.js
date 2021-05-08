import React, { useState } from 'react'
import CountUp from 'react-countup'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import about1 from '../assets/img/about1.jpg'
import about2 from '../assets/img/about2.jpg'
import headingImage from '../assets/img/heading-image.png'
import service1 from '../assets/img/service1.jpg'
import service2 from '../assets/img/service2.jpg'
import service3 from '../assets/img/service3.jpg'
import service4 from '../assets/img/service4.jpg'
import reservation1 from '../assets/img/reservation1.png'
import counterIcon1 from '../assets/img/counter-icon1.png'
import counterIcon2 from '../assets/img/counter-icon2.png'
import counterIcon3 from '../assets/img/counter-icon3.png'
import counterIcon4 from '../assets/img/counter-icon4.png'
import testi1 from '../assets/img/testi1.jpg'
import featuresImg from '../assets/img/features-img.png'
import discountImg from '../assets/img/discount-img.jpg'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'
import pricingImage from '../assets/img/pricing-image.png'
import product1 from '../assets/img/product1.png'
import product2 from '../assets/img/product2.png'
import lpost1 from '../assets/img/lpost1.jpg'
import lpost2 from '../assets/img/lpost2.jpg'
import lpost3 from '../assets/img/lpost3.jpg'
import partner1 from '../assets/img/partner1.png'
import partner2 from '../assets/img/partner2.png'
import partner3 from '../assets/img/partner3.png'
import partner4 from '../assets/img/partner4.png'
import siteLogo from '../assets/img/site-logo.png'
import sliderImg from '../assets/img/slider-img.jpg'
import aboutBg from '../assets/img/about-bg.png'
import aboutBg2 from '../assets/img/about-bg2.png'
import serviceBg from '../assets/img/service-bg.png'
import reservationBg from '../assets/img/reservation-bg.jpg'
import productsBg from '../assets/img/products-bg.jpg'

function Homepage() {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="home">
                <div id="page" class="hfeed site">
                    <header id="masthead" className="site-header">
                        {/* <!-- header starting from here --> */}

                        <div className="hgroup-wrap">
                            <div className="container">
                                <section className="site-branding">
                                    {/* <!-- site branding starting from here --> */}
                                    <h1 className="site-title">
                                        <a href="/" title="site-logo" target="_self">
                                            <img src={siteLogo} />
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
                                                        <li className="current-menu-item">
                                                            <a href="/" target="_self">home</a>
                                                        </li>
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
                            <div className="mouse-scroll">
                                <a href="#content">scroll</a>
                            </div>
                        </div>
                        <section className="featured-slider ">
                            <div className="banner-slider">
                                <div className="slider-item">
                                    <figure className="slider-image">
                                        <img src={sliderImg} />
                                    </figure>
                                </div>
                            </div>
                        </section>
                    </header>
                    {/* <!-- header ends here --> */}

                    <div id="content" class="site-content">
                        <div id="primary" class="content-area">
                            {/* <!-- primary-home starting from here --> */}
                            <main id="main" class="site-main">
                                <section className="about-us-section" style={{
                                    background: `url(${aboutBg2})`,
                                }} >
                                    <div className="container">
                                        <div className="row">
                                            <div className="custom-col-6">
                                                <div className="about-us-image-wrapper image-wrapper-has-two-image">
                                                    <figure className="first-image">
                                                        <img src={about1} />

                                                    </figure>
                                                    <figure className="second-image">
                                                        <img src={about2} />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="custom-col-6">
                                                <div className="about-us-content">
                                                    <header className="entry-header heading">
                                                        <h2 className="entry-title"><span>The best </span> Beauty Spa & Wellness Salon
                                            </h2>
                                                        <p>Hello. Our center has been present for over 20 years in the market. We
                                                        make
                                                the most of all our customers.</p>
                                                    </header>
                                                    <p>Risus magna aenean, sagittis sit neque corporis,
                                                    integer praesent tristique eu amet mauris, a quisque, facilisis molestie a
                                                    lacus
                                                    quam elit. Nulla lacus conva lis. Vivamus nulla at in eros mi, magna
                                                    malesuada
                                            ut sed facilisis, metus proin.</p>
                                                    <p>Diam pharetra sociis quis per ad metus, pharetra libero, ac quis congue orci,
                                            quam inceptos pede enim est vitae tortor.</p>
                                                    <a className="box-button"> about us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="service-section" style={{
                                    background: `url(${serviceBg})`,
                                }} >
                                    <div className="container">
                                        <header className="entry-header heading heading-center">
                                            <h2 className="entry-title">
                                                <span>Body and Mind </span> Beautiful Services We Have </h2>
                                            <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                                            dolor mauris ut lectus. Eu ut, vel laoreet
                                            aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                                            vel integer in etiam. Eleifend cras nulla,
                                            sit phasellus dapibus sed wisi accumsan, quam tortor arcu ipsum nam et. Lobortis
                                            ducimus sed pellentesque, turpis magni aliquam
                                    consectetuer erat</p>
                                            <figure className="featured-image">
                                                <img src={headingImage} />
                                            </figure>
                                        </header>
                                        <div className="post-wrapper post-wrapper-has-two-child">
                                            <article className="post">
                                                <figure className="featuerd-image">
                                                    <img src={service1} />
                                                </figure>
                                                <div className="post-content">
                                                    <header className="entry-header">
                                                        <h3 className="entry-title">
                                                            <a >hair salon</a>
                                                        </h3>
                                                    </header>
                                                    <div className="entry-content">
                                                        <a className="box-button"> read more</a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post">
                                                <figure className="featuerd-image">
                                                    <img src={service2} />
                                                </figure>
                                                <div className="post-content">
                                                    <header className="entry-header">
                                                        <h3 className="entry-title">
                                                            <a >welless spa</a>
                                                        </h3>
                                                    </header>
                                                    <div className="entry-content">
                                                        <a className="box-button"> read more</a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post">
                                                <figure className="featuerd-image">
                                                    <img src={service3} />
                                                </figure>
                                                <div className="post-content">
                                                    <header className="entry-header">
                                                        <h3 className="entry-title">
                                                            <a >physio therapy</a>
                                                        </h3>
                                                    </header>
                                                    <div className="entry-content">
                                                        <a className="box-button"> read more</a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post">
                                                <figure className="featuerd-image">
                                                    <img src={service4} />
                                                </figure>
                                                <div className="post-content">
                                                    <header className="entry-header">
                                                        <h3 className="entry-title">
                                                            <a >nail studio</a>
                                                        </h3>
                                                    </header>
                                                    <div className="entry-content">
                                                        <a className="box-button"> read more</a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </section>
                                <section className="reservation-section" style={{
                                    background: `url(${reservationBg})`,
                                }} >
                                    <div className="container">
                                        <div className="reservation-content-wrapper">
                                            <div className="reservation-content">
                                                <header className="entry-header heading">
                                                    <h2 className="entry-title">
                                                        <span>reservation </span> Book in Advance </h2>
                                                    <p>Please book in advance to get the best service from us. We wishing you a
                                            great day. Thanks!</p>
                                                </header>
                                                <p>Diam pharetra sociis quis per ad metus, pharetra libero, ac quis congue orci,
                                        quam inceptos pede enim est vitae tortor.</p>
                                                <a className="box-button">book now</a>
                                            </div>
                                            <figure className="featured-image">
                                                <img src={reservation1} />
                                            </figure>
                                        </div>
                                    </div>
                                </section>
                                <section className="testimonial-section" style={{
                                    background: `url(${aboutBg})`,
                                }} >
                                    <div className="container">
                                        <div className="testimonial-section-wrapper">
                                            <div className="counter-section">
                                                <div className="counter-item-wrapper">
                                                    <div className="counter-item">
                                                        <figure className="counter-icon">
                                                            <img src={counterIcon1} />
                                                        </figure>
                                                        <div className="count-detail">
                                                            <CountUp className="counter-value" end={640} />
                                                            <span className="counter-name">happy customer</span>
                                                        </div>
                                                    </div>
                                                    <div className="counter-item">
                                                        <figure className="counter-icon">
                                                            <img src={counterIcon2} />
                                                        </figure>
                                                        <div className="count-detail">
                                                            <CountUp className="counter-value" end={7} />
                                                            <span className="counter-name">our branches</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="counter-item-wrapper">
                                                    <div className="counter-item">
                                                        <figure className="counter-icon">
                                                            <img src={counterIcon3} />
                                                        </figure>
                                                        <div className="count-detail">
                                                            <CountUp className="counter-value" end={35} />
                                                            <span className="counter-name">office member</span>
                                                        </div>
                                                    </div>
                                                    <div className="counter-item">
                                                        <figure className="counter-icon">
                                                            <img src={counterIcon4} />
                                                        </figure>
                                                        <div className="count-detail">
                                                            <CountUp className="counter-value" end={335} />
                                                            {/* <span className="counter-value" data-count="335">0</span> */}
                                                            <span className="counter-name">repeated customer</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial-content-wrapper">
                                                <header className="entry-header heading">
                                                    <h2 className="entry-title">
                                                        <span>testimonials </span> Our Customers Review </h2>
                                                    <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis.
                                                    Vivamus nulla at in eros mi, magna malesuada ut sed
                                            facilisis, metus proin.</p>
                                                </header>
                                                <Slider className="testimonial-slider">

                                                    <div className="testimonial-item">
                                                        <div className="entry-content">
                                                            <p>“Tincidunt dis. Tortor dignissim, velit in et blandit interdum dui
                                                            vestibulum. Ut pede non, molestiae duis. Odio tortor vestibulum
                                                    nibh vel donec inei. Venen praesent non hymenaeos.”</p>
                                                        </div>
                                                        <div className="author-info-wrapper">
                                                            <div className="author-info">
                                                                <h3 className="author-name">Christina Doe</h3>
                                                                <span className="author-designation">physio clents</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="testimonial-item">
                                                        <div className="entry-content">
                                                            <p>“ Odio tortor vestibulum nibh vel donec inei. Venen praesent non
                                                            hymenaeos. Tincidunt dis. Tortor dignissim, velit in et blandit
                                                    interdum dui vestibulum. Ut pede non, molestiae duis.”</p>
                                                        </div>
                                                        <div className="author-info-wrapper">
                                                            <figure className="author-image">
                                                                <img src={testi1} />
                                                            </figure>
                                                            <div className="author-info">
                                                                <h3 className="author-name">katherine shea</h3>
                                                                <span className="author-designation">body massage</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-item">
                                                        <div className="entry-content">
                                                            <p>“Velit in et blandit interdum dui
                                                            vestibulum. Ut pede non, molestiae duis. Odio
                                                            tortor vestibulum nibh vel donec inei. Venen praesent non
                                                    hymenaeos.”</p>
                                                        </div>
                                                        <div className="author-info-wrapper">
                                                            <div className="author-info">
                                                                <h3 className="author-name">john balt</h3>
                                                                <span className="author-designation">physio clents</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="testimonial-item">
                                                        <div className="entry-content">
                                                            <p>“Dignissim, velit in et blandit interdum dui
                                                            vestibulum. Ut pede non, molestiae duis. Odio
                                                            tortor vestibulum nibh vel donec inei. Venen praesent non
                                                    hymenaeos.”</p>
                                                        </div>
                                                        <div className="author-info-wrapper">
                                                            <div className="author-info">
                                                                <h3 className="author-name">suresh paudel</h3>
                                                                <span className="author-designation">body pain</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="features-section" style={{
                                    background: `url(${serviceBg})`,
                                }} >
                                    <div className="container">
                                        <header className="entry-header heading heading-center">
                                            <h2 className="entry-title">
                                                <span>features </span> Why Choose us</h2>
                                            <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                                            dolor mauris ut lectus. Eu ut, vel laoreet
                                            aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                                    vel integer in etiam.</p>
                                        </header>
                                        <div className="features-content-wrapper">
                                            <div className="features-post-wrapper">
                                                <article className="post">
                                                    <span className="features-post-count"></span>
                                                    <div className="post-content">
                                                        <header className="entry-header">
                                                            <h3 className="entry-title">
                                                                <a >Friendly enviroment</a>
                                                            </h3>
                                                        </header>
                                                        <div className="entry-content">
                                                            <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un
                                                            conva
                                                    lis lacus quam elit.</p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="post">
                                                    <span className="features-post-count"></span>
                                                    <div className="post-content">
                                                        <header className="entry-header">
                                                            <h3 className="entry-title">
                                                                <a >Best specialties</a>
                                                            </h3>
                                                        </header>
                                                        <div className="entry-content">
                                                            <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un
                                                            conva
                                                            lis.
                                                </p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="post">
                                                    <span className="features-post-count"></span>
                                                    <div className="post-content">
                                                        <header className="entry-header">
                                                            <h3 className="entry-title">
                                                                <a >reasonable price</a>
                                                            </h3>
                                                        </header>
                                                        <div className="entry-content">
                                                            <p>Ae lacus quam elit. Nulla lacus un conva A quisque, facilisis
                                                            molestie
                                                            lis.
                                                </p>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="post">
                                                    <span className="features-post-count"></span>
                                                    <div className="post-content">
                                                        <header className="entry-header">
                                                            <h3 className="entry-title">
                                                                <a >quality service</a>
                                                            </h3>
                                                        </header>
                                                        <div className="entry-content">
                                                            <p>Molestie ae lacus quisque, facilisis mquam elit lacus quisque. Nulla
                                                            lacus un conva
                                                            lis.
                                                </p>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <figure className="featured-image">
                                                <img src={featuresImg} />
                                            </figure>
                                        </div>
                                    </div>
                                </section>
                                <section className="call-to-action">
                                    <div className="container">
                                        <div className="discount-section">
                                            <div className="discount-image">
                                                <figure>
                                                    <img src={discountImg} />
                                                </figure>
                                            </div>
                                            <div className="discount-content">
                                                <h3 className="discount-text"> <span className="discount-rate">50%</span>Discount</h3>
                                                <h2 className="discount-title">on wellness spa</h2>
                                                <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacuses conva lis. Vivamus
                                                nulla at in eros mi, magna malesuada ut
                                        sed facilisis, metus proin.</p>
                                                <div className="discount-btn-wrapper">
                                                    <a className="box-button">book now</a>
                                                    <span>gift card</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="team-section" style={{
                                    background: `url(${aboutBg})`,
                                }} >
                                    <div className="container">
                                        <div className="team-section-wrapper">
                                            <div className="team-content-wrapper">
                                                <header className="entry-header heading">
                                                    <h2 className="entry-title">
                                                        <span>Best Experts </span> Our Professional Team Members</h2>
                                                    <p>Hello. Our center has been present for over 20 years in the market. We make
                                            the most of all our customers.</p>
                                                </header>
                                                <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis. Vivamus
                                                nulla at in eros mi, magna malesuada ut sed
                                                facilisis, metus proin. Diam pharetra sociis quis per ad metus, pharetra qui
                                                libero, ac quis congue orci, quam inceptos pede
                                        enim est vitae tortor.</p>
                                                <p>Diam pharetra sociis quis per ad metus, pharetra libero, ac quis congue orci,
                                        quam inceptos pede enim est vitae tortor.</p>
                                                <a className="box-button">View All Team Members</a>
                                            </div>
                                            <div className="team-item-wrapper">
                                                <div className="team-item">
                                                    <div className="team-image-wrapper">
                                                        <figure className="featured-image">
                                                            <img src={team1} />
                                                        </figure>
                                                    </div>
                                                    <div className="team-content">
                                                        <div className="team-content-info">
                                                            <h6 className="author-designation">founder</h6>
                                                            <h3 className="author-name"><a >danish Doe</a> </h3>
                                                        </div>
                                                        <div className="inline-social-icons social-links">
                                                            <ul>
                                                                <li>
                                                                    <a href="https://facebook.com" title="facebook"
                                                                        target="blank">facebook</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com" title="twitter"
                                                                        target="blank">twitter</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://youtube.com" title="youtube"
                                                                        target="blank">youtube</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://instagram.com" title="instagram"
                                                                        target="blank">instagram</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team-item">
                                                    <div className="team-image-wrapper">
                                                        <figure className="featured-image">
                                                            <img src={team3} />
                                                        </figure>
                                                    </div>
                                                    <div className="team-content">
                                                        <div className="team-content-info">
                                                            <h6 className="author-designation">accountant</h6>
                                                            <h3 className="author-name"><a >roseline sam</a> </h3>
                                                        </div>
                                                        <div className="inline-social-icons social-links">
                                                            <ul>
                                                                <li>
                                                                    <a href="https://facebook.com" title="facebook"
                                                                        target="blank">facebook</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com" title="twitter"
                                                                        target="blank">twitter</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://youtube.com" title="youtube"
                                                                        target="blank">youtube</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://instagram.com" title="instagram"
                                                                        target="blank">instagram</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team-item">
                                                    <div className="team-image-wrapper">
                                                        <figure className="featured-image">
                                                            <img src={team4} />
                                                        </figure>
                                                    </div>
                                                    <div className="team-content">
                                                        <div className="team-content-info">
                                                            <h6 className="author-designation">manager</h6>
                                                            <h3 className="author-name"><a >jonathon lane</a> </h3>
                                                        </div>
                                                        <div className="inline-social-icons social-links">
                                                            <ul>
                                                                <li>
                                                                    <a href="https://facebook.com" title="facebook"
                                                                        target="blank">facebook</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com" title="twitter"
                                                                        target="blank">twitter</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://youtube.com" title="youtube"
                                                                        target="blank">youtube</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://instagram.com" title="instagram"
                                                                        target="blank">instagram</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="team-item">
                                                    <div className="team-image-wrapper">
                                                        <figure className="featured-image">
                                                            <img src={team2} />
                                                        </figure>
                                                    </div>
                                                    <div className="team-content">
                                                        <div className="team-content-info">
                                                            <h6 className="author-designation">owner</h6>
                                                            <h3 className="author-name"><a >christina james</a> </h3>
                                                        </div>
                                                        <div className="inline-social-icons social-links">
                                                            <ul>
                                                                <li>
                                                                    <a href="https://facebook.com" title="facebook"
                                                                        target="blank">facebook</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://twitter.com" title="twitter"
                                                                        target="blank">twitter</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://youtube.com" title="youtube"
                                                                        target="blank">youtube</a>
                                                                </li>
                                                                <li>
                                                                    <a href="https://instagram.com" title="instagram"
                                                                        target="blank">instagram</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="pricing-section" style={{
                                    background: `url(${aboutBg})`,
                                }} >
                                    <div className="container">
                                        <header className="entry-header heading heading-center">
                                            <h2 className="entry-title">
                                                <span>Best deals </span> Best Service with Good Price</h2>
                                            <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                                            dolor mauris ut lectus. Eu ut, vel laoreet
                                            aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                                    vel integer in etiam.</p>
                                            <figure className="featured-image">
                                                <img src={headingImage} />
                                            </figure>
                                        </header>
                                        <div className="pricing-column-wrapper">
                                            <div className="price-column ">
                                                <div className="price-header">
                                                    <h3 className="pricing-title">Wellness Spa</h3>
                                                    <span className="price-number">$15.55 </span>
                                                    <figure className="featured-image">
                                                        <img src={pricingImage} />
                                                    </figure>
                                                </div>
                                                <div className="price-table-content">
                                                    <div className="price-option-list">
                                                        <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                                    </div>
                                                </div>
                                                <a className="box-button" > book now </a>
                                            </div>
                                            <div className="price-column ">
                                                <div className="price-header">
                                                    <span className="special-offer"> special-offer</span>
                                                    <h3 className="pricing-title">hair salon</h3>
                                                    <span className="price-number">$4.2 </span>
                                                    <figure className="featured-image">
                                                        <img src={pricingImage} />
                                                    </figure>
                                                </div>
                                                <div className="price-table-content">
                                                    <div className="price-option-list">
                                                        <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                                    </div>
                                                </div>
                                                <a className="box-button" > book now </a>
                                            </div>
                                            <div className="price-column ">
                                                <div className="price-header">
                                                    <h3 className="pricing-title">physio therapy</h3>
                                                    <span className="price-number">$22.4 </span>
                                                    <figure className="featured-image">
                                                        <img src={pricingImage} />
                                                    </figure>
                                                </div>
                                                <div className="price-table-content">
                                                    <div className="price-option-list">
                                                        <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                        lis.
                                            </p>
                                                    </div>
                                                </div>
                                                <a className="box-button" > book now </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="products-section" style={{
                                    background: `url(${productsBg})`,
                                }} >
                                    <div className="container">
                                        <div className="products-content-wrapper">
                                            <header className="entry-header heading">
                                                <h2 className="entry-title">
                                                    <span>shop </span>Our Best Products</h2>
                                                <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis. Vivamus
                                                nulla at in eros mi, magna malesuada ut sed
                                        facilisis, metus proin.</p>
                                                <a className="box-button">view all products</a>
                                            </header>
                                            <Slider className="product-slider">
                                                <div className="element-item">
                                                    <div className="product-list-wrapper">
                                                        <div className="image-icon-wrapper">
                                                            <figure className="featured-image">
                                                                <a >
                                                                    <img src={product1} />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="list-info">
                                                            <span className="price">
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span
                                                                            className="woocommerce-Price-currencySymbol">£</span>12.00</span>
                                                                </ins>
                                                            </span>
                                                            <header className="entry-header">
                                                                <a >
                                                                    <h3 className="entry-title">Rose Stem Repair
                                                                    Precious Oil
                                                        </h3>
                                                                </a>
                                                            </header>

                                                            <a className="box-button">add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="element-item">
                                                    <div className="product-list-wrapper">
                                                        <div className="image-icon-wrapper">
                                                            <figure className="featured-image">
                                                                <a >
                                                                    <img src={product2} />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="list-info">
                                                            <span className="price">
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span
                                                                            className="woocommerce-Price-currencySymbol">£</span>15.70</span>
                                                                </ins>
                                                            </span>
                                                            <header className="entry-header">
                                                                <a >
                                                                    <h3 className="entry-title">Skin Care Rhubrb Nature Hyaluronic Serum
                                                        </h3>
                                                                </a>
                                                            </header>

                                                            <a className="box-button">add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="element-item">
                                                    <div className="product-list-wrapper">
                                                        <div className="image-icon-wrapper">
                                                            <figure className="featured-image">
                                                                <a >
                                                                    <img src={product1} />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="list-info">
                                                            <span className="price">
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span
                                                                            className="woocommerce-Price-currencySymbol">£</span>12.00</span>
                                                                </ins>
                                                            </span>
                                                            <header className="entry-header">
                                                                <a >
                                                                    <h3 className="entry-title">Rose Stem Repair Precious Oil
                                                        </h3>
                                                                </a>
                                                            </header>

                                                            <a className="box-button">add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="element-item">
                                                    <div className="product-list-wrapper">
                                                        <div className="image-icon-wrapper">
                                                            <figure className="featured-image">
                                                                <a >
                                                                    <img src={product2} />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="list-info">
                                                            <span className="price">
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span
                                                                            className="woocommerce-Price-currencySymbol">£</span>15.70</span>
                                                                </ins>
                                                            </span>
                                                            <header className="entry-header">
                                                                <a >
                                                                    <h3 className="entry-title">Skin Care Rhubrb Nature Hyaluronic Serum
                                                        </h3>
                                                                </a>
                                                            </header>

                                                            <a className="box-button">add to cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </section>
                                <section className="latest-post-section" style={{
                                    background: `url(${aboutBg})`,
                                }} >
                                    <div className="container">
                                        <header className="entry-header heading heading-center">
                                            <h2 className="entry-title">
                                                <span>Latest Updates </span>Our Tips and Tricks</h2>
                                            <p>Placerat ac, mauris non tristique laoreet libero, ut elementum ut lacus in vel amet,
                                            dolor mauris ut lectus. Eu ut, vel laoreet
                                            aliquam, diam amet, integer erat morbi tristique mauris pede, in rutrum suspendisse
                                    vel integer in etiam.</p>
                                        </header>
                                        <div className="post-wrapper post-wrapper-has-three-child">
                                            <article className="post">
                                                <figure className="featuerd-image">
                                                    <img src={lpost1} />
                                                </figure>
                                                <div className="post-content">
                                                    <header className="entry-header">
                                                        <div className="entry-meta">
                                                            <span className="cat-links">
                                                                <a >massage</a>
                                                                <a >oil</a>
                                                            </span>
                                                        </div>
                                                        <h3 className="entry-title">
                                                            <a >Orci porttitor vivamus enim natus ut non</a>
                                                        </h3>
                                                    </header>
                                                    <div className="entry-content">
                                                        <a className="box-button"> read more</a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post">
                                                <figure className="featuerd-image">
                                                    <img src={lpost2} />
                                                </figure>
                                                <div className="post-content">
                                                    <header className="entry-header">
                                                        <div className="entry-meta">
                                                            <span className="cat-links">
                                                                <a >massage</a>
                                                                <a >oil</a>
                                                            </span>
                                                        </div>
                                                        <h3 className="entry-title">
                                                            <a >Orci porttitor vivamus enim natus ut non</a>
                                                        </h3>
                                                    </header>
                                                    <div className="entry-content">
                                                        <a className="box-button"> read more</a>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post">
                                                <figure className="featuerd-image">
                                                    <img src={lpost3} />
                                                </figure>
                                                <div className="post-content">
                                                    <header className="entry-header">
                                                        <div className="entry-meta">
                                                            <span className="cat-links">
                                                                <a >massage</a>
                                                                <a >oil</a>
                                                            </span>
                                                        </div>
                                                        <h3 className="entry-title">
                                                            <a >Orci porttitor vivamus enim natus ut non</a>
                                                        </h3>
                                                    </header>
                                                    <div className="entry-content">
                                                        <a className="box-button"> read more</a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </section>
                                <section className="partner-section">
                                    <div className="container">
                                        <div className="partner-content-wrapper">
                                            <header className="entry-header heading">
                                                <h2 className="entry-title">
                                                    <span>partners </span>We Use Products of The best Brands Only</h2>
                                            </header>

                                            <Slider className="partner-slider" {...settings}>
                                                {/* <div className="partner-slider"> */}
                                                <div className="partner-item">
                                                    <a >
                                                        <img src={partner1} />
                                                    </a>
                                                </div>
                                                <div className="partner-item">
                                                    <a >
                                                        <img src={partner2} />
                                                    </a>
                                                </div>
                                                <div className="partner-item">
                                                    <a >
                                                        <img src={partner3} />
                                                    </a>
                                                </div>
                                                <div className="partner-item">
                                                    <a >
                                                        <img src={partner4} />
                                                    </a>
                                                </div>
                                                <div className="partner-item">
                                                    <a >
                                                        <img src={partner3} />
                                                    </a>
                                                </div>
                                                {/* </div> */}
                                            </Slider>

                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Homepage
