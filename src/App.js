import React from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import resumeData from './resumeData';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
