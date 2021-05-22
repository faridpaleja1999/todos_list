import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-primary "  >
                <div className="container-fluid navbar-dark " >
                    <Link className="navbar-brand " to="/"><i class="fas fa-th-list px-2"></i>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
    searchbar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchbar: PropTypes.bool.isRequired
}