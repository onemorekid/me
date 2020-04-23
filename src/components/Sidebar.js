import React from 'react';

const sidebar = () => {
    return(
        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
        <div className="text-center">
          <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
          <h1 id="colorlib-logo"><a href="index.html">Pralhad Patil</a></h1>
          <span className="position"><a href="#">Software Developer</a> in India</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><a href="#" data-nav-section="home">Home</a></li>
              <li><a href="#" data-nav-section="about">About</a></li>
              <li><a href="#" data-nav-section="skills">Skills</a></li>
              <li><a href="#" data-nav-section="education">Education</a></li>
              <li><a href="#" data-nav-section="experience">Experience</a></li>
              <li><a href="#" data-nav-section="contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="colorlib-footer">
          <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
          <ul>
            <li><a href="#"><i className="icon-facebook2" /></a></li>
            <li><a href="#"><i className="icon-twitter2" /></a></li>
            <li><a href="#"><i className="icon-instagram" /></a></li>
            <li><a href="#"><i className="icon-linkedin2" /></a></li>
          </ul>
        </div>
      </aside>
      
    );
}

export default sidebar;