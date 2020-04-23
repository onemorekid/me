import React from 'react';

const Item = (props) => {
    return(
        <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">{props.role}</a> <span>{props.span}</span></h2>
                      <p>{props.description}</p>
                    </div>
                  </div>
                </article>
    );
}
const experience = () => {
    let dassautDescription = "Worked in CPG vertical. Developed Web application using Enovia, Adobe Illustrator Plugin using C++, Qt and Adobe Illustrator SDK. ";
    let mbrdiDescription = "";
    let esiDescription = "";
    return(
        <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <Item role="Software Engineer @ Dassault Systems" span="Apr 2013 - Jan 2018" description={dassautDescription}/>
                <Item role="Senior Software Engineer @ MBRDI" span="Jan 2018 - Feb 2020" description={mbrdiDescription}/>
                <Item role="Senior Software Engineer @ ESI Software Solutions" span="Since Feb 2020" description={esiDescription}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default experience;