import React, { Component } from 'react';

export default class About extends Component {
  render() {

    let resumeData = this.props.resumeData;

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/will-porter.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>After graduating from <a href="http://www.jmu.edu/smad" target="_blank">James Madison University</a> in 2006 with a BS in Interactive Media, I moved to NYC where I worked for a top interactive agency <a href="http://www.situationinteractive.com" target="_blank">Situation Interactive</a> for 2 years.  Longing for big mountains and sunshine, I then moved to CA in 2009 Where I worked as a <a href="http://www.springbreakstudio.com" target="_blank">freelance creative</a> until Jan of 2012.  In Jan of 2012, I took a job as a web designer / developer for the Truckee, CA based <a href="http://www.pondcollective.com/" target="_blank">POND Collective</a>.  In October of 2017, I moved back to my hometown of Virginia Beach and immediately started working at <a href="http://www.obrienetal.com/" target="_blank">Obrien et al Advertising</a> full time.  Each workplace has offered me unuiqe opportunities in learning different technologies and contributing to my professional skillsets.
            </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span><br />
                    <span>{resumeData.address1}<br />{resumeData.address2}
                    </span><br />
                    <span>(757) 617-4833</span><br />
                    <span><a href="mailto:will@williamscottporter.com" target="_blank" >will@williamscottporter.com</a></span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="/files/resume-2018-willporter-web.pdf" target="_blank" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
      </section>
    );
  }
}
