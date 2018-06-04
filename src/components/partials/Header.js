import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <span className="navbar-brand">BIT Blog</span>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item"><Link to='/' className="nav-link" activeclassname="highlight">Home</Link></li>
                    <li className="nav-item"><Link to='/authors' className="nav-link" activeclassname="highlight">Authors</Link></li>
                    <li className="nav-item"><Link to='/about' className="nav-link" activeclassname="highlight">About</Link></li>
                    <li className="nav-item white"><Link to='/posts/new' className="nav-link btn btn-info" activeClassName="highlight">Create new post</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default Header