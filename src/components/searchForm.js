import React from 'react'
import '../App.css'

function FormComponent() {
    return (
        <div className="search-section"  style={{ backgroundColor: "darkgray", padding: "20px"}}>
            {/* <!-- search section starting from here --> */}
            <div className="search-container" >
                <form role="search" method="get" className="search-form" action="">
                <h5  style={{ padding:"5px"}}>Type to search</h5>
                <br />
                    <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input className="search-field" placeholder="Search …" defaultValue="" name="s"
                            type="search" />
                    </label>
                    <input className="search-submit" value="Search" type="submit" />
                </form>
            </div>
        </div>
        // {/* <!-- search section ends here --> */}

    )
}

export default FormComponent
