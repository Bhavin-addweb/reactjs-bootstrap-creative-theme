<<<<<<< HEAD
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
          about={() => this.onClickScroll(this.about.current.offsetTop)}
          services={() => this.onClickScroll(this.services.current.offsetTop)}
          portfolio={() => this.onClickScroll(this.portfolio.current.offsetTop)}
          contact={() => this.onClickScroll(this.contact.current.offsetTop)}
        />
        <Header myRef={this.home} onClickScroll={() => this.onClickScroll(this.about.current.offsetTop - 70)} />
        <About myRef={this.about} onClickScroll={() => this.onClickScroll(this.services.current.offsetTop - 70)} />
        <Services myRef={this.services} />
        <Portfolio myRef={this.portfolio} />
        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
            <Link className="btn btn-light btn-xl" to="https://startbootstrap.com/themes/creative/">Download Now!</Link>
          </div>
        </section>
        <Contact myRef={this.contact} />
        <Footer />
      </Router>
    );
  }
}

export default App;
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 97bfd9326f9a3486f4177814f5f351fa55978dfc
