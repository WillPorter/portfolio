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
    setTimeout(function(){this.setState({isHovered: true}); }.bind(this), 23000);

    return (
      <header id="home" className={bgClass}>
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
            <h1 className="responsive-headline"><span onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>I'm <span className="txt-rotate" data-period='[ "2000", "2000", "2000", "500", "100000" ]' data-rotate='[ "a Web Designer.", "a Web Developer.", "a Creative.", "a FullStaaaaaaaa ooooof.", "Will Porter." ]'></span></span></h1>
            <h3>I'm a Tahoe based <span>{resumeData.role}</span>. Let's <a className="smoothscroll" href="#about">start scrolling</a>
              &nbsp;and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-dribbble" /></a></li>
              <li><a href="#"><i className="fa fa-skype" /></a></li>
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
