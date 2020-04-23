import React from 'react';

const ThingIDo = (props) => {
  return(
    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
    <div className="services color-1">
      <span className="icon2"><i className="icon-bulb" /></span>
      <h3>REST API</h3>
    </div>
  </div>
  );
}
const ThingsIDo = (props) => {
  return (
    <div className="row">
      <ThingIDo/>
    </div>
  );
}
const about = () => {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Us</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <p>I'm Pralhad. A software developer from Bengaluru. I love to explore new technologies and always in search of technical problems to solve. In the pursuit to explore technologies, I have learned little of many things. Such people are called 'Jack of all trades, master of none'. But I think I'm Jack of all trades, master of few.</p>
                  <p>Apart from that, I love music. I'm a novice Tabla player and play badminton.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;