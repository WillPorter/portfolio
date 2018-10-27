import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="twelve columns header-col mail-bounce">
            <a href="mailto:will@williamscottporter.com" target="_blank">
              <h1><span>Let's Chat.</span></h1>
              <h2>Let's Chat.</h2>
            </a>
          </div>
        </div>
        <div className="row section-head">
          <div className="twelve columns">
            <p>Please reach out if you have any questions or potential collaborive oppurtunities!
            </p>
          </div>
        </div>
      </section>
    );
  }
}
