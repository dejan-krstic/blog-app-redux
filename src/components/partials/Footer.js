import React from 'react';
import { Link } from 'react-router-dom'


const Footer = (props) => {
    return (
        <nav className="navbar navbar-light bg-light" id="footer">
            <span className="text-muted">Copyright &copy; BIT March 2018</span>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to='/posts/new' className="nav-link" activeClassName="highlight">Create new post</Link></li>
                </ul>
            </div>
        </nav>
    )

}

export default Footer