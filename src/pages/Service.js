import React from 'react'
import { Link } from 'react-router-dom'
import singlePost from '../assets/img/single-post.jpg'
import headingImage from '../assets/img/heading-image.png'
import pricingImage from '../assets/img/pricing-image.png'
import discountImg from '../assets/img/discount-img.jpg'
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'
import aboutBg from '../assets/img/about-bg.png'
import Header from '../components/Header'

export default function Service() {
    return (
        <div>
            <Header/>
        <div id="page" className="hfeed site">
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
                                        <Link className="box-button" to="#"> book now </Link>
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
                                        <Link className="box-button" to="#"> book now </Link>
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
                                        <Link className="box-button" to="#"> book now </Link>
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
                                            <Link to="#" className="box-button">book now</Link>
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
                                                    <h3 className="author-name"><Link to="#">danish Doe</Link> </h3>
                                                </div>
                                                <div className="inline-social-icons social-links">
                                                    <ul>
                                                        <li>
                                                            <Link to="https://facebook.com" title="facebook"
                                                                target="blank">facebook</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://twitter.com" title="twitter"
                                                                target="blank">twitter</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://youtube.com" title="youtube"
                                                                target="blank">youtube</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://instagram.com" title="instagram"
                                                                target="blank">instagram</Link>
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
                                                    <h3 className="author-name"><Link to="#">roseline sam</Link> </h3>
                                                </div>
                                                <div className="inline-social-icons social-links">
                                                    <ul>
                                                        <li>
                                                            <Link to="https://facebook.com" title="facebook"
                                                                target="blank">facebook</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://twitter.com" title="twitter"
                                                                target="blank">twitter</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://youtube.com" title="youtube"
                                                                target="blank">youtube</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://instagram.com" title="instagram"
                                                                target="blank">instagram</Link>
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
                                                    <h3 className="author-name"><Link to="#">jonathon lane</Link> </h3>
                                                </div>
                                                <div className="inline-social-icons social-links">
                                                    <ul>
                                                        <li>
                                                            <Link to="https://facebook.com" title="facebook"
                                                                target="blank">facebook</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://twitter.com" title="twitter"
                                                                target="blank">twitter</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://youtube.com" title="youtube"
                                                                target="blank">youtube</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://instagram.com" title="instagram"
                                                                target="blank">instagram</Link>
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
                                                    <h3 className="author-name"><Link to="#">christina james</Link> </h3>
                                                </div>
                                                <div className="inline-social-icons social-links">
                                                    <ul>
                                                        <li>
                                                            <Link to="https://facebook.com" title="facebook"
                                                                target="blank">facebook</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://twitter.com" title="twitter"
                                                                target="blank">twitter</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://youtube.com" title="youtube"
                                                                target="blank">youtube</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="https://instagram.com" title="instagram"
                                                                target="blank">instagram</Link>
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
        
        </div>
    )
}
