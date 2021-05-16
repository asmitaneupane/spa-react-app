import React from 'react'
import { Link } from 'react-router-dom'
import singlePage from '../assets/img/single-page.jpg'
import Navbar from '../components/Navbar'

export default function Header() {
    return (
        <div>
            <div id="page" className="hfeed site">
            <header id="masthead" className="site-header">
                {/* <!-- header starting from here --> */}

                {/* Navbar Here! */}
                <Navbar/>

                <div className="page-title-wrap" style={{
                        background: `url(${singlePage})`,
                    }} >
                    <div className="container">
                        <h2 className="page-title">
                        {/* {title} */}
                        </h2>
                        <div className="breadcrumb-trail breadcrumbs">
                            <ul className="trail-items">
                                <li className="trail-item trail-begin">
                                    <Link to="#" rel="home">
                                        <span itemProp="name">Home</span>
                                    </Link>
                                    <meta />
                                </li>

                                <li className="trail-item trail-end">
                                    <span itemProp="name">
                                        {
                                            window.location.href.includes('/aboutpage')?"about":
                                            window.location.href.includes('/contact')?"contact":
                                            window.location.href.includes('/service')?"service":""
                                        }
                                    
                                    
                                    
                                    
                                    </span>
                                    <meta />
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>


            </header>
        </div>
        // {/* <!-- header ends here --> */}
        </div>
    )
}
