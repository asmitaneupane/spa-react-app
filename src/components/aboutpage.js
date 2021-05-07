import React from 'react'
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

function aboutpage() {
    return (
        <>
            <div id="content" class="site-content">
                <div id="primary" class="content-area">
                    {/* <!-- primary-home starting from here --> */}
                    <main id="main" class="site-main">
                        <div class="about-us-content-wrapper">
                            <div class="container">
                                <div class="about-us-content">
                                    <header class="entry-header heading heading-center">
                                        <h2 class="entry-title"><span>The best </span> Beauty Spa &amp; Wellness Salon
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
                                <div class="video-section">

                                    <div class="video-content">
                                        <a class="popup-video" href="https://www.youtube.com/watch?v=UExAmoujwzk">
                                        </a>
                                        <div class="video-text-content">
                                            <h3>Welcome to our RT Salon & Spa</h3>
                                        </div>
                                    </div>
                                    <img src={videoImage} alt="video-image" />
                                </div>
                            </div>
                        </div>

                        <section class="testimonial-section" style={{background: "url(assets/img/about-bg.png)"}}>
                            <div class="container">
                                <div class="testimonial-section-wrapper">
                                    <div class="counter-section">
                                        <div class="counter-item-wrapper">
                                            <div class="counter-item">
                                                <figure class="counter-icon">
                                                    <img src={counterIcon1} alt="counter-icon1" />
                                                </figure>
                                                <div class="count-detail">
                                                    <span class="counter-value" data-count="640">0</span>
                                                    <span class="counter-name">happy customer</span>
                                                </div>
                                            </div>
                                            <div class="counter-item">
                                                <figure class="counter-icon">
                                                    <img src={counterIcon2} alt="counter-icon2" />
                                                </figure>
                                                <div class="count-detail">
                                                    <span class="counter-value" data-count="7">0</span>
                                                    <span class="counter-name">our branches</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="counter-item-wrapper">
                                            <div class="counter-item">
                                                <figure class="counter-icon">
                                                    <img src={counterIcon3} alt="counter-icon3" />
                                                </figure>
                                                <div class="count-detail">
                                                    <span class="counter-value" data-count="35">0</span>
                                                    <span class="counter-name">office member</span>
                                                </div>
                                            </div>
                                            <div class="counter-item">
                                                <figure class="counter-icon">
                                                    <img src={counterIcon4} alt="counter-icon4" />
                                                </figure>
                                                <div class="count-detail">
                                                    <span class="counter-value" data-count="335">0</span>
                                                    <span class="counter-name">repeated customer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="testimonial-content-wrapper">
                                        <header class="entry-header heading">
                                            <h2 class="entry-title">
                                                <span>testimonials </span> Our Customers Riview </h2>
                                            <p>A quisque, facilisis molestie a lacus quam elit. Nulla lacus conva lis.
                                            Vivamus nulla at in eros mi, magna malesuada ut sed
                                            facilisis, metus proin.</p>
                                        </header>
                                        <div class="testimonial-slider">
                                            <div class="testimonial-item">
                                                <div class="entry-content">
                                                    <p>“Tincidunt dis. Tortor dignissim, velit in et blandit interdum dui
                                                    vestibulum. Ut pede non, molestiae duis. Odio tortor vestibulum
                                                    nibh vel donec inei. Venen praesent non hymenaeos.”</p>
                                                </div>
                                                <div class="author-info-wrapper">
                                                    <div class="author-info">
                                                        <h3 class="author-name">Christina Doe</h3>
                                                        <span class="author-designation">physio clents</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="testimonial-item">
                                                <div class="entry-content">
                                                    <p>“ Odio tortor vestibulum nibh vel donec inei. Venen praesent non
                                                    hymenaeos. Tincidunt dis. Tortor dignissim, velit in et blandit
                                                    interdum dui vestibulum. Ut pede non, molestiae duis.”</p>
                                                </div>
                                                <div class="author-info-wrapper">
                                                    <figure class="author-image">
                                                        <img src={testi1} alt="testi1" />
                                                    </figure>
                                                    <div class="author-info">
                                                        <h3 class="author-name">katherine shea</h3>
                                                        <span class="author-designation">body massage</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="testimonial-item">
                                                <div class="entry-content">
                                                    <p>“Velit in et blandit interdum dui
                                                    vestibulum. Ut pede non, molestiae duis. Odio
                                                    tortor vestibulum nibh vel donec inei. Venen praesent non
                                                    hymenaeos.”</p>
                                                </div>
                                                <div class="author-info-wrapper">
                                                    <div class="author-info">
                                                        <h3 class="author-name">john balt</h3>
                                                        <span class="author-designation">physio clents</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="testimonial-item">
                                                <div class="entry-content">
                                                    <p>“Dignissim, velit in et blandit interdum dui
                                                    vestibulum. Ut pede non, molestiae duis. Odio
                                                    tortor vestibulum nibh vel donec inei. Venen praesent non
                                                    hymenaeos.”</p>
                                                </div>
                                                <div class="author-info-wrapper">
                                                    <div class="author-info">
                                                        <h3 class="author-name">suresh paudel</h3>
                                                        <span class="author-designation">body pain</span>
                                                    </div>

                                                </div>
                                            </div>
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
                                                    <h3 class="author-name"><a >danish Doe</a> </h3>
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
                                                    <h3 class="author-name"><a >roseline sam</a> </h3>
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
                                                    <h3 class="author-name"><a >jonathon lane</a> </h3>
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
                                                    <h3 class="author-name"><a >christina james</a> </h3>
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
                                                    <h3 class="author-name"><a >christina james</a> </h3>
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
                                                    <h3 class="author-name"><a >jonathon lane</a> </h3>
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
                                                    <h3 class="author-name"><a >roseline sam</a> </h3>
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
                                                    <img src={team1} alt="team1" />
                                                </figure>
                                            </div>
                                            <div class="team-content">
                                                <div class="team-content-info">
                                                    <h6 class="author-designation">founder</h6>
                                                    <h3 class="author-name"><a >danish Doe</a> </h3>
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
                        <section class="partner-section">
                            <div class="container">
                                <div class="partner-content-wrapper">
                                    <header class="entry-header heading">
                                        <h2 class="entry-title">
                                            <span>partners </span>We Use Products of The best Brands Only</h2>
                                    </header>

                                    <div class="partner-slider">
                                        <div class="partner-item">
                                            <a >
                                                <img src={partner1} alt="partner1" />
                                            </a>
                                        </div>
                                        <div class="partner-item">
                                            <a >
                                                <img src={partner2} alt="partner2" />
                                            </a>
                                        </div>
                                        <div class="partner-item">
                                            <a >
                                                <img src={partner3} alt="partner3" />
                                            </a>
                                        </div>
                                        <div class="partner-item">
                                            <a >
                                                <img src={partner4} alt="partner4" />
                                            </a>
                                        </div>
                                        <div class="partner-item">
                                            <a >
                                                <img src={partner3} alt="partner3" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default aboutpage
