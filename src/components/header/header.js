import React, { Component } from 'react';

export default class Header extends Component {
  constructor(){
    super();
      this.state = {
        isHovered: false
      };
    this.handleHover = this.handleHover.bind(this);
}
handleHover(){
  this.setState((prevState) => ({
        isHovered: !prevState.isHovered
    }));
}




  render() {
    let bgClass = this.state.isHovered ? "gradient-overlay" : "gradient";
    let resumeData = this.props.resumeData;
    setTimeout(function(){this.setState({isHovered: true}); }.bind(this), 22000);

    return (
      <header id="home" className={bgClass}>
        <div className="gradient-home"></div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Experience</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline"><span onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>I'm <span className="txt-rotate" data-period='[ "2000", "2000", "2000", "500", "100000" ]' data-rotate='[ "a Web Designer.", "a Web Developer.", "a Creative.", "a fullstack human.", "Will Porter." ]'></span></span></h1>
            <h3><span className="header-readable">I'm a Tahoe based <span>{resumeData.role}</span>.</span></h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/willporter1/" target="_blank"><i className="fab fa-linkedin" /></a></li>
              <li><a href="https://www.behance.net/porterws329f" target="_blank"><i className="fab fa-behance" /></a></li>
              <li><a href="https://github.com/WillPorter" target="_blank"><i className="fab fa-github" /></a></li>

            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
}
