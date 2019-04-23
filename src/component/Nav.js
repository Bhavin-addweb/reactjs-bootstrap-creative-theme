import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            navbar: "collapse navbar-collapse"
        }
    }

    navBar = () => {
        if (this.state.show) {
            this.setState({
                show: false,
                navbar: "collapse navbar-collapse"
            })
        } else {
            this.setState({
                show: true,
                navbar: "collapse navbar-collapse show"
            })
        }
    }

    onClickScroll = (myFunc) => {
        myFunc();
        if(this.state.show) {
            this.navBar();
        }
    }

    render() {
        const { navClass, home, about, services, portfolio, contact } = this.props
        return (
            <nav className={navClass} id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/home" onClick={() => (this.onClickScroll(home))}>Start Bootstrap</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.navBar}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.navbar} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" onClick={() => (this.onClickScroll(home))}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" onClick={() => (this.onClickScroll(about))}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services" onClick={() => (this.onClickScroll(services))}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio" onClick={() => (this.onClickScroll(portfolio))}>Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" onClick={() => (this.onClickScroll(contact))}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;