import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarNav: {
        display: "none"
      }
    }
  }

  navbarToggler = () => {
    if (this.state.navbarNav.display === "none") {
      this.setState({
        navbarNav: {
          display: "block"
        }
      });
    } else {
      this.setState({
        navbarNav: {
          display: "none"
        }
      });
    }
  }

  submenu = (e) => {
    if (e.currentTarget.className.includes('submenu-opened')) {
      e.currentTarget.className = 'submenu-button';
    } else {
      e.currentTarget.className = 'submenu-button submenu-opened';
    }
  }

  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light navbar-bg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src={require("./images/logo.png")} alt="" />
            </a>
            <button className="navbar-toggler" onClick={this.navbarToggler}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse small-screen" id="navbarNav">
              <ul className="navbar-nav ml-auto my-2 my-lg-0" style={this.state.navbarNav}>
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <span className="submenu-button" onClick={this.submenu}></span>
                  <a className="nav-link" href="/" onClick={(e) => { e.preventDefault() }}>Courses</a>
                  <ul>
                    <li><a href="course-list.html">Course List</a></li>
                    <li><a href="course-single.html">Course Single</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about.html">About Me</a>
                </li>
                <li className="nav-item">
                  <span className="submenu-button" onClick={this.submenu}></span>
                  <a href="blog-default.html" onClick={(e) => { e.preventDefault() }}>Blog</a>
                  <ul>
                    <li><a href="blog-default.html">Blog Default</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <span className="submenu-button" onClick={this.submenu}></span>
                  <a href="/" onClick={(e) => { e.preventDefault() }}>Features</a>
                  <ul>
                    <li><a href="testimonials.html">Testimonials</a></li>
                    <li><a href="404-page.html">404-page</a> </li>
                    <li><a href="video-gallery.html">Video Gallery</a> </li>
                    <li><a href="styleguide.html">styleguide</a> </li>
                  </ul>
                </li>
                <li><a href="contact-us.html">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a7280bdad%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a7280bdad%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a7280bdae%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a7280bdae%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16a7280bdaf%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16a7280bdaf%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277.0078125%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}

export default App;
