import React from 'react'
import singlePost from '../assets/img/single-post.jpg'
import headingImage from '../assets/img/heading-image.png'
import pricingImage from '../assets/img/pricing-image.png'
import discountImg from '../assets/img/discount-img.jpg'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'
import siteLogo from '../assets/img/site-logo.png'
import singlePage from '../assets/img/single-page.jpg'
import aboutBg from '../assets/img/about-bg.png'

function service() {
    return (
        <>

            <div id="page" className="hfeed site">
                <header id="masthead" className="site-header" >
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
                    <div className="page-title-wrap" style={{
                        background: `url(${singlePage})`,
                    }} >
                        <div className="container">
                            <h2 className="page-title">
                                Hair Salon
                    </h2>
                            <div className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin">
                                        <a href="#" rel="home">
                                            <span itemprop="name">Home</span>
                                        </a>
                                        <meta />
                                    </li><li class="trail-item trail-begin">
                                        <a href="#" rel="home">
                                            <span itemprop="name">service</span>
                                        </a>
                                        <meta />
                                    </li>
                                    <li className="trail-item trail-end">
                                        <span itemprop="name">hair salon</span>
                                        <meta />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </header>
        // {/* <!-- header ends here --> */}

                <div id="content" className="site-content">
                    <div id="primary" className="content-area">
                        {/* <!-- primary-home starting from here --> */}
                        <main id="main" className="site-main">
                            <div className="single-post">
                                <div className="container">
                                    <article className="post">
                                        <figure className="featuerd-image">
                                            <img src={singlePost} alt="single-post" />
                                        </figure>
                                        <div className="post-content">
                                            <header className="entry-header">
                                                <h3 className="entry-title">Hair Salon
                                        </h3>
                                            </header>
                                            <div className="entry-content">
                                                <p>Odio auctor eleifend pellentesque, etiam praesent neque libero fusce, tortor
                                                vel
                                                pharetra laoreet ut, a quam eget purus porta vel a. Ligula at imperdiet
                                                gravida
                                                morbi blandit eu. Lacus potenti suspendisse ullamcorper, convallis ut rutrum
                                                diamlorem a luctus massa. Urna mauris conubia massa pretium in duis, vitae
                                                in
                                                adipiscing wisi penatibus, massa cursus lorem facilisi, in elit tortor odio
                                                id
                                                tempus semper, enim mus. Dapibus ut enim lectus lacinia id vivamus, massa
                                                nullam
                                                volutpat consectetur vel hac, rutrum elit diam sem bibendum sit tincidunt.
                                                Consequatur ipsum porttitor ullamcorper, enim urna, aliquam elit, non fusce.
                                        </p>
                                                <p>
                                                    <img src={headingImage} alt="heading-image" />
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <section className="pricing-section" style={{
                                background: `url(${aboutBg})`,
                            }} >
                                <div className="container">
                                    <div className="pricing-column-wrapper">
                                        <div className="price-column ">
                                            <div className="price-header">
                                                <h3 className="pricing-title">Wellness Spa</h3>
                                                <span className="price-number">$15.55 </span>
                                                <figure className="featured-image">
                                                    <img src={pricingImage} alt="pricing-image" />
                                                </figure>
                                            </div>
                                            <div className="price-table-content">
                                                <div className="price-option-list">
                                                    <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                                </div>
                                            </div>
                                            <a className="box-button" href="#"> book now </a>
                                        </div>
                                        <div className="price-column ">
                                            <div className="price-header">
                                                <span className="special-offer"> special-offer</span>
                                                <h3 className="pricing-title">hair salon</h3>
                                                <span className="price-number">$4.2 </span>
                                                <figure className="featured-image">
                                                    <img src={pricingImage} alt="pricing-image" />
                                                </figure>
                                            </div>
                                            <div className="price-table-content">
                                                <div className="price-option-list">
                                                    <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                                </div>
                                            </div>
                                            <a className="box-button" href="#"> book now </a>
                                        </div>
                                        <div className="price-column ">
                                            <div className="price-header">
                                                <h3 className="pricing-title">physio therapy</h3>
                                                <span className="price-number">$22.4 </span>
                                                <figure className="featured-image">
                                                    <img src={pricingImage} alt="pricing-image" />
                                                </figure>
                                            </div>
                                            <div className="price-table-content">
                                                <div className="price-option-list">
                                                    <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                    lis.
                                            </p>
                                                </div>
                                            </div>
                                            <a className="box-button" href="#"> book now </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="call-to-action">
                                <div className="container">
                                    <div className="discount-section">
                                        <div className="discount-image">
                                            <figure>
                                                <img src={discountImg} alt="discount-img" />
                                            </figure>
                                        </div>
                                        <div className="discount-content">
                                            <h3 className="discount-text"> <span className="discount-rate">50%</span>Discount</h3>
                                            <h2 className="discount-title">on wellness spa</h2>
                                            <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacuses conva lis. Vivamus
                                            nulla at in eros mi, magna malesuada ut
                                        sed facilisis, metus proin.</p>
                                            <div className="discount-btn-wrapper">
                                                <a href="#" className="box-button">book now</a>
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
                                            <header className="entry-header heading heading-center">
                                                <h2 className="entry-title">
                                                    <span>hair stylist </span> Our Professional Team Members</h2>
                                            </header>
                                            <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis. Vivamus
                                            nulla at in eros mi, magna malesuada ut sed
                                            facilisis, metus proin. Diam pharetra sociis quis per ad metus, pharetra qui
                                            libero, ac quis congue orci, quam inceptos pede
                                        enim est vitae tortor.</p>
                                        </div>
                                        <div className="team-item-wrapper">
                                            <div className="team-item">
                                                <div className="team-image-wrapper">
                                                    <figure className="featured-image">
                                                        <img src={team1} alt="team1" />
                                                    </figure>
                                                </div>
                                                <div className="team-content">
                                                    <div className="team-content-info">
                                                        <h6 className="author-designation">founder</h6>
                                                        <h3 className="author-name"><a href="#">danish Doe</a> </h3>
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
                                                        <img src={team3} alt="team3" />
                                                    </figure>
                                                </div>
                                                <div className="team-content">
                                                    <div className="team-content-info">
                                                        <h6 className="author-designation">accountant</h6>
                                                        <h3 className="author-name"><a href="#">roseline sam</a> </h3>
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
                                                        <img src={team4} alt="team4" />
                                                    </figure>
                                                </div>
                                                <div className="team-content">
                                                    <div className="team-content-info">
                                                        <h6 className="author-designation">manager</h6>
                                                        <h3 className="author-name"><a href="#">jonathon lane</a> </h3>
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
                                                        <img src={team2} alt="team2" />
                                                    </figure>
                                                </div>
                                                <div className="team-content">
                                                    <div className="team-content-info">
                                                        <h6 className="author-designation">owner</h6>
                                                        <h3 className="author-name"><a href="#">christina james</a> </h3>
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
                        </main>
                    </div>
                </div>

            </div>
        </>
    )
}

export default service
