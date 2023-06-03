//mas datos sobre nosotros
import "./About.css";

import React from 'react'

const About = ({hero}) => {
  return (
    <div>
      
      <h2>About Me</h2>
      <div className="card">

        <div className="aboutCard">

          {hero.aboutMe.map((item) => {
            return (
              <div>
                <p>{item.info}</p>
              </div>
            );
          })}

        </div>

      </div>

  </div>
  )
}

export default About
