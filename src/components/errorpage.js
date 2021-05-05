import React from 'react'
import ScriptTag from 'react-script-tag';


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
                                    <a href="index.html" class="box-button">back to homepage</a>
                                </div>
                            </div>
                            {/* <!-- .page-header --> */}
                        </div>
                    </main>
                </div>
            </div>

            <div class="back-to-top">
                <button href="#masthead" title="Go to Top" class="fa-angle-up"></button>
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

export default errorpage
