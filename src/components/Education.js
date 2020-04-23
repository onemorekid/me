import React from 'react';

const Course = (props) => {
    let collapseId = "collapse"+ props.id;
    return (
        <div className="panel panel-default">
            <div className="panel-heading" role="tab" id={props.id}>
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href={"#" + collapseId} aria-expanded="true" aria-controls={collapseId}>
                        {props.courseName}
                    </a>
                </h4>
            </div>
            <div id={collapseId} className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div className="panel-body">
                    {props.description}
                </div>
            </div>
        </div>
    );
}
const education = () => {
    return(
        <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <Course id="becse" courseName="Bachelor of Engineering" description="Passed with 8.33/10 CGPA from Basaveshwara Engineering College, Bagalkot. Affiliated to VTU"/>
                  <Course id="puc" courseName="Pre University Education" description="Passed with 78.5% from Karntaka Board"/>
                  <Course id="sslc" courseName="Secondary Education" description="Passed with 76.96% from Karnataka Board"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default education;