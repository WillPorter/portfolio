import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <section id="resume">
        {/* Education
        ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>James Madison University</h3>
                <p className="info">B.S. Interactive Media from SMAD (School of Media Arts and Design)<span>•</span> <em className="date">2002  - 2006</em></p>
                <p className="info">
                  <img className="smad" src="images/smad.jpg" alt="JMU SMAD" />
                </p>
                <br />
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>First Colonial High School</h3>
                <p className="info">Graduated w/ honors<span>•</span> <em className="date">1998 - 2002</em></p>
                <p className="info">
                  <img className="fc" src="images/fc-logo.gif" alt="JMU SMAD" />
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
        ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
          <div className="row item">
              <div className="twelve columns">
                <h3>Noble Studios</h3>
                <p className="info">Web Developer <span>•</span> <em className="date">April 2019 - Present</em></p>
                <p>
                  Working along side a team of inspiring developers and talented creatives, Noble studios is proving to be a great place for both growth and progression.  Based in the emerging tech scene of Reno, Nevada, our team works with the most modern build tools and creates custom sites from the ground up.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>O'brien et al Advertising</h3>
                <p className="info">Web Developer <span>•</span> <em className="date">Nov 2017 - June 2018</em></p>
                <p>
                  A brief move across the country for family related issues brought me to the doorstep of Obrien et al Advertising.  Though the stay was brief, I learned a great deal from the interactive team.  Our primary focus was on building custom Wordpress sites based on our unique client approved mockups. I also learned the intricacies of robust email campaigns (Bronto and Mailchimp) via incoperating actionable analytics through such methods as A/B testing and user engagement.  Alas, the west coast was once again calling my name and I had to move on.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>POND Collective</h3>
                <p className="info">Web Developer <span>•</span> <em className="date">Jan 2012 - Present</em></p>
                <p>
                  After working at POND Collective full time and in house for almost 2 years, I became part of their affiliate program in 2014 and have a strong professional relationship with them to this day.  My experience at POND was incredibly formative. The team's attention to detail and striving to follow current best practices has had an incredible influence on my work. At POND I was tasked with everything from mocking up web sites, to building out robust custom CMS sites (primarly Drupal), and even the occasional print design project. POND has been a powerful ally in my path as a Web Developer.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>SpringBreak Studio</h3>
                <p className="info">Web Developer <span>•</span> <em className="date">Sept 2009 - Present</em></p>
                <p>
                  Working as a freelancer and web consultant under the name SpringBreak Studio, I have learned countless valuable lessons on a wide spectrum of projects.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Situation Interactive</h3>
                <p className="info">Web Designer <span>•</span> <em className="date">Mar 2008 - Sept 2009</em></p>
                <p>
                  Situation Interactive is the fast paced NYC ad agency where I had my first exposure to the world of professional creative work.  There, I started off primarily working on design oriented projects.  My passion for development then took over and by the end I was creating landing pages and rich media in the form of Flash banners (remember those?) that utilized actionscript.  My time at Situation and living in NYC was invaluable to my personal and professional growth.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
        ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>I've covered a lot of ground in my professional career.  Whether a project requires building a custom Drupal or Wordpress CMS, organizing and building out an email campaign, implementing Vanilla or React JS for heightened functionality, or even a targeted SEO strategy; I've been fortunate enough to learn a broad spectrum of skills.  Truth be told, my current passion and mild obsession align with all things JavaScript.  I'm happiest when I'm solving problems and creating magic via code in a text editor.
            </p>
            <div className="bars">
              <ul className="skills">

                <li><span className="bar-expand html-skill" /><em>HTML5</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand javascript" /><em>Javascript</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand drupal" /><em>Drupal</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>

              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>

    );
  }
}
