import React from 'react'
import { Link } from 'react-router-dom'
import errorBg from '../assets/img/error-bg.jpg'
import Navbar from '../components/Navbar'

export default function ErrorPage() {
    return (
        <div id="page" className="hfeed site">
            <header id="masthead" className="site-header" >
                
                {/* Navbar Here! */}
                <Navbar/>

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
                                        <Link to="/" className="box-button">back to homepage</Link>
                                    </div>
                                </div>
                                {/* <!-- .page-header --> */}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
    )
}
