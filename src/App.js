import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from './component/Header';
import About from './component/About';
import Services from './component/Services';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';
import Contact from './component/Contact';
import Nav from './component/Nav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navClass: "navbar navbar-expand-lg navbar-light fixed-top py-3"
    }
    this.home = React.createRef();
    this.about = React.createRef();
    this.services = React.createRef();
    this.portfolio = React.createRef();
    this.contact = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (document.documentElement.scrollTop < 100) {
      this.setState({
        navClass: "navbar navbar-expand-lg navbar-light fixed-top py-3"
      })
    } else {
      this.setState({
        navClass: "navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled"
      })
    }
  }

  onClickScroll = (scroll) => {
    console.log()
    window.scrollTo(0, scroll);
  }

  render() {
    return (
      <Router basename="/reactjs-bootstrap-creative-theme/">
        <Nav
          navClass={this.state.navClass}
          home={() => this.onClickScroll(this.home.current.offsetTop)}
          about={() => this.onClickScroll(this.about.current.offsetTop - 70)}
          services={() => this.onClickScroll(this.services.current.offsetTop - 70)}
          portfolio={() => this.onClickScroll(this.portfolio.current.offsetTop - 70)}
          contact={() => this.onClickScroll(this.contact.current.offsetTop - 70)}
        />
        <Header myRef={this.home} onClickScroll={() => this.onClickScroll(this.about.current.offsetTop - 70)} />
        <About myRef={this.about} onClickScroll={() => this.onClickScroll(this.services.current.offsetTop - 70)} />
        <Services myRef={this.services} />
        <Portfolio myRef={this.portfolio} />
        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <Link className="btn btn-light btn-xl" target="_blank" to="/" onClick={(event) => {event.preventDefault();window.open("https://github.com/Bhavin-addweb/reactjs-bootstrap-creative-theme", "_blank");}}>Download Now!</Link>
          </div>
        </section>
        <Contact myRef={this.contact} />
        <Footer />
      </Router>
    );
  }
}

export default App;