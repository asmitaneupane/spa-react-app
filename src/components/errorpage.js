import React from 'react'

function errorpage() {
    return (
        <>


            <div id="content" class="site-content">
                <div id="primary" class="content-area">
                    {/* <!-- primary-home starting from here --> */}
                    <main id="main" class="site-main">
                        <div class="error-404 not-found" style={{background: "url(assets/img/error-bg.jpg)"}}>
                            <div class="container">
                                <div class="entry-content">
                                    <h2 class="page-title">404</h2>
                                    <p>page not found</p>
                                    <a href="/" class="box-button">back to homepage</a>
                                </div>
                            </div>
                            {/* <!-- .page-header --> */}
                        </div>
                    </main>
                </div>
            </div>

        </>
    )
}

export default errorpage
