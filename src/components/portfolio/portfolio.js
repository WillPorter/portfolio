import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class Portfolio extends Component {

  render() {



    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <div id="portfolio-button-wrapper" className="bgrid-halves s-bgrid-halves cf">
              <div className="columns">
                <a href="http://www.projects.williamscottporter.com" class="button">VIEW MY PORTFOLIO</a>
              </div>

              <div className="columns">
                <a href="http://www.projects.williamscottporter.com" class="button">VIEW MY GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
