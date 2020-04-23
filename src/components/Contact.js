import React from 'react';

const contact = ()=> {
    return(<section className="colorlib-contact" data-section="contact">
    <div className="colorlib-narrow-content">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span className="heading-meta">Get in Touch</span>
          <h2 className="colorlib-heading">Contact</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="colorlib-icon">
              <i className="icon-globe-outline" />
            </div>
            <div className="colorlib-text">
              <p><a href="#">mrpatilpralhad@gmail.com</a></p>
            </div>
          </div>
          <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="colorlib-icon">
              <i className="icon-map" />
            </div>
            <div className="colorlib-text">
              <p>Bengaluru, Karnataka India</p>
            </div>
          </div>
          <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="colorlib-icon">
              <i className="icon-phone" />
            </div>
            <div className="colorlib-text">
              <p><a href="tel://">+91 9902808558</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
}

export default contact;