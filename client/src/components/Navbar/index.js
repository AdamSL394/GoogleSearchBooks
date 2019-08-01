import React from "react"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h5 className="navbar-brand" >Google Books</h5>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/search" >Searched </Link>
                    <Link className="nav-item nav-link" to="/saved">Saved</Link>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;