import React from 'react'
import Slider from 'react-slick'
import headingImage from '../assets/img/heading-image.png'
import videoImage from '../assets/img/video-image.jpg'
import counterIcon1 from '../assets/img/counter-icon1.png'
import counterIcon2 from '../assets/img/counter-icon2.png'
import counterIcon3 from '../assets/img/counter-icon3.png'
import counterIcon4 from '../assets/img/counter-icon4.png'
import testi1 from '../assets/img/testi1.jpg'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'
import partner1 from '../assets/img/partner1.png'
import partner2 from '../assets/img/partner2.png'
import partner3 from '../assets/img/partner3.png'
import partner4 from '../assets/img/partner4.png'
import siteLogo from '../assets/img/site-logo.png'
import aboutBg from '../assets/img/about-bg.png'
import singlePage from '../assets/img/single-page.jpg'


function aboutpage() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
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
                                                    <li className="current-menu-item"><a href="/aboutpage" target="_self">about us</a></li>
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
                                About Us
                    </h2>
                            <div className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin">
                                        <a href="#" rel="home">
                                            <span itemprop="name">Home</span>
                                        </a>
                                        <meta />
                                    </li>
                                    <li className="trail-item trail-end">
                                        <span itemprop="name">about</span>
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
                            <div className="about-us-content-wrapper">
                                <div className="container">
                                    <div className="about-us-content">
                                        <header className="entry-header heading heading-center">
                                            <h2 className="entry-title"><span>The best </span> Beauty Spa &amp; Wellness Salon
                                    </h2>
                                            <p>Hello. Our center has been present for over 20 years in the market. We
                                            make
                                        the most of all our customers.</p>
                                        </header>
                                        <p>Dui tempus. Scelerisque sociis velit sem vestibulum in, tortor nulla duis luctus
                                        lacus. Nibh ligula vel. Maecenas dolor rhoncus donec fusce. Vestibulum vel in vitae.
                                        Viverra labore vivamus magna interdum, amet neque, vel proin sit in nascetur mauris
                                        lorem, duis placerat sapien fringilla dictumst scelerisque, turpis amet in magna.
                                        Consequat orci sodales orci justo risus, congue accumsan rhoncus fermentum in, hac
                                        felis, tempor erat nisl faucibus in, nonummy sodales purus adipiscing. Ante sit ut
                                        adipiscing integer netus.
                                </p>
                                        <p>
                                            Odio auctor eleifend pellentesque, etiam praesent neque libero fusce, tortor vel
                                            pharetra laoreet ut, a quam eget purus porta vel a. Ligula at imperdiet gravida
                                            morbi blandit eu. Lacus potenti suspendisse ullamcorper, convallis ut rutrum
                                            diamlorem a luctus massa. Urna mauris conubia massa pretium in duis, vitae in
                                            adipiscing wisi penatibus, massa cursus lorem facilisi, in elit tortor odio id
                                            tempus semper, enim mus. Dapibus ut enim lectus lacinia id vivamus, massa nullam
                                            volutpat consectetur vel hac, rutrum elit diam sem bibendum sit tincidunt.
                                    Consequatur ipsum porttitor ullamcorper, enim urna, aliquam elit, non fusce.</p>
                                        <p>
                                            <img src={headingImage} alt="heading-image" />
                                        </p>

                                    </div>
                                    <div className="video-section">

                                        <div className="video-content">
                                            <a className="popup-video" href="https://www.youtube.com/watch?v=UExAmoujwzk">
                                            </a>
                                            <div className="video-text-content">
                                                <h3>Welcome to our RT Salon & Spa</h3>
                                            </div>
                                        </div>
                                        <img src={videoImage} alt="video-image" />
                                    </div>
                                </div>
                            </div>

                            <section className="testimonial-section" style={{
                                background: `url(${aboutBg})`,
                            }} >
                                <div className="container">
                                    <div className="testimonial-section-wrapper">
                                        <div className="counter-section">
                                            <div className="counter-item-wrapper">
                                                <div className="counter-item">
                                                    <figure className="counter-icon">
                                                        <img src={counterIcon1} alt="counter-icon1" />
                                                    </figure>
                                                    <div className="count-detail">
                                                        <span className="counter-value" data-count="640">0</span>
                                                        <span className="counter-name">happy customer</span>
                                                    </div>
                                                </div>
                                                <div className="counter-item">
                                                    <figure className="counter-icon">
                                                        <img src={counterIcon2} alt="counter-icon2" />
                                                    </figure>
                                                    <div className="count-detail">
                                                        <span className="counter-value" data-count="7">0</span>
                                                        <span className="counter-name">our branches</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="counter-item-wrapper">
                                                <div className="counter-item">
                                                    <figure className="counter-icon">
                                                        <img src={counterIcon3} alt="counter-icon3" />
                                                    </figure>
                                                    <div className="count-detail">
                                                        <span className="counter-value" data-count="35">0</span>
                                                        <span className="counter-name">office member</span>
                                                    </div>
                                                </div>
                                                <div className="counter-item">
                                                    <figure className="counter-icon">
                                                        <img src={counterIcon4} alt="counter-icon4" />
                                                    </figure>
                                                    <div className="count-detail">
                                                        <span className="counter-value" data-count="335">0</span>
                                                        <span className="counter-name">repeated customer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-content-wrapper">
                                            <header className="entry-header heading">
                                                <h2 className="entry-title">
                                                    <span>testimonials </span> Our Customers Riview </h2>
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
                                                            <img src={testi1} alt="testi1" />
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
                                        </div>
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
                                            <div className="partner-item">
                                                <a href="#">
                                                    <img src={partner1} alt="partner1" />
                                                </a>
                                            </div>
                                            <div className="partner-item">
                                                <a href="#">
                                                    <img src={partner2} alt="partner2" />
                                                </a>
                                            </div>
                                            <div className="partner-item">
                                                <a href="#">
                                                    <img src={partner3} alt="partner3" />
                                                </a>
                                            </div>
                                            <div className="partner-item">
                                                <a href="#">
                                                    <img src={partner4} alt="partner4" />
                                                </a>
                                            </div>
                                            <div className="partner-item">
                                                <a href="#">
                                                    <img src={partner3} alt="partner3" />
                                                </a>
                                            </div>
                                        </Slider>
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

export default aboutpage
