import React from 'react';

const Skill = (props) => {
  let color = Math.floor(Math.random() * 6);
  let cls = "progress-bar "+ "color-"+color;
  return(
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="progress-wrap">
          <h3>{props.skillName}</h3>
          <div className="progress">
            <div className={cls} role="progressbar" aria-valuenow={props.skillValue} aria-valuemin={0} aria-valuemax={100} style={{width: props.skillValue + '%'}}>
              <span>{props.skillValue}</span>
            </div>
          </div>
        </div>
      </div>
  );
}

const skills = () => {
    return(
    <section className="colorlib-skills" data-section="skills">
    <div className="colorlib-narrow-content">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span className="heading-meta">My Specialty</span>
          <h2 className="colorlib-heading animate-box">My Skills</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <p>List of my skills, </p>
        </div>
        <Skill skillName="C++" skillValue="85"/>
        <Skill skillName="HTML" skillValue="90"/>
        <Skill skillName="Qt" skillValue="75"/>
        <Skill skillName="Java" skillValue="75"/>
        <Skill skillName="Javascript" skillValue="80"/>
        <Skill skillName="gRPC" skillValue="60"/>
        <Skill skillName="Algorithms" skillValue="70"/>
        <Skill skillName="Datastructures" skillValue="70"/>
        <Skill skillName="JQuery" skillValue="70"/>
        <Skill skillName="React JS" skillValue="70"/>
        <Skill skillName="RESTful webservices" skillValue="60"/>
        <Skill skillName="Uniscript" skillValue="80"/>
        <Skill skillName="Adobe Illustrator Plugin Development" skillValue="75"/>
        <Skill skillName="Node JS" skillValue="75"/>
        
      </div>
    </div>
  </section>);
}

export default skills;