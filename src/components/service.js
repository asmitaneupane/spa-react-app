import React from 'react'
import singlePost from '../assets/img/single-post.jpg'
import headingImage from '../assets/img/heading-image.png'
import pricingImage from '../assets/img/pricing-image.png'
import discountImg from '../assets/img/discount-img.jpg'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'
import ScriptTag from 'react-script-tag';


function service() {
    return (
        <>
            <div id="content" class="site-content">
                <div id="primary" class="content-area">
                    {/* <!-- primary-home starting from here --> */}
                    <main id="main" class="site-main">
                        <div class="single-post">
                            <div class="container">
                                <article class="post">
                                    <figure class="featuerd-image">
                                        <img src={singlePost} alt="single-post" />
                                    </figure>
                                    <div class="post-content">
                                        <header class="entry-header">
                                            <h3 class="entry-title">Hair Salon
                                        </h3>
                                        </header>
                                        <div class="entry-content">
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
                        <section class="pricing-section" style={{background: "url(assets/img/about-bg.png)"}}>
                            <div class="container">
                                <div class="pricing-column-wrapper">
                                    <div class="price-column ">
                                        <div class="price-header">
                                            <h3 class="pricing-title">Wellness Spa</h3>
                                            <span class="price-number">$15.55 </span>
                                            <figure class="featured-image">
                                                <img src={pricingImage} alt="pricing-image" />
                                            </figure>
                                        </div>
                                        <div class="price-table-content">
                                            <div class="price-option-list">
                                                <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                            </div>
                                        </div>
                                        <a class="box-button" href="#"> book now </a>
                                    </div>
                                    <div class="price-column ">
                                        <div class="price-header">
                                            <span class="special-offer"> special-offer</span>
                                            <h3 class="pricing-title">hair salon</h3>
                                            <span class="price-number">$4.2 </span>
                                            <figure class="featured-image">
                                                <img src={pricingImage} alt="pricing-image" />
                                            </figure>
                                        </div>
                                        <div class="price-table-content">
                                            <div class="price-option-list">
                                                <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.</p>
                                            </div>
                                        </div>
                                        <a class="box-button" href="#"> book now </a>
                                    </div>
                                    <div class="price-column ">
                                        <div class="price-header">
                                            <h3 class="pricing-title">physio therapy</h3>
                                            <span class="price-number">$22.4 </span>
                                            <figure class="featured-image">
                                                <img src={pricingImage} alt="pricing-image" />
                                            </figure>
                                        </div>
                                        <div class="price-table-content">
                                            <div class="price-option-list">
                                                <p>A quisque, facilisis molestie ae lacus quam elit. Nulla lacus un conva
                                                lis.
                                            </p>
                                            </div>
                                        </div>
                                        <a class="box-button" href="#"> book now </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="call-to-action">
                            <div class="container">
                                <div class="discount-section">
                                    <div class="discount-image">
                                        <figure>
                                            <img src={discountImg} alt="discount-img" />
                                        </figure>
                                    </div>
                                    <div class="discount-content">
                                        <h3 class="discount-text"> <span class="discount-rate">50%</span>Discount</h3>
                                        <h2 class="discount-title">on wellness spa</h2>
                                        <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacuses conva lis. Vivamus
                                        nulla at in eros mi, magna malesuada ut
                                        sed facilisis, metus proin.</p>
                                        <div class="discount-btn-wrapper">
                                            <a href="#" class="box-button">book now</a>
                                            <span>gift card</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="team-section" style={{background: "url(assets/img/about-bg.png)"}}>
                            <div class="container">
                                <div class="team-section-wrapper">
                                    <div class="team-content-wrapper">
                                        <header class="entry-header heading heading-center">
                                            <h2 class="entry-title">
                                                <span>hair stylist </span> Our Professional Team Members</h2>
                                        </header>
                                        <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis. Vivamus
                                        nulla at in eros mi, magna malesuada ut sed
                                        facilisis, metus proin. Diam pharetra sociis quis per ad metus, pharetra qui
                                        libero, ac quis congue orci, quam inceptos pede
                                        enim est vitae tortor.</p>
                                    </div>
                                    <div class="team-item-wrapper">
                                        <div class="team-item">
                                            <div class="team-image-wrapper">
                                                <figure class="featured-image">
                                                    <img src={team1} alt="team1" />
                                                </figure>
                                            </div>
                                            <div class="team-content">
                                                <div class="team-content-info">
                                                    <h6 class="author-designation">founder</h6>
                                                    <h3 class="author-name"><a href="#">danish Doe</a> </h3>
                                                </div>
                                                <div class="inline-social-icons social-links">
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
                                        <div class="team-item">
                                            <div class="team-image-wrapper">
                                                <figure class="featured-image">
                                                    <img src={team3} alt="team3" />
                                                </figure>
                                            </div>
                                            <div class="team-content">
                                                <div class="team-content-info">
                                                    <h6 class="author-designation">accountant</h6>
                                                    <h3 class="author-name"><a href="#">roseline sam</a> </h3>
                                                </div>
                                                <div class="inline-social-icons social-links">
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
                                        <div class="team-item">
                                            <div class="team-image-wrapper">
                                                <figure class="featured-image">
                                                    <img src={team4} alt="team4" />
                                                </figure>
                                            </div>
                                            <div class="team-content">
                                                <div class="team-content-info">
                                                    <h6 class="author-designation">manager</h6>
                                                    <h3 class="author-name"><a href="#">jonathon lane</a> </h3>
                                                </div>
                                                <div class="inline-social-icons social-links">
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
                                        <div class="team-item">
                                            <div class="team-image-wrapper">
                                                <figure class="featured-image">
                                                    <img src={team2} alt="team2" />
                                                </figure>
                                            </div>
                                            <div class="team-content">
                                                <div class="team-content-info">
                                                    <h6 class="author-designation">owner</h6>
                                                    <h3 class="author-name"><a href="#">christina james</a> </h3>
                                                </div>
                                                <div class="inline-social-icons social-links">
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
        </>
    )
}

export default service
