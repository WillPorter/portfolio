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
                <a href="https://github.com/WillPorter" class="button" target="_blank">VIEW MY GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
