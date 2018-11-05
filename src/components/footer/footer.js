import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/willporter1/" target="_blank"><i className="fab fa-linkedin" /></a></li>
              <li><a href="https://www.behance.net/porterws329f" target="_blank"><i className="fab fa-behance" /></a></li>
              <li><a href="https://github.com/WillPorter" target="_blank"><i className="fab fa-github" /></a></li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>

    );
  }
}
